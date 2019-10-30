FROM node:12-alpine
ENV DB_DATABASE kondo
ENV DB_HOST localhost
ENV DB_USERNAME admin
ENV DB_PASSWORD password

# Install Sequelize and Postgraphile
RUN npm install -g sequelize pg sequelize-cli postgraphile @graphile/pg-pubsub
RUN npm install dotenv

# Create app directory
RUN mkdir -p /backend
WORKDIR /backend

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

# Copy Code
COPY . /backend

ENTRYPOINT [ "./entrypoint.sh" ]
