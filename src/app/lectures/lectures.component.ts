import { Component, OnInit } from '@angular/core';


// mport {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";
// import { mimeType } from "./mime-type.validator";
import { Subscription } from 'rxjs';

import { Lecture } from "./lecture.model";
import { LecturesService } from "./lecture.service";

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {


  closeResult = '';
  status = "upcoming";
  form: FormGroup;
  imagePreview: string;
  isLoading = false;
  constructor( public lecturesService: LecturesService,) {}
  private lecturesSub: Subscription;
  lectures: Lecture[] = [];
  private mode = "create";
  private lectureId: string;
  lecture: Lecture;


  upcoming = [
  ]
  // lecturesd = [
  //   {
  //     'id': 0,
  //     'name': 'Neeraj Jhanji',
  //     'about': 'Founder, ImaHima',
  //     'desc' : 'Inventor of mobile checkin, status updates and mobile chat.',
  //     'status': 0,
  //     'date' : '18th Dec 20',
  //     'time' : "4:30pm",
  //     'imgSrc' : 'assets/images/Neeraj_Jhanji.jpg',
  //   },
  //   {
  //     'id': 1,
  //     'name': 'Sandeep Jain',
  //     'about': 'Founder of Geeks For Geeks',
  //     'status': 0,
  //     'imgSrc' : 'https://qph.fs.quoracdn.net/main-thumb-6825396-200-mdiwxmtjnirbojkyqreyzgtdwjrgzuuj.jpeg',
  //   },
  //   {
  //     'id': 2,
  //     'name': 'Shiv Khera',
  //     'about': 'Author, Activist & Motivational Speaker',
  //     'status': 0,
  //     'imgSrc' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faamadmi.in%2Fwp-content%2Fuploads%2F2020%2F05%2FShiv-khera-Quotes.jpg&f=1&nofb=1',
  //   },
  //   {
  //     'id': 3,
  //     'name': 'RJ Naved',
  //     'about': 'Radio Jockey',
  //     'status': 0,
  //     'imgSrc' : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gabdig.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fbest-rj-naved.jpg&f=1&nofb=1',
  //   },
  //   {
  //     'id': 4,
  //     'name': 'General VK Singh',
  //     'about': 'Former Four-Star General Army',
  //     'status': 0,
  //     'imgSrc' : 'https://upload.wikimedia.org/wikipedia/commons/0/0f/VK_singh.jpg',
  //   },
  //   {
  //     'id': 5,
  //     'name': 'Shekhar Gupta',
  //     'about': 'Indian Journalist',
  //     'status': 0,
  //     'imgSrc' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opindia.com%2Fwp-content%2Fuploads%2F2019%2F03%2F29BA5540-0638-4757-AE72-64A85BFA2F17-696x385.jpeg&f=1&nofb=1',
  //   },
  //   {
  //     'id': 6,
  //     'name': 'Neharika Yadav',
  //     'about': "India's Lady Super-Biker",
  //     'status': 0,
  //     'imgSrc' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flifebeyondnumbers.com%2Fwp-content%2Fuploads%2F2016%2F02%2FNeharika-Yadav-Dentist-Biker.png&f=1&nofb=1',
  //   },
  //   {
  //     'id': 7,
  //     'name': 'Diwakar Vaish',
  //     'about': 'Robotics Researcher',
  //     'status': 0,
  //     'imgSrc' : 'https://pbs.twimg.com/profile_images/809431344770150400/Lo0sJLur_400x400.jpg',
  //   },
  //   {
  //     'id': 8,
  //     'name': 'Mukul Kanitkar',
  //     'about': 'Joint Organizing Secretary of BSM',
  //     'status': 0,
  //     'imgSrc' : 'https://www.newsbharati.com//AuthorImages/3317.jpg',
  //   },
  //   {
  //     'id': 9,
  //     'name': 'Dr. Ajay Kumar',
  //     'about': 'Joint Secretary, Ministry of Communications',
  //     'status': 0,
  //     'imgSrc' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdefence.capital%2Fwp-content%2Fuploads%2F2019%2F08%2Fdr-ajay-kumar.jpg&f=1&nofb=1',
  //   },
  //]

  ngOnInit() {
    this.lecturesService.getLectures();
    this.lecturesSub = this.lecturesService.getLectureUpdateListener()
      .subscribe((lectures: Lecture[]) => {
        this.isLoading = false;
        this.lectures = lectures;
      });

      console.log(this.lectures);
  }

  ngOnDestroy() {
    this.lecturesSub.unsubscribe();
  }


}
