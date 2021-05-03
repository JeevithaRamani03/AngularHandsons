import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
  
  })
  
  export class ApiService {
  private SERVER = "https://localhost:44325/api/gift";
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
  
  // Client-side errors
  
    errorMessage = `Error: ${error.error.message}`;
  
  } else {
  
  // Server-side errors
  
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  
  }
  
  window.alert(errorMessage);
  return throwError(errorMessage);
  }
  public fetchData(){
   
         return this.httpClient.get(this.SERVER).pipe(catchError(this.handleError));
      
      }
  
  }
  
  