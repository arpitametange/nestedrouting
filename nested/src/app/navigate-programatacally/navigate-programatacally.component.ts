import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-programatacally',
  templateUrl: './navigate-programatacally.component.html',
  styleUrls: ['./navigate-programatacally.component.css']
})
export class NavigateProgramatacallyComponent {
constructor(public router:Router){

}
  gotocompoent(){
this.router.navigate(['newcomponent'])
  }
}
