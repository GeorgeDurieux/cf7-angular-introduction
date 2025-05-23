import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Credentials, LoggedInUser, User } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {

    http: HttpClient = inject(HttpClient)
    router = inject(Router)

    user$ = signal<LoggedInUser | null>(null)

    constructor() {
        const access_token = localStorage.getItem('access_token')
        if(access_token) {
            const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser
            this.user$.set({
                username: decodedTokenSubject.username,
                email: decodedTokenSubject.email,
                roles: decodedTokenSubject.roles
            })
        }
        effect(() => {
            if (this.user$()) {
                console.log('User logged in', this.user$()?.username)
            } else {
                console.log('No user logged in')
            }
        })
    }

    registerUser(user: User) {
        return this.http.post<{status: boolean, data: User}>(
            `${API_URL}`, user
        )
    }

    check_duplicate_email(email: string) {
        return this.http.get<{status: boolean, data: User}>(`${API_URL}/check_duplicate_email/${email}`)
    }

    loginUser(credentials: Credentials) {
        return this.http.post<{status: boolean, data: string}>(
            `${API_URL_AUTH}/login`, credentials
        )
    }

    logoutUser() {
        this.user$.set(null)
        localStorage.removeItem('access_token')
        this.router.navigate(['user-login'])
    }

    isTokenExpired(): boolean {
        const token = localStorage.getItem('access_token')
        if (!token) return true
        try {
            const decoded = jwtDecode(token)
            const exp = decoded.exp
            const now = Math.floor(Date.now()/1000)
            if (exp) {
                return exp < now
            } else {
                return true 
            }
                       
        } catch (err) {
            return true
        }
    }

    redirectToGoogleLogin() {
        const clientId = '459642604926-c9nj2mtl9t5vnh88v02b9gal26ikeovv.apps.googleusercontent.com'
        const redirectUri = 'http://localhost:3000/api/auth/google/callback'
        const scope = 'email profile'
        const responseType = 'code'
        const accessType = 'offline'

        const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`

        window.location.href = url
    }
}
