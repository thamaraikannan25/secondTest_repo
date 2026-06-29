const Anthropic = require("@anthropic-ai/sdk");

const model = process.env.CLAUDE_MODEL || "claude-sonnet-4-6";

const isDryRun = !process.env.ANTHROPIC_API_KEY ||
                 process.env.ANTHROPIC_API_KEY === 'placeholder';

if (isDryRun) {
  console.log("DRY RUN: API key not set yet, skipping Claude call");
  process.exit(0);
}

const client = new Anthropic.Anthropic();

async function think() {
  const response = await client.messages.create({
    model: model,
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Think deeply and share your reasoning process." }
    ]
  });
  console.log(response.content[0].text);
}

think();
