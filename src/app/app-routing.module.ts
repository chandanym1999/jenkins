import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { AdminresetComponent } from './adminreset/adminreset.component';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {path:"product",component:ProductComponent},
    {path:"cart",component:CartComponent},
    {path:"home",component:HomeComponent},
    {path:"",component:HomeComponent},
    {path:"admin",component:AdminloginComponent},
    {path:"adminhome",component:AdminComponent},
    {path:"adminlist",component:AdminlistComponent},
    {path:"adminreset",component:AdminresetComponent},
    {path:"adminadd",component:AdminaddComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"buy",component:BuyComponent},
    {path:"payment",component:PaymentComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
