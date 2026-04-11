const environment = "production";

const config = {
  testUrl: "https://urbco-api-production.up.railway.app/api",
  liveUrl: "https://urbco-api-production.up.railway.app/api",
};

const url = environment === "production" ? config.liveUrl : config.testUrl;

export { config, url, environment };
