Hello friends!

We have our little tiny nodejs app that gets a list of dogs and cats and hamsters and tells which one of three would
be the best pet.

Currently, if you pass in a breed that doesn't exist into `utilities.getBestPet`, it just returns a string saying
that that particular breed isn't found.

So far we've only learned about 2 promise statuses: fulfilled and pending.

When we call `.then` on our pending promise, it resolves the promise, and fulfills the value.

What happens if an error is thrown in the code where the promise was generated?

Well it rejects... and we have to handle this in our code.

Let's update the implementation of `getBreed` to throw an error when the name isn't found in the list of names.

```js
function getBreed(breed) {
  return function(names) {
    const name = names.find(name => name === breed)
    if (name) {
      return name
    } else {
      throw new Error("Not Found")
    }
  }
}
```

Now, when `getBreed` throws an error, it will reject the promise.

Let's update `Winter White` to only say `Winter` and see what happens in the terminal

You can see it says, Error: Not Found, and there is an Unhandled promise rejection.
So... let's handle that rejection! 

Do you have any guesses on how we would handle a promise rejection?
