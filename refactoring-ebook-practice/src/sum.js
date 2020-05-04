const isNum = (a) => !isNaN(Number.parseFloat(a));

export const sum = (a, b) => {
  if ( !isNum(a) || !isNum(b) ) {
    return undefined;
  }
  return a+b;
};