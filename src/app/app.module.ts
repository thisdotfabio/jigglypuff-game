import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RootComponent } from 'src/app/components';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        RootComponent
    ]
})
export class AppModule {}
