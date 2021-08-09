# Daily Coding Challenge
## 2021-08-10
[design circular deque](https://leetcode.com/problems/design-circular-deque/)

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

