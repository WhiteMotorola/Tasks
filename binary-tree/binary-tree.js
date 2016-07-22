'use strict';

class BinaryTree {
	constructor() {

		this.root = null;

	}

	insert(data) {

		var value = new Node(data, null, null);
		var parent;

		if (this.root === null) {
			this.root = value;
		} 
		else {
			var curr = this.root;
			while (curr) {
				parent = curr;
				if (value.data > curr.data) {
					curr = curr.right;
				}
				else {
					curr = curr.left;
				}
			}

			if (value.data < parent.data) {
				parent.left = value;
			}
			else {
				parent.right = value;
			}
		}
	}

	contains(data) {

		var curr = this.root;
		while (curr) {
			if (data < curr.data) {
				curr = curr.left;
			} else if (data > curr.data) {
				curr = curr.right;
			} else {
				return true;
			}
		}
		return false;
	}

	remove(data) {
		
		var parent = null;

		function removeNode (deleteNode, node) {
			if (node == null) return null;
			else if (deleteNode.data < node.data) {
				parent = node;
                node.left = removeNode(deleteNode, node.left);
            }
            else if (deleteNode.data > node.data) {
            	parent = node;
                node.right = removeNode(deleteNode, node.right);
            }
            else if (node.left != null && node.right != null) {
            	node.data = theMostLeft(node.right).data;
                node.right = removeNode(node, node.right);
            }
            else if (node.left != null) node = node.left;
            else node = node.right;
            
            return node;
		}

		function theMostLeft(node) {
    		if (node == null)
        		return null;
    		if (node.left != null) {
        		return theMostLeft(node.left);
    		}
    		return node;
		}

    	var d = new Node(data);
        removeNode(d, this.root);
        if (parent == null) this.root = null;
	}


	size() {

		function count(node) {
			if (!node) return 0;
			else return(count(node.left) + count(node.right) + 1);
		}
		return (count(this.root))
	}

	isEmpty() {
		return (this.root == null);
	}

}