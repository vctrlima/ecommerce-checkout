import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { SharedModule } from '../shared/shared.module'
import { CheckoutRoutingModule } from './checkout.routes'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
import { IdentificationComponent } from './components/identification/identification.component'
import { PaymentComponent } from './components/payment/payment.component'

@NgModule({
    declarations: [
        IdentificationComponent,
        PaymentComponent,
        ConfirmationComponent,
    ],
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        SharedModule,

        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
    ],
    providers: [],
})
export class CheckoutModule {}
