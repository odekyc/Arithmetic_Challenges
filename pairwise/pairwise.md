#Pairwise
**Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.**
<br />
**For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.**
<hr />
&nbsp;&nbsp;&nbsp;Index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value
<hr />
&nbsp;&nbsp;&nbsp;0   1   2   3   4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7   9   11  13  15
<br />
Below we'll take their corresponding indices and add them.
<br />
7 + 13 = 20 → Indices 0 + 3 = 3
<br />
9 + 11 = 20 → Indices 1 + 2 = 3
<br />
3 + 3 = 6 → Return 6
