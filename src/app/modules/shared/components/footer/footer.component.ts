import {
    Component,
    Input,
    isDevMode,
    OnInit,
    ViewEncapsulation,
} from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { FormCacheService } from 'src/app/modules/core/services/form-cache.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'
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
        private _router: Router,
        private _snackBar: MatSnackBar
    ) {}

    public ngOnInit(): void {}

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

        this._dialog.open(AlertDialogComponent, alertDialogOptions)
    }

    private getAlertDialogMessage(): string {
        return isDevMode()
            ? 'Muito bom, programador! Estamos desenvolvendo bem este desafio!'
            : 'Obrigado por fazer este teste de conhecimento!'
    }
}
