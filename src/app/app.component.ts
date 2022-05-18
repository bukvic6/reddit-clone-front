import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reddit-front';

  constructor(private authService: AuthenticationService,
    private router: Router){

}

ngOnInit() {
}

login():void{
  this.router.navigate(['login']);
}



}
