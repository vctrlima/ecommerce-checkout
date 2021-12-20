import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { NavigationService } from 'src/app/modules/core/services/navigation.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'

@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrls: ['./identification.component.scss'],
})
export class IdentificationComponent implements OnInit {
    public validateFormSubject: Subject<void>

    public actualStep!: TypeStep
    public unlockedStep!: TypeStep

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

    constructor(private _navigationService: NavigationService) {
        this.identificationForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            contactNumber: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            addressNumber: new FormControl('', [Validators.required]),
        })

        this.validateFormSubject = new Subject<void>()
    }

    public ngOnInit(): void {
        this._navigationService.setActualStep(TypeStep.Identification)

        this.initServiceSubscriptions()
    }

    private initServiceSubscriptions(): void {
        this._navigationService.getUnlockedStep().subscribe((step) => {
            this.unlockedStep = step
        })
    }

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

    public validateFormGroup(): void {
        if (this.identificationForm.valid) this.emitValidationToFooter()
    }

    private emitValidationToFooter() {
        this.validateFormSubject.next()
    }
}
