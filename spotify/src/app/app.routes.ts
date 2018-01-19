import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Component/search/search.component';
import { AboutComponent } from './Component/about/about.component';
import { ArtistComponent } from './Component/artist/artist.component';
import { AlbumComponent } from './Component/album/album.component';

const Routes : Routes = [
	{ path: '', component : SearchComponent},
	{ path : 'about', component : AboutComponent},
	{ path : 'artist/:id', component : ArtistComponent},
	{ path : 'album/:id', component : AlbumComponent}
];

export const appRouter = RouterModule.forRoot(Routes);
