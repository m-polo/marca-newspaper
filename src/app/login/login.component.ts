import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contextService: ContextService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [, Validators.required],
      password: new FormControl(null, [
        Validators.required,
        this.passwordValidator(),
      ]),
    });

    this.form.controls['password'].disable();
    this.form.controls['username'].valueChanges.subscribe({
      next: (value) => {
        if (!!value && this.form.controls['password'].disabled) {
          this.form.controls['password'].enable();
        }
        if (!value && this.form.controls['password'].enabled) {
          this.form.controls['password'].disable();
          this.form.controls['password'].reset();
        }
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit(): void {
    this.contextService.setContext({
      dateOfLogging: new Date(),
      userLogged: true,
    });
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regExp: RegExp = new RegExp('^[0-9,$]*$');
      const password: string = control.value;

      if (!password) return null;
      if (password.length > 8 && regExp.test(password)) {
        return null;
      }

      return { passwordError: { value: password } };
    };
  }
}
