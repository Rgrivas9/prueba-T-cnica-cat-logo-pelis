module.exports = (db) => {
  const showSchema = new db.Schema(
    {
      id: { type: Number, required: true },
      data: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        programType: { type: String, required: true },
        images: {
          ["Poster Art"]: {
            url: { type: String, required: true },
            width: { type: Number, required: true },
            height: { type: Number, required: true },
          },
        },
        releaseYear: { type: Number, required: true },
      },
    },
    {
      timestamps: {
        createdAt: "created",
        updatedAt: "updated",
      },
    }
  );
  return db.model("Shows", showSchema);
};
