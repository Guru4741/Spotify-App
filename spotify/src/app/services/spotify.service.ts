import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  
  private searchUrl : string; 
  private artistUrl : string;
  private albumsUrl : string;
  private albumUrl : string;
  private access_token = '<Spotify Access Token Here>';
  
  constructor(private _http : Http) { }

  searchMusic(str: string, type ='artist'){  

    
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.access_token, 'Content-Type': 'application/x-www-form-urlencoded' });
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';

    return this._http
      .get(this.searchUrl, { headers })
      .map(res => res.json());
		}

	getArtist(id : string){
		
    	const headers = new Headers({ 'Authorization': 'Bearer ' + this.access_token, 'Content-Type': 'application/x-www-form-urlencoded' });
    	this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;

        return this._http
      		.get(this.artistUrl, { headers })
      		.map(res => res.json());	
	}	

	getAlbums(artistId : string){

    	const headers = new Headers({ 'Authorization': 'Bearer ' + this.access_token, 'Content-Type': 'application/x-www-form-urlencoded' });
    	this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';

        return this._http
      		.get(this.albumsUrl, { headers })
      		.map(res => res.json());	
	}	

	getAlbum(id : string){

    	const headers = new Headers({ 'Authorization': 'Bearer ' + this.access_token, 'Content-Type': 'application/x-www-form-urlencoded' });
    	this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;

        return this._http
      		.get(this.albumUrl, { headers })
      		.map(res => res.json());	
	}	
}
