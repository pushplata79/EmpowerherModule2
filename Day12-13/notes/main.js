function startWork()
 {
  const worker = new Worker("worker.js");          // Create worker

  worker.postMessage("start");                     // Send message

  worker.onmessage = (e) => console.log(e.data);   // Get result

  console.log("Main thread free — no freezing!");  // Main thread continues
}
