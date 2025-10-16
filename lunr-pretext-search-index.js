var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-intro",
  "level": "1",
  "url": "sec-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction and Motivation",
  "body": " Introduction and Motivation    Recognize that not all functions have antiderivatives that can be expressed in closed form.  Understand that infinite polynomials (series) can be used to represent and approximate functions.  Construct an infinite polynomial by matching derivatives at to determine the coefficients .  Understand how series provide new ways to compute, approximate, and analyze functions when algebraic or calculus methods fail.  Apply series representations to approximate integrals that cannot be expressed in closed form.    We are coming from a chapter focused on integration. At this point, you’ve built up a strong intuition for how to tackle most integrals you encounter. So let’s start today with a problem that looks familiar... but hides a deeper challenge.   (10 Minute) -- Warmup   To begin our exploration of infinite series, let's consider the integral .     Working with a partner (a nearby neighbor) each person try to evaluate the integral using one or two of our integration techniques we have learned so far.  U-Substitution  Integration by Parts  Triginometric Substitution  Partial Fractions        Discuss! Were you able to make any progress? Once you have throroughly tried the problem and discussed, feel free to look at the Solution below.    It turns out the integral, , does not have a closed-form antiderivative that can be expressed using elementary functions. In fact, it defines a new function called the sine integral , often written as .   Showing the result of in Wolfram Alpha    So, what can we do when integration fails to give us a simple formula? This is where the idea of representing a function as an infinite polynomial ( a power series ) comes in!     The integral we just explored hinted that our familiar tools sometimes fall short. To find new ones, we need to broaden our notion of what it means to “add things up.” It might sound strange, but adding up infinitely many terms can sometimes make perfect sense and even produce nice reasonable (finite) values. To showcase this, let’s explore a simple example.   (5 Minute) -- Infinite Sums   Consider the sum:      Represent this quantity geometrically by:  Sketch a large 1 by 1 square on your paper, which has an area of 1.  Shade half of it to represent .  Then shade half of the remaining space for , then half again for , and continue the pattern.        What do you notice as you continue? How much of the square will be shaded if we keep repeating this process forever?      We have just reasoned out that the infinite sum: Verify that you have the same answer as your neighbor before checking the Solution below.    As you continue shading, each new step fills in half of whatever portion of the square remains unshaded. If you repeat this process indefinitely, you will come arbitrarily close to shading the entire square.    Shading in the box      This visual demonstrates that adding more and more pieces brings us closer and closer to a total area of 1. If the process continued forever, the shaded area would become indistinguishable from the full square itself. Therefore,      Just as our study of arithmetic began with performing operations on numbers (adding, subtracting, and so on) and then expanded to performing those same operations on functions involving variables like , we can now take the next step. Since we’ve seen that adding infinitely many numbers can sometimes produce a meaningful result, it’s natural to ask: what happens if we add infinitely many powers of ? This idea leads us to the concept of an infinite polynomial , more formally known as a power series .   Power Series Centered at 0   A power series is an infinite polynomial of the form where the coefficients are constants and is the variable.     The Center of a Power Series  Technically, this is a power series centered at 0 . Later, we will extend the idea to series centered at other points, such as . For now, we will focus on series centered at 0, and by convention, if the center is not specified, it is understood to be 0.    Maclaurin Series   A Maclaurin series is a specific type of power series. When creating a Maclaurin series, each coefficient is determined so that the polynomial and the original function share the same value and all derivatives match when . This ensures that the series “behaves like” the function near the origin.    To see how this definition works in practice, let’s create a Maclaurin series together!   (Together as Class) -- Maclaurin Series for   Find the first 5 terms of the Maclaurin series for .     This solution is for instructors only and would be removed for the student facing document. The intent is for this problem to be done in class together.   Let and suppose a Maclaurin polynomial   We want the value and all matching derivatives to agree at .   Match the value: We want so   hence .   Match the first derivative: We want . Compute   and .  Plugging in gives , so .   Match the second derivative:  and .  At : , so and thus .   Match the third derivative:  and .  At : , so and .   Match the fourth derivative:  and .  At : , so and .   Match the fifth derivative:  and .  At : , so and .  Substituting these into gives, term by term,          Stopping after a certain number of terms and using that polynomial to approximate the function has a name!   Maclaurin Polynomial   A Maclaurin polynomial is formed by stopping a Maclaurin series after a finite number of terms. The resulting polynomial can be used to approximate the function near .  Our answer from would be called the \"5th degree Maclaurin polynomial of sin(x)\"     Accuracy  The Maclaurin polynomial provides a practical approximation to the original function when only a few terms are used. Including more terms generally makes the approximation more accurate near the origin.    (5 Minute) -- Desmos Exploration   In this activity you will compare with its Maclaurin polynomial approximations using Desmos.     Open this Desmos file .     Toggle on the (the first degree Maclaurin polynomial for ).    Then, toggle on the (the third degree Maclaurin polynomial for ).    Finally, toggle on the (the fifth degree Maclaurin polynomial for ) that we discovered in .         We have also included the Desmos code for and as well. Toggle these on to see what would happen if we were to keep going!      Describe in words how the Maclaurin polynomail graph changes as we add more terms.    As more terms are added, each higher-degree Maclaurin polynomial matches more closely near the origin. The curve of the polynomial begins to follow the shape of the sine wave for a wider interval before it starts to diverge. In other words, the approximation becomes more accurate not only at but also over a larger region around it.  For example, only matches very close to 0, while and capture more of the curvature. By the time we reach or even , the polynomial is nearly indistinguishable from across most of the graphing window before eventually diverging for very large .     As we’ve just seen, the graphs of the Maclaurin polynomials and the function lie very close together when is near 0. Because the curves are so similar in that region, their function values are also nearly the same. This reveals one of the main uses of Maclaurin series and polynomials... using them to approximate the values of more complicated functions.   (Together as Class) -- Approximating Using a Maclaurin Polynomial   Use the 3rd-degree Maclaurin polynomial for  to approximate .    Substitute into :   Using a calculator, The approximation from differs by less than , showing that even a 3rd-degree Maclaurin polynomial gives a very accurate estimate near .  Graphically here is our result:   Zooming in on and        Everything we’ve explored today, from discovering that has no simple formula, to realizing that infinite sums can approximate functions, and finally learning how to build Maclaurin Series... has been leading to this moment! We now have the tools to tackle a problem that once seemed impossible. By using our Maclaurin polynomial, we can approximate not just function values like , but even the integral that started our entire discussion.   (Together as Class) -- Approximating Integrals   Use the 5th degree Maclaurin Polynomial to approximate:      This solution is for instructors only and would be removed for the student facing document. The intent is for this problem to be done in class together.   Recall: Dividing by gives Now integrate term by term from 0 to 1: Compute:  FYI: The actual value is about .        FYI: The actual value is about .    This lesson marks the beginning of a much larger journey. In the next part of this chapter, we’ll dive into the details of how and when these infinite sums actually \"work\". We'll be examining convergence, divergence, and the boundaries of where our approximations hold true. Some of that work will feel technical, even a little dry at times, but remember what you’ve seen today: with the right tools, we can approximate the unapproachable and make sense of the impossible.  If you ever feel buried in the details, I recommend that think back to this lesson and remember what our end goal is!    Concept Checks (True\/False)   Determine if the following statements are true or false. Justify your answer.     Every function has a Maclaurin series     If has a Maclaurin series , then      Suppose has a 5th-degree Maclaurin polynomial . Then is likely closer to than is to .     The 2nd-degree Maclaurin polynomial for is given by the equation:      Applications and Calculations    Consider the function    Construct the 6th-degree Maclaurin polynomial for .    Approximate with . Compare to a calculator value and report the absolute difference.    Comment briefly on whether you expect the approximation to be better or worse at and why (no formal theorem needed)        Consider the function    Construct the 5th-degree Maclaurin polynomial for .    Approximate with . Compare to a calculator value and report the absolute difference.        Consider the function    Substitute into your result from to create the 10th-degree Maclaurin polynomial for .    Use your result from (a) to approximate (This integral has no elementary antiderivative.)        Consider the function    Construct the 4th-degree Maclaurin polynomial for .    Hypothesize a formula for the infinite Maclaurin Series. What will the coefficent be in front of ?    Integrate term-by-term to produce a power series for . Write the first five nonzero terms.    Use your polynomial from (c) to approximate . Compare with a calculator and report the absolute difference.        "
},
{
  "id": "sec-intro-2",
  "level": "2",
  "url": "sec-intro.html#sec-intro-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Recognize that not all functions have antiderivatives that can be expressed in closed form.  Understand that infinite polynomials (series) can be used to represent and approximate functions.  Construct an infinite polynomial by matching derivatives at to determine the coefficients .  Understand how series provide new ways to compute, approximate, and analyze functions when algebraic or calculus methods fail.  Apply series representations to approximate integrals that cannot be expressed in closed form.   "
},
{
  "id": "intro-series-hook",
  "level": "2",
  "url": "sec-intro.html#intro-series-hook",
  "type": "Activity",
  "number": "1.1.1",
  "title": "(10 Minute) -- Warmup.",
  "body": " (10 Minute) -- Warmup   To begin our exploration of infinite series, let's consider the integral .     Working with a partner (a nearby neighbor) each person try to evaluate the integral using one or two of our integration techniques we have learned so far.  U-Substitution  Integration by Parts  Triginometric Substitution  Partial Fractions        Discuss! Were you able to make any progress? Once you have throroughly tried the problem and discussed, feel free to look at the Solution below.    It turns out the integral, , does not have a closed-form antiderivative that can be expressed using elementary functions. In fact, it defines a new function called the sine integral , often written as .   Showing the result of in Wolfram Alpha    So, what can we do when integration fails to give us a simple formula? This is where the idea of representing a function as an infinite polynomial ( a power series ) comes in!    "
},
{
  "id": "finite-vs-infinite-sums",
  "level": "2",
  "url": "sec-intro.html#finite-vs-infinite-sums",
  "type": "Activity",
  "number": "1.1.2",
  "title": "(5 Minute) --  Infinite Sums.",
  "body": " (5 Minute) -- Infinite Sums   Consider the sum:      Represent this quantity geometrically by:  Sketch a large 1 by 1 square on your paper, which has an area of 1.  Shade half of it to represent .  Then shade half of the remaining space for , then half again for , and continue the pattern.        What do you notice as you continue? How much of the square will be shaded if we keep repeating this process forever?      We have just reasoned out that the infinite sum: Verify that you have the same answer as your neighbor before checking the Solution below.    As you continue shading, each new step fills in half of whatever portion of the square remains unshaded. If you repeat this process indefinitely, you will come arbitrarily close to shading the entire square.    Shading in the box      This visual demonstrates that adding more and more pieces brings us closer and closer to a total area of 1. If the process continued forever, the shaded area would become indistinguishable from the full square itself. Therefore,     "
},
{
  "id": "sec-intro-7",
  "level": "2",
  "url": "sec-intro.html#sec-intro-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite polynomial power series "
},
{
  "id": "def-power-series-0",
  "level": "2",
  "url": "sec-intro.html#def-power-series-0",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Power Series Centered at 0.",
  "body": " Power Series Centered at 0   A power series is an infinite polynomial of the form where the coefficients are constants and is the variable.   "
},
{
  "id": "sec-intro-9",
  "level": "2",
  "url": "sec-intro.html#sec-intro-9",
  "type": "Remark",
  "number": "1.1.4",
  "title": "The Center of a Power Series.",
  "body": " The Center of a Power Series  Technically, this is a power series centered at 0 . Later, we will extend the idea to series centered at other points, such as . For now, we will focus on series centered at 0, and by convention, if the center is not specified, it is understood to be 0.  "
},
{
  "id": "def-maclaurin-series",
  "level": "2",
  "url": "sec-intro.html#def-maclaurin-series",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Maclaurin Series.",
  "body": " Maclaurin Series   A Maclaurin series is a specific type of power series. When creating a Maclaurin series, each coefficient is determined so that the polynomial and the original function share the same value and all derivatives match when . This ensures that the series “behaves like” the function near the origin.   "
},
{
  "id": "ex-maclaurin-sin",
  "level": "2",
  "url": "sec-intro.html#ex-maclaurin-sin",
  "type": "Example",
  "number": "1.1.6",
  "title": "(Together as Class) -- Maclaurin Series for <span class=\"process-math\">\\(\\sin(x)\\)<\/span>.",
  "body": " (Together as Class) -- Maclaurin Series for   Find the first 5 terms of the Maclaurin series for .     This solution is for instructors only and would be removed for the student facing document. The intent is for this problem to be done in class together.   Let and suppose a Maclaurin polynomial   We want the value and all matching derivatives to agree at .   Match the value: We want so   hence .   Match the first derivative: We want . Compute   and .  Plugging in gives , so .   Match the second derivative:  and .  At : , so and thus .   Match the third derivative:  and .  At : , so and .   Match the fourth derivative:  and .  At : , so and .   Match the fifth derivative:  and .  At : , so and .  Substituting these into gives, term by term,         "
},
{
  "id": "def-maclaurin-polynomial",
  "level": "2",
  "url": "sec-intro.html#def-maclaurin-polynomial",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Maclaurin Polynomial.",
  "body": " Maclaurin Polynomial   A Maclaurin polynomial is formed by stopping a Maclaurin series after a finite number of terms. The resulting polynomial can be used to approximate the function near .  Our answer from would be called the \"5th degree Maclaurin polynomial of sin(x)\"   "
},
{
  "id": "sec-intro-15",
  "level": "2",
  "url": "sec-intro.html#sec-intro-15",
  "type": "Remark",
  "number": "1.1.8",
  "title": "Accuracy.",
  "body": " Accuracy  The Maclaurin polynomial provides a practical approximation to the original function when only a few terms are used. Including more terms generally makes the approximation more accurate near the origin.  "
},
{
  "id": "desmos-sin-maclaurin",
  "level": "2",
  "url": "sec-intro.html#desmos-sin-maclaurin",
  "type": "Activity",
  "number": "1.1.3",
  "title": "(5 Minute) --  Desmos Exploration.",
  "body": " (5 Minute) -- Desmos Exploration   In this activity you will compare with its Maclaurin polynomial approximations using Desmos.     Open this Desmos file .     Toggle on the (the first degree Maclaurin polynomial for ).    Then, toggle on the (the third degree Maclaurin polynomial for ).    Finally, toggle on the (the fifth degree Maclaurin polynomial for ) that we discovered in .         We have also included the Desmos code for and as well. Toggle these on to see what would happen if we were to keep going!      Describe in words how the Maclaurin polynomail graph changes as we add more terms.    As more terms are added, each higher-degree Maclaurin polynomial matches more closely near the origin. The curve of the polynomial begins to follow the shape of the sine wave for a wider interval before it starts to diverge. In other words, the approximation becomes more accurate not only at but also over a larger region around it.  For example, only matches very close to 0, while and capture more of the curvature. By the time we reach or even , the polynomial is nearly indistinguishable from across most of the graphing window before eventually diverging for very large .    "
},
{
  "id": "ex-sin-approx",
  "level": "2",
  "url": "sec-intro.html#ex-sin-approx",
  "type": "Example",
  "number": "1.1.9",
  "title": "(Together as Class) -- Approximating Using a Maclaurin Polynomial.",
  "body": " (Together as Class) -- Approximating Using a Maclaurin Polynomial   Use the 3rd-degree Maclaurin polynomial for  to approximate .    Substitute into :   Using a calculator, The approximation from differs by less than , showing that even a 3rd-degree Maclaurin polynomial gives a very accurate estimate near .  Graphically here is our result:   Zooming in on and       "
},
{
  "id": "ex-sinx-over-x-approx",
  "level": "2",
  "url": "sec-intro.html#ex-sinx-over-x-approx",
  "type": "Example",
  "number": "1.1.11",
  "title": "(Together as Class) -- Approximating Integrals.",
  "body": " (Together as Class) -- Approximating Integrals   Use the 5th degree Maclaurin Polynomial to approximate:      This solution is for instructors only and would be removed for the student facing document. The intent is for this problem to be done in class together.   Recall: Dividing by gives Now integrate term by term from 0 to 1: Compute:  FYI: The actual value is about .        FYI: The actual value is about .   "
},
{
  "id": "hw-intro-series-1-3",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-1-3",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Every function has a Maclaurin series  "
},
{
  "id": "hw-intro-series-1-4",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-1-4",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  If has a Maclaurin series , then   "
},
{
  "id": "hw-intro-series-1-5",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-1-5",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Suppose has a 5th-degree Maclaurin polynomial . Then is likely closer to than is to .  "
},
{
  "id": "hw-intro-series-1-6",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-1-6",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  The 2nd-degree Maclaurin polynomial for is given by the equation:   "
},
{
  "id": "hw-intro-series-2-2",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-2-2",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  Consider the function    Construct the 6th-degree Maclaurin polynomial for .    Approximate with . Compare to a calculator value and report the absolute difference.    Comment briefly on whether you expect the approximation to be better or worse at and why (no formal theorem needed)     "
},
{
  "id": "ex-eu",
  "level": "2",
  "url": "sec-intro.html#ex-eu",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "  Consider the function    Construct the 5th-degree Maclaurin polynomial for .    Approximate with . Compare to a calculator value and report the absolute difference.     "
},
{
  "id": "hw-intro-series-2-4",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-2-4",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "  Consider the function    Substitute into your result from to create the 10th-degree Maclaurin polynomial for .    Use your result from (a) to approximate (This integral has no elementary antiderivative.)     "
},
{
  "id": "hw-intro-series-2-5",
  "level": "2",
  "url": "sec-intro.html#hw-intro-series-2-5",
  "type": "Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "  Consider the function    Construct the 4th-degree Maclaurin polynomial for .    Hypothesize a formula for the infinite Maclaurin Series. What will the coefficent be in front of ?    Integrate term-by-term to produce a power series for . Write the first five nonzero terms.    Use your polynomial from (c) to approximate . Compare with a calculator and report the absolute difference.     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
