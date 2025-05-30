import React from "react";
import Button from "shared/components/Button";      // keep your own wrapped button
import Tooltip from "shared/components/Tooltip";    // keep your own wrapped tooltip

import feedbackImage from "./assets/feedback.png";
import "./tooltip.scss";                           // SCSS from the previous step

const AboutTooltip = (tooltipProps) => (
  <Tooltip
    width={300}
    {...tooltipProps}
    renderContent={() => (
      /* Bootstrap-friendly structure */
      <div id="feedback-dropdown" className="p-3">

        {/* Image */}
        <div
          id="feedback-image-cont"
          className="d-flex justify-content-center mb-3"
        >
          <img
            id="feedback-image"
            src={feedbackImage}
            alt="Give feedback"
            className="img-fluid"
          />
        </div>

        {/* Text blocks */}
        <p className="feedback-paragraph">
          This simplified Jira clone is built with React on the front-end and
          Node/TypeScript on the back-end.
        </p>

        <p className="feedback-paragraph">
          Read more on my website or reach out via&nbsp;
          <a href="mailto:ivor@codetree.co">
            <strong>ivor@codetree.co</strong>
          </a>
        </p>

        {/* Action buttons */}
        <div className="d-flex">
          <a
            href="https://getivor.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button variant="primary">Visit Website</Button>
          </a>

          <a
            href="https://github.com/oldboyxx/jira_clone"
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
          >
            <Button icon="github">GitHub Repo</Button>
          </a>
        </div>
      </div>
    )}
  />
);

export default AboutTooltip;
