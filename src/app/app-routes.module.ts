import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as components from 'src/app/components'; 

const routes: Routes = [
    {path: '', component: components.GuessPanelComponent }
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
