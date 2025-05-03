import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
    selector: 'app-eperson-template-driven-form',
    imports: [
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    templateUrl: './eperson-template-driven-form.component.html',
    styleUrl: './eperson-template-driven-form.component.css'
})

export class EpersonTemplateDrivenFormComponent {

    @Output() person = new EventEmitter<EPerson>()

    @ViewChild('eForm', {static: false}) form: NgForm | undefined

    onSubmit(value: EPerson) {
        this.person.emit(value)
    }

    onSetValue() {
        this.form?.setValue({
            givenName: "John",
            surname: "Doe",
            age: 30,
            email: "john@doe.com",
            education: "Bachelor's degree"
        })
        this.form?.form.controls['givenName'].setValue('Jack')
    }
}
