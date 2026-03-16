## Manula Instalation Stesp
- Install Node js locally
- Setup the Environment Variables 
- Clone the Github repo 
- Install dependecnies
- Start the DB locally
    - docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecret postgres
    - Or Go to Neon tech ro any clour Provider get DB URL  
- npx prisma init 
- Change the .env file and update your db file 
- npx prisma migrate
- npx prisma generate 
- npm run build 
- npm run start


## Docer Installation Steps
- Install Docker 
- Install Postgres 
    - docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecret postgres

- Build the Image 
    - docker build -t myapp
- Start the Image 
    - docker run -d --name myapp  -p 3000:3000 myapp



## Docker Compose Installation Steps

- Install Docker, Docker Compose 
- Run 
    - docker compose up