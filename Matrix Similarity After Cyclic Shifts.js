var areSimilar = function(mat, k) {
    let initialMat = JSON.parse(JSON.stringify(mat));
    let m = mat.length, n = mat[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < k; j++) {
            if (i % 2 === 0) {
                mat[i].push(mat[i].shift());
            } else {
                mat[i].unshift(mat[i].pop());
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== initialMat[i][j]) {
                return false;
            }
        }
    }

    return true;
};

