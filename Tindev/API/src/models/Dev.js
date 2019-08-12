const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    bio: String,
    avatar: {
      type: String,
      required: true
    },
    likes: [
      {
        //relacionando o banco , como se fosse uma chave estrangeira
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ],
    dislikes: [
      {
        //relacionando o banco , como se fosse uma chave estrangeira
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ]
  },
  {
    timestamps: true
    //createdAt, updatedAt - Salva a data de criação e a data da ultima atualização
  }
);

module.exports = model("Dev", DevSchema);
