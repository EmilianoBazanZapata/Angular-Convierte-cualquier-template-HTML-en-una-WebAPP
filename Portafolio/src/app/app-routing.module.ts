import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './Components/portafolio/portafolio.component';
import { AboutComponent } from './Components/about/about.component';
import { ItemComponent } from './Components/item/item.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DocumentationComponent } from './Components/documentation/documentation.component';

const routes: Routes = [
  //la primer ruta que mostrare sera la del portafolio 
  {path:'home',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'item',component:ItemComponent},
  {path:'documentation',component:DocumentationComponent},
  {path:'**',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
