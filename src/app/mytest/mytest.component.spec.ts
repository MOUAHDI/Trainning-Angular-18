import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MytestComponent } from "./mytest.component"

describe('Tester MytestComponent', () => {
    let fixture: ComponentFixture<MytestComponent>
    let component: MytestComponent
    let el: HTMLElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MytestComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(MytestComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
        el = fixture.nativeElement
    })

    it('La propriété title est bien dans le DOM', () => {
        const h1 = el.querySelector('h1')
        expect(component.title).toBe('Mon App')
        expect(h1?.textContent).toContain(component.title)
    })
})