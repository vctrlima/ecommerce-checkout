import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './modules/core/components/layout/layout.component'
import { AuthorizeGuard } from './modules/core/guards/authorize.guard'

const routes: Routes = [
    {
        path: '',
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
