import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Lecture } from "./lecture.model";

import {environment} from "../../environments/environment.prod";
const BACKEND_URL = environment.apiUrl + "lectures/";

@Injectable({ providedIn: "root" })
export class LecturesService {
  private lectures: Lecture[] = [];
  private lecturesUpdated = new Subject<Lecture[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getLectures() {
    this.http
    .get<{ message: string; lectures: any }>(BACKEND_URL)
    .pipe(
      map(lectureData => {
        return lectureData.lectures.map(lecture => {
          // console.log(lecture);
          return {
            name: lecture.name,
            profession: lecture.profession,
            _id: lecture._id,
            imagePath: lecture.imagePath,
            status: lecture.status,
            date: lecture.date,
            regLink: lecture.regLink,
            lectureTitle: lecture.lectureTitle,
            time:lecture.time
          };
        });
      })
    )
    .subscribe(transformedPosts => {
      this.lectures = transformedPosts;
      // console.log(this.lectures);
      this.lecturesUpdated.next([...this.lectures]);
    });

  }

  getLectureUpdateListener() {
    return this.lecturesUpdated.asObservable();
  }

  findLecture(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
       profession:string;
      date:{year:string; day:string; month:string;};
      status:string;
      imagePath:string;
      regLink:string;
      lectureTitle:string;
      time: string;
    }>(
      BACKEND_URL + id
    );
  }


}
