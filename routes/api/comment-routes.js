const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// api/comments/<pizzaId>/<commentid>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// api/comments/<pizzaId>/<commentid>/<replyId>
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
