export default function Home() {
  return (
    <main className="page">
      <aside className="sidebar reveal" style={{ "--d": "80ms" }}>
        <div className="brand">
          <div className="brand-mark">IP</div>
          <div>
            <div className="brand-title">INBOXPILOT</div>
            <div className="brand-subtitle">Student Portal</div>
          </div>
          <span className="status-pill">Live</span>
        </div>

        <nav className="nav">
          <a className="nav-item active" href="#">Overview</a>
          <a className="nav-item" href="#">Inbox <span className="nav-count">18</span></a>
          <a className="nav-item" href="#">Calendar</a>
          <a className="nav-item" href="#">Drafts</a>
          <a className="nav-item" href="#">Automation</a>
        </nav>

        <div className="focus-card">
          <h4>Focus mode</h4>
          <p>AI auto-replies are paused during exams.</p>
          <button className="btn ghost">Resume automation</button>
        </div>
      </aside>

      <section className="content">
        <header className="topbar reveal" style={{ "--d": "120ms" }}>
          <div>
            <div className="eyebrow">Daily briefing</div>
            <h1>Good afternoon, Theo. Your agent is on watch.</h1>
          </div>
          <div className="topbar-actions">
            <button className="btn ghost">New message</button>
            <button className="btn primary">Run daily sweep</button>
          </div>
        </header>

        <div className="stats">
          <div className="card stat reveal" style={{ "--d": "160ms" }}>
            <div className="card-label">Unread threads</div>
            <div className="stat-value">18</div>
            <div className="stat-chip">+4 today</div>
          </div>
          <div className="card stat reveal" style={{ "--d": "200ms" }}>
            <div className="card-label">Reply drafts</div>
            <div className="stat-value">6</div>
            <div className="stat-chip">2 waiting approval</div>
          </div>
          <div className="card stat reveal" style={{ "--d": "240ms" }}>
            <div className="card-label">Upcoming deadlines</div>
            <div className="stat-value">3</div>
            <div className="stat-chip">Next in 2 days</div>
          </div>
          <div className="card stat reveal" style={{ "--d": "280ms" }}>
            <div className="card-label">Focus time saved</div>
            <div className="stat-value">2h 25m</div>
            <div className="stat-chip">+18% this week</div>
          </div>
        </div>

        <div className="main-grid">
          <section className="card queue reveal" style={{ "--d": "320ms" }}>
            <div className="card-header">
              <div>
                <div className="eyebrow">Triage queue</div>
                <h2>Priority threads</h2>
              </div>
              <button className="btn ghost">View all</button>
            </div>
            <div className="queue-list">
              <article className="queue-item">
                <div>
                  <h3>Midterm project rubric + meeting slots</h3>
                  <p>Professor L. Chen</p>
                  <span>Pick a 15 min slot. I can review your outline by Friday.</span>
                  <div className="meta">14m ago</div>
                </div>
                <span className="tag urgent">Urgent</span>
              </article>
              <article className="queue-item">
                <div>
                  <h3>Internship fair RSVP reminder</h3>
                  <p>Career Center</p>
                  <span>You are on the waitlist. Confirm attendance to lock in.</span>
                  <div className="meta">1h ago</div>
                </div>
                <span className="tag">Follow up</span>
              </article>
              <article className="queue-item">
                <div>
                  <h3>Tuition payment plan update</h3>
                  <p>Student Finance</p>
                  <span>Your next installment is scheduled for Feb 10.</span>
                  <div className="meta">Yesterday</div>
                </div>
                <span className="tag">Finance</span>
              </article>
            </div>
          </section>

          <aside className="stack">
            <section className="card actions reveal" style={{ "--d": "360ms" }}>
              <div className="card-header">
                <div>
                  <div className="eyebrow">Agent actions</div>
                  <h2>Autopilot</h2>
                </div>
                <span className="tag soft">Auto-pilot</span>
              </div>
              <div className="action-list">
                <div className="action-item">
                  <h3>Draft response</h3>
                  <p>Reply to Prof. Chen with preferred meeting times.</p>
                  <span className="status ready">Ready for review</span>
                </div>
                <div className="action-item">
                  <h3>Schedule event</h3>
                  <p>Add internship fair on Feb 6, 4:00 PM.</p>
                  <span className="status queued">Queued</span>
                </div>
                <div className="action-item">
                  <h3>Organize</h3>
                  <p>Label scholarship emails into “Funding 2026”.</p>
                  <span className="status progress">In progress</span>
                </div>
              </div>
            </section>

            <section className="card calendar reveal" style={{ "--d": "400ms" }}>
              <div className="card-header">
                <div>
                  <div className="eyebrow">Calendar</div>
                  <h2>Today&apos;s flow</h2>
                </div>
                <button className="fab">+</button>
              </div>
              <div className="calendar-list">
                <div className="calendar-item">
                  <div>
                    <h4>CSE 130 lecture</h4>
                    <p>Humanities</p>
                  </div>
                  <span>2:40 PM</span>
                </div>
                <div className="calendar-item">
                  <div>
                    <h4>Project sync</h4>
                    <p>Zoom</p>
                  </div>
                  <span>1:30 PM</span>
                </div>
                <div className="calendar-item">
                  <div>
                    <h4>Internship fair</h4>
                    <p>Classroom Unit 2</p>
                  </div>
                  <span>6:00 PM</span>
                </div>
              </div>
              <button className="btn ghost full">Sync calendar</button>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
