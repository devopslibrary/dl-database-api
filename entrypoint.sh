#!/bin/sh
echo 'Waiting for DB to come up...'
/wait

echo 'Running Migration...'
sequelize db:migrate

if [ $DB_HOST = "db" ]; then
  echo 'Adding seed data since database is DB...'
  sequelize-cli db:seed:all
else
  echo "Skipping seed for production!"
fi


echo 'Starting GraphQL Server'
postgraphile --plugins @graphile/pg-pubsub \
             -c postgres://$DB_USERNAME:$DB_PASSWORD@$DB_HOST/$DB_DATABASE \
             --watch \
             --enhance-graphiql \
             --port 8081 \
             -n 0.0.0.0 \
             --cors \
             --subscriptions \
             --simple-subscriptions \
             --dynamic-json \
             --append-plugins @fullstackio/postgraphile-upsert-plugin:PgMutationUpsertPlugin
