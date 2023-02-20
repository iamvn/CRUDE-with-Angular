import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ShopInfoComponent} from "./shop-info/shop-info.component";
import { UserAddModifyComponent } from './shop-info/user-add-modify/user-add-modify.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    AboutMeComponent,
    ShopInfoComponent,
    UserAddModifyComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AboutMeComponent,
    ShopInfoComponent
  ]
})
export class PagesModule { }
