import { Routes, RouterModule} from '@angular/router';


import { HeroeComponent  } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';




const app_routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', component: HeroesComponent },
];

export const APP_ROUTES=RouterModule.forRoot(app_routes);