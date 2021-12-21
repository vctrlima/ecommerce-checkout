import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthorizeGuard } from '../core/guards/authorize.guard'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
import { IdentificationComponent } from './components/identification/identification.component'
import { PaymentComponent } from './components/payment/payment.component'

const routes: Routes = [
    {
        path: 'identification',
        component: IdentificationComponent,
    },
    {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [AuthorizeGuard],
    },
    {
        path: 'confirmation',
        component: ConfirmationComponent,
        canActivate: [AuthorizeGuard],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckoutRoutingModule {}
