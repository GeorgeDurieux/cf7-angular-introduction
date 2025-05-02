import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent, EventBindExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'George'

  //step 1: One way data binding
  person = {
    givenName: 'George',
    surname: 'Durieux',
    age: '33',
    email: 'giorgosdurieux@aueb.gr'
  }

  // step 3: Component Input
  person0: Person = {
    givenName: 'Chris',
    surname: 'Fragkos',
    age: 17,
    email: 'chfrag@aueb.gr',
    address: 'Athens, Greece'
  }

  person1: Person = {
    givenName: 'John',
    surname: 'Doe',
    age: 32,
    email: 'john@example.com',
    address: 'New York, USA'
  }

  users: Person[] = [
    {
    "givenName": "Hadleigh",
    "surname": "Iskower",
    "age": 1,
    "email": "hiskower0@youku.com",
    "address": "Room 1670"
    }, {
    "givenName": "Myrtice",
    "surname": "Warner",
    "age": 2,
    "email": "mwarner1@amazon.com",
    "address": "Suite 55"
    }, {
    "givenName": "Merna",
    "surname": "Canas",
    "age": 3,
    "email": "mcanas2@washingtonpost.com",
    "address": "PO Box 36519"
    }, {
    "givenName": "Marlie",
    "surname": "Gook",
    "age": 4,
    "email": "mgook3@hostgator.com",
    "address": "Apt 1138"
    }, {
    "givenName": "Merell",
    "surname": "Exon",
    "age": 5,
    "email": "mexon4@npr.org",
    "address": "Room 1226"
    }, {
    "givenName": "Lyon",
    "surname": "Sutter",
    "age": 6,
    "email": "lsutter5@arstechnica.com",
    "address": "Suite 82"
    }, {
    "givenName": "Virge",
    "surname": "Minors",
    "age": 7,
    "email": "vminors6@i2i.jp",
    "address": "Suite 49"
    }, {
    "givenName": "Melicent",
    "surname": "Aleksandrov",
    "age": 8,
    "email": "maleksandrov7@newsvine.com",
    "address": "Suite 44"
    }, {
    "givenName": "Mindy",
    "surname": "MacPhaden",
    "age": 9,
    "email": "mmacphaden8@wp.com",
    "address": "Suite 75"
    }, {
    "givenName": "Milty",
    "surname": "Gerholz",
    "age": 10,
    "email": "mgerholz9@pinterest.com",
    "address": "Suite 74"
    }, {
    "givenName": "Emmeline",
    "surname": "Paxforde",
    "age": 11,
    "email": "epaxfordea@archive.org",
    "address": "Room 411"
    }, {
    "givenName": "Janessa",
    "surname": "Clay",
    "age": 12,
    "email": "jclayb@mail.ru",
    "address": "Room 650"
    }, {
    "givenName": "Fey",
    "surname": "le Keux",
    "age": 13,
    "email": "flekeuxc@gizmodo.com",
    "address": "PO Box 69223"
    }, {
    "givenName": "Erhart",
    "surname": "Glasscoo",
    "age": 14,
    "email": "eglasscood@howstuffworks.com",
    "address": "Apt 1164"
    }, {
    "givenName": "Kelsi",
    "surname": "Rodbourne",
    "age": 15,
    "email": "krodbournee@pen.io",
    "address": "Room 12"
    }, {
    "givenName": "Tammi",
    "surname": "Andreaccio",
    "age": 16,
    "email": "tandreacciof@time.com",
    "address": "Apt 521"
    }, {
    "givenName": "Sharlene",
    "surname": "Farny",
    "age": 17,
    "email": "sfarnyg@w3.org",
    "address": "Apt 525"
    }, {
    "givenName": "Dicky",
    "surname": "Josselsohn",
    "age": 18,
    "email": "djosselsohnh@clickbank.net",
    "address": "Suite 6"
    }, {
    "givenName": "Christye",
    "surname": "Kordas",
    "age": 19,
    "email": "ckordasi@auda.org.au",
    "address": "PO Box 13050"
    }, {
    "givenName": "Herbie",
    "surname": "Tiuit",
    "age": 20,
    "email": "htiuitj@vkontakte.ru",
    "address": "20th Floor"
    }
    ]
}
