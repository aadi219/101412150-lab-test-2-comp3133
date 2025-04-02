import { Component, OnInit } from '@angular/core';
import Mission from '../../types/Mission';
import { HttpMissionClientService } from '../shared/http-mission-client.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from "@angular/material/list";
import { MissionFilterComponent } from "../mission-filter/mission-filter.component";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MissionFilterComponent,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent implements OnInit {

  missions: Mission[] = [];

  constructor(
    private missionClient: HttpMissionClientService
  ) { }

  ngOnInit(): void {
    this.loadMissions()
  }

  loadMissions(): void {
    this.missionClient.getMissionList()
      .subscribe(response => {
        console.log(response);
        this.missions = response;
      })
  }

  onFilterChange(launchYear: string): void {
    if (launchYear) {
      this.missionClient.getFilteredMission(launchYear)
        .subscribe(response => {
          this.missions = response;
        });
    }
    else {
      this.loadMissions()
    }
  }
}
