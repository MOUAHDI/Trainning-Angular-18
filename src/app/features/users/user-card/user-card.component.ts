import { Component, Input } from "@angular/core";
import { User } from "../../../../core/interfaces/user.interface";
import { LangPipe } from "../../../shared/pipes/lang.pipe";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user.name }}</header>
             {{ user.email }}
            <footer>
                <button>{{ 'REMOVE' | lang:'fr' }}</button>
            </footer>
        </article>
    `,
    standalone: true,
    imports: [LangPipe]
})
export class UserCardComponent {
    @Input() user: User = {} as User
}