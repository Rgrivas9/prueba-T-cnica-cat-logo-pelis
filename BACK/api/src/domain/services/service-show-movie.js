const magic = require("../../utils/magic");
const enum_ = require("../../utils/enum");
const odmShow = require("../odm/odm-show");

exports.GetAll = async (req, res) => {
  let status = "Success",
    errorcode = "",
    message = "",
    data = "",
    statuscode = 0,
    response = {},
    prev = null,
    next = null;
  const page =
      req.query.page && !isNaN(parseInt(req.query.page))
        ? parseInt(req.query.page)
        : 1,
    limit =
      req.query.limit && !isNaN(parseInt(req.query.limit))
        ? parseInt(req.query.limit)
        : 20,
    order =
      req.query.order == "title" || req.query.order == "releaseYear"
        ? req.query.order
        : "title",
    mode = req.query.mode == "-1" ? parseInt(req.query.mode) : 1,
    max =
      req.query.max && !isNaN(parseInt(req.query.max))
        ? parseInt(req.query.max)
        : 2100,
    min =
      req.query.min && !isNaN(parseInt(req.query.min))
        ? parseInt(req.query.min)
        : 0,
    type = "movie";
  const options = {
    page: page,
    limit: limit,
    order: order,
    mode: mode,
    max: max,
    min: min,
    type: type,
    skip: 0,
  };
  try {
    let respOdm = await odmShow.GetAll(options);
    if (respOdm.err) {
      (status = "Failure"),
        (errorcode = respOdm.err.code),
        (message = respOdm.err.messsage),
        (statuscode = enum_.CODE_BAD_REQUEST);
    } else {
      (message = "Success Response"),
        (data = respOdm[0]),
        (prev = respOdm[1]),
        (next = respOdm[2]),
        (statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT);
    }
    response = await magic.ResponseService(
      status,
      errorcode,
      message,
      data,
      prev,
      next
    );
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log("err =", error);
    response = await magic.ResponseService(
      "Failure",
      enum_.CODE_INTERNAL_SERVER_ERROR,
      error,
      ""
    );
    return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
  }
};

exports.Create = async (req, res) => {
  let status = "Success",
    errorcode = "",
    message = "",
    data = "",
    statuscode = 0,
    response = {};
  try {
    if (req.body) {
      const url = req.file ? req.file.path : "Not image found";
      let respOdm = await odmShow.Create(req.body, url);
      if (respOdm.err) {
        (status = "Failure"),
          (errorcode = respOdm.err.code),
          (message = response.err.message),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = "Show Created"), (statuscode = enum_.CODE_CREATED);
      }
    } else {
      (status = "Failure"),
        (errorcode = enum_.CODE_IAM_A_TEAPOT),
        (message = "Fields are required"),
        (statuscode = enum_.CODE_BAD_REQUEST);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log("error =", error);
    return res
      .status(enum_.CODE_INTERNAL_SERVER_ERROR)
      .send(
        await magic.ResponseService(
          "Failure",
          enum_.CODE_BAD_REQUEST,
          "err",
          ""
        )
      );
  }
};
exports.PutImage = async (req, res) => {
  let status = "Success",
    errorcode = "",
    message = "",
    data = "",
    statuscode = 0,
    response = {};
  try {
    if (req.body) {
      const url = req.file ? req.file.path : "Not image found";
      const { id } = req.params;
      let respOdm = await odmShow.PutImage(id, url);
      if (respOdm.err) {
        (status = "Failure"),
          (errorcode = respOdm.err.code),
          (message = response.err.message),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = "Show Modified"), (statuscode = enum_.CODE_CREATED);
      }
    } else {
      (status = "Failure"),
        (errorcode = enum_.CODE_IAM_A_TEAPOT),
        (message = "Fields are required"),
        (statuscode = enum_.CODE_BAD_REQUEST);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log("error =", error);
    return res
      .status(enum_.CODE_INTERNAL_SERVER_ERROR)
      .send(
        await magic.ResponseService(
          "Failure",
          enum_.CODE_BAD_REQUEST,
          "err",
          ""
        )
      );
  }
};
