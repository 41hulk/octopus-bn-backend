import BaseJoi from 'joi';
import Extension from 'joi-date-extensions';
import JoiCountryExtension from 'joi-country-extension';
import setLanguage from 'utils/international';

const Joi = BaseJoi.extend(Extension, JoiCountryExtension);

const commentValidator = (req, res, next) => {
  const { preferedLang } = req.user;
  const schema = Joi.object().keys({
    comment: Joi.string().min(3).required().error(() => ({
      message: setLanguage(preferedLang).__('validComment')
    })),
  });

  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message
    });
  }
  return next();
};
export default commentValidator;
