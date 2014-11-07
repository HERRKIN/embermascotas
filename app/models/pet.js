import DS from 'ember-data';

var Pet = DS.Model.extend({
  nombre:DS.attr('string'),
  color:DS.attr('string'),
  dueno:DS.belongsTo('persona',{async:true})

});
Pet.reopenClass({
FIXTURES:[
{
	id:0,
	nombre:'cachirulo',
	color:'blanco',
	dueno:1

},
{
	id:1,
	nombre:'pupi',
	color:'blue',
	dueno:1

},
{
	id:2,
	nombre:'pulgoso',
	color:'blue',
	dueno:3
},
{
	id:3,
	nombre:'chiquito',
	color:'fucsia',
	dueno:2
}

]});

export default Pet;