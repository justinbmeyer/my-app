import Component from "can-component";

Component.extend({
    tag: "edit-plate",
    view: `<input value:bind='plateName'/>`,
    ViewModel: {
        plateName: "string",
        update: function(value){
            this.plateName = value;
        }
    }
});
