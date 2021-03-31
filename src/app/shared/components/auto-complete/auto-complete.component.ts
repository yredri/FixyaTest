import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Track } from '../../models/track.model';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  myControl = new FormControl();
  options: Track[] = [];
  filteredOptions: Observable<Track[]>;
  tracksSubscription: Subscription;

  constructor(private trackService: TrackService) { }

  ngOnInit(){
 
  }

  onKeypressEvent(event: any){
    let query = event.target.value;
    if(query.length > 0){
      const filterValue = query.toLowerCase();

      this.trackService.fetchTracks(filterValue);
  
      this.tracksSubscription = this.trackService.tracksChanged.subscribe(tracks => {
        console.log(tracks);
        this.options = tracks;
      });
    }
    else{
      this.trackService.reset();
    }
  }

  ngOnDestroy(){
    if(this.tracksSubscription){
      this.tracksSubscription.unsubscribe();
    }
  }
}
