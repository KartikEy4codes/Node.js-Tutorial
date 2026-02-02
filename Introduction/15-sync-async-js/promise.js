const p = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 1000);
});

p.then(console.log);
