import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    console.log(id)
  }
}
