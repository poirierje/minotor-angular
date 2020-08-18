import { Component, OnInit } from '@angular/core';
import { NodejsConnectorService } from '../nodejs-connector.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  constructor(private _nodejsConnectorService: NodejsConnectorService) { }

  ngOnInit(): void {
  }

  getSites() {
    console.log(1);
    this._nodejsConnectorService.getSites().subscribe( (sites) => {
      console.log(2);
      return sites;
    });
  }

}