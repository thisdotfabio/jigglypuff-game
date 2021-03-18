import { Component, OnInit } from '@angular/core';

import * as interfaces from 'src/app/interfaces';

import * as services from 'src/app/services';

@Component({
    selector: 'app-teams',
    templateUrl: 'teams.component.html',
    styleUrls: [
        'teams.component.scss'
    ]
})
export class TeamsComponent implements OnInit {
    teams: interfaces.Team[] = [];
    selectedTeam?: interfaces.Team;

    constructor(public teamsService: services.TeamsService) {}
    
    ngOnInit() {
        this.teamsService.getTeams()
            .subscribe(teams => this.teams = teams);
    }

    onSelect(team: interfaces.Team) {
        this.teamsService.setSelectedTeam(team);
        this.selectedTeam = team;
    }
}