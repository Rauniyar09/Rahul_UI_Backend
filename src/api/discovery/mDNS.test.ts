import { expect } from 'chai';
import { mDNSSearch } from './mDNS';

describe('mDNS', function () {

  this.timeout(40 * 1000);

  let mdns: mDNSSearch;

  beforeEach(() => {
    mdns = new mDNSSearch();
  });

  afterEach(() => {
    if (mdns) {
      mdns.finished();
    }
  })

  it('should discover a bridge on the network', async () => {
    // const results = await mdns.search(15 * 1000);
    const results = await mdns.search();

    expect(results).to.be.instanceOf(Array);
    expect(results).to.have.length.greaterThan(0);
    expect(results[0]).to.have.property('id');
    expect(results[0]).to.have.property('internalipaddress');
  });
});