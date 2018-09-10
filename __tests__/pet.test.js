const Unicorn = require('../src/pet');

describe('constructor', () => {
 it('returns an object', () => {
  const pet = new Unicorn('Jerry');
  expect(pet.name).toEqual('Jerry');
 });
});

describe('constructor', () => {
 it('has initial age of 0', () => {
  const pet = new Unicorn('Jerry');
  expect(pet.age).toEqual(0);
 });
});

describe('growUp', () => {
 it('increase the age by 1', () => {
  const pet = new Unicorn('Jerry');
  pet.growUp();
  expect(pet.age).toEqual(1);
 });
 it('increase the hunger by 5', () => {
  const pet = new Unicorn('Jerry');
  pet.feed();
  expect(pet.hunger).toEqual(5);
 });
 it('decreases fitness by 3', () => {
  const pet = new Unicorn('Jerry');
  pet.growUp();
  expect(pet.fitness).toEqual(7);
 });
});

describe('walk', () => {
 it('increases exercise by 4', () => {
  const pet = new Unicorn('Jerry');
  pet.fitness = 9;
  pet.walk();
  expect(pet.fitness).toEqual(10);
 });
});