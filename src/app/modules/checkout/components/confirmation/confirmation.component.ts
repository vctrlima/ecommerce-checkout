import { Component, OnInit } from '@angular/core'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { NavigationService } from 'src/app/modules/core/services/navigation.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'
import { ConfirmationData } from 'src/app/modules/shared/models/confirmation-data'

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
    public actualStep!: TypeStep
    public formData: ConfirmationData

    constructor(
        public _formCache: FormCacheService,
        private _navigationService: NavigationService
    ) {
        this.formData = new ConfirmationData()
    }

    public ngOnInit(): void {
        this.setActualStep()
        this.getFormData()
    }

    private setActualStep(): void {
        this._navigationService.setActualStep(TypeStep.Confirmation)
    }

    private getFormData(): void {
        this.formData = this._formCache.getConfirmationData()
    }
}
