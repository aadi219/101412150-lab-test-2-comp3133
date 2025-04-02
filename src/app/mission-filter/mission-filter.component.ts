import { Component, EventEmitter, Output } from '@angular/core';
import { HttpMissionClientService } from '../shared/http-mission-client.service';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mission-filter',
  imports: [MatInputModule, MatIconModule, CommonModule, FormsModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {

  @Output() filterChanged = new EventEmitter<string>();
  launchYearFilter: string = '';

  constructor(
    private missionClient: HttpMissionClientService
  ) { }

  onFilterChange() : void {
    console.log(this.launchYearFilter);
    this.filterChanged.emit(this.launchYearFilter);
  }

}
