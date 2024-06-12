import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/interfaces/user.interface';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private userService = inject(UsersService)
  private builder = inject(FormBuilder)

  user: User = {} as User
  propEmail = new FormControl()
  form = this.builder.group({
    email: this.propEmail,
    username: '',
    name: ''
  })

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.userService.get(id).subscribe((user) => {
      this.user = user
      //this.propEmail.setValue(this.user.email)
      this.form.patchValue(this.user)
    })
  }
}
