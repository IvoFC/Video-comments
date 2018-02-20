import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {
    componentDidMount() {
        videos = document.querySelectorAll("video");
for (var i = 0, l = videos.length; i < l; i++) {
    var video = videos[i];
    var src = video.src || (function () {
        var sources = video.querySelectorAll("source");
        for (var j = 0, sl = sources.length; j < sl; j++) {
            var source = sources[j];
            var type = source.type;
            var isMp4 = type.indexOf("mp4") != -1;
            if (isMp4) return source.src;
        }
        return null;
    })();
    if (src) {
        var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
        if (isYoutube) {
            var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
            id = (id.length > 1) ? id.splice(1) : id;
            id = id.toString();
            var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
            video.src = mp4url + id;
        }
    }
}
    }
    render() {
        return (
            <div className="text-center" >
                {/* <iframe
                    className={this.props.className}
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    width="570"
                    src={this.props.src}
                /> */}
               <video controls="true">
    <source src="https://www.youtube.com/watch?v=RCeW2895tt4" type="video/mp4" />
</video>
            </div>
        )
    }
}