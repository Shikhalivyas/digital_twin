import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

 onSubmit() {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched(); // Trigger validation display
    return;
  }

  Swal.fire({
    title: 'Thank you for contacting us!',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  this.contactForm.reset();
}
}
