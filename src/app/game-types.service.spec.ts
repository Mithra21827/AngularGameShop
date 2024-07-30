import { TestBed } from '@angular/core/testing';

import { GameTypesService } from './game-types.service';

describe('GameTypesService', () => {
  let service: GameTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
