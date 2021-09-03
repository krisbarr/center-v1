import Mailchimp from 'react-mailchimp-form'
import React from 'react'

function MailchimpForm(props) {
  return (
    <div>
    <Mailchimp
    action={process.env.REACT_APP_MAILCHIMP_KEY}
    className="chimp-forms text-center"
    fields={[
      {
        name:'EMAIL',
        placeholder: 'Email',
        type: 'email',
        required: true
      },
      {
        name: 'FNAME',
        placeholder: 'First name',
        type: 'text',
        required: true
      },
      {
        name: 'LNAME',
        placeholder: 'Last name',
        type: 'text',
        required: true
      }
    ]}
    messages= {
      {
        sending: 'Sending...',
        success: 'Namaste! Successfully subscribed.',
        error: 'An unexpected error occured. Please refresh the page and try again.',
        empty: 'This field is required',
        duplicate: 'This email address is already signed up.',
        button: 'Sign Up'
      }
    }
    />
    </div>
  );
}

export default MailchimpForm
