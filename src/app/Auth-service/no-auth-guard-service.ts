import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyauthService } from './authservice';


@Injectable()
export class NotAuthGuardService {

  constructor(public authService: MyauthService, public router: Router) { }

//   canActivate(): boolean {
//     console.log(this.authService.loggedIn())
//     if(this.authService.loggedIn()){
//       this.router.navigate(['/'])
//       return false;
//     }else{
//       return true;
//     }
//   }
// }

}

