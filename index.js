

const logHelloWorld = options => ({
  ...options,
  anotherOption: 'Hello, World!',
});

const options = logHelloWorld({ foo: '1', bar: '2' });

console.log(options);
