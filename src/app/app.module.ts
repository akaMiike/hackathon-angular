import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MessageModule,
    ToastModule,
    HttpClientModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    TabMenuModule,
    AppRoutingModule,
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
