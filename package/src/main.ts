import { NodeJotter } from './services/node_jotter';

export const Logger = NodeJotter;

export interface LoggerConfiguration {
  filename: string;
  // environment: Environment;
  serviceName: string;
  level: 'error' | 'debug' | 'info';
}
