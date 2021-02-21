import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Sponsor } from "./sponsor.model";


import {environment} from "../../environments/environment";
const BACKEND_URL = environment.apiUrl + "sponsors/";

@Injectable({ providedIn: "root" })
export class SponsorsService {
  private sponsors: Sponsor[] = [];
  private sponsorsUpdated = new Subject<Sponsor[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getSponsors() {
    this.http
    .get<{ message: string; sponsors: any }>(BACKEND_URL)
    .pipe(
      map(sponsorData => {
        return sponsorData.sponsors.map(sponsor => {
          // console.log(lecture);
          return {
            _id: sponsor._id,
            sponsorName: sponsor.sponsorName,
            imagePath: sponsor.imagePath,
            status: sponsor.status,
            sponsorTitle: sponsor.sponsorTitle,
            year: sponsor.year,
            link: sponsor.link
          };
        });
      })
    )
    .subscribe(transformedPosts => {
      this.sponsors = transformedPosts;
      // console.log(this.lectures);
      this.sponsorsUpdated.next([...this.sponsors]);
    });

  }

  getSponsorUpdateListener() {
    return this.sponsorsUpdated.asObservable();
  }


}
