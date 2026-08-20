"use client";

import { FormEvent, useState } from "react";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h3>You&apos;re on the list.</h3>
        <p>Thanks! We&apos;ll be in touch soon to talk through your event.</p>
        <button type="button" onClick={() => setSent(false)}>Send another inquiry</button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="date">Event date</label>
        <input id="date" name="date" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="location">Event location</label>
        <input id="location" name="location" placeholder="Waco, TX" required />
      </div>
      <div className="field">
        <label htmlFor="type">Event type</label>
        <select id="type" name="type" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option>Birthday</option>
          <option>Bridal shower</option>
          <option>Baby shower</option>
          <option>Private party</option>
          <option>Brand pop-up</option>
          <option>Other special event</option>
        </select>
      </div>
      <button className="form-submit" type="submit">
        Check your date <Arrow />
      </button>
    </form>
  );
}
