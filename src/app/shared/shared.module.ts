import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule {}
