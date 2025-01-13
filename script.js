// async function initMap() {
//     const contentString=`
//     <div>
//              <h1>
//              Өйдөкү Нарын каскады (Верхне-Нарынский)
//             </h1>
//         <div>
//                 <p>
//                 Кубаттуулугу:  237,7 МВт
//                 Жайгашкан жери:Ак-Булун участогу Нарын району
//                 Долбоордун баасы (млн АКШ доллары):237,7
//                  </p>

//         </div>
//     </div>`
//     const infoWindow = new google.maps.InfoWindow({
//         content: contentString,
//         ariaLabel: "Өйдөкү Нарын каскады (Верхне-Нарынский)",
//       });
//       const marker = document.querySelector('gmp-advanced-marker');
//   marker.addEventListener('gmp-click', () => {
//     infoWindow.open({anchor: marker});
//   });
// }
// window.initMap = initMap;

/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
async function initMap() {
    const contentString = `
      <div>
        <h1>Uluru</h1>
        <div>
          <p>
            <b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large
            sandstone rock formation in the southern part of the
            Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi)
            south west of the nearest large town, Alice Springs; 450&#160;km
            (280&#160;mi) by road. Kata Tjuta and Uluru are the two major
            features of the Uluru - Kata Tjuta National Park. Uluru is
            sacred to the Pitjantjatjara and Yankunytjatjara, the
            Aboriginal people of the area. It has many springs, waterholes,
            rock caves and ancient paintings. Uluru is listed as a World
            Heritage Site.
          </p>
          <p>
            Attribution: Uluru,
            <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
              https://en.wikipedia.org/w/index.php?title=Uluru
            </a>
            (last visited June 22, 2009).
          </p>
        </div>
      </div>`;
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Uluru",
    });
  
    const marker = document.querySelector('gmp-advanced-marker');
    marker.addEventListener('gmp-click', () => {
      infoWindow.open({anchor: marker});
    });
  }
  
  window.initMap = initMap;