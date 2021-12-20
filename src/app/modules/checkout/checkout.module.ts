import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { SharedModule } from '../shared/shared.module'
import { CheckoutRoutingModule } from './checkout.routes'
import { IdentificationComponent } from './components/identification/identification.component'

@NgModule({
    declarations: [IdentificationComponent],
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        SharedModule,

        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
    ],
})
export class CheckoutModule {}
