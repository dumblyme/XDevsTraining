import { TestBed, inject } from '@angular/core/testing';

import { BibleAppService } from './bible-app.service';

describe('BibleAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibleAppService]
    });
  });

  it('should be created', inject([BibleAppService], (service: BibleAppService) => {
    expect(service).toBeTruthy();
  }));
});
