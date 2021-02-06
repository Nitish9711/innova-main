import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Workshop } from "./workshop.model";

@Injectable({ providedIn: "root" })
export class WorkshopsService {
  private workshops: Workshop[] = [];
  private workshopsUpdated = new Subject<Workshop[]>();


  constructor(private http: HttpClient, private router: Router) {}

  getWorkshops() {
    this.http
    .get<{ message: string; workshops: any }>("http://localhost:5000/api/workshops")
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

}
