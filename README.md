# Typescript Tutorial

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Tasks](#tasks)

## Introduction

This tutorial will help you to understand the basics of Typescript.

## Installation

Start by cloning the repository and installing the dependencies.

Clone the repository using git:

```bash
git clone git@github.com:muhammadarifftaha/typescript-tutorial.git
```

Navigate to the project directory:

```bash
cd typescript-tutorial
```

Install the dependencies using yarn:

```bash
yarn
```

## Tasks

### Complete the functions in `arrays/index.ts`

The `arrays/index.ts` file contains a number of functions that are incomplete.
The functions cover a range of array operations, specifically useful for working
with arrays of objects.

<strong style="color:red">Important</strong>: You should only modify the
functions and files in the `arrays` folder. Do not modify other files.

The comments in each function describe what the function should do. Your task is
to complete the functions so that they return the expected output.

To run the tests, use the following command:

```bash
yarn test
```

<i>
<strong style="color:red">NOTE</strong>: the <code>arrays.test.ts</code> file contains the tests and possible solutions for the functions in the <code>arrays/index.ts</code> file. Avoid looking at the tests and solutions until you have completed the functions.
</i>

### Code-split the `arrays/index.ts` file.

Once you have completed the functions in `arrays/index.ts`, you can move on to
code-splitting the file. If done correctly, each function in the file should be
independent of each other. Create a new file for each function in the `arrays`
directory.

For example, the `map` function should be moved to a new file called `map.ts` in
the `arrays` directory. The `filter` function should be moved to a new file
called `filter.ts` in the `arrays` directory, and so on. The `index.ts` file
should import and re-export all the functions from the new files. The tests
should still pass after the code-splitting.

#### Before code-splitting

- 📁 arrays
  - 📄 index.ts

#### After code-splitting

- 📁 arrays
  - 📄 index.ts
  - 📄 map.ts
  - 📄 filter.ts
  - 📄 find.ts
  - 📄 forEach.ts
  - 📄 some.ts
  - 📄 every.ts
  - 📄 slice.ts
