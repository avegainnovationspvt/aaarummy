import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpasComponent } from './forpas.component';

describe('ForpasComponent', () => {
  let component: ForpasComponent;
  let fixture: ComponentFixture<ForpasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForpasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
