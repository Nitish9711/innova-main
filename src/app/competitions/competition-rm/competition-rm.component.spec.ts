import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionRMComponent } from './competition-rm.component';

describe('CompetitionRMComponent', () => {
  let component: CompetitionRMComponent;
  let fixture: ComponentFixture<CompetitionRMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionRMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
