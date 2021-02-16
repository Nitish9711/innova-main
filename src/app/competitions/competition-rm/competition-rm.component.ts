import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { Competition } from '../competition.model';
import { CompetitionsService } from '../competition.service';
import { Params, ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competition-rm',
  templateUrl: './competition-rm.component.html',
  styleUrls: ['./competition-rm.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CompetitionRMComponent implements OnInit {

 @Input() data;

  // constructor(private competitionservice: CompetitionsService,
	// 	private route: ActivatedRoute,
	// 	private location: Location) { }

    constructor() {}
 
  ngOnInit(): void {

    // let _id = this.route.snapshot.params['id'];
		// this.competitionservice.getCompetitions(_id).then(competition => this.competition = competition);
  }

  // getBack()
	// {
	// 	this.location.back();
	// }
}
