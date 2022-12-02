import React, {useState} from 'react';
// import { ReactDOM } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function ReviewForm() {
  const [review, setReview] = useState("");

  return (
    <form>
      <label>And enter why you love it!
        <br />
        <textarea
        //   type="textarea"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={5}
          cols={65}
        />
      </label>
    </form>
  );
}

export default ReviewForm;