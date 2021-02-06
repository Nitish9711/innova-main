import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBasicComponent } from './template-basic.component';

describe('TemplateBasicComponent', () => {
  let component: TemplateBasicComponent;
  let fixture: ComponentFixture<TemplateBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
