var sortPeople = function(names, heights) {
    const map ={};
    heights.forEach((height, index) =>{
        map[height] = names[index];
    })
    return Object.values(map).reverse();

    // return names.map((name,index) => [name, heights[index]]).sort((a,b) => b[1] - a[1]).map((pair) => pair[0]);
};

console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))