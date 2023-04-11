# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup env file by inside bin folder
        #Client interacting port
        PORT = 8000

        #Database connection local
        TYPE = 'postgres'
        POSTGRES_HOST = 'localhost'
        POSTGRES_PORT = 5432
        POSTGRES_USER = '....'
        POSTGRES_PASSWORD = '.....'
        DATABASE_NAME = 'postgres'

3. Run the migration file
        `npm run typeorm:run:local` (follow package-json)

4. Start the Server  
        `npm run local`
