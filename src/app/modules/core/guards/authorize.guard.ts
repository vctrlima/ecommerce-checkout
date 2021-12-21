import { Injectable } from '@angular/core'
import {
    MatDialog,
    MatDialogConfig,
    MatDialogRef,
} from '@angular/material/dialog'
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { AlertDialogComponent } from '../../shared/components/alert-dialog/alert-dialog.component'
import { AppConstants } from '../../shared/constants/app-constants'
import { TypeStep } from '../../shared/enums/type-step'
import { LocalStorageService } from '../services/local-storage.service'

@Injectable({
    providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
    constructor(
        private _dialog: MatDialog,
        private _localStorageService: LocalStorageService,
        private _router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const steps: TypeStep[] = this._localStorageService.get(
            AppConstants.StorageKeys.StepsPermission.Name
        )
        const url = state.url

        if (steps != null) {
            if (
                url.includes('/confirmation') &&
                steps.includes(TypeStep.Confirmation)
            )
                return true

            if (url.includes('/payment') && steps.includes(TypeStep.Payment))
                return true
        }

        this.showAlertDialog()

        return false
    }

    private showAlertDialog(): void {
        const alertDialogOptions: MatDialogConfig = {
            width: '90%',
            maxWidth: '35rem',
            data: {
                message:
                    'Você não possui acesso a essa página. Assim, você será redirecionado para a primeira página do fluxo.',
            },
        }
        const alertDialogRef: MatDialogRef<AlertDialogComponent> =
            this._dialog.open(AlertDialogComponent, alertDialogOptions)

        alertDialogRef.afterClosed().subscribe(() => {
            this._router.navigate(['/checkout/identification'])
        })
    }
}
