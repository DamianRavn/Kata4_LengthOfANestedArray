function NestedArrayLength(arrayToCount)
{
    let count = 0;
    for (let i = 0; i < arrayToCount.length; i++) 
    {
        const element = arrayToCount[i];
        count += !Array.isArray(element) ? 1 : NestedArrayLength(element);
    }
    return count;
}

console.log(NestedArrayLength([1, [2, 3]]));
console.log(NestedArrayLength([1, [2, [3, 4]]]));
console.log(NestedArrayLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(NestedArrayLength([1, [2], 1, [2], 1]));