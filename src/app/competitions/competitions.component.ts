import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Subscription } from 'rxjs';

import { Competition } from "./competition.model";
import {CompetitionsService } from "./competition.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {


  status = "upcoming";
  form: FormGroup;
  imagePreview: string;
  isLoading = false;
  constructor( public competitionsService: CompetitionsService) {}
  private competitionsSub: Subscription;
  competitions: Competition[] = [];
  private mode = "create";
  private competitionId: string;
  competition: Competition;


  // competitionsD= [{
  //   'id': 1,
  //   'name': 'Full Throttle',
  //   'desc': 'It is the RC car racing competition where participants compete with each other using there personalised cars surpassing hurdles on the track',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.rcdriver.com%2Fwp-content%2Fuploads%2F2016%2F04%2FECX-Revenge-Type-E-Brings-Brushless-Power-to-Your-First-RC-Race-Buggy-1.jpg&f=1&nofb=1',
  // },
  // {
  //   'id': 2,
  //   'name': 'Structure D',
  //   'desc': 'It is a design competition where you are provided with the case questions and you need to design a structure to solve it.',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tekla.com%2Fsites%2Fdefault%2Ffiles%2FInternational%2FProducts%2F2015-01-tsd-kdl-multi-material.png&f=1&nofb=1',
  // },
  // {
  //   'id': 3,
  //   'name': 'Aeroglider',
  //   'desc': 'Contestants make their own glider using Balsa wood, taking care of the aerodynamics and perfection. The gliders are test by throwing from a high raised buiding.',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.airfieldmodels.com%2Fgallery_of_models%2Fmiscellaneous%2Fgraupner_mini%2Fimages%2F18177.jpg&f=1&nofb=1',
  // },
  // {
  //   'id': 4,
  //   'name': 'Find D Bug',
  //   'desc': 'The participants are provided with a huge file of code in which they need to find the bug to win the competition',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.makeuseof.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fcleaner-better-code-670x335.jpg&f=1&nofb=1',
  // },
  // {
  //   'id': 5,
  //   'name': 'Codethon',
  //   'desc': 'It is the race to solve the competitive coding questions by passing all test cases',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fb%2F3%2Fb%2F1202147-popular-coding-wallpaper-hd-2048x1365-for-android.jpg&f=1&nofb=1',
  // },
  // {
  //   'id': 6,
  //   'name': 'Design It',
  //   'desc': 'It is a digital art design competition on a set of topics. The best design illustration wins.',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn1.digitalartsonline.co.uk%2Fcmsdata%2Fslideshow%2F3630827%2Fphotoshop_update_hero-photoshop-cc-100630829-orig.jpg&f=1&nofb=1',
  // },
  // {
  //   'id': 7,
  //   'name': 'Case Study Competition',
  //   'desc': 'Problems and situations occur everytime but it is important how to tackle them. Partiticants are provided with a case scenario which they need to solve',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.hubspot.com%2Fhubfs%2Fhow-to-write-a-case-study.jpg&f=1&nofb=1',
  // },
  // {
  //   'id': 8,
  //   'name': 'Quadrace',
  //   'desc': 'It is the race between Quadcopters where each participants need to pass the hurdles in the track.',
  //   'status': false,
  //   'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dronetrest.com%2Fuploads%2Fdb5290%2F169%2F6641e6bc9a1675fc.jpg&f=1&nofb=1',
  // }
  // ]

  ngOnInit() {
    this.competitionsService.getCompetitions();
    this.competitionsSub = this.competitionsService.getCompetitionUpdateListener()
      .subscribe((competitions: Competition[]) => {
        this.isLoading = false;
        this.competitions = competitions;
      });
  }
  ngOnDestroy() {
    this.competitionsSub.unsubscribe();
  }

}
