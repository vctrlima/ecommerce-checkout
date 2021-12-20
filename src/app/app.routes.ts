import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './modules/core/components/layout/layout.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/checkout/identification',
    },
    {
        path: 'checkout',
        pathMatch: 'full',
        redirectTo: '/checkout/identification',
    },
    {
        path: 'checkout',
        loadChildren: () =>
            import('./modules/checkout/checkout.module').then(
                (m) => m.CheckoutModule
            ),
        component: LayoutComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
