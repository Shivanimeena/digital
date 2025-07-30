

import { Routes } from '@angular/router';
import { Front } from './front/front';
import { Marketing} from './marketing/marketing'
import { Technology } from './technology/technology';
import { Aboutus } from './aboutus/aboutus';




export const routes: Routes = [
  { path: '', component: Front },
 {path: 'market' , component: Marketing},
 {path: 'technology' , component : Technology},
 {path : 'about' , component : Aboutus}


];
