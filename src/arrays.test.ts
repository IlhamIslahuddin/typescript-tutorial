import {
  getNames,
  getPeopleAbove30,
  findFirstAbove30,
  getIsSomeAdults,
  getIsAllAdults,
  getPersons1to3,
  sortByAge,
} from "./arrays";
import { people } from "./data/people";
import Person from "./data/people/types";

class PersonInstance {
  name: string;
  age: number;
  city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

describe("getNames", () => {
  test("should return an array of strings", () => {
    expect(getNames(people)).toBeInstanceOf(Array<string>);
  });
  test("should return an array of names", () => {
    expect(getNames(people)).toEqual(people.map((person) => person.name));
  });
  test("should return an array of names with the same length as the input array", () => {
    expect(getNames(people)).toHaveLength(20);
  });
});

describe("getPeopleAbove30", () => {
  test("should return an array of Person", () => {
    expect(getPeopleAbove30(people)).toBeInstanceOf(Array<Person>);
  });
  test("should return an array of Person objects whose age is greater than 30", () => {
    expect(getPeopleAbove30(people)).toEqual(
      people.filter((person) => person.age > 30)
    );
  });
});

describe("findFirstAbove30", () => {
  test("should return a Person object", () => {
    expect(findFirstAbove30(people)).toBeInstanceOf(Object);
  });
  test("should return the first Person object whose age is greater than 30 and city is 'Kuala Lumpur'", () => {
    expect(findFirstAbove30(people)).toEqual(
      people.find((person) => person.age > 30 && person.city === "Kuala Lumpur")
    );
  });
});

describe("getIsSomeAdults", () => {
  test("should return a boolean value", () => {
    expect(getIsSomeAdults(people)).toBeTruthy();
  });
  test("should return true if there is at least one Person object whose age is greater than or equal to 18", () => {
    expect(getIsSomeAdults(people)).toEqual(
      people.some((person) => person.age >= 18)
    );
  });
});

describe("getIsAllAdults", () => {
  test("should return a boolean value", () => {
    expect(getIsAllAdults(people)).toBeFalsy();
  });
  test("should return true if all Person objects have an age greater than 30", () => {
    expect(getIsAllAdults(people)).toEqual(
      people.every((person) => person.age > 30)
    );
  });
});

describe("getPersons1to3", () => {
  test("should return an array of Person", () => {
    expect(getPersons1to3(people)).toBeInstanceOf(Array<Person>);
  });
  test("should return an array of Person objects with the first 3 elements", () => {
    expect(getPersons1to3(people)).toEqual(people.slice(0, 3));
  });
});

describe("sortByAge", () => {
  test("should return an array of Person", () => {
    expect(sortByAge(people)).toBeInstanceOf(Array<Person>);
  });
  test("should return an array of Person objects sorted by age in ascending order", () => {
    expect(sortByAge(people)).toEqual(people.sort((a, b) => a.age - b.age));
  });
});
