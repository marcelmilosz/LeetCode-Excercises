var isSymmetric = function (root) {
    if (!root) return true;
    return isSame(root.left, root.right);
};

var isSame = function (leftroot, rightroot) {
    if ((!leftroot && rightroot) || (leftroot && !rightroot) ||
        (leftroot && rightroot && leftroot.val !== rightroot.val)) return false;

    if (leftroot && rightroot) {
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    }

    return true;
};