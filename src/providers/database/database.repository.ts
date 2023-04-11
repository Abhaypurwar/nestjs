import { User } from "../../entity/User";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export const userRepository = AppDataSource.getRepository(User);

// initialize the Repository with all the entities
