



var findTarget = function(root, k) {
    let set = new Set();

    function dfs(node) {
        if (node === null) {
            return false;
        }
        if (set.has(k - node.val)) {
            return true;
        }
        set.add(node.val);
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};