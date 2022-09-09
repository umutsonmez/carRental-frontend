import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customerDetail.component';
import { CarDetailComponent } from './components/car/carDetail.component';
import { RentalComponent } from './components/rental/rentalDetail.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarImageComponent } from './components/carImage/carImage.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarDetailComponent,
    RentalComponent,
    NaviComponent,
    CarImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
