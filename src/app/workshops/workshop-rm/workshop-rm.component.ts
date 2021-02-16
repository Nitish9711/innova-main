import { Component, OnInit } from '@angular/core';
import {Workshop } from '../workshop.model';
import {WorkshopsService} from '../workshop.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from "@angular/router";

@Component({
  selector: 'app-workshop-rm',
  templateUrl: './workshop-rm.component.html',
  styleUrls: ['./workshop-rm.component.scss']
})
export class WorkshopRmComponent implements OnInit {

  workshop: Workshop;
  isLoading = false;
  imagePreview: string;
  private workshopId: string;

  constructor(
    public workshopsService: WorkshopsService,
    public route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // console.log(competitionId);

      this.workshopId = paramMap.get("workshopId");
      console.log(this.workshopId)
        this.isLoading = true;
        this.workshopsService.findWorkshop(this.workshopId).subscribe(workshopData => {
          console.log(workshopData);
          this.workshop = {
            _id: workshopData._id,
            title: workshopData.title,
            description: workshopData.description,
            imagePath: workshopData.imagePath,
            date:{
              year : workshopData.date.year,
              day :workshopData.date.day,
              month: workshopData.date.month
            },
            status: workshopData.status,
            price: workshopData.price,
            regLink: workshopData.regLink,
            time: workshopData.time
          };
          // console.log(this.lecture);
          this.imagePreview = this.workshop.imagePath;
        });
      }
    );
    this.isLoading = false;
    // console.log(this.competition);
  }
}
