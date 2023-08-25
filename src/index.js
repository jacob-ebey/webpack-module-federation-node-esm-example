import("@app/other/federated").then((mod) => {
  console.log({
    APP_NAME,
    REMOTE_NAME: mod.name,
  });
});
