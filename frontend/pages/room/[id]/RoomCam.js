import React from 'react';
import OpenViduVideoComponent from './OvVideo';
import { useSelector } from "react-redux";
// import Roomstyles from '@/styles/RoomPage.module.css';
import Roomstyles from '../../../styles/RoomPage.module.css';
// import Videostyles from '@/styles/UserVideo.module.css';
import Videostyles from '../../../styles/UserVideo.module.css';
import { useState } from "react";

export default function RoomCam() {

  const session = useSelector(state => state.openvidu.session);
  const nickname = useSelector(state => state.player.currentNick);
  const publisher = useSelector(state => state.openvidu.publisher);
  const participants = useSelector(state => state.openvidu.participants);
  const [isAudioDistorted, setIsAudioDistorted] = useState(true)

  console.log("Room Cam")
  console.log(publisher);
  console.log(participants);

  return (
    <div className="container">
      {session !== undefined ? (
        <div id="session">
          <div id="video-container" className={Roomstyles.camList}>

            {participants != null ? participants.map((par, i) => (
              par!=null?
              <span key={par.id} className={Videostyles.streamcomponent} >
                <OpenViduVideoComponent className={Roomstyles.cam} streamManager={par.participant} isAudioDistorted={isAudioDistorted} />
                {console.log(par.nick)}
                <div className={Videostyles.nickname}>{par.nick}</div>
              </span>
            :null)) : null}

            {publisher !== undefined ? (
              <span className={Videostyles.streamcomponent}>
                <OpenViduVideoComponent className={Roomstyles.cam}
                  streamManager={publisher} />
                <div className={Videostyles.nickname}>{nickname}</div>
              </span>
            ) : null}
            
          </div>
        </div>
      ) : null}
    </div>
  );
}