import { Component, OnInit } from '@angular/core';
import Mission from '../../types/Mission';
import { HttpMissionClientService } from '../shared/http-mission-client.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-details',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent implements OnInit {

  mission: Mission | null = null

  constructor(
    private missionClient: HttpMissionClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id'))
    ).subscribe(id => {
      if (id) {
        console.log(`Extracted ID from URL: ${id}`);
        this.getMissionDetails(parseInt(id));
      }
    });
  }

  getMissionDetails(id: number) {
    this.missionClient.getMissionDetails(id)
      .subscribe(response => {
        console.log(response);
        this.mission = response[0];
      });
  }


}
