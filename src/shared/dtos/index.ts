import Joi from 'joi';

export const idDto = Joi.object({
  id: [
    Joi.string().required(),
    Joi.number().integer().required(),
  ],
});

export * from './filter';
export * from './user';
export * from './shift';
