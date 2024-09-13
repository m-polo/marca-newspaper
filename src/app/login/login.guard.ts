import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { ContextService } from '../services/context.service';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const contextService: ContextService = inject(ContextService);
  return contextService.context$.pipe(map((context) => !context.userLogged));
};
