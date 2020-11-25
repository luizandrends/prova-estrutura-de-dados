import Tad from './tad';

const tadInstance = new Tad();

function main(): void {
  const name = tadInstance.createUser('Luiz André', 'Nunes da Silva');
  const birthDate = tadInstance.birthDate(10, 10, 1997);
  console.log('Nome:', name, ' Nascido em:', birthDate);

  const age = tadInstance.returnAge(1997);
  console.log('Idade:', age);

  const invertName = tadInstance.invertUserName('Luiz André', 'Nunes da Silva');
  console.log('Name:', invertName);
}

main();
