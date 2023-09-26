// Ymap 
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    { 
      center: [55.75846806898367, 37.60108849999989], 
      zoom: 14, 
      controls: ['geolocationControl', 'zoomControl']
    },
    { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "300px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );
  
  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-5, -38]
    }
  );

  //Убираем кнопки навигации при адаптиве
  window.addEventListener ( 'resize', () => {
    if (window.innerWidth < 1024) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    } else {
      myMap.controls.add('zoomControl');
      myMap.controls.add('geolocationControl');
    }
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
