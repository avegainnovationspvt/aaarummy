import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbtnComponent } from './leftbtn.component';

describe('LeftbtnComponent', () => {
  let component: LeftbtnComponent;
  let fixture: ComponentFixture<LeftbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
