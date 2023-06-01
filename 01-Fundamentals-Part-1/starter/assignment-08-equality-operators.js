//step 1 - 5
/*
const numNeighbors = (prompt('How many neighbor countries does your country have?'));

if (numNeighbors == 1) {
    console.log('Only 1 border');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
//step 6
/*
if (numNeighbors === 1) { //when there is exactly 1 border the precisely equal to does not automatically coerce from string to number. So it would default to no borders.
    console.log('Only 1 border');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
//Step 7 - 8 
/*
const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
if (numNeighbors === 1) { //This produces the desired result 'Only 1 border' - the string value has been converted to a number value
    console.log('Only 1 border');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
// using the precisely equal to and number conversion in this situation makes sense as
// both data values are intended to be numerical. Since the string value is useful the
// initial data input it must be converted using the Number function for precision.