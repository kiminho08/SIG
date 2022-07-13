var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_RumahSakitTahun2020_0 = new ol.format.GeoJSON();
var features_RumahSakitTahun2020_0 = format_RumahSakitTahun2020_0.readFeatures(json_RumahSakitTahun2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitTahun2020_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakitTahun2020_0.addFeatures(features_RumahSakitTahun2020_0);var lyr_RumahSakitTahun2020_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitTahun2020_0, 
                style: style_RumahSakitTahun2020_0,
    title: 'Rumah Sakit Tahun 2020<br />\
    <img src="styles/legend/RumahSakitTahun2020_0_0.png" /> Sedikit<br />\
    <img src="styles/legend/RumahSakitTahun2020_0_1.png" /> Sedang<br />\
    <img src="styles/legend/RumahSakitTahun2020_0_2.png" /> Banyak<br />'
        });var format_RumahSakitTahun2019_1 = new ol.format.GeoJSON();
var features_RumahSakitTahun2019_1 = format_RumahSakitTahun2019_1.readFeatures(json_RumahSakitTahun2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitTahun2019_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakitTahun2019_1.addFeatures(features_RumahSakitTahun2019_1);var lyr_RumahSakitTahun2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitTahun2019_1, 
                style: style_RumahSakitTahun2019_1,
    title: 'Rumah Sakit Tahun 2019<br />\
    <img src="styles/legend/RumahSakitTahun2019_1_0.png" /> Sedikit<br />\
    <img src="styles/legend/RumahSakitTahun2019_1_1.png" /> Sedang<br />\
    <img src="styles/legend/RumahSakitTahun2019_1_2.png" /> Banyak<br />'
        });var format_RumahSakitTahun2018_2 = new ol.format.GeoJSON();
var features_RumahSakitTahun2018_2 = format_RumahSakitTahun2018_2.readFeatures(json_RumahSakitTahun2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitTahun2018_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakitTahun2018_2.addFeatures(features_RumahSakitTahun2018_2);var lyr_RumahSakitTahun2018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitTahun2018_2, 
                style: style_RumahSakitTahun2018_2,
    title: 'Rumah Sakit Tahun 2018<br />\
    <img src="styles/legend/RumahSakitTahun2018_2_0.png" /> Sedikit<br />\
    <img src="styles/legend/RumahSakitTahun2018_2_1.png" /> Sedang<br />\
    <img src="styles/legend/RumahSakitTahun2018_2_2.png" /> Banyak<br />'
        });var format_TitikRs20182020_3 = new ol.format.GeoJSON();
var features_TitikRs20182020_3 = format_TitikRs20182020_3.readFeatures(json_TitikRs20182020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRs20182020_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TitikRs20182020_3.addFeatures(features_TitikRs20182020_3);var lyr_TitikRs20182020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikRs20182020_3, 
                style: style_TitikRs20182020_3,
                title: '<img src="styles/legend/TitikRs20182020_3.png" /> Titik Rs 2018-2020'
            });var format_TitikPoliklinik20182020_4 = new ol.format.GeoJSON();
var features_TitikPoliklinik20182020_4 = format_TitikPoliklinik20182020_4.readFeatures(json_TitikPoliklinik20182020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPoliklinik20182020_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TitikPoliklinik20182020_4.addFeatures(features_TitikPoliklinik20182020_4);var lyr_TitikPoliklinik20182020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikPoliklinik20182020_4, 
                style: style_TitikPoliklinik20182020_4,
                title: '<img src="styles/legend/TitikPoliklinik20182020_4.png" /> Titik Poliklinik 2018-2020'
            });

