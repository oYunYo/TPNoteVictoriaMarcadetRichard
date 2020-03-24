import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Computer } from '../models/computer';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  marqueDisponible = ['Dell', 'HP', 'Apple', 'Asus'];
  typeDisponible = ['Portable', 'Fixe', 'Tablette hybride'];
  categoryDisponible = ['Gaming', 'Bureautique', 'Premier prix'];
  apiURL = 'http://localhost:3000/computers';
  httpOptions = {       
    headers: new HttpHeaders({             
      'Content-Type': 'application/json'         
    })     
  };   
  constructor(private http: HttpClient) { }

  handleError(error) {     
    let errorMessage = '';     
    if ( error.error instanceof ErrorEvent ) {         
      // Get client-side error         
      errorMessage = error.error.message;     
    } else {         
      // Get server-side error         
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;     
    }     
    window.alert(errorMessage);     
    return throwError(errorMessage); 
  } 

  getComputers(): Observable<Computer[]> {      
    return this.http.get<Computer[]>(this.apiURL).pipe(             
          retry(1),              
          catchError(this.handleError)          
      ); 
  }

  getOneComupter(id: number): Observable<Computer> {
    return this.http.get<Computer>(this.apiURL + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addComputer(computer:Computer): Observable<Computer> {
    computer.dateEntreStock = new Date();
    return this.http.post<Computer>(this.apiURL, computer, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteComputer(id: number): Observable<Computer> {     
    return this.http.delete<Computer>(this.apiURL + '/' + id)         
    .pipe(             
      retry(1),             
      catchError(this.handleError)         
    ); 
  }

  updateComputer(computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(this.apiURL + '/' + computer.id, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

}





  