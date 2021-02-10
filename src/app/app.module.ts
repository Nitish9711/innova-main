import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DotComponent } from './dot/dot.component';
import { CanvasComponent } from './canvas/canvas.component';
import { LecturesComponent } from './lectures/lectures.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { MoreInfoComponent } from './home/more-info/more-info.component';
import { SubscribersComponent } from './subscribers/subscribers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DotComponent,
    CanvasComponent,
    LecturesComponent,
    TemplateBasicComponent,
    CompetitionsComponent,
    WorkshopsComponent,
    SponsorsComponent,
    TeamComponent,
    ContactComponent,
    MoreInfoComponent,
    SubscribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    FontAwesomeModule,
    NgbModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
