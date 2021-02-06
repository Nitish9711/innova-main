import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sidenav: boolean;

  ngOnInit(): void {
    this.sidenav = false;
  }

  openSidebar(){
    this.sidenav = true;
  }

  closeSidenav(){
    this.sidenav = false;
  }


}
