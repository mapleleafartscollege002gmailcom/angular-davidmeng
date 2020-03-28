
import { HomeComponent } from '../home/quizapp.homecomponent';
export const MainRoutes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
    
];