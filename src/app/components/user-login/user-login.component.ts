import { Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from "@angular/forms"
import { UserService } from '../../shared/services/user.service';
import { Credentials, LoggedInUser } from '../../shared/interfaces/user';
import { jwtDecode} from 'jwt-decode'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
    userService = inject(UserService)
    router = inject(Router)

    form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    })

    onSubmit() {
        const credentials = this.form.value as Credentials
        this.userService.loginUser(credentials).subscribe({
            next: (response) => {
                console.log('Logged in: ', response)
                const access_token = response.data
                localStorage.setItem('access_token', access_token)

                const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser

                this.router.navigate(['user-registration-example'])
            },
            error: (response) => {
                console.log('Error: ', response)
            }
        })
    }
}
