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
    
    
        get_customers_subs_list()
    {
      return this.http.get('https://coresoft.herokuapp.com/api/public/get_subscription_list',{headers : contentHeaders})  
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
