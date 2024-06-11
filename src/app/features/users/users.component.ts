import { Component, ElementRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { User } from '../../core/interfaces/user.interface';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { FormsModule } from '@angular/forms';
import { ExtensionPipe } from '../../shared/pipes/extension.pipe';
import { UsersService } from '../../core/services/users.service';
import { AppService } from '../../core/services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [UserCardComponent, PluralPipe, FormsModule, ExtensionPipe],
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService)
  
  @ViewChildren('refUser', {
    read: ElementRef
  }) divUsers!: QueryList<ElementRef<HTMLDivElement>>

  nbSelected = 0;
  extSelected = '';
  userIndex = 0
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  users: User[] = []
  errorMessage = ''

  //constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getAll()
  }
  
  scrollToIndex() {
    if (this.userIndex < 0 || this.userIndex >= this.users.length) {
      this.errorMessage = 'Invalid index'
      return
    }
    const divUser = this.divUsers.toArray()[this.userIndex]
    divUser.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
