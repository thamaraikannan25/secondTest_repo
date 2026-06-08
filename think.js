function think(thought, logger = console.log) {
  logger(`Thinking: ${thought}`);
  return thought;
}

module.exports = { think };
