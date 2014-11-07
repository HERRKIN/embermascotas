import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['personas'],
	
		 actions: {
		crear: function() {
		     	 var persona = this.get('model');
		      		persona.save()
		      	.then(function() {
		       		 this.transitionToRoute('persona', persona);
		     	 }.bind(this));
		}
	 }
});
