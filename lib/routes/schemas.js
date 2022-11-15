const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;

const createSchema = Joi.object({
  UserName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  UserEmail: Joi.string().email().required(),
  Password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
  .required(),
});

const byIdSchema = Joi.object({
  id: Joi.number().required()
})

const userSchema = Joi.object({
  UserEmail: Joi.string().required(),
  Password: Joi.string().required(),
  isActivated: Joi.boolean().default(false)
})

module.exports = { createSchema, byIdSchema, userSchema };