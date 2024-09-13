import { Injectable } from '@angular/core';
import { Context } from '../models/context';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class ContextService {
  private context: BehaviorSubject<Context> = new BehaviorSubject<Context>({
    dateOfLogging: null,
    userLogged: false,
  });
  public context$: Observable<Context> = this.context.asObservable();

  setContext(context: Context): void {
    this.context.next(context);
  }

  resetContext(): void {
    this.context.next({ dateOfLogging: null, userLogged: false });
  }
}
