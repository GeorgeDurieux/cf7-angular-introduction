import { Component, inject } from '@angular/core';
import { EPerson, ManyPerson } from '../../shared/interfaces/eperson';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog'

@Component({
  selector: 'app-component-output-example',
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
    manyPerson = ManyPerson

    dialog = inject(Dialog)

    showPersonClicked(person: EPerson) {
        this.dialog.open(PersonDialogComponent, {
            
        })
    }

    personTemplate(person: EPerson) {
        return `
        Person Details

        First Name: ${person.givenName}
        Last Name: ${person.surname}
        Age: ${person.age}
        Email: ${person.email}
        Education: ${person.education}
        `
    }
}
