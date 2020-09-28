
// Import the core angular services.
import { Component } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "my-app",
	styleUrls: [ "./app.component.less" ],
	template:
	`
		<p>
			<a routerLink="./">Goto home</a> &mdash;
			<a routerLink="./sub">Goto sub module</a>
		</p>

		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	// ...
}
