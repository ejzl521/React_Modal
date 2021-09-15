import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <div>
      <div>
        <button style={{padding: "30px"}} onClick={openModal}>
          Modal
        </button>
      </div>
      <Modal modalVisible={modalVisible} closeModal={closeModal}/>
    </div>
    
  );
}

export default App;