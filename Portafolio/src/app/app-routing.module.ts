import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './Components/portafolio/portafolio.component';
import { AboutComponent } from './Components/about/about.component';
import { ItemComponent } from './Components/item/item.component';
import { BlogComponent } from './Components/blog/blog.component';

const routes: Routes = [
  //la primer ruta que mostrare sera la del portafolio 
  {path:'',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'item',component:ItemComponent},
  {path:'**',redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
