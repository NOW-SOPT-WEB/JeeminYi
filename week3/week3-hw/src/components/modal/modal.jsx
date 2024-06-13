import ModalSection from "./modal-style";
function Modal({ shuffleCards, modalRef }) {
  const handleClick = () => {
    modalRef.current.close();
    shuffleCards();
  };

  return (
    <ModalSection ref={modalRef}>
      <h1>축하합니다!</h1>
      <button onClick={handleClick}>게임으로 돌아가기</button>
    </ModalSection>
  );
}

export default Modal;
