const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;
const router = koaJoiRouter();

const getController = require("../controllers/main-controllers")
const schemas = require("./schemas")

router.get("/hello", getController.getAllUsers);
router.get('/email', getController.getUsersEmail)
router.get('/hello/:id', getController.getUserById)
router.get('/login', getController.login)
router.route({method: "POST",
    path: "/hello",
    validate: {
        body: schemas.createSchema,
        type: "json",
    },
    handler: getController.create
});
router.route({method: "DELETE",
    path: "/hello/:id",
    handler: getController.deleteUser
})



module.exports = router;