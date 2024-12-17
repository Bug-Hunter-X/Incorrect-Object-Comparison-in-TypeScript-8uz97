function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null && obj2 === null) return true;
  if (obj1 === null || obj2 === null) return false;

  // Convert object keys to arrays, sort them, and then compare
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

console.log(compareObjects(obj1, obj2)); // Outputs true (correct)
