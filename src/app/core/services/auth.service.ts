import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export type AuthPayload = {
  email: string
  password: string
}

type AuthResponse = {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  token = signal('')

  login(payload: AuthPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('https://reqres.in/api/login', payload)
      .pipe(
        tap((res) => {
           this.token.set(res.token)
        })
      )
  }
}
