// think.js

function think(thought) {
  if (thought == null) {
    throw new Error('thought must not be null or undefined');
  }
  console.log(`Thinking: ${thought}`);
  return thought;
}

module.exports = { think };
