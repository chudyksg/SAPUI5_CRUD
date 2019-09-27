jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TeamSet in the list
// * All 3 TeamSet have at least one PlayerSet

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/team/FootballTeam/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/team/FootballTeam/test/integration/pages/App",
	"com/team/FootballTeam/test/integration/pages/Browser",
	"com/team/FootballTeam/test/integration/pages/Master",
	"com/team/FootballTeam/test/integration/pages/Detail",
	"com/team/FootballTeam/test/integration/pages/Create",
	"com/team/FootballTeam/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.team.FootballTeam.view."
	});

	sap.ui.require([
		"com/team/FootballTeam/test/integration/MasterJourney",
		"com/team/FootballTeam/test/integration/NavigationJourney",
		"com/team/FootballTeam/test/integration/NotFoundJourney",
		"com/team/FootballTeam/test/integration/BusyJourney",
		"com/team/FootballTeam/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});