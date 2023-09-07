import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { NavigateProgramatacallyComponent } from './navigate-programatacally/navigate-programatacally.component';
import { LapiiComponent } from './lapii/lapii.component';
import { Lapii2Component } from './lapii2/lapii2.component';
//single router outlet
// const routes: Routes = [
//   {path:'newcomponent', children:[
//     {path:'', component:NewcomponentComponent},
//     {path:'laptop',component:LaptopComponent},
//     {path:'mobile',component:MobileComponent}
//   ]}
//   ];

//MULTIPLE ROUTER OUTLET
const routes: Routes = [
  {path:'',redirectTo:'navigate',pathMatch:'full'},
  {path:'navigate',component:NavigateProgramatacallyComponent},

  
  {path:'newcomponent',component:NewcomponentComponent, children:[
    {path:'laptop',component:LaptopComponent,children:[
      {path:'lapii',component:LapiiComponent},
      {path:'lapii2',component:Lapii2Component}
    ]},
    {path:'mobile',component:MobileComponent}
  ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
