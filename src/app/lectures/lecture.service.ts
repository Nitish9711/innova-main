import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Lecture } from "./lecture.model";

@Injectable({ providedIn: "root" })
export class LecturesService {
  private lectures: Lecture[] = [];
  private lecturesUpdated = new Subject<Lecture[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getLectures() {
    this.http
    .get<{ message: string; lectures: any }>("http://localhost:5000/api/lectures")
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

}
