const numberLogic = (NUMBER) => {
  if ( Number.isInteger(NUMBER) && Math.sign(NUMBER) === 1 ) {
    if (NUMBER % 14 === 0 ) {
      console.log("foobar", "bar", "foo");
    } else if (NUMBER % 7 === 0) {
      console.log("bar");
    } else if (NUMBER % 2 === 0) {
      console.log("foo");
    } else {
      console.log(NUMBER)
    }
  }
};
