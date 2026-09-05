// Recherche Dichotomique

function dichotomique(arr, num) {
  let right = 0;
  let left = arr.length - 1;
  while (right <= left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === num) {
      console.log("found");
      return arr[mid];
    } else if (arr[mid] < num) {
      right = mid + 1;
    } else {
      left = mid - 1;
    }
  }
  console.log("not found");
}

// ///////////////////////////
// function linearSearch(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return arr[i];
//     }
//   }
//   return undefined;
// }

// // ==========================================
// // SETUP THE EXPERIMENT
// // ==========================================

// // Create a long array with 10 million sorted items!
// console.log("Generating a sorted array with 10,000,000 elements...");
// const largeArray = Array.from({ length: 10000000 }, (_, i) => i);

// // We look for the absolute last item to force worst-case performance
// const target = 9999999;

// console.log(`\nSearching for the number ${target.toLocaleString()}...\n`);

// // --- Test 1: Linear Search ---
// console.time("⏱️ Linear Search Time");
// linearSearch(largeArray, target);
// console.timeEnd("⏱️ Linear Search Time");

// // --- Test 2: Binary Search (Your Code) ---
// console.time("⚡ Binary Search Time");
// dichotomique(largeArray, target);
// console.timeEnd("⚡ Binary Search Time");
