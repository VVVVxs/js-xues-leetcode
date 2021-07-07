// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 进阶：你能尝试使用一趟扫描实现吗？

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//     function ListNode(val, next) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
//     const len = head.length;
//     let i = 0;
//     const listNodes = new ListNode(head[i]);
//     let next = listNodes;
//     while (i < len - 1) {
//         i++
//         next.next = new ListNode(head[i])
//         next = next.next;
//     }
//     let number = head.length - n;

//     const findNode = (node) => {
//         number--;
//         console.log('number',number)
//         if (number === 0) {
//             node.val = node.next.val;
//             node.next = node.next.next;
//         } else {
//             findNode(node.next);
//         }
//     }
//     findNode(listNodes)
//     console.log('listNodes', listNodes);

//     return listNodes;
// };

const removeNthFromEnd = (head, n) => {
    // 1. 设置倒数节点
    let lastN = 0;
    // 2. 设置递归
    const recursion = (head) => {
        // 2.1 如果抵达链表尾，返回 null
        if (!head) {
            return null;
        }
        // 2.2 设置 next 表示下一个节点
        const next = recursion(head.next);

        // 2.3 每次递归的【归】环节，lastN + 1
        lastN++;
        // 2.4 如果 lastN 和 n 相同，则进行删节点操作
        if (lastN === n) {
            head = next;
        }
        // 2.5 再【归】一层后，修正 next 指向
        if (lastN === n + 1) {
            head.next = next;
        }
        // 2.6 返回最终节点
        return head;
    };
    // 3. 调用递归
    return recursion(head);
}
console.log(
    removeNthFromEnd(
        {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null,
                },
            }
        }, 1));