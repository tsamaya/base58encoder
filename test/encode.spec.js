const expect = require('chai').expect;
const encoder = require('../');

describe('#encoder', () => {
  it('encoding 1000456987', () => {
    const encoded = encoder.encode('1000456987');
    expect(encoded).to.be.a('string');
    expect(encoded).to.equal('3LhmXSzSZVxzU4');
  });
  it('encoding trésorier.enrobage.épicéa', () => {
    const encoded = encoder.encode('trésorier.enrobage.épicéa');
    expect(encoded).to.be.a('string');
    expect(encoded).to.equal('2ct4RSkx84gSGjkNU7sV6XmgP68uqiDu9PPvZ3i');
  });
  it('encoding уургаа.хөвгүүд.умартах', () => {
    const encoded = encoder.encode('уургаа.хөвгүүд.умартах');
    expect(encoded).to.be.a('string');
    expect(encoded).to.equal('4uNTnBJ8dkLcKh6s4TnEQbpmP5jQJa5LepDJUtAMf9QQQHyZfVD6useppK');
  });
});
