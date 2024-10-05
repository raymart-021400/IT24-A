class LeafletMap{

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
        
        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountBA');
        this.logCount2Element = document.getElementById('logCountCCS');
        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataLab());
        this.btn2.addEventListener('click', () => this.dataBa());
        this.btnclear.addEventListener('click', () => this.clearLogs());
}
initTileLayer() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
    }).addTo(this.map);
}
addMarker(lat, long, message){
    const marker = L.marker([lat, long]).addTo(this.map)
    this.markerCounts[message] = (this.markerCounts[message] || 0) + 1;
    this.updateMarkerPopup(marker, message);
    marker.on('click', () => {
        this.markerCounts[message]++;
        this.updateMarkerPopup(marker, message);
    });
this.markers.push(marker);
}
updateMarkerPopup(marker, message) {
    const count = this.markerCounts[message];
    marker.bindPopup(`${message}<br>Attendance logs: ${count}`).openPopup();
}
loadMarkersFromJson(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(marker => {
            this.addMarker(marker.latitude, marker.longitude, marker.message);
        });
    })
    .catch(error => console.error("Error Loading servers:", error));
}
}