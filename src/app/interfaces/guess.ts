export interface Guess {
    id: number,
    guessName: string,
    played: boolean,
    song: string,
    baseScore: number,
    baseClue: string,
    clue2: string,
    lessScore2: number,
    clue3: string,
    lessScore3: number
}