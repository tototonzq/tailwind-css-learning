import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  /* -------------------------------------------------------------------------- */
  /*                                   inject                                   */
  /* -------------------------------------------------------------------------- */
  private _formBuilder = inject(FormBuilder);

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor() {}

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  formGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(10)]],
    age: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z]+$'),
      ],
    ],
    details: [
      {
        address: '',
        phone: [],
      },
    ],
  });

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onAddMain() {}

  onRemoveMain() {}
}
