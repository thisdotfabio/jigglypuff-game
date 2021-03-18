import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as interfaces from 'src/app/interfaces';

import { GUESSES } from 'src/mocks/mock-guesses';

@Injectable({
    providedIn: 'root'
})
export class GuessesService {
    getGuesses(): Observable<interfaces.Guess[]> {
        const guesses = of(GUESSES);

        return guesses;
    }
}
