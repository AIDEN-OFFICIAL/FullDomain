// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("the promise is ressolved please continue");
//   }, 4000);
// });
// function getdata() {
//   return p;
// }
// let a = getdata();
// a.then((res) =>
//   setTimeout(() => {
//     console.log(res);
//   }, 5000)
// ).catch((err) => console.log(err));

// promose chaining
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`thepromise is delayed for:${ms} milliseconds`);
//     }, ms);
//   });
// }
// delay(2000)
//     .then((res) => {
//     console.log(res);
//     return delay(1000);
//   }).then((res) => {
//     console.log(res);
//     return delay(4000);
//   }).then((res) => {
//     console.log(res);
//     return delay(1500);
//   }).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
// so the delay 2000 works first then the next and so on , according to the time but only after the previous is executed

// using promise all

// function lag(ms, a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a != 0) {
//         resolve(`10/${a}=${10 / a}`);
//       } else {
//         reject("rejected");
//       }
//     }, ms);
//   });
// }

// Promise.all([lag(1000, 4), lag(3000, 3), lag(2000, 3)])
//     // set any promise to 0 ex:lag(3000,0) then the promise all returns rejected
//   .then((res) => res.forEach((mes) => console.log(mes)))
//     .catch((err) => console.log(err));
// //   likewise we can do promise any ,race and all settled

// async await

// function delay(ms, a) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (a != 0) {
//           resolve(`10/${a}=${10 / a}`);
//         } else {
//           reject("rejected");
//         }
//       }, ms);
//     });
// }

// async function delayHandle() {
//     try {
//       const ms1 = await delay(1000, 3);
//       console.log(ms1);
//       const ms2 = await delay(2000, 0);
//       console.log(ms2);
//       const ms3 = await delay(3000, 3);
//       console.log(ms3);
//     } catch (err) {
//       console.log("oops:", err);
//     }
//   }
// delayHandle();

// async await using promise all

function delay(ms, a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a != 0) {
        resolve(`10/${a}=${10 / a}`);
      } else {
        reject("rejected because of 0");
      }
    }, ms);
  });
}

async function delayHandle() {
  try {
    //use promise AbortController, allsettled ,race and any and see the difference of results
    const result = await Promise.allSettled([
      delay(1000, 0),
      delay(2000, 1),
      delay(500, 1),
      delay(5000, 0),
    ]);
    console.log(result);
  } catch (err) {
    console.log("oops:", err);
  }
}
delayHandle();
