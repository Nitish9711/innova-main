import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  competition: Competition;


  // constructor(private competitionservice: CompetitionsService,
	// 	private route: ActivatedRoute,
	// 	private location: Location) { }

    constructor(private competitionservice: CompetitionsService,private router:Router, private activatedRoute:ActivatedRoute) {
      console.log(this.router.getCurrentNavigation().extras.state);
 }

  ngOnInit() {

    // let _id = this.route.snapshot.params['id'];
		// this.competitionservice.getCompetitions(_id).then(competition => this.competition = competition);
  }

  // getBack()
	// {
	// 	this.location.back();
	// }
}
