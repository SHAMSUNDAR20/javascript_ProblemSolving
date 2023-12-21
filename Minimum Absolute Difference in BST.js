var getMinimumDifference = function(root) {
    let prev = -1;
    let minDiff = Number.MAX_SAFE_INTEGER;

    const inorder = (node) => {
        if (node === null) {
            return;
        }
        inorder(node.left);
        if (prev !== -1) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;
        inorder(node.right);
    };

    inorder(root);
    return minDiff;
};

