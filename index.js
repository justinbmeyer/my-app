//!steal-remove-start
import "can-debug";
//!steal-remove-end

import Component from "can-component";
import "./drivers-list";
import "./edit-plate";

Component.extend({
    tag: "my-app",
    view: `
        <drivers-list selected:to="editing"/>
        <edit-plate plateName:bind="editing.licensePlate"/>
    `,
    ViewModel: {
        editing: "any"
    }
});
