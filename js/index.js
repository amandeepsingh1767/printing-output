//Task1
let a = 3;
let b = 5;
let c;

alert(`
var a = 3;
var b = 5;
var c;
---------
a + b = ${a+b}
a - b = ${a-b}
a * b = ${a*b}
a / b = ${a/b}
a % b  = ${a%b}
a += b  : ${a += b}
a -= b  : ${a -= b}
a *= b  : ${a *= b}
a /= b  : ${a/= b}
a %= b  : ${a %= b}
a == b  : ${a == b}
a != b  : ${a != b}
a > b  : ${a > b}
a < b  : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`);

//Task 2

// Declare the variable first_name and assign it with the value of your first name;
let first_name = "Amandeep";
// Declare the variable last_name and assign it with the value of your last name;
let last_name = "Singh";
// Declare the variable email and assign it with the value of your email;
let email = "sing1767@algonquinlive.com"
// Declare the variable output;
let output;
// Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
// Assign output with gotten expression;
output = "My name is"+" "+ first_name + " " + last_name + "." + "You can contact me at"+" "+ email+".";
// Alert output.
alert(output);
