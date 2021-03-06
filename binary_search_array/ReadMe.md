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
**Do NOT use Array.prototype.indexOf in your solution.** What would be the fun in that?
<br />



**Parameters:**
<br />
array (required) - an array.
<br />
target (required) - an integer value.
<br />

###Examples

**Input**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Output**
________
**array:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
**output:**
-1
<br />
[ 5 ]
<br />
**target:**
<br />
4	
_____________
**array:**
<br />
[ 11, 12, 13, 14, 15 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output:**
0
<br />
**target:**
<br />
11	
________________
**array:**
[ 11, 12, 13, 14, 15 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output:**
1
<br />
**target:**
<br />
12	
___________
**array:**
[ 11, 12, 13, 14, 15 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output:**
2
<br />
**target:**
<br />
13	
___________
**array:**
[ 11, 12, 13, 14, 15 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output:**
3
<br />
**target:**
<br />
14	
___________
**array:**
[ 11, 12, 13, 14, 15 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output:**
4
<br />
**target:**
15	
_____________
**array:**
[ 11, 12, 13, 14, 15 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**output:**
-1
<br />
**target:**
16	

