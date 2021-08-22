import { Fragment, useState } from 'react';

import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
    <Fragment>
    <h1>Feedback & Responses to Common Questions</h1>
      {feedbackData}
      <ul classNamne="center">
        {props.feedbackItems.map((item) => (
          <li key={item.id} className="center">
             <li className="tiny"> {item.id}:</li>
             <li className="tiny"> {item.email}:</li>
            &nbsp;&nbsp;<strong>{item.text}{' '}</strong>
{/*             <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button> */}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
