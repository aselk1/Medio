import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./SignupForm";
import "../story/Story.css";

function SignupFormModal({startedButton}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button
        className="signIn"
        // id="openLogin"
        onClick={() => setShowModal(true)}
      >
        Sign In
      </button> */}
      <button
        className={
          startedButton
            ? "get-started-button started-active"
            : "get-started-button"
        }
        onClick={() => setShowModal(true)}
      >
        Get Started
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
