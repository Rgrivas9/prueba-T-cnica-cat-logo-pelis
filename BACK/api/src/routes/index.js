const apiServices = require("../controller/index");

const routes = (app) => {
  app.use("/api/v1", apiServices);
  app.disable("x-powered-by");
};

module.exports = routes;