lyr_RumahSakitTahun2020_0.setVisible(true);lyr_RumahSakitTahun2019_1.setVisible(true);lyr_RumahSakitTahun2018_2.setVisible(true);lyr_TitikRs20182020_3.setVisible(true);lyr_TitikPoliklinik20182020_4.setVisible(true);
var layersList = [baseLayer,lyr_RumahSakitTahun2020_0,lyr_RumahSakitTahun2019_1,lyr_RumahSakitTahun2018_2,lyr_TitikRs20182020_3,lyr_TitikPoliklinik20182020_4];
lyr_RumahSakitTahun2020_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'RS': 'RS', 'RSBERSALIN': 'RSBERSALIN', 'POLIKLINIK': 'POLIKLINIK', 'JMLPNDDUK': 'JMLPNDDUK', });
lyr_RumahSakitTahun2019_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'RS': 'RS', 'RSBERSALIN': 'RSBERSALIN', 'POLIKLINIK': 'POLIKLINIK', 'JMLPNDDUK': 'JMLPNDDUK', });
lyr_RumahSakitTahun2018_2.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KAB/KOT': 'KAB/KOT', 'PROVINSI': 'PROVINSI', 'R.SAKIT': 'R.SAKIT', 'RSBERSALIN': 'RSBERSALIN', 'POLIKLINIK': 'POLIKLINIK', 'JMLH_PNDDK': 'JMLH_PNDDK', });
lyr_TitikRs20182020_3.set('fieldAliases', {'Nama': 'Nama', 'Alamat': 'Alamat', 'N0.Tlp': 'N0.Tlp', 'Fasilitas': 'Fasilitas', });
lyr_TitikPoliklinik20182020_4.set('fieldAliases', {'Nama': 'Nama', 'Alamat': 'Alamat', 'NO.Tlp': 'NO.Tlp', 'Fasilitas': 'Fasilitas', });
lyr_RumahSakitTahun2020_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'RS': 'TextEdit', 'RSBERSALIN': 'TextEdit', 'POLIKLINIK': 'TextEdit', 'JMLPNDDUK': 'TextEdit', });
lyr_RumahSakitTahun2019_1.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'RS': 'TextEdit', 'RSBERSALIN': 'TextEdit', 'POLIKLINIK': 'TextEdit', 'JMLPNDDUK': 'TextEdit', });
lyr_RumahSakitTahun2018_2.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KAB/KOT': 'TextEdit', 'PROVINSI': 'TextEdit', 'R.SAKIT': 'TextEdit', 'RSBERSALIN': 'TextEdit', 'POLIKLINIK': 'TextEdit', 'JMLH_PNDDK': 'TextEdit', });
lyr_TitikRs20182020_3.set('fieldImages', {'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'N0.Tlp': 'TextEdit', 'Fasilitas': 'TextEdit', });
lyr_TitikPoliklinik20182020_4.set('fieldImages', {'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'NO.Tlp': 'TextEdit', 'Fasilitas': 'TextEdit', });
lyr_RumahSakitTahun2020_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'KOTA': 'inline label', 'PROVINSI': 'inline label', 'RS': 'inline label', 'RSBERSALIN': 'inline label', 'POLIKLINIK': 'inline label', 'JMLPNDDUK': 'inline label', });
lyr_RumahSakitTahun2019_1.set('fieldLabels', {'KECAMATAN': 'inline label', 'KOTA': 'inline label', 'PROVINSI': 'inline label', 'RS': 'inline label', 'RSBERSALIN': 'inline label', 'POLIKLINIK': 'inline label', 'JMLPNDDUK': 'inline label', });
lyr_RumahSakitTahun2018_2.set('fieldLabels', {'KECAMATAN': 'inline label', 'KAB/KOT': 'inline label', 'PROVINSI': 'inline label', 'R.SAKIT': 'inline label', 'RSBERSALIN': 'inline label', 'POLIKLINIK': 'inline label', 'JMLH_PNDDK': 'inline label', });
lyr_TitikRs20182020_3.set('fieldLabels', {'Nama': 'inline label', 'Alamat': 'inline label', 'N0.Tlp': 'inline label', 'Fasilitas': 'inline label', });
lyr_TitikPoliklinik20182020_4.set('fieldLabels', {'Nama': 'inline label', 'Alamat': 'inline label', 'NO.Tlp': 'inline label', 'Fasilitas': 'inline label', });
lyr_TitikPoliklinik20182020_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});