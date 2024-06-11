import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Query, QueryList, Signal, ViewChild, ViewChildren, computed, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AutoCompletePipe } from "../../../shared/pipes/autocomplete.pipe";
import { UsersService } from "../../../core/services/users.service";
import { SharedModule } from "../../../shared/shared.module";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName" #refInput>
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->
        <ul>
            @for (name of firstNames() | autocomplete:userName ; track $index) {
                <li #refLi>{{ name }}</li>
            }
        </ul>
        <!-- <ul>
            <li *ngFor="let name of firstNames ; let i = index ; let isFirst = first">
               {{ i }} - {{ name }}
            </li>
        </ul> -->
    `,
    standalone: true,
    imports: [FormsModule, SharedModule /*NgIf, NgFor*/]
})
export class SearchComponent implements OnInit, AfterViewInit {
    private userService = inject(UsersService)
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    @ViewChild('refInput') propInput!: ElementRef<HTMLInputElement>
    @ViewChildren('refLi') propLi!: QueryList<ElementRef>

    ngOnInit() {
        
       // this.propInput?.nativeElement.focus()
    }

    ngAfterViewInit(): void {
        console.log(this.propLi.toArray())
    }

    firstNames: Signal<string[]> = computed(
            () => this.userService.users().map(user => user.name)
    )

    search() {
        this.eventSearch.emit(this.userName)
        this.userService.setSearch(this.userName)
    }
}