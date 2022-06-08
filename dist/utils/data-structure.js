"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructure = void 0;
const binary_tree_1 = require("./data-structures/binary-tree");
const double_linked_list_1 = require("./data-structures/double-linked-list");
const graph_1 = require("./data-structures/graph");
const hash_table_1 = require("./data-structures/hash-table");
const heap_1 = require("./data-structures/heap");
const linked_list_1 = require("./data-structures/linked-list");
const priority_queue_1 = require("./data-structures/priority-queue");
const queue_1 = require("./data-structures/queue");
const red_black_tree_1 = require("./data-structures/red-black-tree");
const splay_tree_1 = require("./data-structures/splay-tree");
const stack_1 = require("./data-structures/stack");
class DataStructure {
    binaryTree() {
        return new binary_tree_1.BinaryTree();
    }
    stack() {
        return new stack_1.Stack();
    }
    linkedList() {
        return new linked_list_1.LinkedList();
    }
    doubleLinkedList() {
        return new double_linked_list_1.DoubleLinkedList();
    }
    graph() {
        return new graph_1.Graph();
    }
    priorityQueue() {
        return new priority_queue_1.PriorityQueue();
    }
    hashTable() {
        return new hash_table_1.HashTable();
    }
    queue() {
        return new queue_1.Queue();
    }
    splayTree() {
        return new splay_tree_1.SplayTree();
    }
    redBlackTree() {
        return new red_black_tree_1.RedBlackTree();
    }
    heap() {
        return new heap_1.Heap();
    }
}
exports.DataStructure = DataStructure;
//# sourceMappingURL=data-structure.js.map