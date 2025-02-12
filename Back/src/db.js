require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
  DB_USER_RENDER, DB_PASSWORD_RENDER, DB_HOST_RENDER,DB_NAME,DB_PORT_RENDER
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER_RENDER}:${DB_PASSWORD_RENDER}@${DB_HOST_RENDER}:${DB_PORT_RENDER}/${DB_NAME}`, {
   logging: false, // set to console.log to see the raw SQL queries
   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
 });



//Sin deploy
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

const basename = path.basename(__filename);

const modelDefiners = [];


// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Recipe, Diet, DishType } = sequelize.models;


Recipe.belongsToMany(Diet, {through : 'Recipe_Diet'})
Diet.belongsToMany(Recipe, {through: 'Recipe_Diet'})
//----
Recipe.belongsToMany(DishType, {through : 'Recipe_Type'})
DishType.belongsToMany(Recipe, {through: 'Recipe_Type'})

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
