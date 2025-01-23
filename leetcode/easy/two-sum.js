var twoSum = function(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const compl = target - nums[i];

        console.log("map", map);
        if(map.has(compl)){
            return [map.get(compl), i];
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum([3,2,7,8,9,9,9,9,9,9,4],6))