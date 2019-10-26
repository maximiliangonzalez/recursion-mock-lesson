function log() {
  console.log('pushing a new frame to the call stack');
}

function logRecursive1() {
  console.log('pushing a new frame to the call stack');
  logRecursive1();
}

// FIGURE OUT WHAT EXACTLY IS BEING CREATED EACH TIME A LOOP ITERATES: CONTEXT/SCOPE? ACTUALLY AN EXECUTION CONTEXT?
function logLoop1() {
  while(true) {
    console.log('creating a new local execution context')
  }
}

// VERIFY THIS INFO
// the JS engine has a maximum amount of stack frames because they all have to be stored - it takes up space - anything declared will be stored in each stack frame
// there's no error for infinite loops because iterations don't get stored anywhere, so loops take up no space

function logLoop2(num) {
  for (let i = 0; i < num; i++) {
    console.log('creating a new local execution context');
  }
}

function logRecursive2(num) {
  if (num <= 0) {
    return;
  }
  console.log('pushing a new frame to the call stack');
  logRecursive2(num - 1);
  console.log('popping a frame off the call stack');
}

function exponentLoop(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function exponentRecursive(base, exponent) {
  if (exponent <= 0) {
    return 1;
  }
  return base * exponentRecursive(base, exponent - 1);
}