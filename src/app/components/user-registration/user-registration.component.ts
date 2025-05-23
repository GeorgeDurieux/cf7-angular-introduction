import { Component, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-registration',
  imports: [
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     ReactiveFormsModule,
     MatSelectModule,
     MatIconModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
    userService = inject(UserService)

    registrationStatus: {
        success: boolean,
        message: string
    } = {
        success: false,
        message: 'Not attempted yet'
    }
    
    form = new FormGroup({
        username: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormGroup({
            area: new FormControl(''),
            road: new FormControl('')
        }),
        phone: new FormArray([
            new FormGroup({
                number: new FormControl('', Validators.required),
                type: new FormControl('', Validators.required)
            })
        ]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
    },
    this.passwordConfirmValidator
)

    passwordConfirmValidator(control: AbstractControl): {[key: string]: boolean} | null {

        const form = control as FormGroup
        const password = form.get('password')?.value
        const confirmPassword = form.get('confirmPassword')?.value

        if (password && confirmPassword && password !== confirmPassword) {
            form.get('confirmPassword')?.setErrors({passwordMismatch: true})
            return {passwordMismatch: true}
        }
        return null
    }

    phone = this.form.get('phone') as FormArray

    addPhoneNumber() {
        this.phone.push(
            new FormGroup({
                number: new FormControl('', Validators.required),
                type: new FormGroup('', Validators.required)
            })
        )
    }

    removePhoneNumber(index: number) {
        this.phone.removeAt(index)
    }

    onSubmit() {
        const data = this.form.value as User
        
        this.userService.registerUser(data).subscribe({
            next: () => {
                this.registrationStatus = {
                    success: true,
                    message: 'User registered'
                }
            },
            error: (response) => {
                this.registrationStatus = {
                    success: false,
                    message: response.error.data.errorResponse.errmsg
                }
            }
        })
    }

    check_duplicate_email() {
        const email = this.form.get('email')?.value

        if (email) {
            this.userService.check_duplicate_email(email).subscribe({
                next: () => {
                    this.form.get('email')?.setErrors(null)
                },
                error: () => {
                    this.form.get('email')?.setErrors({duplicateEmail: true})
                }

            })    
        }
    }

    registerAnother() {
        this.form.reset()
        this.registrationStatus = {
            success: false,
            message: 'Not attempted yet'
        }
    }
}
