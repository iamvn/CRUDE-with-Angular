import { Component, OnInit } from '@angular/core';
import {Items, ItemsDto} from "../../dummy-api/load-items-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})

export class ShopInfoComponent implements OnInit {
  public date:Date|undefined;
  public delete:boolean =false;
  public itemsDto:Array<ItemsDto>=[];
  constructor(private router:Router) {this.date = new Date();}

  ngOnInit(): void {
    this.itemsDto=Items.ITEMS;
  }

  modifyItems(items:any){
    this.router.navigateByUrl('modify-items',{state:{
      UserData:items,
      btnTxt:'Save'
      }});
  }


  deleteItems(items_uid:string,name:string) {
    let deleteTxt = `Are You sure you want to delete : ${name}`;
    if(confirm(deleteTxt) == true){
      Items.ITEMS.find((elem, index) => {
        if (elem.id == items_uid) {
          Items.ITEMS.splice(index, 1);
        }
      })
      this.router.navigateByUrl('');
    }
  }

  addItems(){
    console.log("add clicked");
    this.router.navigateByUrl('add-items',{state:{
      newUserData:'',
      btnTxt:'Add'
      }});
  }

}

