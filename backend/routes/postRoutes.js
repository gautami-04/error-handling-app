const express = require("express");
const router = express.Router();

// Fake data
let posts = [{ id: 1, title: "Hello" }];

// CREATE (Validation Error)
router.post("/", (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return next({ status: 400, message: "Title is required" });
  }

  const newPost = { id: Date.now(), title };
  posts.push(newPost);

  res.json({ success: true, data: newPost });
});

// DELETE (Authorization Error)
router.delete("/:id", (req, res, next) => {
  if (!authorized) {
    return next({ status: 403, message: "Unauthorized" });
  }
});

// GET (Not Found Error)
router.get("/:id", (req, res, next) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) {
    return next({ status: 404, message: "Post not found" });
  }

  res.json({ success: true, data: post });
});

module.exports = router;