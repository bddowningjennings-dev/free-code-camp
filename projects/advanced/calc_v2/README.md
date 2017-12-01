# Calculator

## Calculator Resources:
Originally, I was making it toooo complicated. I was creating DOM elements for the buttons based off of an array - and I was classifying the buttons by either being a number or having an action. Then I was going to use the assigned action (which was also the element's id) to call unique funcitons based on the elements click event...

But I wasn't solving the main problem with this approach and I was trying to toggle values to track operations and decimals and give conditionals for when and how the action functions would work... it was a confusing mess and I should have both psuedocoded and taken breaks rather than patching problems/making everything more confusing.

So now I'm ready to address the only thing that is challenging in this problem. I need to allow the click event of any of the operator elements to have access to the second number to be operated on. That, or I need to keep track of the first number and the operator and allow the second number to complete the operation and reset the tracking to no operator.

I found this [stackoverflow](https://stackoverflow.com/questions/23237940/how-to-wait-till-click-inside-function) post helpful for the way I was thinking of solving this.