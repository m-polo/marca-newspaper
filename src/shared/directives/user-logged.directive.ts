import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ContextService } from '../../app/services/context.service';

@Directive({
  selector: '[userLogged]',
})
export class UserLoggedDirective implements OnInit, OnDestroy {

  private contextSubscription!: Subscription;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
    private contextService: ContextService
  ) {}

  ngOnInit(): void {
    this.contextSubscription = this.contextService.context$.subscribe(
      (context) => {
        if (context.userLogged) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.contextSubscription.unsubscribe();
  }
}
