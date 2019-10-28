const { events, Job, Group } = require('@brigadecore/brigadier');

events.on('exec', () => {
  var hello = new Job('hello', 'alpine', ['echo hello']);
  var goodbye = new Job('goodbye', 'alpine', ['echo goodbye']);

  Group.runEach([hello, goodbye]);
});
