import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';


@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
    person0: Person = {
        givenName: 'Jason',
        surname: 'Momoa',
        age: 35,
        email: 'khal@drogo.com',
        address: 'World, Wide'
    }

    person1: Person = {
        givenName: 'John',
        surname: 'Doe',
        age: 25,
        email: 'lol@example.com',
        address: 'Athens, Greece'
    }
}
