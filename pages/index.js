import React from 'react';

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{__html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mas Leads - Insurance Call Center Support</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          html { scroll-behavior: smooth; }
          body { margin:0; background:#060a14; }
          ::selection { background: rgba(47,128,255,0.35); }
          @keyframes drift { 0%{transform:translate(0,0)} 50%{transform:translate(6%,4%)} 100%{transform:translate(0,0)} }
          @keyframes drift2 { 0%{transform:translate(0,0)} 50%{transform:translate(-5%,3%)} 100%{transform:translate(0,0)} }
          @keyframes pulseDot { 0%{box-shadow:0 0 0 0 rgba(46,230,160,0.55)} 70%{box-shadow:0 0 0 9px rgba(46,230,160,0)} 100%{box-shadow:0 0 0 0 rgba(46,230,160,0)} }
          @keyframes floaty { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
          input[type=range]{ -webkit-appearance:none; appearance:none; height:6px; border-radius:99px; background:rgba(255,255,255,0.1); outline:none; }
          input[type=range]::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:20px; height:20px; border-radius:50%; background:#2f80ff; cursor:pointer; box-shadow:0 0 0 4px rgba(47,128,255,0.2); }
          input[type=range]::-webkit-slider-thumb:hover{ transform:scale(1.15); }
          input[type=range]::-moz-range-thumb{ width:20px; height:20px; border:none; border-radius:50%; background:#2f80ff; cursor:pointer; box-shadow:0 0 0 4px rgba(47,128,255,0.2); }
          input::placeholder, textarea::placeholder { color:#5a6478; }
        </style>
      </head>
      <body>
        <div style="position:relative; min-height:100vh; background:#060a14; color:#eef2f8; font-family:'Manrope',system-ui,sans-serif; overflow-x:hidden;">
        
          <!-- animated background -->
          <div style="position:fixed; inset:0; z-index:0; pointer-events:none;">
            <div style="position:absolute; top:-15%; left:-10%; width:55vw; height:55vw; background:radial-gradient(circle at center, rgba(47,128,255,0.22), transparent 62%); filter:blur(20px); animation:drift 8s ease-in-out infinite;"></div>
            <div style="position:absolute; bottom:-20%; right:-12%; width:55vw; height:55vw; background:radial-gradient(circle at center, rgba(46,230,160,0.13), transparent 62%); filter:blur(20px); animation:drift2 10s ease-in-out infinite;"></div>
            <div style="position:absolute; inset:0; background:radial-gradient(circle at 50% 0%, rgba(47,128,255,0.08), transparent 45%);"></div>
          </div>
        
          <!-- ===== HEADER ===== -->
          <header style="position:sticky; top:0; z-index:50; backdrop-filter:blur(16px); background:rgba(6,10,20,0.72); border-bottom:1px solid rgba(255,255,255,0.07);">
            <div style="max-width:1200px; margin:0 auto; padding:0 24px; height:72px; display:flex; align-items:center; justify-content:space-between;">
              <a href="#top" style="display:flex; align-items:center; gap:11px; text-decoration:none; color:#eef2f8;">
                <span style="display:grid; place-items:center; width:38px; height:38px; border-radius:11px; background:linear-gradient(135deg,#2f80ff,#1452c9); box-shadow:0 6px 22px rgba(47,128,255,0.45); font-family:'Space Grotesk'; font-weight:700; font-size:18px; color:#fff;">M</span>
                <span style="font-family:'Space Grotesk'; font-weight:600; font-size:19px; letter-spacing:-0.01em;">Mas Leads</span>
              </a>
              <nav style="display:flex; align-items:center; gap:34px;">
                <a href="#how" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500; cursor:pointer;">How It Works</a>
                <a href="#services" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500; cursor:pointer;">Services</a>
                <a href="#calculator" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500; cursor:pointer;">Capacity</a>
                <a href="#faq" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500; cursor:pointer;">FAQ</a>
                <a href="#contact" style="display:inline-flex; align-items:center; gap:8px; padding:10px 20px; border-radius:11px; background:linear-gradient(135deg,#2f80ff,#1a5fde); color:#fff; text-decoration:none; font-weight:600; font-size:14px; cursor:pointer;">Get Started</a>
              </nav>
            </div>
          </header>
        
          <main id="top" style="position:relative; z-index:1;">
        
            <!-- ===== HERO ===== -->
            <section style="max-width:1200px; margin:0 auto; padding:84px 24px 70px; display:grid; grid-template-columns:1.05fr 1fr; gap:54px; align-items:center;">
              <div>
                <div style="display:inline-flex; align-items:center; gap:9px; padding:7px 14px; border-radius:99px; background:rgba(47,128,255,0.1); border:1px solid rgba(47,128,255,0.28); font-size:13px; color:#5e9bff; margin-bottom:22px;">
                  <span style="width:8px; height:8px; border-radius:50%; background:#2ee6a0; animation:pulseDot 2s infinite;"></span>
                  Insurance-focused call center support
                </div>
                <h1 style="font-family:'Space Grotesk'; font-size:55px; line-height:1.05; font-weight:700; letter-spacing:-0.02em; margin:0 0 22px;">Insurance Call Center Support Built to <span style="color:#2f80ff;">Scale</span></h1>
                <p style="font-size:18px; line-height:1.6; color:#9aa3b5; max-width:540px; margin:0 0 34px;">Mas Leads helps insurance agencies and producers scale outbound calling, lead follow-up, appointment setting, and prospecting—without building an internal team.</p>
                <div style="display:flex; gap:14px; flex-wrap:wrap;">
                  <a href="#contact" style="display:inline-flex; align-items:center; gap:9px; padding:15px 28px; border-radius:13px; background:linear-gradient(135deg,#2f80ff,#1a5fde); color:#fff; text-decoration:none; font-weight:700;">Get Started</a>
                  <a href="#how" style="display:inline-flex; align-items:center; gap:9px; padding:15px 26px; border-radius:13px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.14); color:#fff; text-decoration:none; font-weight:600;">Learn More</a>
                </div>
                <div style="display:flex; gap:30px; margin-top:42px; flex-wrap:wrap;">
                  <div><div style="font-family:'Space Grotesk'; font-size:30px; font-weight:700; color:#fff;">50,000+</div><div style="font-size:13px; color:#7c8499; margin-top:2px;">Leads Supported</div></div>
                  <div style="width:1px; background:rgba(255,255,255,0.1);"></div>
                  <div><div style="font-family:'Space Grotesk'; font-size:30px; font-weight:700; color:#fff;">100%</div><div style="font-size:13px; color:#7c8499; margin-top:2px;">Insurance Focused</div></div>
                  <div style="width:1px; background:rgba(255,255,255,0.1);"></div>
                  <div><div style="font-family:'Space Grotesk'; font-size:30px; font-weight:700; color:#fff;">6</div><div style="font-size:13px; color:#7c8499; margin-top:2px;">Campaign workers</div></div>
                </div>
              </div>
              <div style="position:relative; border-radius:22px; padding:22px; background:linear-gradient(160deg, rgba(20,28,46,0.9), rgba(10,15,28,0.9)); border:1px solid rgba(255,255,255,0.1); box-shadow:0 20px 60px rgba(0,0,0,0.5);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;">
                  <div style="display:flex; align-items:center; gap:9px;">
                    <span style="width:9px; height:9px; border-radius:50%; background:#2ee6a0; animation:pulseDot 2s infinite;"></span>
                    <span style="font-family:'Space Grotesk'; font-weight:600; font-size:15px;">Live Campaign</span>
                  </div>
                  <span style="font-size:12px; color:#7c8499; font-family:'Space Grotesk';">Mortgage Protection</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:13px;">
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#aeb6c6;">Leads loaded</span><span style="color:#fff; font-weight:600;">4,032</span></div>
                    <div style="height:7px; border-radius:99px; background:rgba(255,255,255,0.07); overflow:hidden;"><div style="height:100%; width:96%; border-radius:99px; background:linear-gradient(90deg,#3a6fff,#67c4ff);"></div></div>
                  </div>
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#aeb6c6;">Call attempts</span><span style="color:#fff; font-weight:600;">3,180</span></div>
                    <div style="height:7px; border-radius:99px; background:rgba(255,255,255,0.07); overflow:hidden;"><div style="height:100%; width:76%; border-radius:99px; background:linear-gradient(90deg,#3a8fff,#67c4ff);"></div></div>
                  </div>
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#aeb6c6;">Conversations</span><span style="color:#fff; font-weight:600;">880</span></div>
                    <div style="height:7px; border-radius:99px; background:rgba(255,255,255,0.07); overflow:hidden;"><div style="height:100%; width:48%; border-radius:99px; background:linear-gradient(90deg,#3aa8ff,#67d4ff);"></div></div>
                  </div>
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:6px;"><span style="color:#aeb6c6;">Appointments booked</span><span style="color:#2ee6a0; font-weight:600;">142</span></div>
                    <div style="height:7px; border-radius:99px; background:rgba(255,255,255,0.07); overflow:hidden;"><div style="height:100%; width:34%; border-radius:99px; background:linear-gradient(90deg,#2ee6a0,#22c55e);"></div></div>
                  </div>
                </div>
              </div>
            </section>
        
            <!-- ===== HOW IT WORKS ===== -->
            <section id="how" style="max-width:1100px; margin:0 auto; padding:70px 24px; scroll-margin-top:84px;">
              <div style="text-align:center; margin-bottom:48px;">
                <div style="font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#5e9bff; margin-bottom:12px;">How It Works</div>
                <h2 style="font-family:'Space Grotesk'; font-size:36px; font-weight:700; letter-spacing:-0.02em; margin:0;">A clear path from campaign to conversation</h2>
              </div>
              <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px;">
                <div style="padding:24px; border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); cursor:pointer;">
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
                    <span style="display:grid; place-items:center; width:42px; height:42px; border-radius:12px; background:linear-gradient(135deg,#2f80ff,#1a5fde); font-family:'Space Grotesk'; font-weight:700; font-size:17px; color:#fff;">01</span>
                  </div>
                  <h3 style="font-family:'Space Grotesk'; font-size:17px; font-weight:600; margin:0 0 8px; color:#fff;">Campaign Setup</h3>
                  <p style="font-size:14px; color:#9aa3b5; line-height:1.55; margin:0;">We learn your offer, lead type, script, target market, and appointment goals.</p>
                </div>
                <div style="padding:24px; border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); cursor:pointer;">
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
                    <span style="display:grid; place-items:center; width:42px; height:42px; border-radius:12px; background:rgba(255,255,255,0.06); font-family:'Space Grotesk'; font-weight:700; font-size:17px; color:#5e9bff;">02</span>
                  </div>
                  <h3 style="font-family:'Space Grotesk'; font-size:17px; font-weight:600; margin:0 0 8px; color:#fff;">Calling & Follow-Up</h3>
                  <p style="font-size:14px; color:#9aa3b5; line-height:1.55; margin:0;">Our reps call, follow up, ask qualifying questions, and work leads based on your campaign structure.</p>
                </div>
                <div style="padding:24px; border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); cursor:pointer;">
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
                    <span style="display:grid; place-items:center; width:42px; height:42px; border-radius:12px; background:rgba(255,255,255,0.06); font-family:'Space Grotesk'; font-weight:700; font-size:17px; color:#5e9bff;">03</span>
                  </div>
                  <h3 style="font-family:'Space Grotesk'; font-size:17px; font-weight:600; margin:0 0 8px; color:#fff;">Notes & Handoff</h3>
                  <p style="font-size:14px; color:#9aa3b5; line-height:1.55; margin:0;">Call notes, prospect interest, objections, and next steps organized for your sales team.</p>
                </div>
                <div style="padding:24px; border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); cursor:pointer;">
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
                    <span style="display:grid; place-items:center; width:42px; height:42px; border-radius:12px; background:rgba(255,255,255,0.06); font-family:'Space Grotesk'; font-weight:700; font-size:17px; color:#5e9bff;">04</span>
                  </div>
                  <h3 style="font-family:'Space Grotesk'; font-size:17px; font-weight:600; margin:0 0 8px; color:#fff;">Agent Conversion</h3>
                  <p style="font-size:14px; color:#9aa3b5; line-height:1.55; margin:0;">Your agents focus on the highest-intent prospects and booked conversations.</p>
                </div>
              </div>
            </section>
        
            <!-- ===== SERVICES ===== -->
            <section id="services" style="max-width:1200px; margin:0 auto; padding:70px 24px; scroll-margin-top:84px;">
              <div style="text-align:center; margin-bottom:48px;">
                <div style="font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#5e9bff; margin-bottom:12px;">Services</div>
                <h2 style="font-family:'Space Grotesk'; font-size:36px; font-weight:700; letter-spacing:-0.02em; margin:0 0 14px;">Outbound support built around the insurance pipeline</h2>
                <p style="font-size:17px; color:#9aa3b5; max-width:620px; margin:0 auto;">Pick the pieces your agency needs, or layer them together into a full prospecting engine.</p>
              </div>
              <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px;">
                <div style="padding:28px; border-radius:18px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);">
                  <div style="display:grid; place-items:center; width:50px; height:50px; border-radius:13px; background:linear-gradient(135deg,rgba(47,128,255,0.18),rgba(47,128,255,0.04)); border:1px solid rgba(47,128,255,0.28); color:#5e9bff; margin-bottom:18px; font-size:24px;">📞</div>
                  <h3 style="font-family:'Space Grotesk'; font-size:20px; font-weight:600; margin:0 0 11px;">Outbound Insurance Calling</h3>
                  <p style="font-size:15px; color:#9aa3b5; line-height:1.6; margin:0;">Support for calling aged leads, fresh leads, final expense leads, mortgage protection leads, and other insurance products.</p>
                </div>
                <div style="padding:28px; border-radius:18px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);">
                  <div style="display:grid; place-items:center; width:50px; height:50px; border-radius:13px; background:linear-gradient(135deg,rgba(47,128,255,0.18),rgba(47,128,255,0.04)); border:1px solid rgba(47,128,255,0.28); color:#5e9bff; margin-bottom:18px; font-size:24px;">📅</div>
                  <h3 style="font-family:'Space Grotesk'; font-size:20px; font-weight:600; margin:0 0 11px;">Appointment Setting</h3>
                  <p style="font-size:15px; color:#9aa3b5; line-height:1.6; margin:0;">Designed to help agents spend less time chasing and more time speaking with interested prospects.</p>
                </div>
                <div style="padding:28px; border-radius:18px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);">
                  <div style="display:grid; place-items:center; width:50px; height:50px; border-radius:13px; background:linear-gradient(135deg,rgba(47,128,255,0.18),rgba(47,128,255,0.04)); border:1px solid rgba(47,128,255,0.28); color:#5e9bff; margin-bottom:18px; font-size:24px;">🔄</div>
                  <h3 style="font-family:'Space Grotesk'; font-size:20px; font-weight:600; margin:0 0 11px;">Lead Follow-Up</h3>
                  <p style="font-size:15px; color:#9aa3b5; line-height:1.6; margin:0;">Structured follow-up for prospects who did not answer, were unsure, or needed another touch.</p>
                </div>
                <div style="padding:28px; border-radius:18px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);">
                  <div style="display:grid; place-items:center; width:50px; height:50px; border-radius:13px; background:linear-gradient(135deg,rgba(47,128,255,0.18),rgba(47,128,255,0.04)); border:1px solid rgba(47,128,255,0.28); color:#5e9bff; margin-bottom:18px; font-size:24px;">📋</div>
                  <h3 style="font-family:'Space Grotesk'; font-size:20px; font-weight:600; margin:0 0 11px;">CRM Notes & Pipeline</h3>
                  <p style="font-size:15px; color:#9aa3b5; line-height:1.6; margin:0;">Organized call outcomes, lead status updates, notes, and next-step visibility.</p>
                </div>
                <div style="padding:28px; border-radius:18px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);">
                  <div style="display:grid; place-items:center; width:50px; height:50px; border-radius:13px; background:linear-gradient(135deg,rgba(47,128,255,0.18),rgba(47,128,255,0.04)); border:1px solid rgba(47,128,255,0.28); color:#5e9bff; margin-bottom:18px; font-size:24px;">🎧</div>
                  <h3 style="font-family:'Space Grotesk'; font-size:20px; font-weight:600; margin:0 0 11px;">Campaign Seat Support</h3>
                  <p style="font-size:15px; color:#9aa3b5; line-height:1.6; margin:0;">Call center seat options for agencies that want to scale calling volume without hiring full internal staff.</p>
                </div>
                <div style="padding:28px; border-radius:18px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08);">
                  <div style="display:grid; place-items:center; width:50px; height:50px; border-radius:13px; background:linear-gradient(135deg,rgba(47,128,255,0.18),rgba(47,128,255,0.04)); border:1px solid rgba(47,128,255,0.28); color:#5e9bff; margin-bottom:18px; font-size:24px;">💬</div>
                  <h3 style="font-family:'Space Grotesk'; font-size:20px; font-weight:600; margin:0 0 11px;">Script & Objection Support</h3>
                  <p style="font-size:15px; color:#9aa3b5; line-height:1.6; margin:0;">Insurance-focused conversations built around curiosity, qualification, and appointment flow.</p>
                </div>
              </div>
            </section>
        
            <!-- ===== CALCULATOR ===== -->
            <section id="calculator" style="max-width:1100px; margin:0 auto; padding:60px 24px; scroll-margin-top:84px;">
              <div style="text-align:center; margin-bottom:44px;">
                <div style="font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#5e9bff; margin-bottom:12px;">Capacity Planner</div>
                <h2 style="font-family:'Space Grotesk'; font-size:36px; font-weight:700; letter-spacing:-0.02em; margin:0 0 12px;">Estimate Your Calling Capacity</h2>
                <p style="font-size:16px; color:#9aa3b5; max-width:560px; margin:0 auto;">Move the sliders to model what a campaign could look like.</p>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:stretch;">
                <div style="padding:32px; border-radius:20px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09);">
                  <div style="margin-bottom:30px;">
                    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;"><label style="font-weight:600; font-size:15px; color:#dfe5f0;">Reps / seats</label><span id="reps-val" style="color:#2f80ff; font-weight:600;">6</span></div>
                    <input type="range" min="1" max="30" step="1" value="6" id="reps" style="width:100%; cursor:pointer;">
                  </div>
                  <div style="margin-bottom:30px;">
                    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;"><label style="font-weight:600; font-size:15px; color:#dfe5f0;">Calls per day, per rep</label><span id="calls-val" style="color:#2f80ff; font-weight:600;">110</span></div>
                    <input type="range" min="40" max="300" step="10" value="110" id="calls" style="width:100%; cursor:pointer;">
                  </div>
                  <div style="margin-bottom:30px;">
                    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;"><label style="font-weight:600; font-size:15px; color:#dfe5f0;">Contact rate</label><span id="contact-val" style="color:#2f80ff; font-weight:600;">22%</span></div>
                    <input type="range" min="5" max="60" step="1" value="22" id="contact" style="width:100%; cursor:pointer;">
                  </div>
                  <div>
                    <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px;"><label style="font-weight:600; font-size:15px; color:#dfe5f0;">Appointment rate</label><span id="appt-val" style="color:#2f80ff; font-weight:600;">9%</span></div>
                    <input type="range" min="1" max="40" step="1" value="9" id="appt" style="width:100%; cursor:pointer;">
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; gap:16px;">
                  <div style="flex:1; padding:26px 28px; border-radius:20px; background:rgba(47,128,255,0.1); border:1px solid rgba(47,128,255,0.28); display:flex; align-items:center; justify-content:space-between;">
                    <div><div style="font-size:14px; color:#9fb8e8; margin-bottom:6px;">Estimated daily calls</div><div style="font-size:13px; color:#7c8499;">Across all seats</div></div>
                    <div id="daily-calls" style="font-family:'Space Grotesk'; font-size:40px; font-weight:700; color:#fff;">660</div>
                  </div>
                  <div style="flex:1; padding:26px 28px; border-radius:20px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09); display:flex; align-items:center; justify-content:space-between;">
                    <div><div style="font-size:14px; color:#aeb6c6; margin-bottom:6px;">Estimated contacts / day</div><div style="font-size:13px; color:#7c8499;">Live conversations reached</div></div>
                    <div id="contacts" style="font-family:'Space Grotesk'; font-size:40px; font-weight:700; color:#fff;">145</div>
                  </div>
                  <div style="flex:1; padding:26px 28px; border-radius:20px; background:rgba(46,230,160,0.1); border:1px solid rgba(46,230,160,0.28); display:flex; align-items:center; justify-content:space-between;">
                    <div><div style="font-size:14px; color:#8be9c4; margin-bottom:6px;">Estimated appointments / day</div><div style="font-size:13px; color:#7c8499;">Planning estimate only</div></div>
                    <div id="appts" style="font-family:'Space Grotesk'; font-size:40px; font-weight:700; color:#2ee6a0;">13</div>
                  </div>
                </div>
              </div>
            </section>
        
            <!-- ===== FAQ ===== -->
            <section id="faq" style="max-width:820px; margin:0 auto; padding:70px 24px; scroll-margin-top:84px;">
              <div style="text-align:center; margin-bottom:44px;">
                <h2 style="font-family:'Space Grotesk'; font-size:36px; font-weight:700; letter-spacing:-0.02em; margin:0;">Frequently Asked Questions</h2>
              </div>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); overflow:hidden;">
                  <button style="width:100%; text-align:left; cursor:pointer; background:transparent; border:none; padding:22px 24px; display:flex; align-items:center; justify-content:space-between; color:#fff; font-family:'Space Grotesk'; font-size:17px; font-weight:600;">
                    <span>What type of insurance campaigns do you support?</span>
                    <span style="flex-shrink:0; font-size:22px; color:#5e9bff;">+</span>
                  </button>
                  <div style="padding:0 24px 24px; font-size:15px; color:#9aa3b5; line-height:1.65; display:none;">Mas Leads is built around insurance-focused outreach, including final expense, mortgage protection, life insurance, and related insurance products.</div>
                </div>
                <div style="border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); overflow:hidden;">
                  <button style="width:100%; text-align:left; cursor:pointer; background:transparent; border:none; padding:22px 24px; display:flex; align-items:center; justify-content:space-between; color:#fff; font-family:'Space Grotesk'; font-size:17px; font-weight:600;">
                    <span>Do you guarantee appointments or sales?</span>
                    <span style="flex-shrink:0; font-size:22px; color:#5e9bff;">+</span>
                  </button>
                  <div style="padding:0 24px 24px; font-size:15px; color:#9aa3b5; line-height:1.65; display:none;">No. Results vary based on many factors including lead source, offer, script, market, and follow-up process. Our focus is creating more conversations and opportunities.</div>
                </div>
                <div style="border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); overflow:hidden;">
                  <button style="width:100%; text-align:left; cursor:pointer; background:transparent; border:none; padding:22px 24px; display:flex; align-items:center; justify-content:space-between; color:#fff; font-family:'Space Grotesk'; font-size:17px; font-weight:600;">
                    <span>Can agencies purchase call center seats?</span>
                    <span style="flex-shrink:0; font-size:22px; color:#5e9bff;">+</span>
                  </button>
                  <div style="padding:0 24px 24px; font-size:15px; color:#9aa3b5; line-height:1.65; display:none;">Yes, depending on current campaign availability and operational capacity. We have flexible seat options to fit different agency sizes.</div>
                </div>
                <div style="border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); overflow:hidden;">
                  <button style="width:100%; text-align:left; cursor:pointer; background:transparent; border:none; padding:22px 24px; display:flex; align-items:center; justify-content:space-between; color:#fff; font-family:'Space Grotesk'; font-size:17px; font-weight:600;">
                    <span>Can you work inside our CRM?</span>
                    <span style="flex-shrink:0; font-size:22px; color:#5e9bff;">+</span>
                  </button>
                  <div style="padding:0 24px 24px; font-size:15px; color:#9aa3b5; line-height:1.65; display:none;">We can discuss CRM workflow needs and design around your agency's process. We work with tools like Close CRM, GoHighLevel, and Google Sheets.</div>
                </div>
                <div style="border-radius:15px; background:rgba(255,255,255,0.035); border:1px solid rgba(255,255,255,0.08); overflow:hidden;">
                  <button style="width:100%; text-align:left; cursor:pointer; background:transparent; border:none; padding:22px 24px; display:flex; align-items:center; justify-content:space-between; color:#fff; font-family:'Space Grotesk'; font-size:17px; font-weight:600;">
                    <span>Is this for individual agents or agencies?</span>
                    <span style="flex-shrink:0; font-size:22px; color:#5e9bff;">+</span>
                  </button>
                  <div style="padding:0 24px 24px; font-size:15px; color:#9aa3b5; line-height:1.65; display:none;">Both, but the strongest fit is agencies and teams that need consistent calling and follow-up support.</div>
                </div>
              </div>
            </section>
        
            <!-- ===== CONTACT ===== -->
            <section id="contact" style="max-width:1100px; margin:0 auto; padding:70px 24px; scroll-margin-top:84px;">
              <div style="display:grid; grid-template-columns:0.85fr 1.15fr; gap:48px; align-items:start;">
                <div>
                  <div style="font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#5e9bff; margin-bottom:12px;">Get Started</div>
                  <h2 style="font-family:'Space Grotesk'; font-size:36px; font-weight:700; letter-spacing:-0.02em; margin:0 0 18px; line-height:1.12;">Let's Build Your Calling Campaign</h2>
                  <p style="font-size:16px; color:#9aa3b5; line-height:1.65; margin:0;">Tell us about your offer and lead flow. We'll walk through how Mas Leads can support your team's outbound activities.</p>
                </div>
        
                <div style="padding:32px; border-radius:20px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09);">
                  <form style="display:flex; flex-direction:column; gap:14px;">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
                      <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Name</label><input type="text" placeholder="Your name" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; font-family:inherit;"/></div>
                      <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Agency</label><input type="text" placeholder="Agency name" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; font-family:inherit;"/></div>
                    </div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
                      <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Email</label><input type="email" placeholder="your@email.com" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; font-family:inherit;"/></div>
                      <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Phone</label><input type="tel" placeholder="(123) 456-7890" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; font-family:inherit;"/></div>
                    </div>
                    <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">What do you need help with?</label><textarea placeholder="Tell us..." style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; font-family:inherit; min-height:80px; resize:vertical;"></textarea></div>
                    <button type="submit" style="width:100%; padding:16px; border-radius:13px; border:none; cursor:pointer; background:linear-gradient(135deg,#2f80ff,#1a5fde); color:#fff; font-weight:700;">Send Request</button>
                  </form>
                </div>
              </div>
            </section>
        
          </main>
        
          <!-- ===== FOOTER ===== -->
          <footer style="position:relative; z-index:1; border-top:1px solid rgba(255,255,255,0.07); margin-top:40px;">
            <div style="max-width:1200px; margin:0 auto; padding:54px 24px 40px;">
              <div style="display:grid; grid-template-columns:1.4fr 1fr; gap:40px; margin-bottom:36px;">
                <div>
                  <div style="display:flex; align-items:center; gap:11px; margin-bottom:14px;">
                    <span style="display:grid; place-items:center; width:38px; height:38px; border-radius:11px; background:linear-gradient(135deg,#2f80ff,#1452c9); font-family:'Space Grotesk'; font-weight:700; font-size:18px; color:#fff;">M</span>
                    <span style="font-family:'Space Grotesk'; font-weight:600; font-size:19px;">Mas Leads</span>
                  </div>
                  <p style="font-size:15px; color:#7c8499; max-width:380px; line-height:1.6; margin:0;">Insurance Call Center Support — outbound calling, lead follow-up, appointment setting, and prospecting for insurance agencies.</p>
                </div>
                <div style="display:flex; gap:60px;">
                  <div>
                    <div style="font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#5e9bff; margin-bottom:16px;">Navigate</div>
                    <div style="display:flex; flex-direction:column; gap:11px;">
                      <a href="#top" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">Home</a>
                      <a href="#services" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">Services</a>
                      <a href="#how" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">How It Works</a>
                      <a href="#faq" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">FAQ</a>
                      <a href="#contact" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">Contact</a>
                    </div>
                  </div>
                  <div>
                    <div style="font-size:13px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#5e9bff; margin-bottom:16px;">Contact</div>
                    <div style="display:flex; flex-direction:column; gap:11px;">
                      <a href="mailto:hello@masleads.com" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">hello@masleads.com</a>
                      <a href="#contact" style="color:#aeb6c6; text-decoration:none; font-size:15px; cursor:pointer;">Book a Call</a>
                    </div>
                  </div>
                </div>
              </div>
              <p style="font-size:12.5px; color:#5a6478; line-height:1.65; border-top:1px solid rgba(255,255,255,0.06); padding-top:24px; margin:0 0 14px;">Mas Leads provides call center and prospecting support for insurance agencies. © 2026 Mas Leads. All rights reserved.</p>
            </div>
          </footer>
        
        </div>
        <script>
          // Calculator functionality
          const repsInput = document.getElementById('reps');
          const callsInput = document.getElementById('calls');
          const contactInput = document.getElementById('contact');
          const apptInput = document.getElementById('appt');
          
          function updateCalculator() {
            const reps = parseInt(repsInput.value);
            const calls = parseInt(callsInput.value);
            const contact = parseInt(contactInput.value);
            const appt = parseInt(apptInput.value);
            
            document.getElementById('reps-val').textContent = reps;
            document.getElementById('calls-val').textContent = calls;
            document.getElementById('contact-val').textContent = contact + '%';
            document.getElementById('appt-val').textContent = appt + '%';
            
            const dailyCalls = reps * calls;
            const contacts = Math.round(dailyCalls * contact / 100);
            const appts = Math.round(contacts * appt / 100);
            
            document.getElementById('daily-calls').textContent = dailyCalls;
            document.getElementById('contacts').textContent = contacts;
            document.getElementById('appts').textContent = appts;
          }
          
          repsInput.addEventListener('input', updateCalculator);
          callsInput.addEventListener('input', updateCalculator);
          contactInput.addEventListener('input', updateCalculator);
          apptInput.addEventListener('input', updateCalculator);
          
          // FAQ accordion
          document.querySelectorAll('[id="faq"] button').forEach(btn => {
            btn.addEventListener('click', function() {
              const answer = this.nextElementSibling;
              const isOpen = answer.style.display !== 'none';
              answer.style.display = isOpen ? 'none' : 'block';
              const icon = this.querySelector('span:last-child');
              icon.textContent = isOpen ? '+' : '−';
            });
          });
        </script>
      </body>
      </html>
    `}} />
  );
}
