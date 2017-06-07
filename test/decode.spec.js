const expect = require('chai').expect;
const encoder = require('../');

describe('#decoder', () => {
  it('encoding 3LhmXSzSZVxzU4', () => {
    const encoded = encoder.decode('3LhmXSzSZVxzU4');
    expect(encoded).to.be.a('string');
    expect(encoded).to.equal('1000456987');
  });
  it('decoding 2ct4RSkx84gSGjkNU7sV6XmgP68uqiDu9PPvZ3i', () => {
    const encoded = encoder.decode('2ct4RSkx84gSGjkNU7sV6XmgP68uqiDu9PPvZ3i');
    expect(encoded).to.be.a('string');
    expect(encoded).to.equal('trésorier.enrobage.épicéa');
  });
  it('decoding 4uNTnBJ8dkLcKh6s4TnEQbpmP5jQJa5LepDJUtAMf9QQQHyZfVD6useppK', () => {
    const encoded = encoder.decode('4uNTnBJ8dkLcKh6s4TnEQbpmP5jQJa5LepDJUtAMf9QQQHyZfVD6useppK');
    expect(encoded).to.be.a('string');
    expect(encoded).to.equal('уургаа.хөвгүүд.умартах');
  });
});
