import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { user } from 'src/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) { }
  addUser(user:user):Observable<user>{
    return this.http.post<user>('http://localhost:4000/user',user)
    

  }

   getUsers(): Observable<user[]>{
    return this.http.get<user[]>('http://localhost:4000/user')

   }
   getUserTableLength(): Observable<number> {
    return this.getUsers().pipe(
      map(user => user.length),
      catchError(error => {
        console.error('Error retrieving user data:', error);
        return of(0); // Return 0 if an error occurs while retrieving user data
      })
    );
   }
  
  // addEmail(email : string):Observable<string>{
  //   return this.http.post<string>('http://localhost:4000/emails',email)
  // }
  // getEmails():Observable<string[]>{
  //   return this.http.get<string[]>('http://localhost:4000/emails')
  // }
  
}
