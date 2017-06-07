/* eslint import/no-extraneous-dependencies: "off" */
/* eslint no-console: "off" */
/* eslint no-plusplus: "off" */


const benchmark = require('benchmark');

const encoder = require('../');

const fixtures = new Array(10000);
for (let i = 0; i < fixtures.length; ++i) {
  const source = Math.round(Math.random() * 65536);
  fixtures[i] = {
    source,
    string: encoder.encode(String(source)),
  };
}

let fixtureIndex = 0;
const resetFixtureIndex = () => {
  fixtureIndex = 0;
};
const getNextFixture = () => {
  const fixture = fixtures[fixtureIndex];
  fixtureIndex += 1;
  if (fixtureIndex === fixtures.length) {
    fixtureIndex = 0;
  }
  return fixture;
};

benchmark.options.minTime = 1;

const benchOptions = {
  onStart: () => {
    console.log('--------------------------------------------------');
  },
  onCycle: (event) => {
    console.log(String(event.target));
  },
  onError: (event) => {
    console.error(event.target.error);
  },
  onComplete: () => {
    console.log('==================================================');
  },
};
new benchmark.Suite(benchOptions)
  .add('encode', () => {
    const fixture = getNextFixture();
    encoder.encode(fixture.source);
  }, {
    onStart: resetFixtureIndex,
    onCycle: resetFixtureIndex,
  })
  .add('decode', () => {
    const fixture = getNextFixture();
    encoder.decode(fixture.string);
  }, {
    onStart: resetFixtureIndex,
    onCycle: resetFixtureIndex,
  })
  .run();
