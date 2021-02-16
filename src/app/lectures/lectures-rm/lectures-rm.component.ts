import { Component, OnInit } from '@angular/core';
import {Lecture } from '../lecture.model';
import {LecturesService} from '../lecture.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from "@angular/router";

@Component({
  selector: 'app-lectures-rm',
  templateUrl: './lectures-rm.component.html',
  styleUrls: ['./lectures-rm.component.scss']
})
export class LecturesRmComponent implements OnInit {

  lecture: Lecture;
  isLoading = false;
  imagePreview: string;
  private lectureId: string;

  constructor(
    public lecturesService: LecturesService,
    public route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // console.log(competitionId);

      this.lectureId = paramMap.get("lectureId");
      console.log(this.lectureId)
        this.isLoading = true;
        this.lecturesService.findLecture(this.lectureId).subscribe(lectureData => {
          console.log(lectureData);
           this.lecture = {
            _id: lectureData._id,
            name: lectureData.name,
            profession: lectureData.profession,
            imagePath: lectureData.imagePath,
            date:{
              year : lectureData.date.year,
              day :lectureData.date.day,
              month: lectureData.date.month
            },
            status: lectureData.status,
            lectureTitle: lectureData.lectureTitle,
            regLink: lectureData.regLink,
            time: lectureData.time
          };
          // console.log(this.lecture);
          this.imagePreview = this.lecture.imagePath;
        });
      }
    );
    this.isLoading = false;
    // console.log(this.competition);
  }


}
