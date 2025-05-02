import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
    name = 'Thanasis'

    person = {
        givenName: 'Thanasis',
        surname: 'Androutsos',
        age: '50',
        email: 'a8ana@aueb.gr'
    }
}
