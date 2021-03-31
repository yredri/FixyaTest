import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { TrackService } from './shared/services/track.service';

import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './shared/components/auto-complete/auto-complete.component';
import { TrackItemComponent } from './shared/components/track-item/track-item.component';
import { TrackListComponent } from './track-list/track-list.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    TrackItemComponent,
    TrackListComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
