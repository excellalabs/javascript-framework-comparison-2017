import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MessageService } from './messageService';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService]
})
export class ServicesModule { }
