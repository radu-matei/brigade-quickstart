const { events, Job } = require("@brigadecore/brigadier");

events.on("exec", () => {
    var hello = new Job("hello", "alpine");
    hello.tasks = [
        "echo Hello",
        "echo World"
    ];

    var goodbye = new Job("goodbye", "alpine");
    goodbye.tasks = [
        "echo Goodbye",
        "echo World"
    ];

    hello.run();
    goodbye.run();
});