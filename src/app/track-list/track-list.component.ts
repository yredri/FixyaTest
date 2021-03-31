import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Track } from '../shared/models/track.model';
import { TrackService } from '../shared/services/track.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit, OnDestroy{
  displayedColumns  = ['img', 'name', 'artist', 'actions']
  dataSource = new MatTableDataSource<Track>() ;
  private listSubscription: Subscription;

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.listSubscription = this.trackService.userTracks.subscribe((tracks: Track[]) => {
      this.dataSource.data = tracks;
    });

    this.dataSource.data = this.trackService.getUserTrackList();
  }

  onDeleteTrack(track: Track){
    this.trackService.removeTrack(track);
  }

  ngOnDestroy(){
    //this.listSubscription.unsubscribe();
  }
}
