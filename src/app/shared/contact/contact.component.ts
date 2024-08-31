import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Import ReactiveFormsModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;  // Form group for the contact form
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    window.scrollTo(1000, 0);
    
    // Initialize the form group with validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  send() {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;
  
      emailjs.send("service_pi74mtg", "template_x9zbb4k", {
        from_name: formValues.name,
        to_name: "GJDecorators",
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
      }, 'bYp6VvUxP7lwE6RwQ')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Message sent successfully!');
        this.contactForm.reset()
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message, please try again.');
      });
    }
  }
  
}
