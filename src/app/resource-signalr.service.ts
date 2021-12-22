import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ResourceModel {
  id: number,
  name: string,
  countAvailable: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ResourceSignalrService {
  public data: ResourceModel[] | undefined;
  private hubConnection: HubConnection | undefined;
  public data$: BehaviorSubject<ResourceModel[] | undefined>;

  constructor() {
    this.data$ = new BehaviorSubject<ResourceModel[] | undefined>(undefined);
   }

  public startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:7214/Resource", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection.start()
      .then(() => console.log('connection started!'))
      .catch(err => console.log('error' + err));
  }

  public addTranserResourceDataListener() {
    if (this.hubConnection === undefined) {
      return;
    }
    this.hubConnection.on('transferresourcedata', (data) => {
      this.data = data;
      this.data$.next(data);
      console.log(data);
    })
  }
}
