class LeafletMap{

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();
        
        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;

        this.markerCounts = {};
        this.markers = [];

}
initTileLayer() {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
    }).addTo(this.map);
}
}