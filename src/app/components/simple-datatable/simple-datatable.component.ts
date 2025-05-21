import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges, effect, inject } from '@angular/core';
import { EPerson } from '../../shared/interfaces/eperson';
import { sortBy } from 'lodash-es'

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent implements OnChanges {
    @Input() data: EPerson[] | undefined
    @Output() personClicked = new EventEmitter<EPerson>()

    epersonsData: EPerson[] | undefined = []

    sortOrder = {
        givenName: 'none',
        surname: 'none',
        age: 'none',
        email: 'none',
        education: 'none'
    }

    ngOnChanges() {
        this.epersonsData = this.data
    }

    sortData(sortKey: keyof EPerson): void {
        if (this.sortOrder[sortKey] === 'asc') {
            this.sortOrder[sortKey] = 'desc'
            this.epersonsData = sortBy(this.epersonsData, sortKey).reverse()
        } else {
            this.sortOrder[sortKey] = 'asc'
            this.epersonsData = sortBy(this.epersonsData, sortKey)
        }

        for (let key in this.sortOrder) {
            if (key !== sortKey) {
                this.sortOrder[key as keyof EPerson] = 'none'
            }
        }
    }

    sortSign(sortKey: keyof EPerson) {
        if (this.sortOrder[sortKey] === 'asc') {
            return '\u2191' 
        } else if (this.sortOrder[sortKey] === 'desc') {
            return '\u2193'
        } else {
            return
        }
    }

    onPersonClicked(person: EPerson) {
        this.personClicked.emit(person)
    }
}
