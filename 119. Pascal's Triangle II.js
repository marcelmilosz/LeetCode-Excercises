var getRow = function (rowIndex) {

    let arr = [[1]];

    for (let i = 1; i < rowIndex + 1; i++) {
        arr.push([]);
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) arr[i].push(1);
            else arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j]);
        }
    }

    return arr[rowIndex];
};

console.log(getRow(3));