import { Component, EventEmitter, Output } from '@angular/core';
import { 
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
 } from '@angular/forms';
 import { MatSelectModule } from '@angular/material/select';
 import { MatInputModule } from '@angular/material/input';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {

    @Output() person = new EventEmitter<EPerson>()

    form = new FormGroup({
        givenName: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        age: new FormControl(18, [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.min(18),
            Validators.max(100)
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        education: new FormControl('', Validators.required)
    })

    onSubmit() {
        if (this.form.valid) {

            console.log(this.form.value)

            const person: EPerson = {
                givenName: this.form.value.givenName ?? '', 
                surname: this.form.value.surname ?? '',
                age: String(this.form.value.age) ?? '',
                email: this.form.value.email ?? '',
                education: this.form.value.education ?? '',
            }
            this.person.emit(person)
            this.form.reset()
        }
    }

    onSetValue() {
        this.form.setValue({
            givenName: 'John',
            surname: 'Doe',
            age: 40,
            email: 'john@doe.com',
            education: "Master's degree"
        })
    }
}
