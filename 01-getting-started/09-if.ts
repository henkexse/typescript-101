let condition: boolean | string | number
let message: string

// The following statements are all truthy
//condition = true
// condition = "foo"
// condition = 42

// The following statements are all falsy
 condition = false
// condition = ""
// condition = 0

if (condition) {
    message = "Success"
} else {
    message = "Failure"
}

console.log(message) // Success (if condition is truthy)
// Failure (if condition is falsy)

export {}
