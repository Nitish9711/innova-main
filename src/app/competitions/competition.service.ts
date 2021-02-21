import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Competition } from "./competition.model";

import {environment} from "../../environments/environment";
const BACKEND_URL = environment.apiUrl + "competitions/";

@Injectable({ providedIn: "root" })
export class CompetitionsService {
  private competitions: Competition[] = [];
  private competitionsUpdated = new Subject<Competition[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getCompetitions() {
    this.http
    .get<{ message: string; competitions: any }>(BACKEND_URL)
    .pipe(
      map(competitionData => {
        return competitionData.competitions.map(competition => {
          // console.log(lecture);
          return {
            _id: competition._id,
            title: competition.title,
            description: competition.description,
            imagePath: competition.imagePath,
            status: competition.status,
            date: competition.date,
            regLink: competition.regLink,
            time: competition.time
          };
        });
      })
    )
    .subscribe(transformedPosts => {
      this.competitions = transformedPosts;
      // console.log(this.lectures);
      this.competitionsUpdated.next([...this.competitions]);
    });

  }

  getCompetitionUpdateListener() {
    return this.competitionsUpdated.asObservable();
  }

  findCompetition(id: string) {
    return this.http.get<{
        _id: string,
        title: string,
        description: string
        imagePath: string,
        status: string,
        date:{
          year: string,
          month: string,
          day:string
        },
        time: string,
        regLink: string
    }>(
      BACKEND_URL + id
    );
  }


}
