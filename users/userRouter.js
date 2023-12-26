const app = require("express");
const router = app.Router();

const { signUp, getAllUsers } = require("./userController");

router.post("/signup", signUp);
router.get("/get-all-users", getAllUsers);

module.exports = router;
