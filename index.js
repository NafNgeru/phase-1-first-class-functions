function receivesAFunction(callback){
    return callback();
}
receivesAFunction(returnsANamedFunction);


function returnsANamedFunction(){
    return returnsAnAnonymousFunction;
}


function returnsAnAnonymousFunction(){
    return function (){
         return "Hello World";
    };    
}
