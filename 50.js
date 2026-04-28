let x = {},
  o = { n: "a" };
c = (b) => {
  0 == Object.keys(b).length ? console.log("no", b) : console.log(b);
};
c(o);
c(x); 

// console.log("no {}"); console.log("{ n:'a' }");
/**
 * @param {number} x
 * @return {number}
 */
//  from the array of numbers find the differece between the total sum and digit sum after cinverting every numbers to single digits and adding it 

var differenceOfSum = function (nums) {
  let arr = nums;
  let dsum = 0;
  let esum = 0;
  arr = arr.join("").split("");
  console.log(arr);

  for (let i = 0; i < nums.length; i++) {
    esum += nums[i];
  }
  console.log(esum);

  for (let i = 0; i < arr.length; i++) {
    dsum += parseInt(arr[i]);
    console.log(dsum);
  }
  return esum - dsum;
};
console.log(differenceOfSum([1, 2, 34, 1]));
