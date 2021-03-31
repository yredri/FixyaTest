import { Subject } from 'rxjs';
import { Track } from "../models/track.model";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrackService{
    baseUrl = "http://ws.audioscrobbler.com/2.0/?method=track.search"
    APIKey =  "0604d2c5492dc743997cabe3fd636099";
    Secret: "a601a679daed13ef7f5f38b5ac610539";

    tracksChanged = new Subject<Track[]>();
    userTracks = new Subject<Track[]>();
    private availableTracks: Track[]; 
    private userTrackList: Track[] = []; 


    constructor(private http: HttpClient) { }

    fetchTracks(searchQuery: string): any{
        console.log(searchQuery);
        this.http.get(this.baseUrl + '&track=' + searchQuery +'&api_key=' + this.APIKey + '&format=json').pipe(
            map((response: any) => {
                return response.results.trackmatches.track.map(tr => {
                    let track: Track = {
                        name: tr.name,
                        artist: tr.artist,
                        url: tr.url,
                        steamable: tr.steamable,
                        listeners: tr.listeners,
                        image: tr.image[0].text,
                        mbid: tr.mbid
                    };
                    return track;
                })
            })
        )
        .subscribe( (tracks: Track[]) => {
            this.availableTracks = tracks;
            this.tracksChanged.next([...this.availableTracks]);
            return [...this.availableTracks];
        })
    }

    getUserTrackList(){
        return this.userTrackList.slice();
    }

    addTrackToList(track: Track){
        this.userTrackList.push(track);
        this.userTracks.next([...this.userTrackList]);
    }

    removeTrack(track: Track){
        this.userTrackList = this.userTrackList.filter(x => {
            return x.name != track.name;
        });
        this.userTracks.next([...this.userTrackList]);
    }

    reset(){
        this.availableTracks = [];
        this.tracksChanged.next([...this.availableTracks]);
    }
}