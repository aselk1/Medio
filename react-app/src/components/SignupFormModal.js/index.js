import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./SignupForm";
import "../story/Story.css";

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="signIn"
        // id="openLogin"
        onClick={() => setShowModal(true)}
      >
        Sign In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
