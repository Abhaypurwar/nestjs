import { config } from 'dotenv';

const env = process.env.NODE_ENV || false;
if (!env) process.exit(100);

config({ path: `bin/.env.${env}` });

export default () => ({
  // PORT: parseInt(process.env.PORT) || 3000,
  // MAIL_USERNAME: process.env.MAIL_USERNAME,
  // MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  // MAIL_HOST: process.env.MAIL_HOST,
  // MAIL_FROM: process.env.MAIL_FROM,
});
