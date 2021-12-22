import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ResourceModel, ResourceSignalrService } from '../resource-signalr.service';

@Component({
  selector: 'app-resource-overview-list',
  templateUrl: './resource-overview-list.component.html',
  styleUrls: ['./resource-overview-list.component.scss']
})
export class ResourceOverviewListComponent implements OnInit {
  public resources$ : Observable<any> | undefined;
  public resources : ResourceModel[] | undefined;
  constructor(private readonly httpClient: HttpClient, private readonly signalRService: ResourceSignalrService) {
    
   }

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addTranserResourceDataListener();
    this.getResource();
    // this.resources = this.signalRService.data;
    this.resources$ = this.signalRService.data$;
  }

  public getResource() {
    this.httpClient.get('https://localhost:7214/api/Resource')
      .pipe(
        tap((res) => console.log('CASNASD' + res))
      )
      .subscribe();
  }

}
