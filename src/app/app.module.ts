import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeInTwoComponent } from './Pages/home/home-in-two/home-in-two.component';
import { HomeInOneComponent } from './Pages/home/home-in-one/home-in-one.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ErrorComponent } from './Pages/error/error.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { SpasiboComponent } from './Pages/spasibo/spasibo.component';
import { AdresDostavkiComponent } from './Pages/adres-dostavki/adres-dostavki.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeInTwoComponent,
    HomeInOneComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    KontaktComponent,
    SpasiboComponent,
    AdresDostavkiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
