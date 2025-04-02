import { HelloWorld } from './hello-world';
import { log } from './logger';

export const sayHello = () => {
  return HelloWorld;
};

log.info('hi');
