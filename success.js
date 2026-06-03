const message = "Operation completed successfully!";

function getSuccessMessage() {
  return message;
}

function logSuccess(details) {
  console.log(`[SUCCESS] ${details || message}`);
}

module.exports = { getSuccessMessage, logSuccess };
