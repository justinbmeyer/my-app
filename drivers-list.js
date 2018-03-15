import Component from "can-component";
import DefineMap from "can-define/list/list";

Component.extend({
	tag: "drivers-list",
    view: `<ul>
		{{#each drivers}}
			<li on:click="../select(this)">
				{{licensePlate}}
			</li>
		{{/each}}
	</ul>`,
	ViewModel: {
        drivers: {
            default: () => [
                { title: "Dr.", first: "Cosmo", last: "Kramer", licensePlate: "A$$M^N" },
                { title: "Ms.", first: "Elaine", last: "Benes", licensePlate: "621433" }
            ]
        },
        selected: {
            default: null
        },
        select: function(driver){
            this.selected = driver;
        }
    }
});
