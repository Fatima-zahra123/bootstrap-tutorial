let promise2 = new Promise(
  (resolve, reject) => {
    // Simulate waiting for the toy (like waiting for your friend)

    const toyAvailable = true // Change this to false to simulate a failure
    const toys = ['toy1', 'toy3', 'toy4']
    if (toyAvailable) {
      resolve(toys) // Success
    } else {
      reject("Sorry, I couldn't find your toy.") // Failure
    }
  }, // Wait for 1 second
)

promise2.then((resolveval) => {
  console.log(resolveval)
  resolveval.length = 2
  console.log(resolveval)

  return resolveval
})

promise2.then((resolveval) => {
  console.log(resolveval)
})

console.log(promise2)
console.log('helooo')

let promise = new Promise((resolve, reject) => {
  // Simulate waiting for the toy (like waiting for your friend)
  setTimeout(() => {
    const toyAvailable = false // Change this to false to simulate a failure
    const toys = ['toy1', 'toy3', 'toy4']
    if (toyAvailable) {
      resolve({ message: 'Here are your toys!', toys: toys }) // Success
    } else {
      reject(Error("Sorry, I couldn't find your toy.")) // Failure
    }
  }, 3000) // Wait for 1 second
})

setTimeout(() => {
  console.log(promise)
}, 5000)
console.log(promise)

promise
  .then((resolveval) => {
    resolveval = resolveval.toys
    return resolveval
  })
  .then((resolveval) => {
    console.log(resolveval)
  })
  .catch((rej) => {
    console.log(rej)
  }).finally(()=>{
    console.log("the operation is done");
  })
