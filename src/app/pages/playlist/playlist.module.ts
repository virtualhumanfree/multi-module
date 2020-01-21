import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';


@NgModule({
  declarations: [PlaylistComponent, CreatePlaylistComponent, PlaylistDetailsComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
