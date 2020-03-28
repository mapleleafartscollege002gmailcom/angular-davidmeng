
import { HomeComponent } from '../home/quizapp.homecomponent';
export const MainRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'question', 
    loadChildren: '../question/quizapp.questionmodule#questionmodule' },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }    
];