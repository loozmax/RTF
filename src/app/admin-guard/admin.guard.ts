import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class AdminGuard implements CanActivate{
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         
        // const login = prompt("Введите логин");
        // const password = prompt("Пароль");

        // return login === "admin" && password === "admin";
        return true;
    }
}