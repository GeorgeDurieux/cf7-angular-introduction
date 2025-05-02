import { Component, Input } from '@angular/core';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
    @Input() data: EPerson[] | undefined
}
