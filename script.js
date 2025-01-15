
let map;
const markersData = [
  { id: 1, title: "Верхне-Нарынский", description: ` 
  <div>
    <h1>Верхне Нарынский</h1>
    <p>Кубаттуулугу: 237,7 МВт</p>
    <p>Жайгашкан жери: Ак-Булун участогу Нарын району</p>
    <p>Долбоордун баасы (млн АКШ доллары): 237,7</p>
  </div>`, 
  lat: 41.445975473076246, lng: 76.28011080604793 , category: "power" },


  { id: 2, title: "Mineral Site 1", description: "Mining Area", lat: 41.46, lng: 76.00, category: "minerals" },
  { id: 3, title: "Electro Station 2", description: "Hydro Power", lat: 41.42, lng: 76.05, category: "power" },
  { id: 4, title: "Other Location", description: "Miscellaneous", lat: 41.43, lng: 76.08, category: "other" },
  { id: 5, title: "Какшаал ГЭС ", description: `
     <div>
        <h1>Какшаал ГЭС </h1>
        <p>
         Кубаттуулугу:  882 МВт </br>
         Жайгашкан жери: Ак-Сай өрөөнү </br>
         Долбоордун баасы (млн АКШ доллары):882,0</p>
      </div>
  `, lat: 41.218159,  lng:76.18760688048692, category: "power" },

  { id: 6, title: "Ала-Буга ГЭСы", description: `
   <div>
        <h1>Ала-Буга ГЭСы </h1>
        <p>
        Кубаттуулугу:600 МВт </br>
        Жайгашкан жери:  Ак-Талаа район </br>
        Долбоордун баасы (млн АКШ доллары): 600,0</p>
    </div>
  `, lat: 41.374869, lng:74.729489 , category: "power" },


];
const markers = [];
const icons = {
  power: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  minerals: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  other: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
};

function initMap() {
  const center = { lat: 41.43367823564242, lng: 75.9832829034765 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 10,
  });

  // Add markers
  markersData.forEach((markerData) => {
    const marker = new google.maps.Marker({
      position: { lat: markerData.lat, lng: markerData.lng },
      map: map,
      title: markerData.title,
      icon: icons[markerData.category],
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${markerData.title}</h3><p>${markerData.description}</p>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    marker.category = markerData.category; // Assign category
    markers.push(marker);
  });

  // Filter markers based on category
  document.getElementById("categoryFilter").addEventListener("change", (e) => {
    const selectedCategory = e.target.value;

    markers.forEach((marker) => {
      if (selectedCategory === "all" || marker.category === selectedCategory) {
        marker.setMap(map);
      } else {
        marker.setMap(null);
      }
    });
  });
}

window.initMap = initMap;