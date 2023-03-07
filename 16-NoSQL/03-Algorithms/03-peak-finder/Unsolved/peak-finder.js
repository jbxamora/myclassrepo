// const peakFinder = function(nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] < nums[mid + 1]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   return nums[left];
// };


// BEST PRACTICE
function peakFinder(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  if(nums.length < 1) {
    return 0;
  }
  if(nums.length === 1) {
    return nums[0];
  }
  

  while (left < right) {
    let mid = parseInt((left + right) / 2);
    nums[mid] > nums[mid + 1]
      ? (right = mid)
      : (right = mid +1)
  }
  return nums[left];
};