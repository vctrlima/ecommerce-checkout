import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { LocalStorageService } from 'src/app/modules/core/services/local-storage.service'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'

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
        private _localStorageService: LocalStorageService,
        private _router: Router,
        private _snackBar: MatSnackBar
    ) {}

    public ngOnInit(): void {}

    public navigateToPreviousStep(): void {
        if (this.previousRoute) this._router.navigate([this.previousRoute])
    }

    public navigateToNextStep(): void {
        if (this.nextRoute) {
            this._localStorageService.set

            this._router.navigate([this.nextRoute])
        } else {
            this.openErrorSnackbar()
        }
    }

    private openErrorSnackbar(): void {
        this._snackBar.open('* Preenchimento obrigatório', 'OK')
    }
}
