import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as components from 'src/app/components'; 

const routes: Routes = [
    {path: '', component: components.GuessPanelComponent },
    {path: 'guess/:id', component: components.GuessComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule {}
