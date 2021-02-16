import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturesRmComponent } from './lectures-rm.component';

describe('LecturesRmComponent', () => {
  let component: LecturesRmComponent;
  let fixture: ComponentFixture<LecturesRmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturesRmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
