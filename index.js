/* =============================================================================
* Template/index.js
*
* ------------------------------------------------------------
* Copyright 2012 Exacloud, Inc.
* http://www.exacloud.cn/
* =========================================================================== */

// ================= GLOBAL VARIABLES ==========================================
var AREA_TPL = '<area id="room_{0}" shape="poly" coords="{1}">';
var SCALE = 0.434310;
var COORDS = [[[43, 255], [133, 255], [133, 406], [43, 406]], [[133, 172], [277, 172], [277, 345], [133, 345]], [[277, 172], [370, 172], [370, 345], [277, 345]], [[100, 583], [307, 583], [307, 936], [100, 936]], [[100, 583], [307, 583], [307, 936], [100, 936]], [[100, 583], [307, 583], [307, 936], [100, 936]], [[100, 583], [307, 583], [307, 936], [100, 936]], [[100, 583], [307, 583], [307, 936], [100, 936]], [[100, 583], [307, 583], [307, 936], [100, 936]]];
// ================= INIT FUNCTIONS ============================================
$(function() {
	// start your codes here
	$('#image').maphilight({
		fade : true,
		fill : true,
		fillColor : 'ff0000',

	});

	$.getJSON('api/a.json', function(data) {
		var areas = '';
		$(data.rooms).each(function(index, room) {
			$(room.points).each(function(i, p) {
				p[0] *= SCALE;
				p[1] *= SCALE;
			});
			areas += AREA_TPL.format(index, room.points);
		});
		$('#map').html(areas);

	});

});

// ================= UTILITY FUNCTIONS ==========================================
// string formatter
String.prototype.format = function() {
	var pattern = /\{\d+\}/g;
	var args = arguments;
	return this.replace(pattern, function(capture) {
		return args[capture.match(/\d+/)];
	});
};
