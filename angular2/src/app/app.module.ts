import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageFormComponent } from './components/messageForm/component'
import { MessagesComponent } from './components/messages/component'
import { ServicesModule } from './services'

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageFormComponent
  ],
  imports: [
    ServicesModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
