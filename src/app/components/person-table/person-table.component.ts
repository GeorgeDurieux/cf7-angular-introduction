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
    @Input() personInput: Person | EPerson | undefined
    name = 'Thanasis'
    addressOrEducation: string = ''

    person = {
        givenName: 'Thanasis',
        surname: 'Androutsos',
        age: '50',
        email: 'a8ana@aueb.gr'
    }

    isPerson(): boolean {
        if (this.personInput && 'address' in this.personInput) {
            this.addressOrEducation = this.personInput.address
            return 'address' in this.personInput
        }
        return false
    }

    isEPerson(): boolean {
        if (this.personInput && 'education' in this.personInput) {
            this.addressOrEducation = this.personInput.education
            return 'education' in this.personInput
        }
        return false
    }
}
