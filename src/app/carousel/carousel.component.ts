import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../services/new-api-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private service: NewApiServiceService) { }

  carouselDisplay: any = []

  ngOnInit(): void {
    this.service.topHeading().subscribe((result) => {
      this.carouselDisplay = result.articles;
    })

  }

}
