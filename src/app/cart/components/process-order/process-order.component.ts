import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessOrderComponent implements OnInit {
  orderForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bulder();
  }

  private bulder() {
    this.orderForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required, Validators.minLength(5)], updateOn: 'blur' }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
      phones: this.fb.array([this.buildPhone()])
    });
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: new FormControl('', {validators: [Validators.required, Validators.minLength(7)], updateOn: 'blur'}),
    });
  }

  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  getEmailErrorMessage() {
    return this.orderForm.controls.email.hasError('required') ? 'You must enter a value' :
        this.orderForm.controls.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  order(): void {
    this.message = 'You have made an order. Thanks for choosing our service!';
  }

  addPhone(): void {
    this.phones.push(this.buildPhone());
  }

  deletePhone(index): void {
    this.phones.removeAt(index);
  }

}
