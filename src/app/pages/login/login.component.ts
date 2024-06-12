import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { domainValidator } from '../../core/validators/domain.validator';
import { AuthPayload, AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private auth = inject(AuthService)
  private router = inject(Router)

  propEmail = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ]);
  propPass = new FormControl<string>('');
  myForm = new FormGroup({
    email: this.propEmail,
    password: this.propPass,
  });
  submitted = false;

  login() {
    this.submitted = true;
    if (this.myForm.invalid) return
    this.auth.login(this.myForm.value as AuthPayload).subscribe(() => {
      this.router.navigateByUrl('/')
    })
  }
}
