# Daily Coding Challenge

## 2021-08-03
[remove duplicates from sorted array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- my solution:get the array length, traverse through the array, compare every element with its former and pop duplicates
- optimal solution: have two pointers, one for the current "non-duplicate so far position", one traverse through the array like insertion sort.

## 2021-08-04
[rotate array](https://leetcode.com/problems/rotate-array/)
- my solution: get the remainder "r" of num of rotation and array length, then chop the end "r" elements and put them at the front.

## 2021-08-05
[merge two sorted lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- my solution: exactly like the merge part in merge sort, but with list. simply set a temp node as head node and keep comparing elements in two arrays and add the smaller one as next of temp node.

## 2021-08-06
[merge sorted array](https://leetcode.com/problems/merge-sorted-array/)
