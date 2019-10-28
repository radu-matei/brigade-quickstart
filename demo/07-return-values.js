const { events, Job } = require('@brigadecore/brigadier');

events.on('exec', (e, p) => {
  var one = new Job('one', 'alpine');
  var two = new Job('two', 'alpine');

  one.tasks = ['echo world'];
  one.run().then(result => {
    two.tasks = ['echo hello ' + result.toString()];
    two.run().then(result2 => {
      console.log(result2.toString());
    });
  });
});
