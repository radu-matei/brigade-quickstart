const { events, Job } = require("@brigadecore/brigadier");

events.on("exec", async () => {
  var hello = new Job("hello", "alpine", ["echo hello"]);
  var goodbye = new Job("goodbye", "alpine", ["echo goodbye"]);

  await hello.run();
  await goodbye.run();

  console.log("done");
});
