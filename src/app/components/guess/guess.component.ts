import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import * as interfaces from 'src/app/interfaces';

import * as services from 'src/app/services';

@Component({
    selector: 'app-guess',
    templateUrl: 'guess.component.html',
    styleUrls: [
        'guess.component.scss'
    ]
})
export class GuessComponent implements OnInit {
    guess: interfaces.Guess;
    audio: HTMLAudioElement;
    lockClue2: boolean = true;
    lockClue3: boolean = true;
    lockResult: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private guessesService: services.GuessesService
    ) {}

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.guessesService.getGuess(id)
            .subscribe(guess => {
                this.guess = guess;

                this.audio = new Audio();
                this.audio.src = this.guess.baseClue;
                this.audio.load();
            });
    }

    play() {
        this.audio.play();

        setTimeout(() => {
            this.audio.pause();
        }, 3000);
    }

    pause() {
        this.audio.pause();
    }

    goBack() {
        this.location.back();
    }

    resolve() {
        this.lockResult = false;
        this.audio.play();
    }
}