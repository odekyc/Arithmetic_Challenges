#Compose, Pipe
Implement the functions compose and pipe.

#Compose
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

##Example
    var greet = function(name){ return 'hi: ' + name;}
    var exclaim = function(statement) { return statement.toUpperCase() + '!';}

    var welcome = compose(greet, exclaim);
    welcome('phillip'); //=> 'hi: PHILLIP!'
    

##Pipe:
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

#Example
