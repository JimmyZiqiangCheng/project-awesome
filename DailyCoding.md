# Daily Coding Challenge

## 2021-10-25
[number of provinces](https://leetcode.com/problems/number-of-provinces/)
- solution: union find. have two list parent and rank. union: if two parents differ, connect low rank to high rank. find: while n != parent[n], keep tracking parents, return 1 else return 0. loop through the matrix, when matrix[i,j] is 1, do union. ans -= union(i,j), return ans.

## 2021-10-23
[linked list cycle ii](https://leetcode.com/problems/linked-list-cycle-ii)
- solution1: keep a hashset of nodes, if encounters duplicate return the node.
- solution2: have a slow and a fast pointer. move slow 1 step each time, fast 2 steps each time, if slow == fast, return slow. use head and slow as starting point, move 1 step each time for both, return the node when meet.

## 2021-10-22
[add two numbers](https://leetcode.com/problems/add-two-numbers/)
- solution: while l1 or l2 or carry, cur = 0, if l1, cur += l1, if l2, cur+=l2, cur+= carry, then check cur%10 as val for next node and cur//10 as carry

## 2021-10-21
[swap nodes in pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
- solution: have 3 pointers, prev, current and subs.Have a start node point to the first node. Recursively have prev point to subs, cur node point to subs.next and subs point to cur. return start.next.

## 2021-10-20
[remove nth node from end of list](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- solution1: have a list store all the node, pop the unwanted node, and reconstruct the linked list. 
- solution2: have 2 pointers. lp point to head.prev, rp point to head.next for n. keep moving 2 pointers until rp is none, lp.next = lp.next.next to skip.

## 2021-10-19
[construct binary tree from preorder and inorder traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/)
- solution: root = pre[0]. mid = in.index[root.val]. split the list around mid. root.left = (preleft, inleft), root.right = (preright, inright)

## 2021-10-16
[populating next right pointers in each node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
- solution: use a q. for each round, keep all nodes in a list, have the prev node point to the next node.

[binary tree right side view](https://leetcode.com/problems/binary-tree-right-side-view/)
- solution: use a q. for each round, only push the last node into the ans list, but populate the q with all nodes.

## 2021-10-15
[find largest value in each tree row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
- solution: use a q. keep popping q, append node into a temp list. after each iteration, append max(temp) to ans. 

[binary tree zigzag level order traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
- solution: same as above, or recursively call helper(node, level), and put (level, node.val) in dict. reverse values when level is odd. 

## 2021-10-13
[binary tree max path sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- solution: left = helper(node.left), right = helper(node. right), ans = max(ans, both forks), return max(0, val+left, val+right), 0 for in case single fork is <0. 

## 2021-10-12
[binary tree longest consecutive sequence](https://www.lintcode.com/problem/595/description)
- solution: recersion. if not node, return cur_l, else return max(cur_l, helper(left), helper(right)). if curval == parentval+1, cur_l +=1, else cur_l = 1

## 2021-10-11
[merge k sorted lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- solution: have each l in lists pop item into a minheap. keap popping minheap.

## 2021-10-10
[find median from data stream](https://leetcode.com/problems/find-median-from-data-stream/)
- solution: keep two heaps. a max heap for small numbers, and a min heap for large numbers, keep len diff <= 1, max heap longer. pop max heap or average of max and min heap.

## 2021-10-08
[house robber iii](https://leetcode.com/problems/house-robber-iii/)
- solution: recursion. return value pair[take, skip]. If take root, root + next level skip, else, max(next level pair)

## 2021-10-07
[partition equal subset sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- solution: recursion with memo. two choices, either take or leave, same as ones and zeros. add up to half the total sum than True.

## 2021-10-06
[ones and zeros](https://leetcode.com/problems/ones-and-zeroes/)
- solution1: recursion with memoization. two choices, take or leave, exit condition: 1. end of list, 2. m and n == 0. 
- solution2: dp. 2d. rows = 0s, cols = 1s. for i in ones for j in zeros, dp[ij] = max(dp[ij], dp[i-ones,j-zeros] and such. return dp[ones, zeros]

## 2021-10-04
[stock with transaction fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
- solution: dp. keep two values: hold=-p[0], profit=0. loop through prices, hold = max(hold, profit - p[i]), profit = max(profit, p[i] + hold - fee.

## 2021-10-03
[palindrome partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- solution: backtracking. start from i = 0, j = 0, increment j to form the first partition, check if pa, keep partition the rest of the string.

## 2021-10-02
[palindromic substrings](https://leetcode.com/problems/palindromic-substrings/)
- solution: similar to the last problem. loop through the array, expand left and right, see if palindromic. use k in [0,1] to deal with even length.

## 2021-10-01
[longest palindromic substring](https://leetcode.com/problems/longest-palindromic-substring/submissions/)
- solution: loop through the array, for each ele, expand and check if palindromic. even number r+1

## 2021-09-29
[regular expression matching](https://leetcode.com/problems/regular-expression-matching/)
- solution: recursion + memoization. If not s and not p, True. If not p, False. if p[1] == *, skip or if match, s[1:] and keep. else if match, s[1:], p[1:], else False.
 
## 2021-09-28
[edit distance](https://leetcode.com/problems/edit-distance/)
- solution1: recursion + memoization. if char1 == char2, ans = helper(w1[1:], w2[1:]). else, ans = min(replace, add, delete). 
- solution2: dp. 2d array. length = word+1, double loop, similar to longest common subsequence.

## 2021-09-26
[longest common subsequence](https://leetcode.com/problems/longest-common-subsequence/)
- solution1: recursion + memoization. if char1 == char2, ans = 1 + helper(t1[1:],t2[1:]), else ans = max(helper1, helper2)
- solution2: dp. 2d array, size t.length+1, go diagonal if char1 == char2, otherwise fill in max(down, right)

## 2021-09-23
[sudoku](https://leetcode.com/problems/valid-sudoku/)
- my solution: build 3 maps, row_num, col_num and (r/3,c/3) as keys and hashset as values. double loop through the board, check if item in corresponding sets.

## 2021-09-22
[minimum area rectangle](https://leetcode.com/problems/minimum-area-rectangle/)
- my solution: Double loop through the numlist to find diagonal pair of pts. Check if two other pts in list. calculate area, keep min. Pruning (pre-calculate the area and see if it's smaller than curmin) can vastly reduce time.

## 2021-09-21
[surrounded regions](https://leetcode.com/problems/surrounded-regions/)
- my solution: have a visited set. visit edges first, no flip and put into set, then visit center area with flip.

[word search](https://leetcode.com/problems/word-search/)
- my solution: dfs. have a visited set, visit neighbors according to the next given char in the word.

## 2021-09-20
[number of enclaves](https://leetcode.com/problems/number-of-enclaves/)
- my solution: dfs. Similar to num of islands, you purge start from four sides, then count 1s remaining.

## 2021-09-19
[combination sum](https://leetcode.com/problems/combination-sum/)
- my solution: backtracking. constraint: sum <= target. trick: start with the current index in recursive call to prevent permuation.

## 2021-09-18
[most frequent subtree sum](https://leetcode.com/problems/most-frequent-subtree-sum/)
- my solution: local sum = node.val + helper(left) + helper(right), store local sum in dict. return keys with highest values.

[letter combinations of a phone number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- my solution: dfs. initiate a lookup table, an ans list. for each letter of the corresponding digit, recursively call the helper function until index == len(digits).

## 2021-09-17
[sum root to leaf numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
- my solution: store the sum to each leaf to a list, call the function recursively and pass in the cur_sum, return sum(list)

## 2021-09-16
[path sum ii](https://leetcode.com/problems/path-sum-ii/)
- my solution: backtracking. keep track of cur_sum and path, if cur_sum == target, add the path to ans.

## 2021-09-15
[word break](https://leetcode.com/problems/word-break/)
- my solution: dp, 1d array init all false. Going backwards, if substring in word and dp[i + len(word)] == true, dp[i] = true and break. check dp[0].

## 2021-09-14
[longest increasing subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- my solution: dp, 1d array. for each item, trace back till find a smaller number i, cur_max = max (cur_max, dp[i] + 1), ans = max(cur_max, ans), return ans.

## 2021-09-13
[interchangeable rectangles](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/)
- my solution: build a dict as {ratio:[rectangles]} key value pair. count num of pairs in each entry.

[coin change](https://leetcode.com/problems/coin-change/submissions/)
- my solution: dp, 1d array of [0] * length (amount+1). iterate through the array, for each coin in coins, value = min(value[i], value[i-coin]+1). return array[amount] if not inf, else -1

## 2021-09-12
[jump game ii](https://leetcode.com/problems/jump-game-ii/)
- my solution: greedy approach, have a window indicating the next reachable chunk, keep silde the window to the right until it includes the dest.

## 2021-09-11
[word ladder2](https://leetcode.com/problems/word-ladder-ii/description/)

## 2021-09-10
[find minimum in rotated sorted array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- my solution: first check if start < end, if so, return start ele. Then do binary search and check if mid > start, if so check left portion, if not check right portion. Because the point of change is always in the portion where left > right

## 2021-09-09
[search a 2d matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- my solution: like binary search, start from the middle row and check if target is smaller than the first ele or bigger than the last ele or in between.

## 2021-09-08
[search in rotated sorted array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- my solution: first do binary search to find the pivot, then depending on the target's value and last element's value, do binary search.

## 2021-09-07
[course schedule ii](https://leetcode.com/problems/course-schedule-ii/)
- my solution: similar to course schedule, whenever a node is done and no cycles, append the node to the answer list.

## 2021-09-06
[course schedule](https://leetcode.com/problems/course-schedule/)
- my solution: first build an adjacency list with {course:[...pre]} pairs, then do DFS on each course. Have a visiting set to record nodes in current cycle, and a visited set to record node that can be done. Return false if any node is revisited in one cycle, else True. Run this on every course.

## 2021-09-05
[number of islands](https://leetcode.com/problems/number-of-islands/)
- my solution: pollute the grid by turning 1 into 0, spread to 4 directions. Loop through the grid and call pollute if cur_pos is 1, count num of calls.

## 2021-09-04
[word ladder](https://leetcode.com/problems/word-ladder/description/)
- my solution: first build the adjacency list based on pattern. use a placeholder at each position of each word to find all patterns. Then use DFS.

## 2021-09-03
[walking robot simulation](https://leetcode.com/problems/walking-robot-simulation/description/)
- my solution: pretty straight forward, just follow the logic, trick is to turn the list of list to list of set in obstacles

## 2021-09-02
[lemonade change](https://leetcode.com/problems/lemonade-change/description/)
- my solution: record the num of 5s and 10s, follow the logic of change.

## 2021-09-01
[sell stock2](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
- my solution: iterate through the list. Whenver the latter item is bigger than the former item, add the difference to ans, return as at the end.

## 2021-08-31
[assign cookies](https://leetcode.com/problems/assign-cookies/description/)
- my solution: assign two pointers to two arrays. sort two arrays. do element wise comparison, have the cookie pointer increase every turn while the greed pointer increase only when the cookie ele is bigger, return the greed pointer.

## 2021-08-30
[sqrt x](https://leetcode.com/problems/sqrtx/)
- my solution: modified binary search

## 2021-08-29
[jump game](https://leetcode.com/problems/jump-game/)
- my solution: Iterate through the array, keep track of the max_reachable, once the current index(including the target) is bigger than the max_reachable, return False.

## 2021-08-28
[best time to buy and sell stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
- my solution: iterate through the list, if the latter item is bigger, subtract the former item and add to the total.

## 2021-08-27
[assign cookies](https://leetcode.com/problems/assign-cookies/description/)
- my solution: sort the two arrays, compare item by item

## 2021-08-26
[level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/#/description)
- my solution: bfs, use a q to push in cur level value, keep poping left, and adding the children of the popped node into the q, until the q is empty.

## 2021-08-25
[permutations2](https://leetcode.com/problems/permutations-ii/)
- slow version: same as permuation, check if ans has permu, if not add, if yes skip
- quicker version: sort the list, skip duplicate item and do some housekeeping

## 2021-08-24
[permutations](https://leetcode.com/problems/permutations/)
- my solution: backtracking, iterate through the list, keep removing item and put the item in the back of a temp_list, ad the temp_list to ans when the original list is empty. Then add item back to the original list.

## 2021-08-23
[combinations](https://leetcode.com/problems/combinations/)
- my solution: same as subsets, exit condition is when len(cur) == k, then in the recursive call, keep adding one to the start index, append the item to cur, after that pop the item in typical backtracking fashion.

## 2021-08-22
[lowest common ancestor](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- my solution: recursively traverse down the tree, mark True if meet one of the node. Return the answer (cur_node) when either itself, or its left/right child returns true.

## 2021-08-21
[n queens](https://leetcode.com/problems/n-queens/)
- my solution: another backtracking problem. The key is to find the constraint, there cannot be Q in the same col, col+row, row-col. 

## 2021-08-20
[subsets](https://leetcode.com/problems/subsets/)
- my solution: for each new item, new subsets are item + all existing subsets.
- my solution 2: backtracking, have a start index and cur_length, for each ele in array, recursively call the function and keep iterating the start index as well, when sub array length equals to cur_length, put it in the answer array.

## 2021-08-19
[powx n](https://leetcode.com/problems/powx-n/)
- my solution: devide and conquer

## 2021-08-18
[generate parentheses](https://leetcode.com/problems/generate-parentheses/)
- my solution: recursively call a fucntion which adds ( or ) and subtracts the available num of ( or ). Also stick to the rule that there cannot be more ) than (

## 2021-08-17
[climbing stairs](https://leetcode.com/problems/climbing-stairs/)
- my solution: build a hashmap, m[1]=1, m[2]=2, for the rest, m[n] = m[n-1]+m[n-2], return m[n]

## 2021-08-16
[top k frequent elements](https://leetcode.com/problems/top-k-frequent-elements/)
- my solution: have a list of empty lists of len(k+1), build a number, freq pair hashmap. fill into the list according to freq. flatten the list and reverse it, take the first k elements.

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

