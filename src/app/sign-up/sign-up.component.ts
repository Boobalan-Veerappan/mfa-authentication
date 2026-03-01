import { Component } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    standalone: false
})
export class SignUpComponent {

    employeeForm:FormGroup;
    otp:string = '';

     constructor(public fb:FormBuilder) {
        this.employeeForm = this.fb.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [
                Validators.required,
                Validators.pattern(/^[0-9]{10}$/), // 10 digit number
                Validators.minLength(10),
                Validators.maxLength(10)
            ]]
        });
     }

     // Helper method to check if field is invalid and touched
     isFieldInvalid(fieldName: string): boolean {
        const field = this.employeeForm.get(fieldName);
        return !!(field && field.invalid && (field.dirty || field.touched));
     }

     // Helper method to get specific error message
     getErrorMessage(fieldName: string): string {
        const field = this.employeeForm.get(fieldName);
        if (field?.errors) {
            if (field.errors['required']) {
                return `${fieldName} is required`;
            }
            if (field.errors['email']) {
                return 'Please enter a valid email address';
            }
            if (field.errors['pattern']) {
                if (fieldName === 'phoneNumber') {
                    return 'Please enter a valid 10-digit mobile number';
                }
            }
            if (field.errors['minlength'] || field.errors['maxlength']) {
                if (fieldName === 'phoneNumber') {
                    return 'Mobile number must be exactly 10 digits';
                }
            }
        }
        return '';
     }

     // Submit handler
     onSubmit() {
        if (this.employeeForm.valid) {
            console.log('Form Data:', this.employeeForm.value);
            // Handle form submission
        } else {
            // Mark all fields as touched to show errors
            Object.keys(this.employeeForm.controls).forEach(key => {
                this.employeeForm.get(key)?.markAsTouched();
            });
        }
     }
 }