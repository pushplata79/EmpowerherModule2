self.onmessage = function() {
  let sum = 0;

  // Slow task (runs in background)
  for (let i = 0; i < 500000000; i++) {
    sum += i;
  }

  postMessage("Sum = " + sum);
};
