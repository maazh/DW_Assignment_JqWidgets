import { TestBed, inject } from '@angular/core/testing';

import { GetCollectiomsService } from './get-collectioms.service';

describe('GetCollectiomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCollectiomsService]
    });
  });

  it('should be created', inject([GetCollectiomsService], (service: GetCollectiomsService) => {
    expect(service).toBeTruthy();
  }));
});
