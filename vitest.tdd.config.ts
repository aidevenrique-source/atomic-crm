import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "tdd",
    environment: "node",
    include: ["src/tdd/**/*.test.ts"],
  },
});
