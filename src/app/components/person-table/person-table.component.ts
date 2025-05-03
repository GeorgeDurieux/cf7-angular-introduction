import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
    @Input() personInput: Person | undefined
    name = 'Thanasis'

    person = {
        givenName: 'Thanasis',
        surname: 'Androutsos',
        age: '50',
        email: 'a8ana@aueb.gr'
    }
}
