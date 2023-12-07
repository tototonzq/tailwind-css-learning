import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  private _router = inject(Router);

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  signInForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<number | string>('', Validators.required),
  });

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                    Misc                                    */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onSubmit() {
    this._router.navigate(['dashboard']);
    // if (this.signInForm.valid) {
    //   // Form is valid, do something with the data
    //   this._router.navigate(['dashboard']);
    //   console.log('Form submitted:', this.signInForm.value);
    // } else {
    //   // Form is invalid, mark all controls as touched to display validation errors
    //   this.signInForm.markAllAsTouched();
    // }
  }
}
