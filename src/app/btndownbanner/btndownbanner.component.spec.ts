import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtndownbannerComponent } from './btndownbanner.component';

describe('BtndownbannerComponent', () => {
  let component: BtndownbannerComponent;
  let fixture: ComponentFixture<BtndownbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtndownbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtndownbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
