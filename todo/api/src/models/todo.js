import { model, Schema } from "mongoose"

const todo = new Schema({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    isComplete: {
      type: Boolean,
    },
  },
  {
    collection: 'todos'
  },
);

module.exports = model('Todo', todo);
