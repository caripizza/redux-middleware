import { logger } from './logger';
import { thunk } from './thunk';

// middleware happens IN ORDER:
export const middleware = [
  logger,
  thunk
];
