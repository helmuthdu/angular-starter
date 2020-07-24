import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => TestBed.configureTestingModule({ imports: [RouterTestingModule] }));

  it('should be created', () => {
    service = TestBed.inject(NotificationService);
    expect(service).toBeTruthy();
  });
});
