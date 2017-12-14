import d3 from 'd3';

/**
 * Create a function called getD3 that returns the imported d3
 * Make this function visible outside of the module
 */
export const getD3 = () => {
  return d3;
};

/**
 * Create a function that will receive in parameter a d3 object and return
 * a function taht will return the d3 object
 * Function name is : functionThatReturnsFunction
 */
export const functionThatReturnsFunction = d3object => {
  return () => {
    return d3object;
  };
};
