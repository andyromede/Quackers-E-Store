import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DucksearchComponent } from './ducksearch/ducksearch.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { LoginComponent } from './login/login.component';
import { ProductCreateComponent } from './product-create-modify/product-create-modify.component';
import { ProfileComponent } from './profile/profile.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SnackbarNotificationComponent } from './snackbar-notification/snackbar-notification.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DuckImageComponent } from './duck-image/duck-image.component';;
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CustomizeComponent } from './customize/customize.component';
import { ShippingModifyComponent } from './shipping-modify/shipping-modify.component';
import { PaymentModifyComponent } from './payment-modify/payment-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingCartComponent,
    InventoryManagementComponent,
    ProductCreateComponent,
    CatalogComponent,
    DucksearchComponent,
    ProfileComponent,
    CheckoutComponent,
    ReceiptComponent,
    SnackbarNotificationComponent,
    DuckImageComponent,
    ProfileComponent,
    NavigationBarComponent,
    CustomizeComponent,
    ShippingModifyComponent,
    PaymentModifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
