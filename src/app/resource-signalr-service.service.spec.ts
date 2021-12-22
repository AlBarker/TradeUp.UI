import { TestBed } from '@angular/core/testing';

import { ResourceSignalrServiceService } from './resource-signalr-service.service';

describe('ResourceSignalrServiceService', () => {
  let service: ResourceSignalrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceSignalrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
