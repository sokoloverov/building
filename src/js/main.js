import '../style/main.scss';
import pic1 from '../img/1-1.jpg';
import pic2 from '../img/1-2.jpg';
import pic3 from '../img/1-3.jpg';
import pic4 from '../img/1-4.jpg';
import snd1 from '../sounds/2-2.mp3';
import snd2 from '../sounds/2-3.mp3';
import snd3 from '../sounds/2-4.mp3';
import vd2 from '../video/Sea.mp4';
import vd1 from '../video/Ocean.mp4';

//вывод картинок
let pictureList = [
    [pic1, 'Корабль 1'],
    [pic2, 'Корабль 2'],
    [pic3, 'Корабль 3'],
    [pic4, 'Корабль 4'],
];

let picGaleryPoint = document.getElementById("pic");
let picGalery = [];

for (let i = 0; i < pictureList.length; i++) {
    let picture = document.createElement('div');
    picture.classList.add("frame");
    picture.innerHTML = `
            <img class="ships" src="${pictureList[i][0]}" alt="${pictureList[i][1]}">
            <p class="note">${pictureList[i][1]}</p>
            `
    picGalery.push(picture);
}

//вывод аудио
let musicList = [
    [snd1, 'Волны'],
    [snd2, 'Прибой'],
    [snd3, 'Чайки'],
];

for (let i = 0; i < musicList.length; i++) {
    let music = document.createElement('div');
    music.classList.add("frame");
    music.innerHTML = `
            <audio controls class="ships sounds"
                src="${musicList[i][0]}">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <p class="note">${musicList[i][1]}</p>
            `
    picGalery.push(music);
}

picGaleryPoint.prepend(...picGalery);

//вывод видео
let videoList = [
    [vd1, 'Океан'],
    [vd2, 'Море'],
];

for (let i = 0; i < videoList.length; i++) {
    let video = document.createElement('div');
    video.classList.add("frame");
    video.innerHTML = `
            <video controls
                class="ships" src="${videoList[i][0]}">
                Sorry, your browser doesn't support embedded videos!
            </video>
            <p class="note">${videoList[i][1]}</p>
            `
    picGalery.push(video);
}
picGaleryPoint.prepend(...picGalery);
