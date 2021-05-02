import { TestBed } from '@angular/core/testing';

import { ServicioUsuService } from './servicio-usu.service';

describe('ServicioUsuService', () => {
  let service: ServicioUsuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioUsuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
