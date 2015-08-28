$.ajaxSetup({
	cache: false,
	headers: {
		"Cache-Control": "no-cache"
	}
});

$(document).ready(function() {	
	$("div.container").css("padding-top", vertical_spacing + "px");
	init();
});

function updateClock() {
	var objToday = new Date(),
			dayOfWeek = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'),
			curWeekday = dayOfWeek[objToday.getDay()],
			months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
			curMonth = months[objToday.getMonth()],
			curdayOfMonth = objToday.getDate(),
			curHour = objToday.getHours(),
			curMinute = objToday.getMinutes() < 10 ? '0' + objToday.getMinutes() : objToday.getMinutes();

	if (xhour === false) {
		curHour = (curHour < 10 ? '0' : '') + curHour;
	} else {
		curHour = (curHour > 12) ? curHour - 12 : curHour;
		curHour = (curHour === 0) ? 12 : curHour;
	}

	$('#hour').html(curHour);
	$('#colon').html(':');
	$('#minute').html(curMinute);
	$('#date').html(curWeekday + ', ' + curMonth + ' ' + curdayOfMonth);
}

function run(){
	if (window.groovyAPI){
		if (groovyAPI.isShowingNotifications()){
			$("div.container").animate({
				"padding-top": (notification_spacing) + "px"
			}, 1000);
		} else {
			$("div.container").animate({
				"padding-top": (vertical_spacing) + "px"
			}, 1000);
		}
	}

	jQuery.get("file:///var/mobile/Library/Stats/BatteryStats.txt", function(data){
		var split = data.split("\n");
		var Level = split[0].split(": ")[1];
		var State = split[1].split(": ")[1];

		if (State == "Charging" || State == "Fully Charged"){
			if ( green === true ) {
				if ( Level > 0  && Level <= 25 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_20_green_48dp.png";
				} else if( Level > 25  && Level <= 40 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_30_green_48dp.png";
				} else if( Level > 40  && Level <= 55 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_50_green_48dp.png";
				} else if( Level > 55  && Level <= 65 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_60_green_48dp.png";
				} else if( Level > 65  && Level <= 85 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_80_green_48dp.png";
				} else if( Level > 85  && Level <= 95 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_90_green_48dp.png";
				} else if( Level > 95  && Level <= 100 ) {
					document.getElementById("BatteryImage").src="img/Green Charging/ic_battery_charging_full_green_48dp.png";
				}
			} else {
				if ( Level > 0  && Level <= 25 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_20_black_48dp.png";
				} else if( Level > 25  && Level <= 40 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_30_black_48dp.png";
				} else if( Level > 40  && Level <= 55 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_50_black_48dp.png";
				} else if( Level > 55  && Level <= 65 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_60_black_48dp.png";
				} else if( Level > 65  && Level <= 85 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_80_black_48dp.png";
				} else if( Level > 85  && Level <= 95 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_90_black_48dp.png";
				} else if( Level > 95  && Level <= 100 ) {
					document.getElementById("BatteryImage").src="img/Black Charging/ic_battery_charging_full_black_48dp.png";
				}
			}
		} else {
			if ( Level > 0  && Level <= 25 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_20_black_48dp.png";
			} else if( Level > 25  && Level <= 40 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_30_black_48dp.png";
			} else if( Level > 40  && Level <= 55 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_50_black_48dp.png";
			} else if( Level > 55  && Level <= 65 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_60_black_48dp.png";
			} else if( Level > 65  && Level <= 85 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_80_black_48dp.png";
			} else if( Level > 85  && Level <= 95 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_90_black_48dp.png";
			} else if( Level > 95  && Level <= 100 ) {
				document.getElementById("BatteryImage").src="img/ic_battery_full_black_48dp.png";
			}
		}

		document.getElementById("BatteryLevel").innerHTML = Level +"%";
	});
	setTimeout(run, 1000);
}

function init() {
	updateClock();
	setInterval(updateClock, 1000);
	run();
}