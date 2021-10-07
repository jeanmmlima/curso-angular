import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanActivateChild, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivateChild, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable <boolean> | Promise<boolean>| boolean{
      console.log(route);
      console.log(state);

      //nao vai deixar usuario acessar a rota filha de alunos
    //que é editar!!

    /* aqui tbm poderia injetar um serviço,
    como ir até o servidor e verificar o usuario
    logado tem acesso
    */

    console.log('AuthGuard: Guarda de rota filha!');
    /*if(state.url.includes('editar')){
      //alert('Usuário sem acesso!')
      //return of(false);
    }*/

    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.router.navigate(['/home'])
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean>| boolean{
    console.log('AuthGuardCanLoad! Verificando se usuário pode carregar codigo do módulo');

    return this.verificarAcesso();
  }

}
