import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Competition } from '../competition.model';
import { CompetitionsService } from '../competition.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ParamMap } from "@angular/router";


@Component({
  selector: 'app-competition-rm',
  templateUrl: './competition-rm.component.html',
  styleUrls: ['./competition-rm.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CompetitionRMComponent implements OnInit {




  enteredTitle = "";
  enteredContent = "";
  competition: Competition;
  isLoading = false;
  imagePreview: string;
  private competitionId: string;

  constructor(
    public competitionsService: CompetitionsService,
    public route: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // console.log(competitionId);

      this.competitionId = paramMap.get("competitionId");
      console.log(this.competitionId)
        this.isLoading = true;
        this.competitionsService.findCompetition(this.competitionId).subscribe(competitionData => {
          console.log(competitionData);
          this.competition = {
            _id: competitionData._id,
            title: competitionData.title,
            description: competitionData.description,
            imagePath: competitionData.imagePath,
            date: {
              year: competitionData.date.year,
              day: competitionData.date.day,
              month: competitionData.date.month
            },
            status: competitionData.status,

            regLink: competitionData.regLink,
            time: competitionData.time
          };
          // console.log(this.lecture);
          this.imagePreview = this.competition.imagePath;
        });
      }
    );
    this.isLoading = false;
    // console.log(this.competition);
  }


}

