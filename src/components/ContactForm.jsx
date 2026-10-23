import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { PhoneCall, Check, ChevronDown, PhoneOutgoing, CheckCircle2, ArrowLeft, Loader2, AlertCircle, Mail, Phone, Wrench } from 'lucide-react'
import { business } from '../data/business.js'
import './ContactForm.css'

const EMAILJS_PUBLIC_KEY = 'dbQZMcTMlz7FGDX5w'
const EMAILJS_SERVICE_ID = 'service_03ylzhr'
const EMAILJS_TEMPLATE_ID = 'template_fydc90h'

// --- set to true while the callback system is being fixed: shows a maintenance notice
// --- and pauses the form, so visitors don't send requests that would not arrive
const CALLBACK_MAINTENANCE = false

const highlights = [
  'Free first consultation, no commitment',
  'Talk directly to a developer (no sales pitch)',
  'Fast replies during working hours',
]

// --- Contact Form ---
export default function ContactForm() {
  const formRef = useRef(null)
  // --- useState ---
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | offline

  // real emails are sent only once all three EmailJS values are filled in
  const emailConfigured = ![EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID].some((v) => v.startsWith('YOUR_'))
  const { email, phone } = business.contact

  useEffect(() => {
    if (emailConfigured) emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [emailConfigured])

  function handleSubmit(e) {
    e.preventDefault()

    // no internet: say so right away instead of waiting for the request to fail
    if (!navigator.onLine) {
      setStatus('offline')
      return
    }

    setStatus('sending')

    if (!emailConfigured) {
      setTimeout(() => setStatus('sent'), 800)
      return
    }

    const form = formRef.current
    const templateParams = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      phone_number: form.phone_number.value,
      preferred_time: form.preferred_time.value,
      developer_role: form.developer_role.value,
      message: form.message.value,
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(
        () => setStatus('sent'),
        (error) => {
          console.error('Callback request failed to send', error)
          setStatus('error')
        }
      )
  }

  function resetForm() {
    formRef.current?.reset()
    setStatus('idle')
  }

  return (
    <section id="contact" className="Callback">
      <div className="MaxWidthWrapper">
        <div className="CallbackCard">
          <div className="CallbackGrid">
            <div className="CallbackLeft">
              <div className="CallbackBadge">
                <PhoneCall size={14} /> Request callback
              </div>
              <h2 className="CallbackTitle">Want to speak with an engineer? Schedule a callback.</h2>
              <p className="CallbackSubtext">
                Tell us a little about your project and pick a time. One of our developers will call you to talk it
                through and suggest the simplest way forward.
              </p>

              <ul className="CallbackHighlights">
                {/* --- map --- */}
                {highlights.map((item) => (
                  <li key={item} className="CallbackHighlight">
                    <span className="CallbackHighlightIcon"><Check size={14} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="CallbackDirect">
                <span className="CallbackDirectLabel">Prefer to reach us directly?</span>
                <a href={`mailto:${email}`} className="CallbackDirectLink">
                  <Mail size={15} /> {email}
                </a>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="CallbackDirectLink">
                  <Phone size={15} /> {phone}
                </a>
              </div>
            </div>

            <div className="CallbackRight">
              {CALLBACK_MAINTENANCE ? (
                <div className="CallbackMaintenance" role="status">
                  <span className="CallbackMaintenanceIcon"><Wrench size={22} /></span>
                  <p className="CallbackMaintenanceTitle">Callback requests are under maintenance</p>
                  <p className="CallbackMaintenanceText">
                    We are improving our system and can't receive requests right now. Please wait a little and
                    check back soon. For anything urgent, email us at <a href={`mailto:${email}`}>{email}</a> or
                    call <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>.
                  </p>
                </div>
              ) : status !== 'sent' ? (
                <form ref={formRef} onSubmit={handleSubmit} className="CallbackForm">
                  <div className="CallbackFormRow">
                    <div className="CallbackField">
                      <label className="CallbackLabel" htmlFor="cb-name">Full name</label>
                      <input id="cb-name" type="text" name="from_name" required autoComplete="name" placeholder="Juan Dela Cruz" className="CallbackInput" />
                    </div>
                    <div className="CallbackField">
                      <label className="CallbackLabel" htmlFor="cb-phone">Phone number / WhatsApp</label>
                      <input id="cb-phone" type="tel" name="phone_number" required autoComplete="tel" placeholder="+63 912 345 6789" className="CallbackInput" />
                    </div>
                  </div>

                  <div className="CallbackFormRow">
                    <div className="CallbackField">
                      <label className="CallbackLabel" htmlFor="cb-email">
                        Email <span className="CallbackOptional">(optional)</span>
                      </label>
                      <input id="cb-email" type="email" name="from_email" autoComplete="email" placeholder="you@company.com" className="CallbackInput" />
                    </div>
                    <div className="CallbackField">
                      <label className="CallbackLabel" htmlFor="cb-time">Preferred time</label>
                      <div className="CallbackSelectWrap">
                        <select id="cb-time" name="preferred_time" className="CallbackSelect">
                          <option>As soon as possible</option>
                          <option>Today, afternoon</option>
                          <option>Tomorrow, morning</option>
                          <option>Tomorrow, afternoon</option>
                        </select>
                        <ChevronDown size={16} className="CallbackSelectChevron" />
                      </div>
                    </div>
                  </div>

                  <div className="CallbackField">
                    <label className="CallbackLabel" htmlFor="cb-service">Service needed</label>
                    <div className="CallbackSelectWrap">
                      <select id="cb-service" name="developer_role" className="CallbackSelect">
                        <option>Web-Based System Development</option>
                        <option>Custom Software Development</option>
                        <option>Database Management Systems</option>
                        <option>System Maintenance &amp; Support</option>
                        <option>Not sure yet</option>
                      </select>
                      <ChevronDown size={16} className="CallbackSelectChevron" />
                    </div>
                  </div>

                  <div className="CallbackField">
                    <label className="CallbackLabel" htmlFor="cb-message">Project details</label>
                    <textarea
                      id="cb-message"
                      name="message"
                      rows={3}
                      placeholder="What do you use today, and what would you like the system to handle?"
                      className="CallbackTextarea"
                    ></textarea>
                  </div>

                  {(status === 'error' || status === 'offline') && (
                    <div className="CallbackError" role="alert">
                      <AlertCircle size={18} />
                      <div>
                        <p className="CallbackErrorTitle">
                          {status === 'offline' ? 'Your request was not sent' : 'Our system is under maintenance'}
                        </p>
                        <p className="CallbackErrorText">
                          {status === 'offline'
                            ? 'You seem to be offline. Please check your internet connection and try again.'
                            : 'Your request was not received because our callback system is having a problem. Please wait a few minutes and try again.'}{' '}
                          Your details are still in the form. You can also email us at{' '}
                          <a href={`mailto:${email}`}>{email}</a>.
                        </p>
                      </div>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'} className="CallbackSubmitBtn">
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="CallbackSpinner" />
                        <span>Sending request...</span>
                      </>
                    ) : (
                      <>
                        <PhoneOutgoing size={16} />
                        <span>Request developer callback</span>
                      </>
                    )}
                  </button>
                  <p className="CallbackNote">We only use your details to contact you about this request.</p>
                </form>
              ) : (
                <div className="CallbackSuccess" role="status">
                  <p className="CallbackSuccessTitle">
                    <CheckCircle2 size={20} className="CallbackSuccessIcon" /> Callback request received!
                  </p>
                  <p className="CallbackSuccessText">
                    Thanks! One of our developers will call you at your preferred time, usually within one business
                    day.
                  </p>
                  <button type="button" onClick={resetForm} className="CallbackSuccessBtn">
                    <ArrowLeft size={14} />
                    <span>Send another request</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
