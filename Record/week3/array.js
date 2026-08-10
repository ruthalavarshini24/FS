let numbers = [12, 45, 7, 89, 34];
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let result = findLargest(numbers);

console.log("Array Elements:", numbers);
console.log("Largest Element:", result);


