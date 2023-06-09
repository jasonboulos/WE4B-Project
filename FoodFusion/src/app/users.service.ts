import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { user } from 'src/classes/user';
import { map, switchMap, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/user';
  user!:user;
  private currentId = 0;
  public isAdminOn!:boolean 
  constructor(private http: HttpClient ) { }
  // registerUser(user: user): Observable<user> {
  //   return this.http.post<user>('http://localhost:3000/user', user).pipe(
  //     tap((response: user) => {
  //       this.user = response; // Assign the returned user object
  //     })
  //   );
  // }
  registerUser(user: user): Observable<user> {
    user.id = ++this.currentId; // Assign the incremented ID to the user object
    return this.http.post<user>('http://localhost:3000/user', user);
  }

  addUser(user: any): Observable<any> {
    user.id = ++this.currentId;
    return this.http.post<any>('http://localhost:3000/user', user);
  }

  getNumberOfUsers(): Observable<number> {
    return this.http.get<number>('http://localhost:3000/user');
  }


   getUsers(): Observable<user[]>{
    return this.http.get<user[]>('http://localhost:3000/user')

   }
   getUserTableLength(): Observable<number> {
    return this.getUsers().pipe(
      map(user => user.length),
      catchError(error => {
        console.error('Error retrieving user data:', error);
        return of(0); 
      })
    );
   }
  

  
}
