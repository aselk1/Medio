import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const RichEditor2 = ({ editorState, setEditorState, readOnly }) => {
  return (
    <div>
      <div className="editorTextSize"
      // style={{
      //   border: "1px solid black",
      //   padding: "2px",
      //   minHeight: "400px",
      // }}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          readOnly={readOnly}
          toolbarHidden={readOnly}
        />
      </div>
    </div>
  );
}

export default RichEditor2
