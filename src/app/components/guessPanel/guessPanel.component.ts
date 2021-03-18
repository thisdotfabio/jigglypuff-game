import { Component, OnInit } from '@angular/core';

import * as interfaces from 'src/app/interfaces';

import * as services from 'src/app/services';

@Component({
    selector: 'app-guess-panel',
    templateUrl: 'guessPanel.component.html',
    styleUrls: [
        'guessPanel.component.scss'
    ]
})
export class GuessPanelComponent implements OnInit {
    guesses: interfaces.Guess[] = [];

    constructor(public guessesService: services.GuessesService) {}

    ngOnInit() {
        this.guessesService.getGuesses()
            .subscribe(guesses => this.guesses = guesses);
    }
}
