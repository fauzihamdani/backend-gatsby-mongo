const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   isDone: {
      type: Boolean,
      required: true,
   },
});

module.exports = mongoose.model('todoList', TodoSchema);
