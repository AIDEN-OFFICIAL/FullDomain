const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};
if (user?.address?.zip) {
  console.log(user.address.zip);
}

// Outputs: '12345'
// If address were undefined, this would safely return undefined without throwing an error:
// allows you to safely access deeply nested properties of an object without having to check each level for null or undefined.
