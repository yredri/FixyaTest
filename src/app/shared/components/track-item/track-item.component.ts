import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../models/track.model';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() track: Track;

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    console.log(this.track)
  }

  onAddTrack(track: Track){
    this.trackService.addTrackToList(track);
  }

}
