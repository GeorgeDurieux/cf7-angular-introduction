import { Component, inject, Inject } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/eperson';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog'

@Component({
    selector: 'app-component-output-example',
    imports: [SimpleDatatableComponent, DialogModule],
    templateUrl: './component-output-example.component.html',
    styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
    manyPerson = ManyPerson
    dialog = inject(Dialog)

    showPersonClicked(person: EPerson) {
        this.dialog.open(PersonDialogComponent, {
            data: person
        })
    }

    personTemplate(person: EPerson) {
        return `
        Person Details:

        First Name: ${person.givenName}
        Last Name: ${person.surname}
        Age: ${person.age}
        Email: ${person.email}
        Education: ${person.education}
        `
    }
}

@Component({
    imports: [],
    template: `
    <div class="d-flex flex-column align-items-center justify-content-center text-center">

    <h4 class="mb-3">Person details</h4>

    <table class="table table-bordered mx-3">
    <tr>
        <td class="fw-semibold text-end">First Name</td>
        <td class="ps-2 text-start">{{ person.givenName }}</td>
    </tr>
    <tr>
        <td class="fw-semibold text-end">Last Name</td>
        <td class="ps-2 text-start">{{ person.surname }}</td>
    </tr>
    <tr>
        <td class="fw-semibold text-end">Age</td>
        <td class="ps-2 text-start">{{ person.age }}</td>
    </tr>
    <tr>
        <td class="fw-semibold text-end">Email</td>
        <td class="ps-2 text-start">{{ person.email }}</td>
    </tr>
    <tr>
        <td class="fw-semibold text-end">Education</td>
        <td class="ps-2 text-start">{{ person.education }}</td>
    </tr>
    </table>

    <button class="btn btn-primary btn-sm mt-3" (click)="dialogRef.close()">Close</button>

</div>

    `,
    styles: [
        `
            :host {
                display: block;
                background: #fff;
                border-radius: 8px;
                padding: 16px;
                max-width: 500px;
            }
        `
    ]
})

export class PersonDialogComponent {
    dialogRef = inject(DialogRef)
    constructor(
        @Inject(DIALOG_DATA) public person: EPerson
    ) { }
}
