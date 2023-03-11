const conn = require("../repositories/mongo.repository");

exports.GetAll = async (options) => {
  try {
    const numShows = await conn.db.connMongo.Show.countDocuments({
      ["data.programType"]: options.type,
    });
    let numPages =
      numShows % options.limit > 0
        ? numShows / options.limit + 1
        : numShows / options.limit;
    numPages = numPages % 2 != 0 ? Math.ceil(numPages) - 1 : numPages;
    if (options.page > numPages || options.page < 1) {
      options.page = numPages;
    }
    const prev = options.page == 1 ? null : options.page - 1;
    const next = options.page == numPages ? null : options.page + 1;
    options.skip = (options.page - 1) * options.limit;
    return [
      await conn.db.connMongo.Show.find({
        ["data.programType"]: options.type,
        ["data.releaseYear"]: { $gte: options.min, $lte: options.max },
      })
        .sort({ [`data.${options.order}`]: options.mode })
        .skip(options.skip)
        .limit(options.limit),
      prev,
      next,
    ];
  } catch (error) {
    console.log("err odm-show.getAll =", error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (object, url) => {
  try {
    const data = await new conn.db.connMongo.Show({
      id: object.id,
      data: {
        title: object.data.title,
        description: object.data.description,
        programType: object.data.programType,
        images: {
          ["Poster Art"]: {
            url: url,
            width: object.data.images["Poster Art"].width,
            height: object.data.images["Poster Art"].height,
          },
        },
        releaseYear: object.data.releaseYear,
      },
    });
    data.save();
    return true;
  } catch (error) {
    console.log("err odm-Show.Create =", error);
    return await { err: { code: 123, message: error } };
  }
};
exports.PutImage = async (id, url) => {
  try {
    const show = await conn.db.connMongo.Show.findOne({ id: id });
    await conn.db.connMongo.Show.findOneAndUpdate(
      { id: id },
      {
        data: {
          ...show.data,
          images: {
            ["Poster Art"]: { ...show.data.images["Poster Art"], url: url },
          },
        },
      },
      {
        new: true,
      }
    );
    return true;
  } catch (error) {
    console.log("err odm-show.PutImage =", error);
    return await { err: { code: 123, message: error } };
  }
};
