const app = require("express");
const router = app.Router();

const { signUp, getAllUsers, checkApi } = require("./userController");

router.get("/check", checkApi);
router.post("/signup", signUp);
router.get("/get-all-users", getAllUsers);

module.exports = router;
