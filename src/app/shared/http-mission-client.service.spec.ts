import { TestBed } from '@angular/core/testing';

import { HttpMissionClientService } from './http-mission-client.service';

describe('HttpMissionClientService', () => {
  let service: HttpMissionClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMissionClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
