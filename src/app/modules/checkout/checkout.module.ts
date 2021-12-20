import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CheckoutRoutingModule } from './checkout.routes'
import { IdentificationComponent } from './components/identification/identification.component'

@NgModule({
    declarations: [IdentificationComponent],
    imports: [CommonModule, CheckoutRoutingModule],
})
export class CheckoutModule {}
