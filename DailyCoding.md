# Daily Coding Challenge

## 2021-08-16
[top k frequent elements](https://leetcode.com/problems/top-k-frequent-elements/)

## 2021-08-15
[chou shu](https://leetcode-cn.com/problems/chou-shu-lcof/)
- my solution: chou shu is simply a number from either 1 or 2*n or 3*n or 5*n. Have 3 pointers for each list, iterate n times and move the corresponding pointer.

## 2021-08-14
[group anagrams](https://leetcode.com/problems/group-anagrams/)
- my solution: if anagram then sorted(a) == sorted (b), loop through the list, use sorted(ele) as key to a hashmap, append each ele that has the same sorted value under the key to form a list.

## 2021-08-13
[preorder-traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)
- recursive solution: put the cur_node.val in list, check if it's got children, call recursively for each child with the same operation.

## 2021-08-12
[valid anagram](https://leetcode.com/problems/valid-anagram/)
- my solution: put each value into a hashmap for each string, and the value of the key is a counter. If all entries are equal between two maps then true, otherwise false

## 2021-08-11
[binary tree inorder traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- recursive solution: create an empty list, pass it in a recursive function which goes node.left, list.append(val) and node.right
- iterative solution: use a stack to push and pop the cur val 

## 2021-08-10
[design circular deque](https://leetcode.com/problems/design-circular-deque/)
- my solution: It's pretty straigtforward if using Python or Javascript, simply utilize the built-in list or array data structure. It helps to speed up the calculation if you keep the cur_size as a property.

## 2021-08-09
[plus one](https://leetcode.com/problems/plus-one/)
- my solution: set a flag carry = false, and traverse through the list backwards, if first item, or carry == true, then add 1 to the item, if item > 9, set carry to true. In the end, check if the carry is still true, meaning the last item is 10, then append a 1 in front of the list.

## 2021-08-08
[move zeroes](https://leetcode.com/problems/move-zeroes/)
- solution1: have a index of lastNoneZero, traverse through the array, when not zero, swap cur with lastNoneZero, lastNoneZero ++
- solution2: traverse through the array, pop zeros, append them back at the end (have a zero counter)

## 2021-08-07
[two sum](https://leetcode.com/problems/two-sum/)
- my solution: traverse through the list once, store the (needed_val,cur_index) in a hashmap, if cur_val is already a key, return map[cur_val] and the cur_index

## 2021-08-06
[merge sorted array](https://leetcode.com/problems/merge-sorted-array/)
- my solution: going backwards, compare elements and put the bigger one in the first array. Then simply slot in the remaining array.


## 2021-08-05
[merge two sorted lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- my solution: exactly like the merge part in merge sort, but with list. simply set a temp node as head node and keep comparing elements in two arrays and add the smaller one as next of temp node.

## 2021-08-04
[rotate array](https://leetcode.com/problems/rotate-array/)
- my solution: get the remainder "r" of num of rotation and array length, then chop the end "r" elements and put them at the front.

## 2021-08-03
[remove duplicates from sorted array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- my solution:get the array length, traverse through the array, compare every element with its former and pop duplicates
- optimal solution: have two pointers, one for the current "non-duplicate so far position", one traverse through the array like insertion sort.

