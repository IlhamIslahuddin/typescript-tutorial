import { people } from "./data/people";
import {
  getNames,
  getPeopleAbove30,
  findFirstAbove30,
  getIsSomeAdults,
  getIsAllAdults,
  getPersons1to3,
  sortByAge,
} from "./arrays";

function main() {
  console.log(".map() method \n");
  console.log(getNames(people));

  console.log("\n.filter() method \n");
  console.log(getPeopleAbove30(people));

  console.log("\n.find() method \n");
  console.log(findFirstAbove30(people));

  console.log("\n.some() method \n");
  console.log(getIsSomeAdults(people));

  console.log("\n.every() method \n");
  console.log(getIsAllAdults(people));

  console.log("\n.slice() method \n");
  console.log(getPersons1to3(people));

  console.log("\n.sort() method \n");
  console.log(sortByAge(people));
}

main();
