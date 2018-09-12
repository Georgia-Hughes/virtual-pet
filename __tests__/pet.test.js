const Unicorn = require('../src/pet');

let pet = null;

beforeEach(() => {
 pet = new Unicorn('Jerry');
});

describe('constructor', () => {
 it('returns an object', () => {
  expect(pet.name).toEqual('Jerry');
 });
});

describe('constructor', () => {
 it('has initial age of 0', () => {
  expect(pet.age).toEqual(0);
 });
});

describe('growUp', () => {
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
 it('increases exercise by 4', () => {
  pet.fitness = 9;
  pet.walk();
  expect(pet.fitness).toEqual(10);
 });
});

describe('feed', () => {
 it('decrease hunger by 3', () => {
  pet.hunger = 4;
  pet.feed();
  expect(pet.hunger).toEqual(1);
 });
});

describe('check up', () => {
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
