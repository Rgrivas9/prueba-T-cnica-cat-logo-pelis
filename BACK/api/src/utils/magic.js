const enum_ = require("./enum");

exports.ResponseService = async (
  status,
  errorCode,
  message,
  data,
  prev = null,
  next = null
) => {
  return await {
    status: status,
    info: {
      errorCode: errorCode,
      message: message,
      next: next,
      prev: prev,
      data: data,
    },
  };
};

exports.LogSuccess = (msg) => {
  console.log(enum_.GREEN_LOG, msg);
};
exports.LogInfo = (msg) => {
  console.log(enum_.CYAN_LOG, msg);
};
exports.LogWarning = (msg) => {
  console.log(enum_.YELLOW_LOG, msg);
};
exports.LogDanger = (msg) => {
  console.log(enum_.RED_LOG, msg);
};
