import AceEditor from "react-ace";
import PropTypes from "prop-types";

// Import the required modes
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";

// Import the required themes
import "ace-builds/src-noconflict/theme-monokai";

function Editor({ language, value, onChange }) {
  const modes = {
    xml: "xml",
    javascript: "javascript",
    css: "css",
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <AceEditor
        mode={modes[language] || "text"}
        theme="monokai"
        value={value}
        onChange={onChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showGutter: true,
          wrap: true,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

Editor.propTypes = {
  language: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
