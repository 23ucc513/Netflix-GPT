/*Building a regular expression for email validation
Now that we understand the basic structure of an email address, we can begin to build a regular expression to validate email addresses. There are many different regular expressions that can be used for email validation, but we’ll focus on one that is commonly used and fairly robust.

Here’s the regular expression we’ll be using:

/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
Let’s break down this regular expression piece by piece:

^ - The beginning of the string.
( - Start of a capturing group.
[a-zA-Z0-9._%-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, underscores, percent signs, and hyphens.
@ - Matches the “@” symbol.
[a-zA-Z0-9.-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, and hyphens.
\. - Matches a literal period character.
[a-zA-Z]{2,} - Matches two or more letters (both uppercase and lowercase).
) - End of the capturing group.
$ - The end of the string.
This regular expression matches email addresses that are properly formatted according to the rules we discussed earlier. Specifically, it matches email addresses that have a valid local part and a valid domain part, separated by an "@" symbol.*/

export const checkValidData = (/*name*/email, password) => {
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );
  // if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
