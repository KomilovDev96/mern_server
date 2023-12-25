const Router = require("express");
const router = new Router()
router.get(async (req, res) => {
    try {
        return res.json({
            message: "hello World"
        })
    } catch (err) {
        res.send({ message: "Server error" })
    }
})


module.exports = router
