const { events, Job } = require("@brigadecore/brigadier");

events.on("exec", () => {
  var job = new Job("do-nothing", "alpine");
  job.tasks = ["echo Hello", "echo World"];

  job.run();
});
