// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

//     '.' Matches any single character.​​​​
//     '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

//Examples
// "aa"
// "a"
// "aa"
// "a*"
// "ab"
// ".*"
// "a"
// ".*a"
// "abcddddd"
// "a.*d"
// "abcddddd"
// "a.*de"
// "mississippi"
// "mis*is*p*."
// "aab"
// "c*a*b"

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

 // Using recursion O(T^2 + p^2)
  //     if (!p || p.length<1 ){
  //       return  (!s || s.length<1 );
  //     }
  //     let first_match = (!(!s || s.length<1 ) &&
  //                            (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'));

  //     if (p.length >= 2 && p.charAt(1) == '*'){
  //         return (isMatch(s, p.substring(2)) ||
  //                 (first_match && isMatch(s.substring(1), p)));
  //     } else {
  //         return first_match && isMatch(s.substring(1), p.substring(1));
  //     }
  // 

   // Using DP O(TP)
  let dp = [];
  for (let li = 0; li <= s.length; li++) {
    dp.push([]);
    for (let li1 = 0; li1 <= p.length; li1++) {
      dp[li].push(false);
    }
  }
  dp[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      let first_match =
        i < s.length && (p.charAt(j) == s.charAt(i) || p.charAt(j) == ".");
      if (j + 1 < p.length && p.charAt(j + 1) == "*") {
        dp[i][j] = dp[i][j + 2] || (first_match && dp[i + 1][j]);
      } else {
        dp[i][j] = first_match && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
};
