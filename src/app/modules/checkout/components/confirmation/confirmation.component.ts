import { Component, OnInit } from '@angular/core'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { NavigationService } from 'src/app/modules/core/services/navigation.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
    public actualStep!: TypeStep

    constructor(
        public _formCache: FormCacheService,
        private _navigationService: NavigationService
    ) {}

    public ngOnInit(): void {
        this.setActualStep()
    }

    private setActualStep(): void {
        this._navigationService.setActualStep(TypeStep.Confirmation)
        this._navigationService.setStorageStep(TypeStep.Confirmation)
    }
}
