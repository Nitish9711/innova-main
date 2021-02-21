import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Workshop } from "./workshop.model";

import {environment} from "../../environments/environment";
const BACKEND_URL = environment.apiUrl + "workshops/";

@Injectable({ providedIn: "root" })
export class WorkshopsService {
  private workshops: Workshop[] = [];
  private workshopsUpdated = new Subject<Workshop[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getWorkshops() {
    this.http
    .get<{ message: string; workshops: any }>(BACKEND_URL)
    .pipe(
      map(workshopData => {
        return workshopData.workshops.map(workshop => {
          // console.log(workshop);
          return {
            _id:workshop._id,
            title:workshop.title,
            description:workshop.description,
            imagePath:workshop.imagePath,
            price:workshop.price,
            date:workshop.date,
            status:workshop.status,
            regLink:workshop.regLink,
            time: workshop.time
          };
        });
      })
    )
    .subscribe(transformedWorkshops => {
      this.workshops = transformedWorkshops;
      // console.log(this.workshops);
      this.workshopsUpdated.next([...this.workshops]);
    });

  }

  getWorkshopUpdateListener() {
    return this.workshopsUpdated.asObservable();
  }
  findWorkshop(id: string) {
    return this.http.get<{
        _id: string,
        title: string,
        description: string,
        imagePath: string
        price: string,
        date:{
          year: string,
          month: string,
          day:string
        },
        status: string,
        regLink: string,
        time: string
    }>(
      BACKEND_URL + id
    );
  }


}
