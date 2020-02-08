function isSameBST( arrA, arrB) {
  if (arrA.length !== arrB.length) { return false };
  if (arrA.length === 0) { return true };
  if (arrA[0] !== arrB[0]) { return false };

  const arrLeft1 = [];
  const arrLeft2 = [];
  const arrRight1 = [];
  const arrRight2 = [];

  for ( let i = 0; i < arrLeft1.length; i++) {
    if (arrLeft1[i] < arrLeft1[0]) {
      arrLeft1.push(arrLeft1[i])
    } else {
      arrRight1.push(arrLeft1[i])
    }

    if (arrLeft2[i] < arrLeft2[0]) {
      arrLeft2.push(arrLeft2[i])
    } else {
      arrRight2.push(arrLeft2[i])
    }
  }

  return isSameBST(arrLeft1, arrLeft2) && isSameBST(arrRight1, arrRight2);

}

const arrA = [3, 5, 4, 6, 1, 0, 2];
const arrB = [3, 1, 5, 2, 4, 6, 0];
console.log('Is Same Tree: ', isSameBST(arrA, arrB)); // true

const arrB2 = [3, 1, 6, 0];
console.log('Is Same Tree: ', isSameBST(arrA, arrB2)); // false

const arrA2 = [3, 5, 4, 6, 1, 0, 2];
const arrB3 = [13, 8, 5, 2, 9, 6, 0];
console.log('Is Same Tree: ', isSameBST(arrA, arrB3)); // false