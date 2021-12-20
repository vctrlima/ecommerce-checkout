import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IdentificationComponent } from './components/identification/identification.component'

const routes: Routes = [
    {
        path: '',
        component: IdentificationComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckoutRoutingModule {}
