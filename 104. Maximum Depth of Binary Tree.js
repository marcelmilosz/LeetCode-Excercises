var maxDepth = function (root) {

    if (!root) return 0;

    function traverse(root) {

        if (root) {
            level++;
            max = Math.max(max, level);
            traverse(root.left);
            traverse(root.right);
            level--;
        }
    }

    let level = 0;
    let max = 0;

    traverse(root);
    return max
};