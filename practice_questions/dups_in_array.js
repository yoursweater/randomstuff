var findDuplicates = function(nums) {
  let existing = []
  let duplicates = []
  
  for (let i = 0; i < nums.length; i++) {
      if (existing.indexOf(nums[i]) === -1) {
          existing.push(nums[i])
      } else {
          duplicates.push(nums[i])
      }
  }
  console.log(new Set(duplicates))
  let dups = new Set(duplicates)
  console.log(Array.from(dups))
  return Array.from(dups)
  
};

// findDuplicates([4,3,2,7,8,2,3,1])

