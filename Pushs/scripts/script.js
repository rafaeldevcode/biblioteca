if (Notification.permission === "granted") {

	document.getElementsByClassName("wrapper")[0].style.display = "none";
	console.log("Notificações já foram Aceitas!");
	
} else if (Notification.permission === "denied") {

	console.log("Notificações já foram Negadas!");

}


var Notification = window.Notification || window.mozNotification || window.webkitNotification;

var was_questioned = false;
if (Notification.permission == 'default') {
    was_questioned = true;
}

Notification.requestPermission(function (permission) {
    if (was_questioned) {
        if (Notification.permission === "granted") {
			
			document.getElementsByClassName("wrapper")[0].style.display = "none";
			console.log("Notificações Aceitas!");
			
		} else if (Notification.permission === "denied") {

			console.log("Notificações Negadas!");

		}
    }    
});