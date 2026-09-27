// pa11y-ci configuration. Run via `npm run a11y` (see package.json) or the
// Lighthouse/pa11y workflow. Set PA11Y_CHROME to use a specific Chrome binary.
const chromeLaunchConfig = {
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
};
if (process.env.PA11Y_CHROME) {
  chromeLaunchConfig.executablePath = process.env.PA11Y_CHROME;
}

module.exports = {
  defaults: {
    standard: "WCAG2AA",
    runners: ["htmlcs", "axe"],
    timeout: 60000,
    wait: 2000,
    // axe "incomplete" results (e.g. contrast it cannot compute because a
    // fixed footer overlaps scrolled content) need a human, not a red build.
    levelCapWhenNeedsReview: "warning",
    concurrency: 1,
    chromeLaunchConfig,
  },
};
