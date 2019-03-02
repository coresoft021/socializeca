import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import { DataService } from '../../services/data.service';
import { UpdateService } from'../../services/update.service';
import { pdt_model } from './model';
import { invoice } from './model';
import { i_number } from './model';
import { figure } from './model';

@Component({
  selector: 'b2b-invoice',
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Bill_b2b  {


   i : number = -1;
   k : number = -1;
   z : number = -1;
   j : number;

   company_name : string = 'Sreedhar Jewellers';
   company_gst : string = '32AZRPA9204G1ZK'

  

   isClickedOnce : boolean =true;
   disabled_button : boolean =true; 
   isPrint : boolean = true;

   total_paid_today : number = 0;
 
   total_due : number = 0;

   customer_name : string = '';

 
   item_price : number[] =[];
   net_total : number[] =[];
   is_invo_num_loaded : boolean = false
   isServer_res : boolean = false
  
   selecteditem : pdt_model;
   dip_invo_number : number;
   arrayOfKeyValues: any[] = [];
   arrayOfCusValues : any[] =[];
 


  product_array : pdt_model[] =[];
  pdt_list : string [] =[];
  post_invo = new invoice(1,0,[],'','','','','','','','','','',0,0,0,0,0,true,false,21,0,new Date());
 
  invoice_number_gets = new i_number('',1);
  fig_model = new figure(0,0,'');
  
  stock_check : number = 0;
  figured_out : string;
  fig_main : string ;
  fig_sub : string ;
  figured_out2 : string;
  fig_main2 : string ;
  fig_sub2 : string ;
  floor : number;
  frac : number;
 
  date_change_flag : number = 0;
  myDate = new Date();
  today: number = Date.now();

  
  
  constructor(private fb: FormBuilder, private ds :DataService, private router : Router, private us : UpdateService) { }
 ngOnInit() {


     this.push_items(1);
     this.get_invo_number();
     this.get_customers();
     this.get_products();
     this.today = Date.now();
   
  }

  



    push_items( si : number ){
               
               this.post_invo.items.push({ "SI_NO":si, "PRODUCT_NAME":'',"HSN_CODE":'',"GROSS_WEIGHT":0,"STONE_WEIGHT":0,
               "NET_WEIGHT":0,"PRICE":0,"PRICE_INCL_TAX":0,"QUANTITY":1,
                                  "TAX":5,"UNIT":'pc',"SUB_TOTAL":0,"NET_TOTAL":0 })

              }


    get_products()
            {
              this.ds.get_product_list()
              .subscribe((jsonData) => { this._get_products(jsonData)
                      },(err) => console.error(err),
                       
                      );
           }

      _get_products(json :any)
        {     
            this.arrayOfKeyValues = json;
            this.product_array = json;
            this.isServer_res = true;
       
         }

        get_invo_number(){
                             this.ds.get_invo_number_b2b().subscribe((jsonData) => { this._get_invo_number(jsonData)  , this.is_invo_num_loaded = true
                             },(err) => console.error(err),
                       
                      );
                       }

                       
                       
_get_invo_number(s:any)
{
  this.invoice_number_gets = s;
  this.dip_invo_number = this.invoice_number_gets.count + 1;
}


get_customers()
{
   this.ds.get_customer_list()
  .subscribe((jsonData) => { this.getjson5(jsonData)
                      },(err) => console.error(err),
                       
                      );
}


getjson5(json :any)
  {
    
  this.arrayOfCusValues = json;
   
  
   
}


catch_invoice_date(s:any)
{ 
  
   this.date_change_flag = 2 ;
   this.post_invo.invoice_date = s._validSelected.toLocaleDateString();
    this.us.invo_date = s._validSelected.toLocaleDateString();

   console.log(this.post_invo.invoice_date);
 
}



  change_one(item_name:any)
{
    let s : any; 
s = this.product_array.filter(xi=> xi.PRODUCT_NAME === item_name);
this.post_invo.items[this.k].PRODUCT_NAME = s[0].PRODUCT_NAME;
this.stock_check = s[0].AVAIL_QTY ;
this.post_invo.items[this.k].HSN_CODE = s[0].HSN_CODE;
this.post_invo.items[this.k].UNIT = s[0].UNIT;
this.post_invo.items[this.k].TAX = s[0].TAX;
this.post_invo.items[this.k].PRICE = s[0].PRICE;
this.post_invo.items[this.k].PRICE_INCL_TAX = s[0].NET_PRICE;
this.post_invo.items[this.k].NET_TOTAL = this.post_invo.items[this.k].PRICE_INCL_TAX * this.post_invo.items[this.k].QUANTITY;

  if(this.post_invo.cus_name === '')
     {       alert('select a customer');    }

 
     if (s[0].AVAIL_QTY <= 50 && s[0].AVAIL_QTY > 0 )
     {
       alert('stock item below 50 pls renew stock'); 
     }
     else if (s[0].AVAIL_QTY <= 0 )
     {
            alert('No Stock Available pls renew stock'); 
     }
   
       
 }

  
change_two(qty:number)
{
 this.post_invo.items[this.k].GROSS_WEIGHT = qty;

//  if (this.stock_check < qty)
//  {
//       alert("Your Stock remains "+ this.stock_check +" Items Only");
//  }
//  this.post_invo.items[this.k].SUB_TOTAL = this.post_invo.items[this.k].PRICE * this.post_invo.items[this.k].QUANTITY;
//  this.post_invo.items[this.k].NET_TOTAL = this.post_invo.items[this.k].PRICE_INCL_TAX * this.post_invo.items[this.k].QUANTITY;
}

change_three(price_incl_tax :number)
{

 this.post_invo.items[this.k].STONE_WEIGHT = price_incl_tax;
this.post_invo.items[this.k].NET_WEIGHT = this.post_invo.items[this.k].GROSS_WEIGHT - this.post_invo.items[this.k].STONE_WEIGHT

//  this.post_invo.items[this.k].PRICE_INCL_TAX = price_incl_tax;
//  this.post_invo.items[this.k].PRICE = price_incl_tax * 100 / (100 + this.post_invo.items[this.k].TAX);
//  this.post_invo.items[this.k].PRICE =  Math.round(this.post_invo.items[this.k].PRICE * 100) / 100;
//  this.post_invo.items[this.k].NET_TOTAL =  this.post_invo.items[this.k].PRICE_INCL_TAX  * this.post_invo.items[this.k].QUANTITY
//  this.post_invo.items[this.k].NET_TOTAL =  Math.round(this.post_invo.items[this.k].NET_TOTAL * 100) / 100;
//  this.post_invo.items[this.k].SUB_TOTAL = this.post_invo.items[this.k].PRICE * this.post_invo.items[this.k].QUANTITY;
}



  cus_blur(p:any)
{
  let s : any; 

s = this.arrayOfCusValues.filter(xi=> xi.CUSTOMER_NAME === p);

this.post_invo.cus_name = s[0].CUSTOMER_NAME;
this.post_invo.cus_address  = s[0].ADDRESS;
this.post_invo.cus_city = s[0].CITY;
this.post_invo.cus_phone = s[0].PHONE;
this.post_invo.cus_gst = s[0].GSTIN;
this.post_invo.cus_phone2 = s[0].PHONE2;

}
focus_one(index:number)
{
  this.k = index ;
}

addItem(inx:number)

{
      console.log(this.post_invo);
      
      this.i = this.i+1;
      this.push_items(this.i + 2);  
     
        
}

item_remove_flag()

{
  if(this.i === -1)
  {  return true;  }
  else
  {  return false;  }
}  

removeItem()
{
  

  this.post_invo.items.pop();
  this.i = this.i - 1;

}

iscash_enabled()
{

}



on_focus_total_paid()
{
  this.cal_tax();
  if (this.post_invo.grand_total > 0)
  {
   this.isClickedOnce = false;
  }

}

cal_tax()

{
  
   this.post_invo.sub_total = 0 ;
   this.post_invo.total_tax = 0 ;
   this.post_invo.grand_total = 0;

   for(this.j=0;this.j<=this.i+1;this.j++)
  {
     this.post_invo.sub_total = this.post_invo.sub_total + this.post_invo.items[this.j].SUB_TOTAL;
     this.post_invo.grand_total = this.post_invo.grand_total + this.post_invo.items[this.j].NET_TOTAL;
     this.post_invo.total_tax = this.post_invo.total_tax + ( (this.post_invo.items[this.j].PRICE * this.post_invo.items[this.j].TAX ) /100) * this.post_invo.items[this.j].QUANTITY;     
  }
   this.frac = 0;
   this.post_invo.sub_total =  Math.round(this.post_invo.sub_total * 100) / 100 ;
   this.post_invo.grand_total =  Math.round(this.post_invo.grand_total * 100) / 100 ;
   this.post_invo.total_tax =  Math.round(this.post_invo.total_tax * 100) / 100 ;
   this.post_invo.total_due = this.post_invo.grand_total;
   this.floor = this.post_invo.grand_total;
   this.frac = (this.floor-0) - ((this.post_invo.sub_total - 0) + (this.post_invo.total_tax - 0));

  
  
}  

blur_on_paid_today()
{
this.post_invo.total_due = this.post_invo.grand_total - this.post_invo.total_paid_today ;

}

get_figure(x:any)
{
    
  this.fig_model.number_to_convert = x;
   this.ds.get_figure(this.fig_model)
   .subscribe((jsonData) => { this.getjson87(jsonData)
                      },(err) => console.error(err),
                       
                      );

}

getjson87 (p:any)
{
 
   this.fig_main = p.msg;
 
}

print_invoice()
{
  this.get_figure(this.floor);
 if (this.post_invo.total_due > 0 )
   
    {
      this.post_invo.is_partial_pay = true ;
    }
  this.post_invo.length = this.post_invo.items.length  
  this.post_invo.INVOICE_NUMBER = this.dip_invo_number;
 
    console.log(this.post_invo);

    this.us.Amount_payed = this.post_invo.total_paid_today;
    this.us.due_balance = this.post_invo.total_due;
    this.us.invo_number = this.post_invo.INVOICE_NUMBER;
    this.us.cus_name = this.post_invo.cus_name;
    this.us.due_balance = this.post_invo.total_due;
    this.us.is_b2b = true;

    this.ds.post_invoice_b2b(this.post_invo)
    .subscribe((jsonData) => { this._post_res(jsonData)  , this.is_invo_num_loaded = true
                     },(err) => console.error(err),
                      
                   );

   
}

_post_res(res:any)
 {

 if( res.msg === 'Successfully saved')
    {
      window.print();
    }
 else
  {
    alert('Invoice Already Saved')
  }
 
}



 cash_reciept()
{
   this.router.navigate(['/cash-make']);
}






}


















  


