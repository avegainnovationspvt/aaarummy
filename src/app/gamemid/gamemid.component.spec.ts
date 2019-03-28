import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemidComponent } from './gamemid.component';

describe('GamemidComponent', () => {
  let component: GamemidComponent;
  let fixture: ComponentFixture<GamemidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamemidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
