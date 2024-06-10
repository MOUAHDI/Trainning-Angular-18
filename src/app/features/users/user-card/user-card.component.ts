import { Component, Input } from "@angular/core";
import { User } from "../../../../core/interfaces/user.interface";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user.name }}</header>
             {{ user.email }}
            <footer></footer>
        </article>
    `,
    standalone: true
})
export class UserCardComponent {
    @Input() user: User = {} as User
}