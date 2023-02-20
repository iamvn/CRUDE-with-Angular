import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopInfoComponent} from "./pages/shop-info/shop-info.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {UserAddModifyComponent} from "./pages/shop-info/user-add-modify/user-add-modify.component";

const routes: Routes = [
  {path:'', component:ShopInfoComponent, pathMatch:'full'},
  {path:'shop-info',component:ShopInfoComponent, pathMatch:'full'},
  {path:'about-me',component:AboutMeComponent, pathMatch:'full'},
  {path:'add-items',component:UserAddModifyComponent, pathMatch:'full'},
  {path:'modify-items',component:UserAddModifyComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
