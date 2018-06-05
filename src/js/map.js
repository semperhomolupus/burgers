/* eslint-disable */
document.addEventListener("DOMContentLoaded", function() {
  ymaps.ready(init);
  var myMap;
  var myPlacemark0;
  var myPlacemark1;
  function init() {
    myMap = new ymaps.Map("js-map", {
      center: [59.92847989, 30.40645809],
      zoom: 11,
    });
    myMap.behaviors.disable("scrollZoom");
    (myPlacemark0 = new ymaps.Placemark(
      [59.91294808, 30.4706362],
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/marker.png",
        // Размеры метки.
        iconImageSize: [46, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-23, -57],
      }
    )),
      (myPlacemark1 = new ymaps.Placemark(
        [59.94467433, 30.37974021],
        {
          hintContent: "Собственный значок метки",
          balloonContent: "Это красивая метка",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/marker.png",
          // Размеры метки.
          iconImageSize: [46, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-23, -57],
        }
      ));
    myMap.geoObjects.add(myPlacemark0).add(myPlacemark1);
  }
});
