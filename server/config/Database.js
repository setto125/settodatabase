import { Sequelize } from "sequelize";

const db = new Sequelize('auto_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;