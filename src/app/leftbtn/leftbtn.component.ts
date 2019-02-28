import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbtn',
  templateUrl: './leftbtn.component.html',
  styleUrls: ['./leftbtn.component.scss']
})
export class LeftbtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  firstClick() {
    b1.style.backgroundColor = "green";
    b2.style.background = "transparent";
    b7.style.background = "transparent";
    b3.style.background = "transparent";
    b4.style.background = "transparent";
    b5.style.background = "transparent";
    b6.style.background = "transparent";
  }
  secondClick() {
  b1.style.background = "transparent";
  b3.style.background = "transparent";
  b4.style.background = "transparent";
  b5.style.background = "transparent";
  b7.style.background = "transparent";
  b6.style.background = "transparent";
  b2.style.backgroundColor = "green";
  }
  thirdClick() {
  b1.style.background = "transparent";
  b2.style.background = "transparent";
  b4.style.background = "transparent";
  b5.style.background = "transparent";
  b6.style.background = "transparent";
  b7.style.background = "transparent";
  b3.style.backgroundColor = "green";
  }
  fourthClick() {
  b1.style.background = "transparent";
  b2.style.background = "transparent";
  b3.style.background = "transparent";
  b5.style.background = "transparent";
  b7.style.background = "transparent";
  b6.style.background = "transparent";
  b4.style.backgroundColor ="green";
  }
  fifthClick() {
  b1.style.background = "transparent";
  b2.style.background = "transparent";
  b3.style.background = "transparent";
  b7.style.background = "transparent";
  b4.style.background = "transparent";
  b6.style.background = "transparent";
  b5.style.backgroundColor = "green";
  }
  sixthClick() {
  b1.style.background = "transparent";
  b2.style.background = "transparent";
  b3.style.background = "transparent";
  b7.style.background = "transparent";
  b4.style.background = "transparent";
  b5.style.background = "transparent";
  b6.style.backgroundColor = "green";
  }
}
