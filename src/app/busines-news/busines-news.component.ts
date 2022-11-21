import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../services/new-api-service.service'

@Component({
  selector: 'app-busines-news',
  templateUrl: './busines-news.component.html',
  styleUrls: ['./busines-news.component.css']
})
export class BusinesNewsComponent implements OnInit {

  constructor(private service: NewApiServiceService) { }

  BusinessDisplay: any = []

  ngOnInit(): void {
    this.service.businessNews().subscribe((result) => {      
      this.BusinessDisplay = result.articles;
    })
  }

}
