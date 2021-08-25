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
    <h1>All Feedback</h1>
    <h2 className="title">We reserve the right to delete inappropriate posts.</h2>
      {feedbackData}
      <ul classNamne="center">
        {props.feedbackItems.map((item) => (
          <li key={item.id} className="center">
             <li className="small"> {item.id}:</li>
             <li className="small"> {item.email}:</li>
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
