import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {

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
                <figure id="videoContainer">
                    <video id="video" controls preload="metadata" poster="img/poster.jpg">
                        <source src="video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4">
                            <source src="video/tears-of-steel-battle-clip-medium.webm" type="video/webm">
                                <source src="video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg">
                                    <!-- Flash fallback -->
      <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" width="1024" height="576">
                                        <param name="movie" value="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
                                        <param name="allowfullscreen" value="true" />
                                        <param name="wmode" value="transparent" />
                                        <param name="flashvars" value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
                                        <img alt="Tears of Steel poster image" src="img/poster.jpg" width="1024" height="428" title="No video playback possible, please download the video from the link below" />
                                    </object>
                                    <!-- Offer download -->
      <a href="video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
   </video>
                                <figcaption>&copy; Blender Foundation | <a href="http://mango.blender.org">mango.blender.org</a></figcaption>
</figure>
            </div>
                        )
                    }
}