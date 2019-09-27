jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/team/FootballTeam/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/team/FootballTeam/test/integration/pages/App",
	"com/team/FootballTeam/test/integration/pages/Browser",
	"com/team/FootballTeam/test/integration/pages/Master",
	"com/team/FootballTeam/test/integration/pages/Detail",
	"com/team/FootballTeam/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.team.FootballTeam.view."
	});

	sap.ui.require([
		"com/team/FootballTeam/test/integration/NavigationJourneyPhone",
		"com/team/FootballTeam/test/integration/NotFoundJourneyPhone",
		"com/team/FootballTeam/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});