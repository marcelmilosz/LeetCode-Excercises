var inorderTraversal = function (root) {

    let data = [];

    function traverse(root) {
        if (!root) return;
        if (root.left) traverse(root.left);
        data.push(root.val);
        if (root.right) traverse(root.right);
    }

    traverse(root);

    return data;

};