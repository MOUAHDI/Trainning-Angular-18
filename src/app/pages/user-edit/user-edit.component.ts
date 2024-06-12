import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private userService = inject(UsersService)
  user: User = {} as User

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.userService.get(id).subscribe((user) => {
      this.user = user
    })
  }
}
