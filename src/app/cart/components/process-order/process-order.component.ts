import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators/debounceTime';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;
  message: string;
  emailMessage: string;
  fullNameMessage: string;
  phoneMessage: string;

  private sub: Subscription;
  private validationMessages = {
    emailMessage: {
      email: 'Please enter a valid email address.',
      required: 'Please enter your email address.',
    },
    fullNameMessage: {
      minlength: 'Please enter a valid full name.',
      required: 'Please enter your full name.',
    },
    phoneMessage: {
      pattern: 'Please enter a valid phone number.',
      required: 'Please enter your phone number.',
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private createForm() {
    this.orderForm = this.fb.group({
      fullName: new FormControl('',
        { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
          updateOn: 'blur' }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
      address: this.fb.group({
          country: [''],
          city: [''],
          zip: [null, [Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/)]],
          location: [''],
      }),
      phones: this.fb.array([this.buildPhone()])
    });
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: new FormControl('', {validators: [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)], updateOn: 'blur'}),
    });
  }

  private watchValueChanges(): void {
    const email = this.orderForm.get('email');
    const fullName = this.orderForm.get('fullName');
    const phones = this.orderForm.get('phones');

    this.sub = email.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(() => this.setMessage(email, 'emailMessage'));

    const subFullName = fullName.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(() => this.setMessage(fullName, 'fullNameMessage'));

    let subPhones;
    phones['controls'].map(phone => subPhones = phone.valueChanges
        .pipe(
          debounceTime(1000)
        )
        .subscribe(() => this.setMessage(phone, 'phoneMessage'))
    );
    this.sub.add(subFullName);
    this.sub.add(subPhones);

  }

  private setMessage(c: AbstractControl, field: string): void {
    this[field] = '';
    if ((c.touched || c.dirty) && (c.errors || c['controls'] && c['controls'].phone.errors)) {
      const errors = c.errors || c['controls'].phone.errors;
      this[field] = Object
        .keys(errors)
        .map(key => this.validationMessages[field][key])
        .join(' ');
    }
  }

  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  order(): void {
    this.message = 'You have made an order. Thanks for choosing our service!';
  }

  addPhone(): void {
    this.phones.push(this.buildPhone());
  }

  deletePhone(index): void {
    if (index !== 0) {
      this.phones.removeAt(index);
    }
  }

}
