import DS from 'ember-data';


var Persona= DS.Model.extend({
	cedula:DS.attr('string'),
	nombre:DS.attr('string'),
	apellido:DS.attr('string'),
	pets: DS.hasMany('pet',{async:true})
});
Persona.reopenClass({
	FIXTURES : [
{
	id:1,
	nombre:'jose',
	apellido:'andradez',
	pets:[0,1]
},
{
	id:2,
	nombre:'joel',
	apellido:'bolivar',
	pets:[3]
},
{
	id:3,
	nombre:'daniel',
	apellido:'penia',
	pets:[2]
}
]
});
export default Persona;