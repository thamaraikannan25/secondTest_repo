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
    thinking: {
      type: "enabled",
      budget_tokens: 800,
    },
    messages: [
      { role: "user", content: "Think step by step about the following problem and provide your reasoning." }
    ]
  });

  for (const block of response.content) {
    if (block.type === "thinking") {
      console.log("Thinking:\n", block.thinking);
    } else if (block.type === "text") {
      console.log("Response:\n", block.text);
    }
  }
}

think();
