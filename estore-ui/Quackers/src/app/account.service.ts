import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _apiURL = 'http://localhost:8080';

  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) { }

  /**
   * Gets data of the account specified by the user.
   * 
   * If they enter a wrong information combo, it will not allow the user to proceed.
   * 
   * @param username The name of the account
   * @param password The password of the account
   * @returns The account with all the user data to be displayed and http ok
   * Invalid login information for an existing account returns Http Conflict
   * If the account doesn't exist, returns Http Not Found
   */
  login(username: string, password: string): Observable<Account> {
    const url = `${this._apiURL}/login?username=${username}&password=${password}`;
    return this._http.get<Account>(url).pipe(
      tap(_ => console.log(`${username} logged in`)), catchError(this.handleError<Account>('login')));
  }

  /**
   * Saves any changes made to the account when logging out to the database
   * @param account The account with the updated information to save to the database.
   * @returns http ok when saved, if there was an error it returns an http conflict
   */
  logout(account: Account): Observable<any> {
    return this._http.put(this._apiURL, account, this._httpOptions).pipe(
      tap(_ => console.log(`${account.username} logged out`)), catchError(this.handleError<any>('logout')));
  }

  /**
   * Gets account of the specified ID
   * 
   * @param id The ID of the account you want to get.
   * @returns The account with the matching ID
   */
  getAccount(id: number): Observable<Account> {
    const url = `${this._apiURL}/${id}`;
    return this._http.get<Account>(url).pipe(
      tap(_ => console.log(`got account ${id}`)), catchError(this.handleError<any>('get account'))
    );
  }

  /**
   * Gets all accounts
   * 
   * @returns An array of all account
   */
  getAccounts(): Observable<Account[]> {
    const url = `${this._apiURL}/`;
    return this._http.get<Account[]>(url).pipe(
      tap(_ => console.log(`got accounts`)), catchError(this.handleError<any>('get accounts'))
    );
  }

  /**
   * Updates an account
   * 
   * @param account The account being updated
   * @returns The response from the endpoint
   */
  updateAccount(account: Account): Observable<HttpResponse<Account>> {
    const url = `${this._apiURL}/updateaccount`;

    return this._http.put<HttpResponse<any>>(url, account, { observe: 'response', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(tap(_ => console.log(`Updated account`)),
        catchError(this.handleError<HttpResponse<any>>('updateAccount', true)));
  }


  /**
   * Creates the account and stores it in the database
   * 
   * @param account The account we want to create
   * @returns The newly created account in the database
   */
  createUser(account: Account): Observable<Account> {
    const url = `${this._apiURL}/accounts`;
    return this._http.post<HttpResponse<Account>>(url, account, this._httpOptions).pipe(
      tap(_ => console.log(`created account ${account}`)), catchError(this.handleError<HttpResponse<any>>('create account', true))
    );
  }

  /**
  * Handle http operations that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param shouldReturnError whether the error should be returned and not logged
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', shouldReturnError: boolean = false, result?: T,): any {
    return (error: any): Observable<T> => {
      if (shouldReturnError) return of(error as T);
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
