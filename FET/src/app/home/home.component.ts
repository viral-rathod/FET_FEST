import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images =[
    "assets/images/carousel-1.jpg",
    "assets/images/carousel-2.jpg",
    "assets/images/carousel-3.jpg",
  ];

  constructor() { }

  ngOnInit() {
  }

}
