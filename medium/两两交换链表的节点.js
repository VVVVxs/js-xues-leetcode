// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if(!head||!head.next) return head;
    const one = head;
    const two = one.next;
    const three = two.next;
    two.next = one;
    one.next = swapPairs(three);

    return two;
};

console.log(
    swapPairs(
        {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null,
                },
            }
        }));