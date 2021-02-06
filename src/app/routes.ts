import { Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component'
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TeamComponent } from './team/team.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ContactComponent } from './contact/contact.component';
import { MoreInfoComponent } from './home/more-info/more-info.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: TemplateBasicComponent, 
    children: [{
      path:'lectures',
      component: LecturesComponent
    },
    {
      path:'competitions',
      component: CompetitionsComponent
    },
    {
      path:'workshops',
      component: WorkshopsComponent
    },
    {
      path:'sponsors',
      component: SponsorsComponent
    },
    {
      path:'team',
      component: TeamComponent
    },
    {
      path:'contact',
      component: ContactComponent
    },
    {
      path:'more-info',
      component: MoreInfoComponent
    },
  ]
  },
  // { path: 'contact',     component: ContactComponent },
  // { path: 'dishdetail/:id',     component: DishDetailComponent },
  // { path: 'about',     component: AboutComponent },
];