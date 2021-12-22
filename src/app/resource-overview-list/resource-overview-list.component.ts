import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resource-overview-list',
  templateUrl: './resource-overview-list.component.html',
  styleUrls: ['./resource-overview-list.component.scss']
})
export class ResourceOverviewListComponent implements OnInit {
  public resources$ : Observable<any>;
  constructor(private readonly httpClient: HttpClient) {
    this.resources$ = this.getResource();
   }

  ngOnInit(): void {
  }

  public getResource() : Observable<any> {
    return this.httpClient.get('https://localhost:7214/Resource');
  }

}
