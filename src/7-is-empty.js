export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === '';
  }
  if (type === "array") {
    return stringArrayOrObject.length === 0;
  } 
  if (type === "object") {
    return Object.keys(stringArrayOrObject).length === 0;
  }
   else {
    return false;
  }
};

//Depending on the data type, check if they are empty and return true