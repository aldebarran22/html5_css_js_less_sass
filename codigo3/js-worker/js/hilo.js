console.log("Worker inicializado ...");
onmessage = (e) => {
  console.log(`Worker: ${e.data}`);

  // Mensaje de vuelta:
  postMessage("Worker: " + e.data);
};
