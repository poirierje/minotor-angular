import { Component, OnInit } from '@angular/core';
import { NodejsConnectorService } from '../nodejs-connector.service';
import { ISite } from '../isite';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites: ISite[];

  constructor(private _nodejsConnectorService: NodejsConnectorService) { }

  ngOnInit(): void {
    this._nodejsConnectorService.getSites().subscribe( (sites) => {
      this.sites = sites;
    });
  }

  // Return the sites as an Array, splitted (useful for bootstrap grid system)
  getSitesSplitted( size: number ):  ISite[] {
    let arr = this.sites;
    let newArr = [];

    for(let i = 0; i< arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }

    return newArr;
  }

}
