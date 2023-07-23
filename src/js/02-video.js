
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const SAVED_TIME = localStorage.getItem("videoplayer-current-time")

player.on('timeupdate', throttle(onPlay, 1000));

const onPlay = function ({seconds}) {
    localStorage.setItem(SAVED_TIME,
   JSON.stringify(seconds))
};




player.setCurrentTime(SAVED_TIME).then(function (seconds) {
    
})
.catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });



