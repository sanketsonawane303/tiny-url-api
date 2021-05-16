const aplhabets = 'abcdefghijklmnopqrstuvwxyz';
const radix = aplhabets.length;

module.exports = function (lastCode) {
  let numVal = 0;
  lastCode.split('').forEach((ch) => {
    numVal = numVal * radix + aplhabets.indexOf(ch);
  });

  numVal++;

  let nextCode = '';
  while (numVal > 0) {
    nextCode = aplhabets[numVal % radix] + nextCode;
    numVal = parseInt(Math.floor(numVal / radix));
  }

  return nextCode;
};
