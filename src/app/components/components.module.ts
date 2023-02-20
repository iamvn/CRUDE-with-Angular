import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {ContainerComponent} from "./container/container.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    ContainerComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
