import Ember from 'ember';

export default Ember.Route.extend({
		model: function(params) {
          return this.store.find('pet',  params.pet_id);
	},
	  setupController: function(controller, model) {
    this._super(controller, model);
    // Switch out arr with whatever your personas array is
    controller.set('personas', this.store.all('persona'));
  }
});
