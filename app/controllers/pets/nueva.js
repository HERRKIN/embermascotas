import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['pets'],
	selectedPersona:null,
		 actions: {
		crear: function() {
		     	 var pet = this.get('model');
		     	 	pet.set('dueno',this.selectedPersona);
		      		pet.save()
		      	.then(function() {
		       		 this.transitionToRoute('pet', pet);
		     	 }.bind(this));
		}
	 }
});
