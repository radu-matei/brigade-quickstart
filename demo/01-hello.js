const { events, Job } = require("@brigadecore/brigadier");

events.on("exec", () => {
    var job = new Job("do-nothing", "alpine");
    job.tasks = [
        "echo Hello",
        "echo World"
    ];

    job.run();
});

events.on("custom-event", () => {
    var job = new Job("custom-job-handler", "alpine");
    job.tasks = [`echo "I am doing very important work"`];

    job.run();
});