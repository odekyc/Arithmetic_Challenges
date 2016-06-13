#nthFibonacci
<br />
Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.
<br />
Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.
<br />
Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.
<br />
How many pairs of iguanas will there be after n months?
<br />
For example, the iguana pair size for months zero through five are:
<br />
0 1 1 2 3 5
<br />
If n were 4, your function should return 3; for 5, it should return 5.
<br />
HINT: This iguana pattern is described exactly by the fibonacci sequence:
<br />
https://en.wikipedia.org/wiki/Fibonacci_number
<br />
Write a function that accepts a number n and returns the number of iguana pairs after n months.
<br />
DO NOT use a recursive solution to this problem. Your solution must run in linear time.
<br />
Note: Your solution may fail if you have a comment in your nthFibonacci function that contains the string literal “nthFibonacci” somewhere within it.