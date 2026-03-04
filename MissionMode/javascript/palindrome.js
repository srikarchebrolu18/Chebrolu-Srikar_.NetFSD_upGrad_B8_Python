let str = "madam";
let revstr  = str.split("").reverse().join("");

if(str === revstr)
{
    console.log("The string is a palindrome");
}
else
{
    console.log("The string is not a palindrome");
}

