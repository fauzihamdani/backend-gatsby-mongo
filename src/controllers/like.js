const { Post, User, Like } = require('../../models/');

exports.addLike = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);
      const idUser = req.user.id;
      // console.log(idUser);

      // if (!req.files.image)
      //     return res.status(400).send({
      //         status: "fail",
      //         message: "image not found",
      //     });

      const checkPostLiked = await Like.findOne({
         where: { postId: req.body.postId, userId: req.user.id },
      });

      if (checkPostLiked) {
         const deletedLike = await Like.destroy({
            where: { id: checkPostLiked.id },
         });

         return res.send({
            status: 'success',
            data: {
               like: deletedLike,
            },
         });
      }

      const like = await Like.create({
         postId: req.body.postId,
         userId: req.user.id,
      });

      const likeWithPost = await Like.findOne({
         where: { id: like.id },
         include: {
            model: Post,
            attributes: {
               exclude: ['password', 'createdAt', 'updatedAt', 'usernotif'],
            },
            as: 'post',
         },
         attributes: { exclude: ['userId', 'id', 'createdAt', 'updatedAt'] },
      });

      res.send({
         status: 'success',
         data: {
            like: likeWithPost,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
