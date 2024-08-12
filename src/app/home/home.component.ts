import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Form-1';
  placement = 'top';
  model: { year: number; month: number; day: number; };

constructor() {
  // Initializing model with current date
  const currentDate = new Date();
  this.model = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate()
  };
}
  
  signupForm = new FormGroup ({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl(''),
    dateOfBirth: new FormControl('',[Validators.required, Validators.min(18), Validators.max(60)]),
    unique_id: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    confUniqueId: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  handleSubmitForm() {
    console.log(this.signupForm.markAllAsTouched());

    // Here you can handle the form submission logic
    if (this.signupForm.valid) {
      console.log("Form Submitted", this.signupForm.value);
    }
  }

  get f() {
    return this.signupForm.controls;
  }
}
