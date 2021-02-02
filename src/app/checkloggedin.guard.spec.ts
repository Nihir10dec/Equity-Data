import { TestBed } from '@angular/core/testing';

import { CheckloggedinGuard } from './checkloggedin.guard';

describe('CheckloggedinGuard', () => {
  let guard: CheckloggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckloggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
