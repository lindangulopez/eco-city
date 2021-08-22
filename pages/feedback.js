import { useRef, useState } from 'react';
import Link from 'next/link';

function FeedbackPage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <>
    <div>
     <div className="container center">
    <h1 className="title description">The Feedback Page</h1>
    <p>You can ask questions, post news and give feedback about the Explore & Collaborate project here.</p> 
    <p> Please search answers to the questions most <Link href="/allFeedback">commonly asked</Link>&nbsp;before you sumit a query.</p>
    <p>Zoom workshop details are posted on the Explore & Collaborate
    <br /><Link href="https://groups.google.com/g/explore-collaborate">Google Group</Link>&nbsp; page; and 
    <br /><Link href="https://github.com/users/lindangulopez/projects/10#column-15409972" >Github Group</Link> page.</p>
    <hr />
     
    
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <br></br>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <br></br>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <br></br>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <br></br>
        <button>Send Feedback</button>
        <p className="tiny">Please note we reserve the right to delete inappropriate posts.</p>
      </form>
      
{/*       TypeError: Cannot read property 'map' of undefined
     <button onClick={loadFeedbackHandler}>Load Feedback</button>
     <ul>
	     {feedbackItems.map(item =><li key={item.id}>{item.text}</li>)}
     </ul> */}

    </div>
    </div>
    </>
  );
}

export default FeedbackPage;
