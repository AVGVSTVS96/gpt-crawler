import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developers.cloudflare.com/workers/examples/openai-sdk-streaming/",
  match: "https://developers.cloudflare.com/workers/get-started/**",
  maxPagesToCrawl: 150,
  outputFileName: "output.json",
  maxTokens: 100000,
};
