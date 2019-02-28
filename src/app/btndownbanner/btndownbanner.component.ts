import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btndownbanner',
  templateUrl: './btndownbanner.component.html',
  styleUrls: ['./btndownbanner.component.scss']
})
export class BtndownbannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  seventhClick() {
  b1.style.background = "transparent";
  b2.style.background = "transparent";
  b3.style.background = "transparent";
  b4.style.background = "transparent";
  b5.style.background = "transparent";
  b6.style.background = "transparent";
  b7.style.backgroundColor = "green";
}
}
