/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Example 1: Input: n = 3 Output: ["((()))","(()())","(())()","()(())","()()()"]  
 * @param {number} n
 * @return {string[]}
 */

let res = [];

var generateParenthesis = function(n) {
     res = [];
    genParen("",0,0,n);
   return res.sort();
};

var genParen = function(cs, o, c, n){
    if(cs.length==2*n){
        res.push(cs);
        return;
    }
    
    if(o<n){
        cs += '(';
        genParen(cs, o+1,c,n);
        cs = cs.substring(0, cs.length-1);
    }
    
    if(c<o){
        cs += ')';
        genParen(cs, o,c+1,n);
        cs = cs.substring(0, cs.length-1);
    }
}
