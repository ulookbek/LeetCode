class ListNode {
    val = 0
    next = null
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1, l2) {
    let l1Str = ''
    let l2Str = ''

    while(typeof l1?.val === 'number' || typeof l2?.val === 'number') {
        if (typeof l1?.val === 'number') {
            l1Str += l1.val
            l1 = l1.next
        }
        if (typeof l2?.val === 'number') {
            l2Str += l2.val
            l2 = l2.next
        }
    }

    let newL1Str = l1Str.split('').reverse().join('');
    let newL2Str = l2Str.split('').reverse().join('');

    let sum = BigInt(newL1Str) + BigInt(newL2Str)
    let reversed = String(sum).split('');

    console.log(l1Str, l2Str, String(sum))

    let current = null
    for (let i = 0; i <= reversed.length - 1; i++) {
        current = new ListNode(+reversed[i], current);
    }
    return current
};

let l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1].reduceRight((prev, curr) => new ListNode(curr, prev), null)
let l2 = [5,6,4].reduceRight((prev, curr) => new ListNode(curr, prev), null)

console.log(addTwoNumbers(l1, l2))
