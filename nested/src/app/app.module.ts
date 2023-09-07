import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavigateProgramatacallyComponent } from './navigate-programatacally/navigate-programatacally.component';
import { LapiiComponent } from './lapii/lapii.component';
import { Lapii2Component } from './lapii2/lapii2.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    LaptopComponent,
    MobileComponent,
    NavigateProgramatacallyComponent,
    LapiiComponent,
    Lapii2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
