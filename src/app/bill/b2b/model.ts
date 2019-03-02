export class pdt_model 
{
constructor(
          
          public PRODUCT_NAME: string,
          public PRODUCT_CODE: string,
          public NET_PRICE: number,
          public QUANTITY : number,
          public TAX: number,
          public AVAIL_QTY : number,
          public NET_PURCHASE_PRICE :number,
          public UNIT : string,
         
          
) { }
}

export class invo_slave 
{
constructor(
          public SI_NO: number,
          public PRODUCT_NAME: string,
          public HSN_CODE: string,
          public GROSS_WEIGHT : number,
          public STONE_WEIGHT : number,
          public NET_WEIGHT : number,
          public PRICE: number,
          public PRICE_INCL_TAX: number,
          public QUANTITY : number,
          public TAX: number,
          public UNIT : string,
          public SUB_TOTAL : number,
          public NET_TOTAL : number,
          
          



          
) { }
}





   export class invoice {
  constructor(
  
  public  INVOICE_NUMBER: number,
  public  length : number,
  public  items:invo_slave[],
  public  cus_name: string,
  public  cus_city : string,
  public  cus_gst : string,
  public  cus_phone : string,
  public  cus_phone2 : string,
  public  cus_address : string,
  public  tran_mode : string,
  public  place_of_supply : string,
  public  veh_no : string,
  public  bill_date : string,
  public total_paid_today : number,
  public  sub_total: number,
  public  total_tax: number,
  public  grand_total: number,
  public  total_due : number,
  public  is_b2b : boolean,
  public  is_partial_pay : boolean,
  public  tran_type : number,
  public  no_bundles : number,
  public  invoice_date : Date
  


  ) {} }

 export class i_number {
  constructor(
    
    public text : string,
        public count: number

    
    
  ) {  }
}

 


  export class invoices {
  constructor(
  
 public   INVOICE_NUMBER: number,
 public   length : number,

  public  cus_name: string,
  public  cus_address: string,
  public  cus_phone: number,
 
  public  sub_total: number,
  public  total_tax: number,
  public  gross_total: number,
  public  discount_total : number,
  public total_payed : number,
  public total_due : number
  


  ) {} }

    export class figure {
  constructor(
  
 public    number_to_convert: number,
 public fraction : number,

  public  msg: string
 
  


  ) {} }
