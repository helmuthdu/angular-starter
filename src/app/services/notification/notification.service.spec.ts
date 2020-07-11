import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [RouterTestingModule] }));

  it('should be created', () => {
    const service = TestBed.createComponent(NotificationService);
    expect(service.componentInstance).toBeTruthy();
  });
});
