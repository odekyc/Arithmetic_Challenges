#Spiral Traversal
<br />
**Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.**
<br />
<br />
**Examples:**
<hr />
**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Output**
<hr />
&nbsp;&nbsp;&nbsp;&nbsp;**matrix:**
&nbsp;&nbsp;&nbsp;&nbsp;[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ] ->[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
<hr />
&nbsp;&nbsp;&nbsp;&nbsp;**matrix:**
&nbsp;&nbsp;&nbsp;&nbsp;[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ] ->[ 1, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2,3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
<hr />
&nbsp;&nbsp;&nbsp;&nbsp;**matrix:**
&nbsp;&nbsp;&nbsp;&nbsp;[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ] -> [ 1, 2, 3, 4 ]
<hr />
&nbsp;&nbsp;&nbsp;&nbsp;**matrix:**
&nbsp;&nbsp;&nbsp;&nbsp;[ [ 1, 2, 3, 4, 5, 6, 7 ] ] -> [ 1, 2, 3, 4, 5, 6, 7 ]
