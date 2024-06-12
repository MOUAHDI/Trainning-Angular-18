import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Signal,
  ViewChildren,
  inject,
} from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { User } from '../../core/interfaces/user.interface';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { ExtensionPipe } from '../../shared/pipes/extension.pipe';
import { UsersService } from '../../core/services/users.service';
import { AppService } from '../../core/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [UserCardComponent, PluralPipe, FormsModule, ExtensionPipe],
})
export class UsersComponent implements OnInit, OnDestroy {
  private usersService = inject(UsersService);
  private route = inject(ActivatedRoute);

  @ViewChildren('refUser', {
    read: ElementRef,
  })
  divUsers!: QueryList<ElementRef<HTMLDivElement>>;

  nbSelected = 0;
  extSelected = '';
  userIndex = 0;
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  users: Signal<User[]> = this.usersService.usersFiltered;
  errorMessage = '';
  loading = false;
  subscription!: Subscription

  //constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    //this.usersService.getAll().subscribe()
    console.log(this.route.snapshot.data['usersList']);

    const count = interval(1000);

    this.subscription = count.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  createUser(form: NgForm) {
    if (form.invalid) return;
    this.loading = true;
    this.usersService.create(form.value).subscribe({
      next: () => {
        this.loading = false;
        form.resetForm();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteUser(id: number) {
    this.usersService.delete(id).subscribe();
  }

  scrollToIndex() {
    if (this.userIndex < 0 || this.userIndex >= this.users.length) {
      this.errorMessage = 'Invalid index';
      return;
    }
    const divUser = this.divUsers.toArray()[this.userIndex];
    divUser.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}
