import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

// To create a new guard: inside guards folder do -> ng g guard <name>
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):
     Observable<boolean | UrlTree>
     | Promise<boolean
     | UrlTree>
     | boolean
     | UrlTree {

    //TODO: Read about pipe and map
    return this.afAuth.user.pipe(map((user) => !!user), tap((isLogin) => {
      if(!isLogin){
        this.router.navigate(['login']);
      }
    }));
  }

}

@Injectable({
  providedIn: 'root'
})
export class AlreadyLoggedGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):
     Observable<boolean | UrlTree>
     | Promise<boolean
     | UrlTree>
     | boolean
     | UrlTree {

    //TODO: Read about pipe and map
    return this.afAuth.user.pipe(map((user) => !user), tap((isNotLogin) => {
      if(!isNotLogin){
        this.router.navigate(['home']);
      }
    }));
  }

}
