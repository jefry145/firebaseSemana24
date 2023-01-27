import { TestBed } from '@angular/core/testing';

import { UserpermiseGuard } from './userpermise.guard';

describe('UserpermiseGuard', () => {
  let guard: UserpermiseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserpermiseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
