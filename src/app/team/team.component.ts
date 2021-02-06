import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FormGroup, FormControl, Validators } from "@angular/forms";
// import { mimeType } from "../../shared/mime-type.validator";
import { Subscription } from 'rxjs';

import { Team } from "./team.model";
import { TeamsService } from "./team.service";


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {

  mailIcon = faEnvelope;
  linkedInIcon = faLinkedin;

  form: FormGroup;
  imagePreview: string;
  isLoading = false;


  constructor( public teamsService: TeamsService) {}


  private teamsSub: Subscription;
  teams: Team[] = [];
  private mode = "create";
  private teamId: string;
  team: Team;


  council = [
    {
      'id': 1,
      'name': "Ishan Singh",
      'designation': "Convener",
      'mailId': "mailto:ishansingh007007@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/ishan-singh-071590174",
      'imgSrc': "assets/images/Ishan_Singh.jpg"
    },
    {
      'id': 2,
      'name': "Meetali Choudhary",
      'designation': "Fest Coordinator",
      'mailId': "mailto:meetali239@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/meetali-choudhary-32035b191",
      'imgSrc': "assets/images/Meetali_Choudhary.jpg"
    },
    {
      'id': 3,
      'name': "Syed Mohammed Arsalan",
      'designation': "Fest Coordinator",
      'mailId': "mailto:smsyedarsalan@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/syed-mohammed-arsalan-abb215191",
      'imgSrc': "assets/images/Syed_Mohammed_Arsalan.jpg"
    },
    {
      'id': 4,
      'name': "Agastya Sethi",
      'designation': "General Secretary",
      'mailId': "mailto:agastyasethi99@gmail.com",
      'linkedIn': "http://linkedin.com/in/agastya-sethi-9563a9174",
      'imgSrc': "assets/images/Agastya_Sethi.jpg"
    },
    {
      'id': 5,
      'name': "Mrinal Thakur",
      'designation': "General Secretary",
      'mailId': "mailto:mrinalthakur40@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/mrinal-thakur-121590173",
      'imgSrc': "assets/images/Mrinal_Thakur.jpeg"
    },
    {
      'id': 6,
      'name': "Devashish Gupta",
      'designation': "Joint Secretary",
      'mailId': "mailto:dev132435@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/devashish-gupta-466738154",
      'imgSrc': "assets/images/Devashish_Gupta.jpg"
    },
    {
      'id': 7,
      'name': "Vrinda",
      'designation': "Joint Secretary",
      'mailId': "mailto:svrin94@gmail.com",
      'linkedIn': "http://linkedin.com/in/vrinda-sharma-8b8967199",
      'imgSrc': "assets/images/Vrinda.jpg"
    },
    {
      'id': 8,
      'name': "Sudipta Kumar Das",
      'designation': "Joint Secretary",
      'mailId': "mailto:sudiptadas2000k@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/sudipta-kumar-das-66a587174/",
      'imgSrc': "assets/images/Sudipta_Kumar_Das.jpeg"
    },
    {
      'id': 9,
      'name': "Seemant Aggarwal",
      'designation': "Treasurer",
      'mailId': "mailto:seemantanishth@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/seemant-aggarwal-89650b194",
      'imgSrc': "assets/images/Seemant_Aggarwal.jpeg"
    },
    {
      'id': 10,
      'name': "Aman Bhatia",
      'designation': "Corporate Head",
      'mailId': "mailto:aman.b25k@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/aman-bhatia-2b475518b/",
      'imgSrc': "assets/images/Aman_Bhatia.jpg"
    },
    {
      'id': 11,
      'name': "Nimish Sharma",
      'designation': "Corporate Head",
      'mailId': "mailto:nimish.1500@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/nimishsharma15",
      'imgSrc': "assets/images/Nimish_Sharma.jpeg"
    },
    {
      'id': 12,
      'name': "Nafis Ahmed",
      'designation': "Operations Head",
      'mailId': "mailto:nafisahmedbhati@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/nafis-ahmed-bhati-b12b1b1a7/",
      'imgSrc': "assets/images/Nafis_Ahmed.jpg"
    },
    {
      'id': 13,
      'name': "Sachin Kumar Rai",
      'designation': "Operations Head",
      'mailId': "mailto:srai47727@gmail.com",
      'linkedIn': "http://linkedin.com/in/sachin-rai-9570a1193",
      'imgSrc': "assets/images/Sachin_Kumar_Rai.jpg"
    },
    {
      'id': 14,
      'name': "Arun Singh Patel",
      'designation': "Events Head",
      'mailId': "mailto:arunsinghpatel11@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/arun-singh-patel-274b6116b",
      'imgSrc': "assets/images/Arun_Singh_Patel.jpg"
    },
    {
      'id': 15,
      'name': "Praveen Kumar Azad",
      'designation': "Events Head",
      'mailId': "mailto:kumarazadpraveen@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/praveen-kumar-azad-67b241146",
      'imgSrc': "assets/images/Praveen_Kumar_Azad.jpeg"
    },
    {
      'id': 16,
      'name': "Rajat Saini",
      'designation': "Design Head",
      'mailId': "mailto:rajatsai18@gmail.com",
      'linkedIn': "https://www.linkedin.com/in/rajat-saini-507982179",
      'imgSrc': "assets/images/Rajat_Saini.jpg"
    },
    {
      'id': 17,
      'name': "Yamini Bhalla",
      'designation': "Publicity Head",
      'mailId': "mailto:yaminibhalla11@gmail.com",
      'linkedIn': "http://www.linkedin.com/in/yamini-bhalla-122324192",
      'imgSrc': "assets/images/Yamini.png"
    },
    {
      'id': 18,
      'name': "Abhishek Mittal",
      'designation': "Public Relations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Abhishek_Mittal.jpg"
    },
    {
      'id': 19,
      'name': "Aditya Pratap Gupta",
      'designation': "Public Relations Head",
      'mailId': "",
      'linkedIn': "",
      'imgSrc': "assets/images/Aditya_Pratap_Gupta.jpg"
    },
  ]

  ngOnInit() {
    this.teamsService.getTeams();
    this.teamsSub = this.teamsService.getTeamUpdateListener()
      .subscribe((teams: Team[]) => {
        this.isLoading = false;
        this.teams = teams;
      });
  }

  ngOnDestroy() {
    this.teamsSub.unsubscribe();
  }
}
