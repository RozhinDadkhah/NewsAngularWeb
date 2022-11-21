import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../services/new-api-service.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service: NewApiServiceService) { }

  techNewsDisplay: any = []

  ngOnInit(): void {
    this.service.techNews().subscribe((result) => {
      this.techNewsDisplay = result.articles;
    })
  }

}
