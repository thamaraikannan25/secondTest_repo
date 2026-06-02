const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic.Anthropic();
const model = process.env.CLAUDE_MODEL || "claude-sonnet-4-6";

async function reviewPR(prDiff) {
  const response = await client.messages.create({
    model: model,
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `Review this pull request diff for bugs, security issues, and quality problems. Be specific and actionable:\n\n${prDiff}`,
      },
    ],
  });
  console.log(response.content[0].text);
}

const prDiff = process.env.PR_DIFF || "";
reviewPR(prDiff);
