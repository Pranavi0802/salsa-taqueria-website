const hours = [
  { day: 'Mon', open: '6:00 AM', close: '10:00 PM' },
  { day: 'Tue', open: '6:00 AM', close: '10:00 PM' },
  { day: 'Wed', open: '6:00 AM', close: '10:00 PM' },
  { day: 'Thu', open: '6:00 AM', close: '10:00 PM' },
  { day: 'Fri', open: '6:00 AM', close: '10:00 PM' },
  { day: 'Sat', open: '6:00 AM', close: '10:00 PM' },
  { day: 'Sun', open: '10:00 AM', close: '10:00 PM' },
]

function Location() {
  return (
    <section className="section">
      <h2>Location & Hours</h2>

      <div className="location-box">
        <p><strong>📍 Address</strong></p>
        <p>1735 State Road 436</p>
        <p>Winter Park, FL 32792</p>

        <div style={{ height: 16 }} />

        <p><strong>🕒 Business Hours</strong></p>
        <p className="open-now">Open Now</p>

        <div className="hours-grid">
          {hours.map((h) => (
            <div key={h.day} className="hours-row">
              <span className="hours-day">{h.day}</span>
              <span className="hours-time">
                {h.open} – {h.close}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location
