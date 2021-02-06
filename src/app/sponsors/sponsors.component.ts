import { Component, OnInit } from '@angular/core';


import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Subscription } from 'rxjs';

import { Sponsor } from "./sponsor.model";
import { SponsorsService } from "./sponsor.service";

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {


  form: FormGroup;
  imagePreview: string;
  isLoading = false;
  constructor( public sponsorsService: SponsorsService) {}


    private teamsSub: Subscription;
    sponsors: Sponsor[] = [];
    private mode = "create";
    private sponsorId: string;
    sponsor: Sponsor;

  sponsorsd = [
    {
      'id': 1,
      'name': 'Indian Oil',
      'status': false,
      'imgSrc': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-PDRtXkiyuLM%2FWf_jyanSbYI%2FAAAAAAAAFAw%2FsrgZDPnXUckxGE2LyXjhkzgV4bH0Tn7OQCLcBGAs%2Fs1600%2FIndianOilLogo1024x768.jpg&f=1&nofb=1',
      'detail':'',
    },
    {
      'id': 2,
      'name': 'EI Systems',
      'status': false,
      'imgSrc': 'https://cdn.thecollegefever.com/upload/23485529-1495977461149.jpg',
      'detail':'',
    },
    {
      'id': 3,
      'name': 'Microsoft',
      'status': false,
      'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4aQ9xaKQ2qMajs9QzI7tPUmj21s0EeLwzw&usqp=CAU',
      'detail':'',
    },
    {
      'id': 4,
      'name': 'Xiomi',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1024px-Xiaomi_logo.svg.png',
      'detail':'',
    },
    {
      'id': 5,
      'name': 'SAIL',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Steel_Authority_of_India_logo.svg/1200px-Steel_Authority_of_India_logo.svg.png',
      'detail':'',
    },
    {
      'id': 6,
      'name': 'Career Launcher',
      'status': false,
      'imgSrc': 'https://d2nlyei8v64kfj.cloudfront.net/uploads/c/2017/12/c-career-launcher-jaipur-3491.png',
      'detail':'',
    },
    {
      'id': 7,
      'name': 'Phixman',
      'status': false,
      'imgSrc': 'https://pbs.twimg.com/profile_images/861239364340383744/ZhkOnaJo.png',
      'detail':'',
    },
    {
      'id': 8,
      'name': 'Top Gear',
      'status': false,
      'imgSrc': 'data:image/png;base64,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',
      'detail':'',
    },
    {
      'id': 9,
      'name': 'Cadbury',
      'status': false,
      'imgSrc': 'https://i.pinimg.com/originals/d5/fc/23/d5fc23758162d39f96c8139132417bdf.png',
      'detail':'',
    },
    {
      'id': 10,
      'name': 'Red Bull',
      'status': false,
      'imgSrc': 'https://1000logos.net/wp-content/uploads/2017/05/Red-Bull-logo.png',
      'detail':'',
    },
    {
      'id': 11,
      'name': 'Relaxo',
      'status': false,
      'imgSrc': 'https://exchange4media.gumlet.io/news-photo/95448-relaxo.jpg?format=webp&w=480&dpr=2.6',
      'detail':'',
    },
    {
      'id': 12,
      'name': 'Made Easy',
      'status': false,
      'imgSrc': 'https://object.virtualstacks.com/studentportal/profileimages/1576498727685_ME1.png',
      'detail':'',
    },
    {
      'id': 13,
      'name': 'NTPC',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/NTPC_Logo.svg/640px-NTPC_Logo.svg.png',
      'detail':'',
    },
    {
      'id': 14,
      'name': 'Internshala',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png',
      'detail':'',
    },
    {
      'id': 15,
      'name': 'Campus France',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Campus-france.svg/1200px-Campus-france.svg.png',
      'detail':'',
    },
    {
      'id': 16,
      'name': 'UT Starcom',
      'status': false,
      'imgSrc': 'https://www.shahcapital.com/wp-content/uploads/2018/03/UTStarcom-300x119.png',
      'detail':'',
    },
    {
      'id': 17,
      'name': 'ONGC',
      'status': false,
      'imgSrc': 'https://www.ongcindia.com/wps/wcm/connect/b4ee71c1-8fb3-4a9e-866c-cc96ef9e6edb/logopng.png?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-b4ee71c1-8fb3-4a9e-866c-cc96ef9e6edb-n1XfB6-',
      'detail':'',
    },
    {
      'id': 18,
      'name': 'ACC',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/ACC_Limited_logo.svg/1280px-ACC_Limited_logo.svg.png',
      'detail':'',
    },
    {
      'id': 19,
      'name': 'General Electric',
      'status': false,
      'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1024px-General_Electric_logo.svg.png',
      'detail':'',
    },
    {
      'id': 20,
      'name': 'Bechtel',
      'status': false,
      'imgSrc': 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/90d08fb9a7787515a119ebb73734ffe4',
      'detail':'',
    },
    {
      'id': 21,
      'name': 'BHEL',
      'status': false,
      'imgSrc': 'https://www.bhel.com/bhel_images/BHEL_Logo.PNG',
      'detail':'',
    },
    {
      'id': 22,
      'name': 'Vodaphone',
      'status': false,
      'imgSrc': 'https://logos-world.net/wp-content/uploads/2020/09/Vodafone-Logo.png',
      'detail':'',
    },
    {
      'id': 23,
      'name': 'LIC',
      'status': false,
      'imgSrc': 'https://www.logotaglines.com/wp-content/uploads/2017/07/LIC-Logo.jpg',
      'detail':'',
    },
    {
      'id': 24,
      'name': 'DU Beat',
      'status': false,
      'imgSrc': 'https://dubeat.com/wp-content/uploads/DUB_logo.png',
      'detail':'',
    },
    {
      'id': 25,
      'name': 'Bank Of Baroda',
      'status': false,
      'imgSrc': 'https://logos-download.com/wp-content/uploads/2016/06/Bank_of_Baroda_logo.png',
      'detail':'',
    },
  ]

  ngOnInit() {
    this.sponsorsService.getSponsors();
    this.teamsSub = this.sponsorsService.getSponsorUpdateListener()
      .subscribe((sponsors: Sponsor[]) => {
        this.isLoading = false;
        this.sponsors = sponsors;
      });
      // conso
  }
  ngOnDestroy() {
    this.teamsSub.unsubscribe();
  }

}
