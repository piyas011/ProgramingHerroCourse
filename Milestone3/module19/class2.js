// Problem : Assignment life (Closures);

const createLifeCounter = () => {
  let lives = 3;

  return () => {
    if (lives > 0) {
      lives--;
    }
    console.log(lives);
    return lives;
  };
};

const rohimLifeUpdate = createLifeCounter();
const korimLifeUpdate = createLifeCounter();
const jamirLifeUpdate = createLifeCounter();

console.log(rohimLifeUpdate());
console.log(korimLifeUpdate());
console.log(jamirLifeUpdate());
console.log(jamirLifeUpdate());
console.log(jamirLifeUpdate());
