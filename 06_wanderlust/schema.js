const joi = require("joi")

module.exports.listingSchema =joi.object({listing:joi.object({
    title:joi.string().required(),
    description:joi.string().required(),
    imageurl: joi.string().allow("",null),
     price:joi.number().required(),
     country:joi.string().required(),
    location:joi.string().required() 
}).required() });

module.exports.reviewsSchema = joi.object({
    review:joi.object({
        rating:joi.number().required().min(1).max(5),
        comment:joi.string().required()
    }).required()
});


