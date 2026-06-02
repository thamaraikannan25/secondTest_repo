const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic();
const model = process.env.CLAUDE_MODEL || "claude-sonnet-4-6";

async function thinkAboutPR(prDiff) {
  const response = await client.messages.create({
    model: model,
    max_tokens: 16000,
    thinking: {
      type: "enabled",
      budget_tokens: 10000,
    },
    messages: [
      {
        role: "user",
        content: `Review this pull request diff carefully and identify any bugs, security issues, or quality problems:\n\n${prDiff}`,
      },
    ],
  });

  const thinkingBlock = response.content.find((b) => b.type === "thinking");
  const textBlock = response.content.find((b) => b.type === "text");

  return {
    thinking: thinkingBlock?.thinking || "",
    review: textBlock?.text || "",
  };
}

module.exports = { thinkAboutPR };
