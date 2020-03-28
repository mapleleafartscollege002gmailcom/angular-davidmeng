
import { HomeComponent } from '../home/quizapp.homecomponent';
import { questioncomponent } from '../question/quizapp.questioncomponent';
export const MainRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'question', 
    loadChildren: '../question/quizapp.questioncomponent#questionmodule' },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }    
];