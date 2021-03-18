import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutesModule } from './app-routes.module';

import * as component from 'src/app/components';

@NgModule({
    declarations: [
        component.RootComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutesModule
    ],
    providers: [],
    bootstrap: [
        component.RootComponent
    ]
})
export class AppModule {}
