import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { autentificacionResolver } from './autentificacion.resolver';

describe('autentificacionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => autentificacionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
