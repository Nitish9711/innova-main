import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopRmComponent } from './workshop-rm.component';

describe('WorkshopRmComponent', () => {
  let component: WorkshopRmComponent;
  let fixture: ComponentFixture<WorkshopRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
