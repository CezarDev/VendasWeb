# Projeto com NEST JS e React

## ENVIROMENTS

        # App
        NODE_ENV=development
        PORT=3030

        # Database
        DATABASE_URL="mysql://root:admin@localhost:3306/desafio?schema=public"

        # JWT
        JWT_SECRET=secret
        JWT_EXPIRES_IN=1d
        JWT_COOKIE_EXPIRES_IN=1d


## COMANDOS


### BACKEND
    - cd /backend-nest
    - 	npm i
    -	npx prisma migrate dev --name init
    -   npm run seed
    -	npm run start:dev
    -	npx prisma studio (http://localhost:5555/)

### FRONTEND
        cd /frontend-react
        npm config set legacy-peer-deps true
        npm i
        npm run start

## A api está configurada para executar na porta 3030

## O Front na porta padrão 3000       

Abra [http://localhost:3000](http://localhost:3000) no browser


