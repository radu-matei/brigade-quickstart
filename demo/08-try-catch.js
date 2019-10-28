const { events, Job } = require('@brigadecore/brigadier');

events.on('exec', exec);

async function exec(e, p) {
  let j1 = new Job('j1', 'alpine', ['echo hello']);
  // This will fail
  let j2 = new Job('j2', 'alpine', ['exit 1']);

  try {
    await j1.run();
    await j2.run();
    console.log('done');
  } catch (e) {
    console.log(`Caught Exception ${e}`);
  }
}
