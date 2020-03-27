
import { HomeComponent } from '../home/quizapp.homecomponent';
import { ques1component } from '../ques1/quizapp.ques1component';
import { ques2component } from '../ques2/quizapp.ques2component';
export const MainRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'ques1', component: ques1component },
    { path: 'ques2', component: ques2component },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
    
];