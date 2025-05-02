import { Component, Input } from '@angular/core';
import { EPerson } from '../../shared/interfaces/eperson';
import { sortBy } from 'lodash-es'

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
    @Input() data: EPerson[] | undefined

    sortOrder = {
        givenName: 'none',
        surname: 'none',
        age: 'none',
        email: 'none',
        education: 'none'
    }

    onPersonClicked(person: EPerson) {
        console.log(person)
    }
}
