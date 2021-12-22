import {
    Component,
    Input,
    isDevMode,
    OnInit,
    ViewEncapsulation,
} from '@angular/core'
import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
} from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { LocalStorageService } from 'src/app/modules/core/services/local-storage.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'
import { AppConstants } from '../../constants/app-constants'
import { ConfirmationData } from '../../models/confirmation-data'
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
    @Input() public actualStep!: TypeStep
    @Input() public canContinue!: boolean
    @Input() public previousRoute!: string
    @Input() public nextRoute!: string

    constructor(
        private _dialog: MatDialog,
        private _formCache: FormCacheService,
        private _localStorageService: LocalStorageService,
        private _router: Router,
        private _snackBar: MatSnackBar
    ) { }

    public ngOnInit(): void {
        if (!isDevMode()) this.setFormCacheData()
    }

    private setFormCacheData(): void {
        let data: ConfirmationData = new ConfirmationData()

        data = this._formCache.getConfirmationData()

        this._formCache.name = data.name
        this._formCache.email = data.email
        this._formCache.password = data.password
        this._formCache.address = data.address
        this._formCache.paymentMethod = data.paymentMethod
    }

    public navigateToPreviousStep(): void {
        if (this.previousRoute) this._router.navigate([this.previousRoute])
    }

    public navigateToNextStep(): void {
        if (this.nextRoute) {
            if (!isDevMode()) this._formCache.storeFormData()

            this._router.navigate([this.nextRoute])
        } else this.openErrorSnackbar()
    }

    private openErrorSnackbar(): void {
        this._snackBar.open('* Preenchimento obrigatório', 'OK')
    }

    public isOnConfirmationRoute(): boolean {
        return this._router.url.includes('/confirmation')
    }

    public showAlertDialog(): void {
        const alertDialogOptions: MatDialogConfig = {
            width: '90%',
            maxWidth: '35rem',
            data: {
                title: 'Sucesso!',
                message: this.getAlertDialogMessage(),
                buttonLabel: 'Fechar',
            },
        }

        const alertDialogRef: MatDialogRef<AlertDialogComponent> =
            this._dialog.open(AlertDialogComponent, alertDialogOptions)

        alertDialogRef.afterClosed().subscribe(() => {
            if (!isDevMode())
                this._localStorageService.remove(
                    AppConstants.StorageKeys.FormData.Name
                )

            this._localStorageService.remove(
                AppConstants.StorageKeys.StepsPermission.Name
            )
            this._localStorageService.set(
                AppConstants.StorageKeys.StepsPermission.Name,
                TypeStep.Identification
            )
            this._formCache.resetFormCache()

            this._router.navigate(['/checkout/identification'])
        })
    }

    private getAlertDialogMessage(): string {
        return isDevMode()
            ? 'Muito bom, programador! Estamos desenvolvendo bem este desafio!'
            : 'Obrigado por fazer este teste de conhecimento!'
    }
}
