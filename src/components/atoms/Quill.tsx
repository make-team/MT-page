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

function Quill({ name, text, onChange, toolbarOff = false }: PropTypes) {
  const contentsChange = useCallback(
    (contents: string) => {
      if (toolbarOff) {
        onChange({ name: name, value: contents });
      }
    },
    [onChange, name, toolbarOff]
  );

  return (
    <ReactQuill
      modules={{ toolbar: toolbarOff ? undefined : false }}
      theme="snow"
      value={text}
      onChange={contentsChange}
      style={{ height: "100%" }}
    />
  );
}

export default Quill;
