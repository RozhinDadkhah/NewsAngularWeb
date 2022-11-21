import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../services/new-api-service.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private service: NewApiServiceService) {
  }

  topHeadingDisplay: any = []

  ngOnInit(): void {
    this.service.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }
}
