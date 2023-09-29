console.log("Worker creado ");
onmessage = (e) => {
  // postMessage -> para enviar al thread main
  console.log(`worker: ${e.data}`);
};
