import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Editor from "./web/Editor";
import useLocalStorage from "./hooks/LocalStorage";

function LaunguageManager() {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const htmlDefault = `<h2>Hello User</h2>`;
  const cssDefault = `body { text-align: center; }`;

  const [htmlVal, updateHtmlStorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStorage] = useLocalStorage("js", "");

  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
      <body>${html}
        ${js && `<script src="${jsURL}"></script>`}
      </body>
    </html>`;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateHtmlStorage(html);
      updateCssStorage(css);
      updateJsStorage(js);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [html, css, js, updateHtmlStorage, updateCssStorage, updateJsStorage]);

  return (
    <div>
      <Container fluid className="pane pane-top">
        <Row noGutters>
          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-html5"></i> Html
            </div>
            <Editor
              language="xml"
              value={html}
              onChange={(newVal) => updateHtml(newVal)}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-css3-alt"></i> Css
            </div>
            <Editor
              language="css"
              value={css}
              onChange={(newVal) => updateCss(newVal)}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-js-square"></i> Js
            </div>
            <Editor
              language="javascript"
              value={js}
              onChange={(newVal) => updateJs(newVal)}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="pane pane-bottom">
        <Row noGutters>
          <iframe
            srcDoc={srcDoc}
            className="output-pane"
            allowFullScreen
            title="output"
          ></iframe>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default LaunguageManager;
