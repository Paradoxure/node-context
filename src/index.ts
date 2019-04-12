import * as context from 'express-http-context';

export default {
  get: context.get,
  set: context.set,
  middleware: context.middleware
};
