import React, { useState, useEffect } from "react";
// ... (다른 import 문들)

function getConsonant() {
  // 기존 코드

  const [imageSrc, setImageSrc] = useState("/세종대왕_기본.png");

  useEffect(() => {
    if (showModal) {
      setImageSrc("/세종대왕_기본.png");
      const timeout = setTimeout(() => {
        setShowModal(false);
      }, 1000); // 설명 모달 시간 설정! 7초 정도? 임시로 1초

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showModal]);

  useEffect(() => {
    if (data.correct !== undefined) {
      if (data.correct) {
        setImageSrc("/세종대왕_웃음.png");
      } else {
        setImageSrc("/세종대왕_화남.png");
      }

      const imageChangeTimeout = setTimeout(() => {
        setImageSrc("/세종대왕_기본.png");
      }, 3000); // 3초 후에 기본 이미지로 변경

      return () => {
        clearTimeout(imageChangeTimeout);
      };
    }
  }, [data]);

  // 나머지 코드

  return (
    <>
      <ModalPage />

      <div className={styles.wrapper}>
        <div className={styles.text}>
          {/* 기존 코드 */}
        </div>
        <br />
        <div className={styles.redBlock}>
          <img
            src={imageSrc}
            style={{
              position: "absolute",
              left: "125px",
              width: "350px",
              marginTop: "-350px",
            }}
            alt="세종대왕 이미지"
          />
          {/* 기존 코드 */}
        </div>
      </div>
    </>
  );
}

export default getConsonant;
