import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
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
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckoutRoutingModule {}
