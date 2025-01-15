
// async function initMap() {
//     const contentString = `
//       <div>
//         <h1>Верхне Нарынский</h1>
//         <div>
//           <p>
//             Кубаттуулугу:237,7 МВт 
//             </br>

//             Жайгашкан жери: Ак-Булун участогу Нарын району 
//             </br>
//              Долбоордун баасы (млн АКШ доллары):237,7 

//           </p>
//           <p>
//             Attribution: Uluru,
//             <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
//               https://en.wikipedia.org/w/index.php?title=Uluru
//             </a>
//             (last visited June 22, 2009).
//           </p>
//         </div>
//       </div>`;
//     const infoWindow = new google.maps.InfoWindow({
//       content: contentString,
//       ariaLabel: "Uluru",
//     });
  
//     const marker = document.querySelector('gmp-advanced-marker');
//     marker.addEventListener('gmp-click', () => {
//       infoWindow.open({anchor: marker});
//     });
//   }
  
//   window.initMap = initMap;


// todo 2 version
// const markersData = [
//   {
//     position: { lat: 41.445975473076246, lng: 76.28011080604793 },
//     title: "Верхне-Нарынский",
//     content: `
//       <div>
//         <h1>Верхне Нарынский</h1>
//         <p>Кубаттуулугу: 237,7 МВт</p>
//         <p>Жайгашкан жери: Ак-Булун участогу Нарын району</p>
//         <p>Долбоордун баасы (млн АКШ доллары): 237,7</p>
//       </div>
//     `,
//   },
//   {
//     position: { lat: 41.218159,  lng:76.18760688048692  },
//     title: "Какшаал ГЭС ",
//     content: `
//       <div>
//         <h1>Какшаал ГЭС </h1>
//         <p>
//       Кубаттуулугу:  882 МВт
//        Жайгашкан жери: Ак-Сай өрөөнү
//         Долбоордун баасы (млн АКШ доллары):882,0</p>
//       </div>
//     `,
//   },
//   {
//     position: { lat: 41.374869, lng:74.729489 },
//     title: "Ала-Буга ГЭСы ",
//     content: `
//       <div>
//         <h1>Третий объект</h1>
//         <p>
//         Кубаттуулугу:600 МВт
//          Жайгашкан жери:  Ак-Талаа район
//           Долбоордун баасы (млн АКШ доллары): 600,0</p>
//       </div>
//     `,
//   },
// ];
// async function initMap() {
//   const map = new google.maps.Map(document.querySelector('gmp-map'), {
//     center: { lat: 41.43367823564242, lng: 75.9832829034765 },
//     zoom: 10,
//     mapId: "DEMO_MAP_ID",
//   });

//   markersData.forEach((data) => {
//     const marker = new google.maps.marker.AdvancedMarkerView({
//       position: data.position,
//       map: map,
//       title: data.title,
//       gmpClickable: true,
//     });

//     const infoWindow = new google.maps.InfoWindow({
//       content: data.content,
//     });

//     marker.addEventListener("gmp-click", () => {
//       infoWindow.open(map, marker);
//     });
//   });
// }
const markersData = [
  {
    position: { lat: 41.445975473076246, lng: 76.28011080604793 },
    title: "Верхне-Нарынский",
    content: `
      <div>
        <h1>Верхне Нарынский</h1>
        <p>Кубаттуулугу: 237,7 МВт</p>
        <p>Жайгашкан жери: Ак-Булун участогу Нарын району</p>
        <p>Долбоордун баасы (млн АКШ доллары): 237,7</p>
      </div>
    `,
  },
  {
    
    position: { lat: 41.218159,  lng:76.18760688048692  },
        title: "Какшаал ГЭС ",
        content: `
          <div>
            <h1>Какшаал ГЭС </h1>
            <p>
          Кубаттуулугу:  882 МВт
           Жайгашкан жери: Ак-Сай өрөөнү
            Долбоордун баасы (млн АКШ доллары):882,0</p>
          </div>
          `
  },
  {
        position: { lat: 41.374869, lng:74.729489 },
        title: "Ала-Буга ГЭСы ",
        content: `
          <div>
            <h1>Ала-Буга ГЭСы </h1>
            <p>
            Кубаттуулугу:600 МВт
             Жайгашкан жери:  Ак-Талаа район
              Долбоордун баасы (млн АКШ доллары): 600,0</p>
          </div>
        `,
      },
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.43367823564242, lng: 75.9832829034765 },
    zoom: 10,
  });

  markersData.forEach((data) => {
    const marker = new google.maps.Marker({
      position: data.position,
      map: map,
      title: data.title,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: data.content,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

window.initMap = initMap;
