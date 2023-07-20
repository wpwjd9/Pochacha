import React, { useState } from 'react';
import Image from 'next/image';
import './../first.css';

const Room = () => {
  const [text, setText] = useState("")
  const handleOnChange = (e)=> {
    setText(e.target.value)
  };
  return (
    <div>
    <div className="first" >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/천막.png" />
        <br />
        <img src="/logo.png" />
        <br />
      </div>

      <div style={{ display: 'flex' }}>
        <div className='leftBox'>
          <div style={{ display: 'flex' }}>
            <div className='imgCircle'></div>
            <div className='inputNickname'>
              <p style={{fontSize: '20px'}}>캐릭터와 닉네임 선택</p>
              <br />
              <label htmlFor=""></label>
              {/* <input type="text" /> */}
              <input value = {text} onChange = {handleOnChange} />
            </div>
            <button>START</button>
          </div>
        </div>

        <div className='rightBox'>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <br />
          <br />
          <p id="tip">즐거운 게임을 위한 TIP!</p>
          <img src="/카메라.png" />
          <p>카메라 ON 모드로 입장하면</p>
          <p>다양한 사람들의 표정을 즐길 수 있어요</p>

          </div>
        </div>
        {/* <p id="bottom">서비스 약관 | 개인정보 취급정보 | 문의</p> */}
      </div>
    </div>
    </div>
  )
};

export default Room;
Room.useClient = true;