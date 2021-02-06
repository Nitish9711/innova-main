import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
// import { mimeType } from "./mime-type.validator";
import { Subscription } from 'rxjs';

import { Workshop } from "./workshop.model";
import { WorkshopsService } from "./workshop.service";
@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {


  closeResult = '';
  status = "upcoming";
  form: FormGroup;
  imagePreview: string;
  isLoading = false;

  constructor( public workshopsService: WorkshopsService) {}

  private workshopsSub: Subscription;
  workshops: Workshop[] = [];
  private mode = "create";
  private workshopId: string;
  workshop: Workshop;

  ngOnInit() {
    this.workshopsService.getWorkshops();
    this.workshopsSub = this.workshopsService.getWorkshopUpdateListener()
      .subscribe((workshops: Workshop[]) => {
        this.isLoading = false;
        this.workshops = workshops;
      });
      // co
  }

  ngOnDestroy() {
    this.workshopsSub.unsubscribe();
  }

}
