import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Team } from "./team.model";


import {environment} from "../../environments/environment";
const BACKEND_URL = environment.apiUrl + "teams/";


@Injectable({ providedIn: "root" })
export class TeamsService {
  private teams: Team[] = [];
  private teamUpdated = new Subject<Team[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getTeams() {
    this.http
    .get<{ message: string; teams: any }>(BACKEND_URL)
    .pipe(
      map(teamData => {
        return teamData.teams.map(team => {
          // console.log(lecture);
          return {
            _id: team._id,
            name: team.name,
            designation: team.designation,
            imagePath: team.imagePath,
            linkedin: team.linkedin,
            mailId: team.mailId,
            contact: team.contact
          };
        });
      })
    )
    .subscribe(transformedPosts => {
      this.teams = transformedPosts;
      // console.log(this.lectures);
      this.teamUpdated.next([...this.teams]);
    });

  }

  getTeamUpdateListener() {
    return this.teamUpdated.asObservable();
  }



}
