import React, { useCallback } from "react";
import ReactQuill from "react-quill-2";
import "react-quill-2/dist/quill.snow.css";

interface PropTypes {
  onChange: ({ name, value }: { name: string; value: string | Date }) => void;
  name: string;
  readonly?: boolean;
  text: string;
  toolbarOff?: boolean;
}

function Quill({ name, text, onChange, toolbarOff, readonly }: PropTypes) {
  const contentsChange = useCallback(
    (contents: string) => {
      onChange({ name: name, value: contents });
    },
    [onChange, name]
  );

  return (
    <ReactQuill
      modules={{ toolbar: toolbarOff ?? false }}
      theme="snow"
      value={text}
      onChange={contentsChange}
      style={{ height: "20rem" }}
      readOnly={readonly}
    />
  );
}

export default Quill;
