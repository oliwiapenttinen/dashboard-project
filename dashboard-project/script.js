//simulates live system data update (no backend,mock logic)

const statusColors ={ // status colors (kept outside function for reuse)
 OK: "#22c55e",
 Warning: "#f59e0b",
 Critical: "#ef4444"
};
  
const messages =[ // messages for system logs
 "User session updated",
 "API response received",
 "System check completed",
 "Cache refreshed"
];

function refresh(){   //update UI values randomly to simulate live monitoring system
//update users
document.getElementById("users").innerText =Math.floor(Math.random() *3500);
//update error rate
const errorRate=(Math.random() *5).toFixed(1) +"%";
document.getElementById("error").innerText =errorRate;
  
const statuses =["OK", "Warning", "Critical"]; //updates system status
const newStatus =statuses[Math.floor(Math.random() * statuses.length)];
const statusElement = document.getElementById("status");
statusElement.innerText =newStatus;
statusElement.style.color = statusColors[newStatus];
 
// update load
 const load =["Low","Normal","High"];
 document.getElementById("load").innerText =load[Math.floor(Math.random() *load.length)];

//add log entry
 const randomMessage =
 messages[Math.floor(Math.random() * messages.length)];

 const log=document.createElement("li");
 log.innerText = `${randomMessage} (${new Date().toLocaleTimeString()})`;
 document.getElementById("logs").appendChild(log);
}

setInterval(refresh, 6000); //runs refresh every 6sec to simulate live system updates
