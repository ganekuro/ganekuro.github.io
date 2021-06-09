function openWindow(url) {
    window.open(url,'','width=1280,height=720');
    return false;
}
var gcPhotos = 9;
var gcPhotosRandomIdx = parseInt(Math.random()*gcPhotos);
var gcUrl = "/images/photos/gc_"+gcPhotosRandomIdx+".jpg";
document.write('<div><a onclick="openWindow(gcUrl)"><img src="'+gcUrl+'" alt="gc" class="border"></a></div>');
var yuriPhotos = 3;
var yuriPhotosRandomIdx = parseInt(Math.random()*yuriPhotos);
var yuriUrl = "/images/photos/yuri_"+yuriPhotosRandomIdx+".jpg";
document.write('<div class="photos-left"><a onclick="openWindow(yuriUrl)"><img src="'+yuriUrl+'" alt="yuri" class="border"></a></div>');
var nanaPhotos = 2;
var nanaPhotosRandomIdx = parseInt(Math.random()*nanaPhotos);
var nanaUrl = "/images/photos/nana_"+nanaPhotosRandomIdx+".jpg";
document.write('<div class="photos-right"><a onclick="openWindow(nanaUrl)"><img src="'+nanaUrl+'" alt="nana" class="border"></a></div>');
var hitoshiPhotos = 2;
var hitoshiPhotosRandomIdx = parseInt(Math.random()*hitoshiPhotos);
var hitoshiUrl = "/images/photos/hitoshi_"+hitoshiPhotosRandomIdx+".jpg";
document.write('<div class="photos-left"><a onclick="openWindow(hitoshiUrl)"><img src="'+hitoshiUrl+'" alt="hitoshi" class="border"></a></div>');
var hirohitoPhotos = 2;
var hirohitoPhotosRandomIdx = parseInt(Math.random()*hirohitoPhotos);
var hirohitoUrl = "/images/photos/hirohito_"+hirohitoPhotosRandomIdx+".jpg";
document.write('<div class="photos-right"><a onclick="openWindow(hirohitoUrl)"><img src="'+hirohitoUrl+'" alt="hirohito" class="border"></a></div>');
