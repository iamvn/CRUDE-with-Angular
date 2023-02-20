import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Items, ItemsDto} from "../../../dummy-api/load-items-info";

@Component({
  selector: 'app-user-add-modify',
  templateUrl: './user-add-modify.component.html',
  styleUrls: ['./user-add-modify.component.scss']
})
export class UserAddModifyComponent implements OnInit {
public items:any;
public newItems:any;
public btnTxt:string='';
public newItemFormGroup:FormGroup;
public isFormSubmitted:boolean =false;
public newItemsJson:ItemsDto ={
  id:'',
  name:'',
  item:'',
  quantity:0,
  amount:''
}
  constructor(private router:Router, private formBuild:FormBuilder) {
    this.newItemFormGroup=formBuild.group({
      NewUserName:["",Validators.compose([Validators.required])],
      NewItemName:["",Validators.compose([Validators.required])],
      ItemQuantity:["",Validators.compose([Validators.required])],
      ItemAmount:["",Validators.compose([Validators.required])]
    })

   this.newItems=this.router.getCurrentNavigation()?.extras?.state?.newUserData;
   this.items=this.router.getCurrentNavigation()?.extras?.state?.UserData;
   this.btnTxt=this.router.getCurrentNavigation()?.extras?.state?.btnTxt || 'Add';

   this.newItemFormGroup.patchValue({
     NewUserName:this.items?.name,
     NewItemName:this.items?.item,
     ItemQuantity:this.items?.quantity,
     ItemAmount:this.items?.amount,
   });
  }

  ngOnInit(): void {
  }


  submitItems(itemForm:FormGroup) {
    this.isFormSubmitted =true;
    if (itemForm.valid) {
      //Modify Json Data
      if (this.btnTxt == 'Save') {
        this.newItemsJson = {
          id: this.items?.id,
          name: itemForm.controls.NewUserName.value,
          item: itemForm.controls.NewItemName.value,
          quantity: itemForm.controls.ItemQuantity.value,
          amount: itemForm.controls.ItemAmount.value,
        }
        Items.ITEMS.find(elem => {
          if (elem.id == this.newItemsJson.id) {
            elem["name"] = this.newItemsJson.name;
            elem["item"] = this.newItemsJson.item;
            elem["quantity"] = this.newItemsJson.quantity;
            elem["amount"] = this.newItemsJson.amount;
          }
        })
        this.router.navigateByUrl('');
      }
      //Add New Items In Json
      if (this.btnTxt == 'Add') {
        let id: string = `GL00${Math.floor((Math.random() * 100))}`;
        this.newItemsJson = {
          id: id,
          name: itemForm.controls.NewUserName.value,
          item: itemForm.controls.NewItemName.value,
          quantity: itemForm.controls.ItemQuantity.value,
          amount: itemForm.controls.ItemAmount.value,
        }
        Items.ITEMS.push(this.newItemsJson);
        this.router.navigateByUrl('');
      }
    }
  }
}
