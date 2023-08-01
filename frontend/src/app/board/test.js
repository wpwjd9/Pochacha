
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
`;

const ModalPage = ({ currentCell, pin, onCloseModal }) => {
  // ...

  return (
    <>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <p>{currentCell}</p>
            <p>{pin}</p>
            <button onClick={onCloseModal}>Close</button>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

// ...

export default function Board() {
  // ...

  return (
    <div>
      <h1>보드게임 화면</h1>
      <button onClick={handleRollDiceClick}>주사위 굴리기</button>

      <div>
        <h2>주사위 눈 : {dice}, 현재 {pin}번 블록에 위치</h2> <h2>{lab}바퀴</h2>
      </div>

      <DiceBox dice={dice} />
      <BoardMap pin={pin} />

      <div>
        <ModalPage currentCell={currentCell} pin={pin} onCloseModal={() => setShowModal(false)} />
      </div>
    </div>
  );
}
