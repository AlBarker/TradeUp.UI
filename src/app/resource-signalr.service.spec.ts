import { TestBed } from '@angular/core/testing';

import { ResourceSignalrService } from './resource-signalr.service';

describe('ResourceSignalrService', () => {
  let service: ResourceSignalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceSignalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
