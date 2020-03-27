
import { HomeComponent } from './home/quizapp.homecomponent';
export const MainRoutes = [
    { path: 'home', component: homecomponent },
    { path: 'ques1', 
    loadChildren: '../ques1/quizapp.ques1component#Ques1Module' },
    { path: 'ques2', 
    loadChildren: '../ques2/quizapp.ques2component#Ques1Module' },
    { path: '', component: HomeComponent }
    
];