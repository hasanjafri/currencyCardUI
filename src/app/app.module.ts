import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatSelectModule, MatOptionModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './components/account/account.component';
import { AppComponent } from './app.component';
import { CcyComponent } from './components/ccy/ccy.component';
import { PricetileComponent } from './components/pricetile/pricetile.component';

import { AccountService } from './services/account/account.service';
import { CcyService } from './services/ccy/ccy.service';

@NgModule({
  declarations: [
    AppComponent,
    CcyComponent,
    AccountComponent,
    PricetileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [CcyService, AccountService],
  bootstrap: [AppComponent],
})
export class AppModule { }
