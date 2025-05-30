// all three are the object or methods sharing methods 
https://youtu.be/75W8UPQ5l7k?si=gSPLXog-aR9oW2xW

// call :- it is instatly involked method when we initilaize it involkes 
        //   in this arguments are given saparetlly saparated by comma (,)

            //  example
                // printFullName.call(referance object, "argument1","argument2" ,...)
                // printFullName.call(name, "dehradun","uttrakhnad")

// apply :- it is instatly involked method when we initilaize it involkes 
    // but it is didder than apply because here the argument is given as a single argument in the form of list 

            // example 
                 //// printFullName.call(referance object, ["argument1","argument2" ,...])
                // printFullName.call(name, ["dehradun","uttrakhnad"])

// bind :- it a same as call in this parameters are given same as the call method but difference is 
        // difference that it not involed instant it stored in a variable and then after that it can be use anywhere

            // example
                // let print = printFllName.bind(name,"Dehradun","uttrakhand")
                // console.log(print) it givee a function
                // print();

// code:---

let name={
    firstname : "akshaay",
    lastname:"saini"
}

let printFullName = function(hometown,state){

    console.log(this.firstname + " " + this.lastname + " from " + hometown , state);

}

printFullName.call(name , "dehradun","uttrakhand"); // o/p :-akshaay saini from dehradun uttrakhand

let name2 ={
    firstname : "ram",
    lastname : "prashad",
}

// call

printFullName.call(name2,"raipur","chhattishgarh")//o/p:-- ram prashad from raipur chhattishgarh

// apply

printFullName.apply(name2 ,["raipur","chhattishgarh"])//o/p:-- ram prashad from raipur chhattishgarh

// bind

let print = printFullName.bind(name2,"raipur","chhattishgarh")
console.log(print); //[Function: bound printFullName]
print()//ram prashad from raipur chhattishgarh

//their will be overrriding had take palce t=by the shareing this is overridedd