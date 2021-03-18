import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as interfaces from 'src/app/interfaces';

import { TEAMS } from 'src/mocks/mock-teams';

@Injectable({
    providedIn: 'root'
})
export class TeamsService {
    getTeams(): Observable<interfaces.Team[]> {
        const teams = of(TEAMS);

        return teams;
    }

    getTeam(id: number): Observable<interfaces.Team> {
        const team = of(TEAMS.find(
            team => team.id === id
        ));

        return team;
    }

    addTeamMember(id: number, memberName: string): void {
        TEAMS.find(
            team => team.id === id
        ).members.push(memberName);
    }
}
