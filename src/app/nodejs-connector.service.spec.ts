import { TestBed } from '@angular/core/testing';

import { NodejsConnectorService } from './nodejs-connector.service';

describe('NodejsConnectorService', () => {
  let service: NodejsConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodejsConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
