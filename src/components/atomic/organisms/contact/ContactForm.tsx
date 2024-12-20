'use client';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import FormInput from '../../atoms/FormInput';
import { ImSpinner6 } from "react-icons/im";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const VSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required.'),
  lastName: Yup.string().required('Last name is required.'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  subject: Yup.string().required('Subject is required.'),
  message: Yup.string().required('Message required.'),
});

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (values: FormValues) => {
    setIsSubmitting(true);
    const templateParams = {
      to_name: 'Javier',
      from_name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    emailjs
      .send(
        'service_h9od0df', // Replace with your EmailJS Service ID
        'template_uylemk8', // Replace with your EmailJS Template ID
        templateParams,
        'Ve_HyowSqj8_Wb_6f' // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmissionStatus('success');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmissionStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className='container mx-auto p-3 mt-10 flex flex-col  font-poppins lg:px-56 mb-12'>
      <div className=''>
        <h3 className='lg:text-4xl text-2xl font-medium text-center mb-5'>
          Get In Touch
        </h3>
        <p className='text-center lg:text-base text-sm'>
          Questions about our farm, products, online ordering or pickup? Please
          get in touch using this form. Also remember to{' '}
          <Link href={''} className='underline text-orange-dark'>
            check out our online shop!
          </Link>
        </p>
      </div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={VSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        <Form className='flex flex-col mt-10 mb-20'>
          <div className='grid grid-cols-2 gap-3 mb-3'>
            <FormInput id='firstName' name='firstName' label='First Name' placeholder='First Name' errorText='firstName' />
            <FormInput id='lastName' name='lastName' label='Last Name' placeholder='Last Name' errorText='lastName' />
          </div>
            <FormInput id='email' name='email' label='Email' placeholder='Email' errorText='email' />
            <FormInput id='subject' name='subject' label='Subject' placeholder='Subject' errorText='subject' />
            <FormInput id='message' name='message' label='Message' placeholder='Message' errorText='message' as='textarea' height='h-48' />
          <div className='flex justify-center mt-5'>
            <div className='flex justify-center mt-5'>
              <button
                type='submit'
                className='py-3 px-12 rounded-3xl border border-black hover:border-orange-dark hover:bg-orange-dark hover:text-white lg:text-base text-sm'
                disabled={isSubmitting}
              >
                {isSubmitting ?<div className='flex items-center mr-2'> <ImSpinner6 className='animate-spin mr-1'/> <span>Sending...</span> </div>  : 'Submit'}
              </button>
            </div>
          </div>

          {submissionStatus === 'success' && (
            <p className='text-lime-500 text-center mt-4'>
              Your message has been sent successfully!
            </p>
          )}
          {submissionStatus === 'error' && (
            <p className='text-rose-500 text-center mt-4'>
              Failed to send your message. Please try again.
            </p>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
