const { events, Job, Group } = require("@brigadecore/brigadier");

events.on("exec", (e, p) => {
  var dest = "/mnt/brigade/share/hello.txt";
  var one = new Job("one", "alpine", ["echo hello > " + dest]);
  var two = new Job("two", "alpine", ["echo world >> " + dest]);
  var three = new Job("three", "alpine", ["cat " + dest]);

  one.storage.enabled = true;
  two.storage.enabled = true;
  three.storage.enabled = true;

  Group.runEach([one, two, three]);
});
