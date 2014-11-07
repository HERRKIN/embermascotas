import Ember from 'ember';

export default Ember.ObjectController.extend({
	  editando: false,
  actions: {
    editar: function() {
      this.set('editando', true);
    },
    modificar: function() {
      this.set('editando', false);
      this.get('model').save();
    },
    eliminar:  function () {
	var persona = this.get('model');
	persona.deleteRecord();
	persona.save();
	}
  }
});
