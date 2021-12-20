import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrls: ['./identification.component.scss'],
})
export class IdentificationComponent implements OnInit {
    private get name() {
        return this.identificationForm.get('name')
    }

    private get email() {
        return this.identificationForm.get('email')
    }

    private get contactNumber() {
        return this.identificationForm.get('contactNumber')
    }

    private get address() {
        return this.identificationForm.get('address')
    }

    private get addressNumber() {
        return this.identificationForm.get('addressNumber')
    }

    public identificationForm: FormGroup

    constructor() {
        this.identificationForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            contactNumber: new FormControl(''),
            address: new FormControl(''),
            addressNumber: new FormControl(''),
        })
    }

    public ngOnInit(): void {}

    public hasValue(value: string): boolean {
        return value != ''
    }

    public clearValue(formControlName: string): void {
        switch (formControlName) {
            case 'name':
                this.name?.reset('')
                break

            case 'email':
                this.email?.reset('')
                break

            case 'contactNumber':
                this.contactNumber?.reset('')
                break

            case 'address':
                this.address?.reset('')
                break

            case 'addressNumber':
                this.addressNumber?.reset('')
                break

            default:
                break
        }
    }
}
