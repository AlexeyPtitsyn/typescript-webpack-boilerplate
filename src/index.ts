import Module from './test2';

function x(msg: string): string {
  return msg + '.';
}

const y = x('test');

console.log(y);

Module.myFunction("test 2");
