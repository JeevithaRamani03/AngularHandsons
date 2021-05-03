import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import{Products} from './products';
import{HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductMasterService {


  //call the web api url under url variable
    webapiurl="http://localhost:54478/api/Personals";
    //inject the HttpClient under Service Constructor
    constructor(private http:HttpClient) { }
  
    handleError(httpErrorResponse:HttpErrorResponse)
    {
      let errorMessage:string='';
      if(httpErrorResponse.error instanceof ErrorEvent)
      {
        //Client Error which can occur due to incorrect code in angular
        errorMessage='Error Occured in client side. Check you code logic';
      }
      else
      {
        errorMessage='Error Occured in Web API Server. Check API url or check if API server is running';
      }
  
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  
    //write a method to call the Web API Method: GetProducts()
    //The Products[] model array will store all data that we have collected
    //from web api via the webapiurl from the GetProducts() method of Web API
    getProductList():Observable<Products[]>
    {
      return this.http.get<Products[]>(this.webapiurl).pipe(catchError(this.handleError));
    }
  
    //write a method to insert data by calling the Web API method:PostProduct()
    postProductData(productData:Products):Observable<Products>
    {
      //configure the http header to send data to Web API
      const httpHeaders={headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.post<Products>(this.webapiurl+'/PostApi/',productData,httpHeaders);
    }
  
    //write a method to update data by calling the Web API method:PutProduct()
    updateProduct(product:Products):Observable<Products>
    {
      //configure the http header to send data to Web API
      const httpHeaders={headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put<Products>(this.webapiurl+'/PutApi/?id='+product.id,product,httpHeaders);
    }
  
    //write a method to delete data by calling the Web API method:DeleteProduct()
    deleteProductById(id:string):Observable<number>
    {
      //configure the http header to send data to Web API
      const httpHeaders={headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.delete<number>(this.webapiurl+'/DeleteApi?id='+id,httpHeaders);
    }
  
    //write a method to get data by id calling the Web API method:GetProduct()
    getProductDetailsById(id:string):Observable<Products>
    {
      return this.http.get<Products>(this.webapiurl+'/'+id);
    }
  }

