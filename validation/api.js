var Joi = require('joi');

module.exports = {
  say: {
    get: {
      query: {
        phrase: Joi.string().required()
      }
    }
  },
  neck: {
    get: {
      params: {
        action: Joi.string().regex(/^(up|down)$/).required()
      }
    }
  },
  mouth: {
    get: {
      params: {
        action: Joi.string().regex(/^(open|close)$/).required()
      }
    }
  },
  tail: {
    get: {
      params: {
        action: Joi.string().regex(/^(up|down)$/).required()
      }
    }
  }
};