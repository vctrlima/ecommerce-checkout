import {
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { TypeStep } from 'src/app/modules/shared/enums/type-step'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
    @Input() public validateFormObservable!: Observable<void>
    @Input() public actualStep!: TypeStep
    @Input() public previousRoute!: string
    @Input() public nextRoute!: string

    private canContinue: boolean

    constructor(private _router: Router) {
        this.canContinue = false
    }

    public ngOnInit(): void {
        this.initValidateFormSubscription()
    }

    private initValidateFormSubscription(): void {
        this.validateFormObservable.subscribe(() => {
            this.canContinue = true
        })
    }

    public isOnStep(step: TypeStep): boolean {
        return this.actualStep == step
    }

    public navigateToPreviousStep(): void {
        if (this.previousRoute) this._router.navigate([this.previousRoute])
        else console.log('Error dialog')
    }

    public navigateToNextStep(): void {
        if (this.nextRoute && this.canContinue)
            this._router.navigate([this.nextRoute])
        else console.log('Error dialog')
    }
}
