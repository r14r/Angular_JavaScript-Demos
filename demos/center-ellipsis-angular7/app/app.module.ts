
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { SmartShrinkComponent } from "./smart-shrink.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		SmartShrinkComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	// ...
}
