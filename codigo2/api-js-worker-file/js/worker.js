console.log("Worker inicializado...");
onmessage = (e) => {
  console.log(`worker: ${e.data}`);
  postMessage("worker: " + e.data);
};
