
import { HomeComponent } from '../home/quizapp.homecomponent';
export const MainRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'ques1', 
    loadChildren: '../ques1/quizapp.ques1component#Ques1Module' },
    { path: 'ques2', 
    loadChildren: '../ques2/quizapp.ques2component#Ques2Module' },
    { path: '', component: HomeComponent }
    
];