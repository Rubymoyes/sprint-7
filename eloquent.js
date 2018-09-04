
// Exercise 1:
// Write a function min that takes two arguments and returns their minimum.


function min(a, b) {
  if (a < b) return a;
  else return b;
}

// Results

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*
Notes:

This one was the one I had to cheat the least on, but I still had trouble with identifying where
I needed to use return a. I'm relatively familiar with if else statements now.

This stuff is still really really really confusing at times. I can understand how it works when I read it
but I still have huge trouble with knowing where to put what, and knowing which elements I should be using.
Will probably go back over this stuff later after I finish Phase 0 before bootcamp.
*/


/* 
Exercise 2:

Define a recursive function isEven corresponding to this description. The function should accept a single 
parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. 
*/

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }
  
// Results 
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false

/*
Notes:

This one I had to look at the solution pretty early on. I wasn't even sure what the example wanted me to do at
first, and gave in. I understand how to use the else if, but the smaller things like using the -n and n == 1,
n < 0, etc, didn't come naturally to me at all. I am slowly understanding why things go where. But again, still
needs a lot of reviewing and tracing back steps to find out WHY the code works the way it does.
*/


/* 
Exercise 3:

Write a function countBs that takes a string as its only argument and returns a number that indicates how 
many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/


function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
// Results
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4

/*
Notes:

Here's what I'm having issues with understanding on this one:

- Why countChar, counted, and countBs work together.
- How 'let counted' works in terms of where it goes and what it defines.

Here's what I do understand:

- Using the strings and arrays, (string, ch) and how they work.
- How the for loop works.
*/
