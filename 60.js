// Function to generate 6-digit random OTP (60)

function otpGen() {
  return Math.floor(100000 + Math.random() * 500000);
}
console.log(otpGen());
console.log(otpGen());
console.log(otpGen());

