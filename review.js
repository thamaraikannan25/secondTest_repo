const { thinkAboutPR } = require("./think");

async function reviewPR(prDiff) {
  const { review } = await thinkAboutPR(prDiff);
  console.log(review);
}

const prDiff = process.env.PR_DIFF || "";
if (!prDiff) {
  console.log("No PR_DIFF provided, skipping review.");
  process.exit(0);
}
reviewPR(prDiff).catch((err) => {
  console.error("Review failed:", err.message);
  process.exit(1);
});
