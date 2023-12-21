var matrixReshape = function(mat, r, c) {
    let m = mat.length, n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }
    let reshaped = Array.from({ length: r }, () => Array(c).fill(0));
    for (let i = 0; i < m * n; i++) {
        reshaped[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
    }
    return reshaped;
};