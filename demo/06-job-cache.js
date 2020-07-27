const { events, Job } = require("@brigadecore/brigadier");

events.on("exec", (e) => {
  var job = new Job("cacher", "alpine");
  job.cache.enabled = true;

  job.tasks = [
    "echo " + e.buildID + " >> /mnt/brigade/cache/jobs.txt",
    "cat /mnt/brigade/cache/jobs.txt",
  ];

  job.run();
});
