import { NgModule } from '@angular/core';
import { CharacterRemoverPipe } from './pipes/character-remover.pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoggedDirective } from './directives/user-logged.directive';

@NgModule({
  declarations: [CharacterRemoverPipe, UserLoggedDirective],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  exports: [CharacterRemoverPipe, UserLoggedDirective],
})
export class SharedModule {}
