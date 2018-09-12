const Unicorn = require('../src/pet');

let pet = null;

beforeEach(() => {
 pet = new Unicorn('Jerry');
});

describe('namePet', () => {
 it('gives the unicorn a name', () => {
  expect(pet.name).toEqual('Jerry');
 });
});

describe('growUp', () => {
 it('has initial age of 0', () => {
  expect(pet.age).toEqual(0);
 });
 it('increase the age by 1', () => {
  pet.growUp();
  expect(pet.age).toEqual(1);
 });
 it('decreases fitness by 3', () => {
  pet.growUp();
  expect(pet.fitness).toEqual(7);
 });
});

describe('walk', () => {
 it('has initial fitness of 10', () => {
  expect(pet.fitness).toEqual(10);
 });
 it('increases exercise by 4', () => {
  pet.fitness = 9;
  pet.walk();
  expect(pet.fitness).toEqual(10);
 });
});

describe('feed', () => {
 it('initial hunger of 0', () => {
  expect(pet.hunger).toEqual(0);
 });
 it('decrease hunger by 3', () => {
  pet.hunger = 4;
  pet.feed();
  expect(pet.hunger).toEqual(1);
 });
});

describe('checkUp', () => {
 it('checks if my unicorn needs a walk and food', () => {
  pet.fitness = 2;
  pet.hunger = 6;
  expect(pet.checkUp()).toEqual('I am hungry and I need a walk');
 });
 it('checks if my unicorn needs a walk', () => {
  pet.fitness = 3;
  expect(pet.checkUp()).toEqual('I need a walk');
 });
 it('checks if my unicorn is hungry', () => {
  pet.hunger = 5;
  expect(pet.checkUp()).toEqual('I am hungry');
 });
 it('checks if my unicorn is ok', () => {
  expect(pet.checkUp()).toEqual('I feel great!');
 });
});

describe('isAlive', () => {
 it('checks if my unicorn is alive', () => {
  pet.fitness = 1;
  pet.hunger = 9;
  pet.age = 21;
  expect(pet.isAlive()).toEqual(true);
 });
 it('checks if my unicorn is dead', () => {
  pet.fitness = 0;
  pet.hunger = 10;
  pet.age = 30;
  expect(pet.isAlive()).toEqual(false);
 });
 it('checks if my unicorn is still dead', () => {
  pet.fitness = 1;
  pet.hunger = 6;
  pet.age = 35;
  expect(pet.isAlive()).toEqual(false);
 });
})