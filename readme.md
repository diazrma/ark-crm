MIGRATIONS

npx sequelize migration:create --name=create-users
npx sequelize db:migrate:undo:all
npx sequelize db:migrate