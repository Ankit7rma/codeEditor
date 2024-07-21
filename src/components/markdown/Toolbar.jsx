// /* eslint-disable react/prop-types */
// import Button from "react-bootstrap/Button";
// import "@github/markdown-toolbar-element";

// function Toolbar(props) {
//   const btnStyle = {
//     padding: "3px 10px",
//     fontSize: "12px",
//     lineHeight: "20px",
//     margin: "3px",
//   };

//   return (
//     <div>
//       <markdown-toolbar for="textarea_input">
//         <md-header level="1">
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-heading"></i>
//           </Button>
//         </md-header>

//         <md-bold>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-bold"></i>
//           </Button>
//         </md-bold>

//         <md-italic>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-italic"></i>
//           </Button>
//         </md-italic>

//         <md-quote>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-quote-right"></i>
//           </Button>
//         </md-quote>

//         <md-code>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-code"></i>
//           </Button>
//         </md-code>

//         <md-link>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-link"></i>
//           </Button>
//         </md-link>

//         <md-image>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-image"></i>
//           </Button>
//         </md-image>

//         <md-unordered-list>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-list-ul"></i>
//           </Button>
//         </md-unordered-list>

//         <md-ordered-list>
//           <Button style={btnStyle} variant="info">
//             <i className="fas fa-list-ol"></i>
//           </Button>
//         </md-ordered-list>

//         <Button style={btnStyle} variant="info" onClick={props?.clickHandler}>
//           <i className="fas fa-file-download"></i>
//         </Button>
//       </markdown-toolbar>
//     </div>
//   );
// }

// export default Toolbar;
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeading,
  faBold,
  faItalic,
  faQuoteRight,
  faCode,
  faLink,
  faImage,
  faListUl,
  faListOl,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import "@github/markdown-toolbar-element";
import "bootstrap/dist/css/bootstrap.min.css";

function Toolbar(props) {
  const btnStyle = {
    padding: "3px 10px",
    fontSize: "12px",
    lineHeight: "20px",
    margin: "3px",
  };

  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;

  return (
    <div>
      <markdown-toolbar for="textarea_input">
        <md-header level="1">
          <OverlayTrigger placement="top" overlay={renderTooltip("Heading")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faHeading} />
            </Button>
          </OverlayTrigger>
        </md-header>

        <md-bold>
          <OverlayTrigger placement="top" overlay={renderTooltip("Bold")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faBold} />
            </Button>
          </OverlayTrigger>
        </md-bold>

        <md-italic>
          <OverlayTrigger placement="top" overlay={renderTooltip("Italic")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faItalic} />
            </Button>
          </OverlayTrigger>
        </md-italic>

        <md-quote>
          <OverlayTrigger placement="top" overlay={renderTooltip("Quote")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faQuoteRight} />
            </Button>
          </OverlayTrigger>
        </md-quote>

        <md-code>
          <OverlayTrigger placement="top" overlay={renderTooltip("Code")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faCode} />
            </Button>
          </OverlayTrigger>
        </md-code>

        <md-link>
          <OverlayTrigger placement="top" overlay={renderTooltip("Link")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faLink} />
            </Button>
          </OverlayTrigger>
        </md-link>

        <md-image>
          <OverlayTrigger placement="top" overlay={renderTooltip("Image")}>
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faImage} />
            </Button>
          </OverlayTrigger>
        </md-image>

        <md-unordered-list>
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip("Unordered List")}
          >
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faListUl} />
            </Button>
          </OverlayTrigger>
        </md-unordered-list>

        <md-ordered-list>
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip("Ordered List")}
          >
            <Button style={btnStyle} variant="info">
              <FontAwesomeIcon icon={faListOl} />
            </Button>
          </OverlayTrigger>
        </md-ordered-list>

        <OverlayTrigger placement="top" overlay={renderTooltip("Download")}>
          <Button style={btnStyle} variant="info" onClick={props?.clickHandler}>
            <FontAwesomeIcon icon={faFileDownload} />
          </Button>
        </OverlayTrigger>
      </markdown-toolbar>
    </div>
  );
}

export default Toolbar;
