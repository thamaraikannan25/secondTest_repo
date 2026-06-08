const Anthropic = require("@anthropic-ai/sdk");

const model = process.env.CLAUDE_MODEL || "claude-sonnet-4-6";

// Sample: send a simple message using the Anthropic SDK
async function runSample() {
  const isDryRun = !process.env.ANTHROPIC_API_KEY ||
                   process.env.ANTHROPIC_API_KEY === 'placeholder';

  if (isDryRun) {
    console.log("DRY RUN: API key not set, skipping Claude call");
    return;
  }

  const client = new Anthropic.Anthropic();

  const response = await client.messages.create({
    model: model,
    max_tokens: 256,
    messages: [
      { role: "user", content: "Say hello from nine.js!" }
    ]
  });

  console.log(response.content[0].text);
}

runSample();
