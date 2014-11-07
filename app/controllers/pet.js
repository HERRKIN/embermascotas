import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['personas', 'persona'],
    selectedPersona:function(){
      return this.model.get('dueno');
    }.property('dueno'),
	  editando: false,
  actions: {
    editar: function() {
      this.set('editando', true);
      
      console.log('dueno ', this.selectedPersona);
    },
    modificar: function() {
      this.set('editando', false);
      var m = this.get('model');
      console.log('selected '+this.get('dueno'));
      //m.set('dueno',this.get('selectedPersona').model);
      //m.dueno = this.selectedPersona;
      console.log('m '+m);
      console.log('duenio '+m.get('dueno'));
      m.save();
    },
    eliminar:  function () {
	var pet = this.get('model');
	pet.destroyRecord()
  .then(function() {
               this.transitionToRoute('pets');
           }.bind(this));
	}
  }
});
