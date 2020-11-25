"use strict";

var _tad = _interopRequireDefault(require("./tad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tadInstance = new _tad.default();

function main() {
  const name = tadInstance.createUser('Luiz André', 'Nunes da Silva');
  const birthDate = tadInstance.birthDate(10, 10, 1997);
  console.log('Nome:', name, ' Nascido em:', birthDate);
  const age = tadInstance.returnAge(1997);
  console.log('Idade:', age);
}

main();