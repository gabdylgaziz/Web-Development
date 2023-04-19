import { TestBed } from '@angular/core/testing';

import { CompanyService } from './vacancy.service';

describe('AlbumService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});