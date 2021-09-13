const express = require('express');
const router = express.Router();

const {
   addTodo,
   getTodos,
   deleteTodo,
   updateTodo,
} = require('../controllers/todo');

router.post('/todo', addTodo);
router.get('/todo', getTodos);
router.delete('/todo/:id', deleteTodo);
router.put('/todo/:id', updateTodo);

// const { authenticated } = require('../middlewares/auth');
// const { uploadFile } = require('../middlewares/upload');

// const {
//    addTodo,
//    getTodos,
//    deleteTodo,
//    updateTodo,
// } = require('../controllers/todo');
// router.post('/todo', addTodo);
// router.get('/todo', getTodos);
// router.delete('/todo/:id', deleteTodo);
// router.patch('/todo/:id', updateTodo);

// const {
//    getUser,
//    registerUser,
//    deleteUser,
//    login,
//    getUserById,
//    checkAuth,
//    getUserProfile,
//    updateUser,
// } = require('../controllers/user');

// const {
//    getPosts,
//    getPostsById,
//    addPost,
//    // addLike,
//    getPostsByFollowed,
//    getPostsByUser,
// } = require('../controllers/post');

// const {
//    addFollower,
//    getFollowing,
//    getFollower,
// } = require('../controllers/follower');

// const { addComment, getComment } = require('../controllers/comment');
// const { insertChat, getChat } = require('../controllers/chat');
// const { addLike } = require('../controllers/like');

// // user api
// router.get('/users', getUser);
// router.get('/user-by-id/:id', authenticated, getUserById);
// router.post('/login', login);
// router.post('/register', registerUser);
// router.delete('/user/:id', authenticated, deleteUser);
// router.patch(
//    '/user/:iduser',
//    authenticated,
//    uploadFile('fileUpload'),
//    updateUser
// );
// router.get('/check-auth', authenticated, checkAuth);

// // feed api
// router.get('/feed', authenticated, getPosts);
// router.post('/feed', authenticated, uploadFile('fileUpload'), addPost);
// // router.post('/like', authenticated, addLike);
// router.get('/feed-by-followed', authenticated, getPostsByFollowed);
// router.get('/feed-by-id/:userId', authenticated, getPostsById);
// router.get('/feed-by-user', authenticated, getPostsByUser);

// // follower api
// router.post('/add-follower', authenticated, addFollower);
// router.get('/following/:userid', authenticated, getFollowing);
// router.get('/follower/:userid', authenticated, getFollower);

// // comment api
// router.post('/comment', authenticated, addComment);
// router.get('/comments/:feedid', authenticated, getComment);

// // chat api
// router.post('/message/:iduserto', authenticated, insertChat);
// router.get('/message/:usertoid', authenticated, getChat);

// //like api
// router.post('/like', authenticated, addLike);

module.exports = router;
