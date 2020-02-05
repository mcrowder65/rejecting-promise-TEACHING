Welcome back, friends!

We have our app that gets a list of dogs and cats and hamsters and tells which one of three would
be the best pet.

Currently, if you pass in a breed that doesn't exist into `utilities.getBestPet`, it just returns a string saying
that that particular breed isn't found.

So far we've only learned about 2 promise statuses: fulfilled and pending.

When we call `.then` on our pending promise, it resolves that promise, and fulfills the value.

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
      throw new Error(`${breed} not found`)
    }
  }
}
```

Now, when `getBreed` throws an error, it will result in a rejected promise.

Let's update `Winter White` to only say `Winter` and see what happens in the terminal

You can see it says, Error: Not Found, and there is an Unhandled promise rejection.
So... let's handle that rejection!

Do you have any guesses on how we would handle a promise rejection?

So there are actually two ways to handle a promise rejection.

The first way I'll show you is you can actually pass in two functions into `.then`

If you see where we call `getHamsters`'s .then, we can add a second function in there.

And the error gets injected into that function.

```js
console.error
```

And you can see that now we don't get any warnings about a promise rejection not being handled, and the undefined at the end
is printed because console.log() is always running in the .then

The other way to catch rejected promises is to actually add a .catch clause after your .then function!

Let's update the the getHamsters callback to handle this.

```js
getDog("Corgi")
  .then(dog => {
    return getCat("Russian Blue").then(cat => {
      return getHamsters("Winter")
        .then(hamster => {
          return utilities.getBestPet(dog, cat, hamster)
        })
        .catch(error => {
          console.error(error)
        })
    })
  })
  .then(console.log)
```

Ok cool!

So.. I actually prefer using .catch way rather than the second function way. I think it's more declarative, meaning it's easier
to read the code and see where we are catching rejected promises.

OK, so what happens if `getDog` or `getCat` also fail?

We can add separate `.catch` statements to each respective function ... if this is a requirement where you need to know
who rejected, then you would have to do that, but there is also a way to catch every single rejection in case anything fails.

Take a moment to think about how you could do that..

So we can actually accomplish this by adding a .catch at the very bottom.

```js
.catch(error => {
  console.error(error)
})
```

Let's update it so Winter is now Winter White so it passes, and we'll change corgi to be Maltese

Now, we can see that there is an error saying Maltese is not found.

Now, it turns out that both of our .catch's are identical, so let's add a little string to ensure we're running the right things.

```js
getHamsters

outer
```

Now we can see that the outer catch is the one printing the error and handling the rejection.

Now wait a second, do you remember that before we added the .catch, undefined was getting printed?

That's because the .then console.log never gets run because something errored out beforehand.

Let's go ahead and update `Maltese` to be `Corgi` again

We can see that Winter White is printing, everything is good to go, all promises are resolving just fine.

Now if we make Winter White just Winter,

Then now we're back to the `getHamsters` error and undefined being printed..

but why is undefined getting printed?

Do you notice in utilities.getBestPet, we are returning the result there?
In the .catch method of `getHamsters`, we don't return anything. So the next resolution of that promise is not going
have a value.

What do you think would happen if we updated the getHamsters catch to return "hello world"?
Let's see!

```js
.catch(error => {
  console.error("getHamsters ", error)
  return "hello world"
})
```

Cool, if you look at the terminal, you can see "hello world" getting printed.

Now, instead of getHamsters having that catch, let's delete it, and see what happens.

We now see that only `outer` gets printed, and we don't have an undefined getting printed.

This catch outside is all encompassing, it catches everything that could possibly throw during function execution.

I hope all of this has made sense, I'll see you in the next video where we'll have an exercise to wrap up all of our learning!
