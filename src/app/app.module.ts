import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Servicios
import { HeroesService } from './services/heroes.service';

//Pipes
import { KeysPipe } from './pipes/keys.pipe';

//Sistema de rutas
import { APP_ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
