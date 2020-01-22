;
$(() => {
    const
        win = $(window),
        maps = $('.map'),
        atmsMap = $('#atms-map'),
        atmsDetailMap = $('#atms-detail-map');

    //иконки банков задаются в json в "options"  
    let atmsMapData = { //моковый json
        "type": "FeatureCollection",
        "features": [
            { "type": "Feature", "id": 0, "geometry": { "type": "Point", "coordinates": [55.831903, 37.411961] }, "options": { "iconLayout": "default#image", "iconImageHref": "media/img/map-marker-open.svg", "iconImageOffset": "[-10, -60]" }, "properties": { "balloonContentHeader": "Заголовок балуна", "balloonContentBody": "Содержимое балуна" } },
            { "type": "Feature", "id": 1, "geometry": { "type": "Point", "coordinates": [55.763338, 37.565466] }, "options": { "iconLayout": "default#image", "iconImageHref": "media/img/map-marker-skb.svg", "iconImageOffset": "[-10, -60]" }, "properties": { "balloonContentHeader": "Заголовок балуна", "balloonContentBody": "Содержимое балуна" } }
        ]
    };

    if (maps.length != 0) {
        win.on('load', function () {
            ymaps.ready(function () {
                atmsMapInit();
                atmsDetailMapInit();
            });
        });
    }

    function atmsMapInit() {
        if (atmsMap.length == 0) return false;

        const
            initCoords = [55.753653, 37.621220],
            map = new ymaps.Map("atms-map", {
                center: initCoords,
                zoom: 12,
                controls: []
            }, {
                suppressMapOpenBlock: true
            }),
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 100,
                clusterDisableClickZoom: false
            });
        // objectManager.objects.options.set({});
        console.log(objectManager)
        objectManager.clusters.options.set({
            clusterIcons: [{
                href: 'media/img/map-circle-red.svg',
                size: [50, 50],
                offset: [0, 0]
            }]
        });
        map.geoObjects.add(objectManager);
        objectManager.add(atmsMapData);
    }

    function atmsDetailMapInit() {
        if (atmsDetailMap.length == 0) return false;

        const
            initCoords = [55.753653, 37.621220],
            map = new ymaps.Map("atms-detail-map", {
                center: initCoords,
                zoom: 12,
                controls: []
            }, {
                suppressMapOpenBlock: true
            }),
            pm = new ymaps.Placemark(initCoords, {}, {
                iconLayout: 'default#image',
                iconImageHref: 'media/img/map-marker-skb.svg',
                iconImageSize: [50, 60]
            });
            map.geoObjects.add(pm);
    }
});