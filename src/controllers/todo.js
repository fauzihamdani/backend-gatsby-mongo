const Todo = require('../../models/Todo');

exports.getTodos = async (req, res) => {
   try {
      const todos = await Todo.find({});

      res.send({
         status: 'success',
         data: {
            todo: todos,
         },
      });
   } catch (error) {}
};

exports.addTodo = async (req, res) => {
   const { name } = req.body;
   const isDone = false;

   console.log('hittng addTodo');

   try {
      const newTodo = new Todo({
         name,
         isDone: false,
      });

      const insertTodo = await newTodo.save();

      // res.json(insertTodo);

      res.send({
         status: 'success',
         data: {
            Todo: insertTodo,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.deleteTodo = async (req, res) => {
   try {
      let todo = await Todo.findById(req.params.id);
      if (!todo) {
         return res.send({
            status: 'failed',
            message: "Todo item you search doens't exist",
         });
      }

      await Todo.findByIdAndRemove(req.params.id);

      return res.send({
         status: 'success',
         message: 'Item has been deleted',
      });
   } catch (error) {
      console.log(error);
   }
};

exports.updateTodo = async (req, res) => {
   console.log('hitting update todo');
   const { id } = req.params;
   const { isDone } = req.body;

   console.log('isdone', isDone);

   const todoField = {};
   if (isDone !== undefined) todoField.isDone = isDone;
   console.log(todoField);
   try {
      let findTodo = await Todo.findById(req.params.id);

      if (!findTodo) {
         return res.send({
            status: 'failed',
            message: "Todo item you search doens't exist",
         });
      }

      let todo = await Todo.findByIdAndUpdate(
         id,
         { $set: todoField },
         { new: true }
      );

      return res.send({
         status: 'success',
         message: 'Item has been updated',
         data: {
            todo: todo,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

// const { todo } = require('../../models');

// exports.addTodo = async (req, res) => {
//    try {
//       const { body } = req;
//       const { listtodo } = body;
//       console.log('response body', body);

//       const todoInput = await todo.create({
//          listTodo: listtodo,
//          isDone: 0,
//       });

//       res.send({
//          status: 'success',
//          data: {
//             feed: todoInput,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.getTodos = async (req, res) => {
//    console.log('Get Todo');
//    try {
//       const todos = await todo.findAll();

//       res.send({
//          status: 'success',
//          data: {
//             todo: todos,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.deleteTodo = async (req, res) => {
//    try {
//       const { id } = req.params;
//       const deletedTodo = await todo.destroy({ where: { id } });

//       res.send({
//          status: 'succesfully deleted',
//          data: {
//             feed: deletedTodo,
//          },
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };

// exports.updateTodo = async (req, res) => {
//    try {
//       const { id } = req.params;
//       const { body } = req;
//       const updateTodo = await todo.update(body, { where: { id: id } });

//       res.send({
//          status: 'succesfully updated',
//       });
//    } catch (error) {
//       console.log(error);
//    }
// };
