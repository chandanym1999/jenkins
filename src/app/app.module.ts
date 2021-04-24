import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminresetComponent } from './adminreset/adminreset.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyComponent } from './buy/buy.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxPrintModule } from 'ngx-print';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AdminComponent,
    AdminloginComponent,
    AdminlistComponent,
    AdminresetComponent,
    AdminaddComponent,
    AboutusComponent,
    ContactusComponent,
    CartComponent,
    BuyComponent,
    PaymentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
