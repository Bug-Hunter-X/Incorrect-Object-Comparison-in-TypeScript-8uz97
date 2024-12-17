# Incorrect Object Comparison in TypeScript

This repository demonstrates a common, yet subtle, bug in TypeScript when comparing objects: the failure to handle objects with the same keys and values but in a different order.

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file provides a corrected version.

## Bug Description

The original code iterates through object keys based on their order of appearance. If two objects have the same keys and values, but in a different order, the comparison incorrectly returns `false`.

## Solution

The solution involves converting object keys into an array, sorting them, and then comparing values for each key, regardless of order.