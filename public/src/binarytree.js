/*global JSAV, jQuery */
(function($) {
    "use strict";
    if (typeof JSAV === "undefined") { return; }

    function setupListeners() {
        // Initialise JSAV and control buttons
        var jsav = new JSAV("av");
        var bt = jsav.ds.binarytree();
        var insertButton = document.getElementById("insert")
        var deleteButton = document.getElementById("remove")
        var userInput = document.getElementById("userInput")

        if (!insertButton || !deleteButton) {
            return;
        }

        // When a user clicks the insert button, inserts a new node into the binary tree
        insertButton.addEventListener("click", () => {
            // Performs sanitation on input, so that all values are integers
            var value = parseInt(userInput.value)
            // Alerts the user if invalid input
            if (isNaN(value)) {
                alert("Invalid input. Integer required")
                return;
            }
            // Either creates a new root node or inserts new value into the existing tree
            if (bt.root().value()) {
                addNode(value, bt.root(), bt)
            } else {
                bt.root(value)
            }
            bt.show()
            // Resets user input
            userInput.value = ""
            // Refresh JSAV layout
            bt.layout()
        })

        // When a user clicks the delete button, deletea the new node from the binary tree
        deleteButton.addEventListener("click", () => {
            // Performs sanitation on input, so that all values are integers
            var value = parseInt(userInput.value)
            // Alerts the user if invalid input
            if (isNaN(value)) {
                alert("Invalid input. Integer required")
            }
            var newRoot = deleteNode(bt.root(), value, bt)
            // Reset root node depending on if the root node is what is being deleted
            if (!newRoot) {
                bt.root().remove()
            } else {
                bt.root(newRoot)
            }
            bt.show()

            // Reset user input
            userInput.value = ""
            // Refresh JSAV layout
            bt.layout()
        })
    }

    // Delete node with value, value and return root node
    function deleteNode(node, value) {
    // base case 
        if (!node) {
            return null
        }

        if (node.value() < value) {
            node.right(deleteNode(node.right(), value))
        } else if (node.value() > value) {
            node.left(deleteNode(node.left(), value))
        } else {
            if (!node.left()) {
                return node.right() ? node.right() : null
            } else if (!node.right()) {
                return node.left() ? node.left() : null
            } else {
                var leftMostChild = findLeftMostChild(node.right())
                node.value(leftMostChild.value())
                node.right(deleteNode(node.right(), node.value()))
            }
        }
        return node
    }


    // Find smallest possible child value of node
    function findLeftMostChild(node) {
        if (!node.left()) {
            return node
        }
        return findLeftMostChild(node.left())
    }


    // Adds value to tree
    function addNode(value, node, tree) {
        //base case
        if (!node) {
            return tree.newNode(value)
        }

        if (value > node.value()) {
            node.right(addNode(value, node.right(), tree))
        } else if (value < node.value()) {
            node.left(addNode(value, node.left(), tree))
        }

        return node
    }

    setupListeners()

    JSAV.ext.addnode = addNode
    JSAV.ext.deletenode = deleteNode
}(jQuery));