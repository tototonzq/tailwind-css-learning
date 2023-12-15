import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                 constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor() {}

  /* -------------------------------------------------------------------------- */
  /*                                 life circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {
    this.onAddFormGroupChild();
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  formGroup = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number | string>(''),
    detail: new FormArray([]),
  });

  formGroupChild = new FormGroup({
    address: new FormControl<string>('', [Validators.required]),
    phone: new FormArray([]),
  });

  formGroupPhone = new FormGroup({
    phone: new FormControl<string>('', [Validators.required]),
  });

  get detail(): FormArray {
    return this.formGroup.get('detail') as FormArray;
  }

  get phone(): FormArray {
    return this.formGroupChild.get('phone') as FormArray;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onAddFormGroupChild() {}

  onAddFormGroupPhone(index: number) {}
}
