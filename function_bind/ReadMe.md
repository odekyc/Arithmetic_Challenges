#Function Bind
Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

For example, if we have the following object:

    var alice = {
    name: 'alice',
    shout: function () {
           alert('here comes' + ' ' + this.name);
        }
    };
