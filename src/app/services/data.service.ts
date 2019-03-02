import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    total = 0;
    
  

    
    constructor(private http: Http) { }

       post_invoice_b2b(model:any) 
       {
        let body= JSON.stringify(model); 
                 console.log('body',body);
      return this.http.post('https://coresoft.herokuapp.com/api/post/post_invoice_b2b', body, { headers: contentHeaders})
            .map((res: Response) => res.json())
            
        } 

   get_figure(model:any)
  {
    let body = JSON.stringify(model); 
       console.log('body',body);
      return this.http.post('https://coresoft.herokuapp.com/api/public/number_to_word',body,{headers : contentHeaders})  
      .map((res: Response) => res.json())
  }

   get_invo_number_b2b()
    {
         return this.http.get('https://coresoft.herokuapp.com/api/public/get_invoice_number_b2b',{headers : contentHeaders})  
         .map((res: Response) => res.json())
    }

    
    get_product_list()
    {
       return this.http.get('https://coresoft.herokuapp.com/api/public/get_product_list',{headers : contentHeaders})  
      .map((res: Response) => res.json())
    }

    get_reciept_number_b2b()
    {
      return this.http.get('http://localhost:8081/api/public/get_reciept_number_b2b',{headers : contentHeaders})  
      .map((res: Response) => res.json())
    }


   get_customer_list()
   {
     return this.http.get('https://coresoft.herokuapp.com/api/public/get_customer_list',{headers : contentHeaders})  
      .map((res: Response) => res.json())
   }

    adduser(model:any) {

        let body= JSON.stringify(model); 

        
        return this.http.post('http://localhost:8081/api/public/add_user', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    }


  
 
 


    private handleError(error: any): Promise<any> 
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
