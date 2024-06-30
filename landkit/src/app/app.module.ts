import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/partial/header/header.component';
import { CourselComponent } from './components/partial/coursel/coursel.component';
import { CoreuiModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
