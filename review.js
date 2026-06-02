const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic();
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
  const textBlock = response.content.find((b) => b.type === "text");
  console.log(textBlock?.text || "");
}

const prDiff = process.env.PR_DIFF || "";
if (!prDiff) {
  console.log("No PR_DIFF provided, skipping review.");
  process.exit(0);
}
reviewPR(prDiff);
