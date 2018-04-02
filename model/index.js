/** Aqui contém todos os models, que serao usados para criar a base, como o DDL do hibernate */
const mongoose = require('mongoose');
const Schema   = mongoose.Schema,
      model    = mongoose.model.bind(mongoose),
      ObjectId = mongoose.Schema.Types.ObjectId;

// um schema recebe um objeto que descreve a esrutura e tipo da tabela
// o tipo ObjectId serve para gerar um id unico para cara registro
const productSchema = Schema({
  id: ObjectId,
  name: {
    type: String,
    require: true
  },
  image: String,
  price: Number,
  description: String,
  // Relacionamento um para muitos
  manufacturer: {type: ObjectId, ref: 'Manufacturer'}
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

// declaramos nossas models
// as collections no mongo sao criadas com base no nome da Model
// em minusculo e no PLURAL, ex: manufacturers, products
const Product      = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema)

// a declaracao do schema/model poderia ser junto, dessa forma:
//const Manufacturer = mongoose.model('manufacturer', {name: {type: String,require: true}})

// e exportamos nossas models para a nossa aplicacao
// necessario para o mongoose gerar nossas collections.
module.exports = {Product, Manufacturer};