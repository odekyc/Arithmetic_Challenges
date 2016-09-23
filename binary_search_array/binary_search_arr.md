#Binary Search Array
**Given a sorted array of integers, find the index of a target value using a binary search algorithm.
<br />
A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search 
<br />
interval in half. The initial interval includes the whole array. If the value of the target value is less 
<br />
than the middle value of the interval, then the next interval will be the lower half of the current interval.
<br />
 If the value of the target value is greater than the middle value, then the next interval will be the upper
<br />
  half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.**

<br />
Note:
<br />
Your function should return -1 for target values not in the array. 
<br />
Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?
<br />



Parameters:
<br />

array (required) - an array.
<br />
target (required) - an integer value.
<br />
Examples
<br />

<br />
array:
[ 5 ]
<br />
target:
4	
<br />
output:
-1
<br />
array:

[ 11, 12, 13, 14, 15 ]
<br />
target:

11	
<br />
output:
0
<br />
array:
[ 11, 12, 13, 14, 15 ]
<br />
target:
12	
<br />
output:
1
<br />
array:
[ 11, 12, 13, 14, 15 ]
<br />
target:
13	
<br />
output:
2
<br />
array:
[ 11, 12, 13, 14, 15 ]
<br />
target:
14	
<br />
output:
3
<br />
array:
[ 11, 12, 13, 14, 15 ]
<br />
target:
15	
<br />
output:
4
<br />
array:
[ 11, 12, 13, 14, 15 ]
<br />
target:
16	
<br />
output:
-1
