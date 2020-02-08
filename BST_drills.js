const BinarySearchTree = require('./BST');

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(BST);

  const BST2 = new BinarySearchTree();
  BST2.insert('E');
  BST2.insert('A');
  BST2.insert('S');
  BST2.insert('Y');
  BST2.insert('Q');
  BST2.insert('U');
  BST2.insert('E');
  BST2.insert('S');
  BST2.insert('T');
  BST2.insert('I');
  BST2.insert('O');
  BST2.insert('N');
  console.log(BST2);
}

main();

// What does this program do?
// Finds the sums of all values in the tree
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

const BST = new BinarySearchTree();
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);
console.log('What does program do? ' + tree(BST));  //37


// Find the height of a BST
// If tree is empty then return 0
// Else
//    a. Get the max depth of the left subtree recursively
//    b. Get the max depth of the right subtree recursively
//    c. Get the max of max depth of left and right subtrees and add 1 to it for the current node

function getMaxDepth(tree) {
  if (tree === null) {
    return 0;
  }

  let lDepth = getMaxDepth(tree.left);
  let rDepth = getMaxDepth(tree.right);

  if (lDepth > rDepth) {
    return (lDepth + 1);
  } else {
    return rDepth + 1;
  };
  ;
}

console.log('The max depth is: ' + getMaxDepth(BST)); // 5


// Check if a tree if a Binary Search Tree
//   a. Check if left side is less than parent
//   b. Check if right side is greater than parent

class BinarySearchTreeChk {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let one = new BinarySearchTreeChk(1);
let two = new BinarySearchTreeChk(2);
let three = new BinarySearchTreeChk(3);
let four = new BinarySearchTreeChk(4);
let five = new BinarySearchTreeChk(5);
let six = new BinarySearchTreeChk(6);
let seven = new BinarySearchTreeChk(7);

four.left = two;
four.right = six;

two.left = one;
two.right = three;

six.left = five;
six.right = seven;

const validate = (node, min = null, max = null) => {
  if (max !== null && node.value > max) {
    return false;
  }
  if (min !== null && node.value < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.value)) {
    // if node.left exists and calling validate with node.left, min, and the value of the current node returns false then something went wrong and we return false
    return false;
  }
  if (node.right && !validate(node.right, node.value, max)) {
    return false
  }

  return true;
}
console.log('Is BST? ' + validate(four)); //true
six.right = five;
console.log('Is BST? ' + validate(four)); //false



// Third largest node?
function thirdLargest(tree) {
  let thirdLargestNode;
  if (tree.right) {
    thirdLargestNode = thirdLargest(tree.right);
  }
  if (!tree.right && tree.left) {
    if (tree.left.right) {
      thirdLargestNode = tree.left.value;
    } else {
      thirdLargestNode = tree.parent.value;
    }
  }
  if (!tree.right && !tree.left) {
    if (tree.parent.left) {
      if (tree.parent.left.right) {
        thirdLargestNode = tree.parent.left.right.value;
      } else {
        thirdLargestNode = tree.parent.left.value;
      }
    } else {
      thirdLargestNode = tree.parent.parent.value;
    }
  }
  return thirdLargestNode;
}

console.log('Third Largest: ' + thirdLargest(BST));


// Is BST balanced?  a tree where no 2 leaves differ in distance from the root ny more than 1
function isBalanced(tree) {
  if (tree === null) {
    return true;
  }

  if (getHeight(tree) === -1) {
    return false;
  } else {
    return isBalanced(tree.left) && isBalanced(tree.right);
  }
}

function getHeight(tree) {
  if (tree === null) {
    return 0;
  }

  let lDepth = getHeight(tree.left);
  let rDepth = getHeight(tree.right);
  let heightDifference = lDepth - rDepth;

  if (Math.abs(heightDifference) > 1) {
    return -1;
  } else {
    return Math.max(lDepth, rDepth) + 1;
  };
  ;
}


var BSTChk = new BinarySearchTree();
BSTChk.insert(8);
BSTChk.insert(3);
BSTChk.insert(10);
BSTChk.insert(1);
BSTChk.insert(6);
BSTChk.insert(14);
BSTChk.insert(4);
BSTChk.insert(7);

// Find if the given tree is balanced or not
console.log('Is Balanced? ' + isBalanced(BSTChk)); // true

BSTChk.insert(13);
console.log('Is Balanced? ' + isBalanced(BSTChk)); // false