import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SharedModule],
})
export class FormBuilderComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                 constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor() {}

  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  private readonly _fb = inject(FormBuilder);
  private readonly _cdr = inject(ChangeDetectorRef);

  /* -------------------------------------------------------------------------- */
  /*                                 life circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {
    this.onAddFormOther();
    this.onAddFormPhone(0);
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  formGroup = this._fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: [''],
    other: this._fb.array([]),
  });

  newFormOthers() {
    return this._fb.group({
      address: ['', [Validators.required]],
      phone: this._fb.array([]),
    });
  }

  newFormPhone() {
    return this._fb.group({
      phoneNumber: ['', [Validators.required]],
      phoneRegion: this._fb.array([]),
    });
  }

  newFormRegion() {
    return this._fb.group({
      region: ['', [Validators.required]],
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                     Get                                    */
  /* -------------------------------------------------------------------------- */
  get other() {
    return this.formGroup.get('other') as FormArray;
  }

  otherIndex(index: number) {
    return this.other.controls.at(index) as FormArray;
  }

  phoneIndex(otherIndex: number) {
    return this.otherIndex(otherIndex).get('phone') as FormArray;
  }

  phoneRegionIndex(otherIndex: number, phoneIndex: number) {
    return this.phoneIndex(otherIndex).at(phoneIndex).get('phoneRegion') as FormArray;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onAddFormOther() {
    this.other.push(this.newFormOthers());
  }

  onAddFormPhone(index: number) {
    const phone = this.otherIndex(index).get('phone') as FormArray;
    phone.push(this.newFormPhone());
  }

  onAddFormRegion(index: number, j: number) {
    const region = this.phoneIndex(index).at(j).get('phoneRegion') as FormArray;
    region.push(this.newFormRegion());
  }

  onRemoveFormOthers(index: number) {
    this.other.removeAt(index);
  }

  onRemoveFormPhone(index: number, j: number) {
    const phone = this.otherIndex(index).get('phone') as FormArray;
    phone.removeAt(j);
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
