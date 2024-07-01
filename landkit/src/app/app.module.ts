import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/partial/header/header.component';
import { CourselComponent } from './components/partial/coursel/coursel.component';
import { CardComponent } from './components/partial/card/card.component';
import { ModelComponent } from './components/shared/model/model.component';
import { CustomerComponent } from './components/shared/customer/customer.component';

import { FeaturesComponent } from './components/shared/features/features.component';
import { WomenComponent } from './components/shared/women/women.component';
import { PicspaceComponent } from './components/shared/picspace/picspace.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourselComponent,
    CardComponent,
    ModelComponent,
    CustomerComponent,
  
    FeaturesComponent,
    WomenComponent,
    PicspaceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
