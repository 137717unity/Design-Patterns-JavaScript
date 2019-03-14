const ABSTRACT_FACTORY = {
  id: 'abstract_factory',
  name: 'Abstract Factory',
  type: 'creational',
  hint: 'Creates an instance of several families of classes',
  description: `Rather than building a concrete object, it’s building a family of
    related or dependent objects without specifying concrete class.`,
  use: `system should be independent of how what it is producing is structured or represented`,
  codeES5: `function droidProducer(kind) {
  if (kind === 'battle') return battleDroidPattern;
  return pilotDroidPattern;
}

function battleDroidPattern() {
  return new B1();
}

function pilotDroidPattern() {
  return new Rx24();
}

function B1() {}
  B1.prototype.info = function() {
  return 'B1, Battle Droid';
};

function Rx24() {}
  Rx24.prototype.info = function() {
  return 'Rx24, Pilot Droid';
};

module.exports = droidProducer;`,
  codeES6: `function droidProducer(kind) {
  if (kind === 'battle') return battleDroidPattern;
  return pilotDroidPattern;
}

function battleDroidPattern() {
  return new B1();
}

function pilotDroidPattern() {
  return new Rx24();
}

class B1 {
  info() {
    return 'B1, Battle Droid';
  }
}

class Rx24 {
  info() {
    return 'Rx24, Pilot Droid';
  }
}

export default droidProducer;`
};

export default ABSTRACT_FACTORY;
