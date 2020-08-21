import { Component, OnInit } from '@angular/core';
import { NodejsConnectorService } from '../nodejs-connector.service';
import { ISite } from '../isite';
import { IPingResult } from '../iping-result';

@Component({
  selector: 'app-ping-results',
  templateUrl: './ping-results.component.html',
  styleUrls: ['./ping-results.component.scss']
})
export class PingResultsComponent implements OnInit {

  pingResults: IPingResult[];
  sites: ISite[];

  constructor(private _nodejsConnectorService: NodejsConnectorService) { }

  ngOnInit(): void {
    this._nodejsConnectorService.getPingResults().subscribe( (pingResults) => {
      this.pingResults = pingResults;
    });

    this._nodejsConnectorService.getSites().subscribe( (sites) => {
      this.sites = sites;
    });
  }

  // Return the nb last pingResults of a site
  getPingResults( url: string, nb: number ): IPingResult[] {
    if ( this.pingResults ) {

      // Filter pingResults by url, then sort by time, then slice.
      let results = this.pingResults.filter( ( pingResult: IPingResult ) => {
        return pingResult._url === url;
      }).sort( (a, b) => {
        return (a._date > b._date) ? -1 : 1
      }).slice( -nb );

      return results;
    }
  }

  // Return the sites as an Array, splitted (useful for bootstrap grid system)
  getSitesSplitted( size: number ): ISite[] {
    if ( this.sites ) {
      let arr = this.sites;
      let newArr = [];
  
      for(let i = 0; i< arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
      }

      return newArr;
    }
  }

  // Get rgb for time to display as text
  rgb ( response: number, max: number, val: number ): string {
    if (response != 200)
      return "rgb(255,0,0)";
    if (val > max )
      val = max;
    var r = 0; 
    var g = Math.floor ( 255 * (1 - val/max) );
    var b = Math.floor ( 255 * (val/max) ); 
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  
}
