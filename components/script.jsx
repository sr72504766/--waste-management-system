// Waste Report Form
document.getElementById("wasteForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  let formData = new FormData();
  formData.append("location", document.getElementById("location").value);
  formData.append("media", document.getElementById("media").files[0]);

  let res = await fetch("http://localhost:5000/report", {
    method: "POST",
    body: formData
  });

  let data = await res.json();
  if (data.success) {
    let li = document.createElement("li");
    li.textContent = "📍 Reported: " + data.location + " ✅ (" + data.file + ")";
    document.getElementById("reportList").appendChild(li);
    document.getElementById("updateBox").innerText =
      "✅ Action update: Waste collection scheduled for " + data.location;
  }
});

// Registration Form
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  alert("✅ Account created successfully for " + username + " (" + email + ")");
});

// Google Maps
function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.6139, lng: 77.2090 }, // Delhi
    zoom: 6,
  });
}
