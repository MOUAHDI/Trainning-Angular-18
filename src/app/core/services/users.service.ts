import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type UserPayload = Omit<User, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly url = 'https://jsonplaceholder.typicode.com/users';
  private http = inject(HttpClient);

  private _users = signal<User[]>([]);
  private _search = signal('');
  users = this._users.asReadonly();
  search = this._search.asReadonly();
  usersFiltered: Signal<User[]> = computed(() => {
    return this.users().filter((user) => user.name.includes(this.search()));
  });

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this._users.set(users);
      })
    );
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((user) => {
        this._users.set([...this.users(), user]);
        // this._users.update(users => [...users, user])
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id)
  }

  setSearch(val: string) {
    this._search.set(val);
  }
}
