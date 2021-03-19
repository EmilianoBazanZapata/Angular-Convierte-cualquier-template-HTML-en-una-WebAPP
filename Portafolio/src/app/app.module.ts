import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { PortafolioComponent } from './Components/portafolio/portafolio.component';
import { AboutComponent } from './Components/about/about.component';
import { ItemComponent } from './Components/item/item.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { DocumentationComponent } from './Components/documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BlogComponent,
    ContactUsComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
