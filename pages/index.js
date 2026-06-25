import React from 'react';

export default function Home() {
  return (
    <>
      <iframe
        srcDoc={`
          <!DOCTYPE html>
          <html>
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <script src="/support.js"><\/script>
          </head>
          <body>
          <x-dc>
          <helmet>
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
            @keyframes barGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
            @keyframes sheen { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
            @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
            input[type=range]{ -webkit-appearance:none; appearance:none; height:6px; border-radius:99px; background:rgba(255,255,255,0.1); outline:none; }
            input[type=range]::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:20px; height:20px; border-radius:50%; background:#2f80ff; cursor:pointer; box-shadow:0 0 0 4px rgba(47,128,255,0.2); }
            input[type=range]::-webkit-slider-thumb:hover{ transform:scale(1.15); }
            input[type=range]::-moz-range-thumb{ width:20px; height:20px; border:none; border-radius:50%; background:#2f80ff; cursor:pointer; box-shadow:0 0 0 4px rgba(47,128,255,0.2); }
            input::placeholder, textarea::placeholder { color:#5a6478; }
          </style>
          </helmet>
          
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
                  <a href="#how" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500;">How It Works</a>
                  <a href="#services" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500;">Services</a>
                  <a href="#calculator" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500;">Capacity</a>
                  <a href="#faq" style="color:#aeb6c6; text-decoration:none; font-size:15px; font-weight:500;">FAQ</a>
                  <a href="#contact" style="display:inline-flex; align-items:center; gap:8px; padding:10px 20px; border-radius:11px; background:linear-gradient(135deg,#2f80ff,#1a5fde); color:#fff; text-decoration:none; font-weight:600; font-size:14px;">Get Started</a>
                </nav>
              </div>
            </header>
          
            <main id="top" style="position:relative; z-index:1;">
          
              <!-- ===== HERO ===== -->
              <section style="max-width:1200px; margin:0 auto; padding:84px 24px 70px; display:grid; grid-template-columns:1.05fr 1fr; gap:54px; align-items:center;">
                <div style="opacity:1; transform:none;">
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
                        <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Name</label><input type="text" placeholder="Your name" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff;"/></div>
                        <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Agency</label><input type="text" placeholder="Agency name" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff;"/></div>
                      </div>
                      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
                        <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Email</label><input type="email" placeholder="your@email.com" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff;"/></div>
                        <div><label style="display:block; font-size:13px; color:#aeb6c6; margin-bottom:7px; font-weight:600;">Phone</label><input type="tel" placeholder="(123) 456-7890" style="width:100%; padding:12px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff;"/></div>
                      </div>
                      <button type="submit" style="width:100%; padding:16px; border-radius:13px; border:none; cursor:pointer; background:linear-gradient(135deg,#2f80ff,#1a5fde); color:#fff; font-weight:700;">Send Request</button>
                    </form>
                  </div>
                </div>
              </section>
          
            </main>
          
            <!-- ===== FOOTER ===== -->
            <footer style="position:relative; z-index:1; border-top:1px solid rgba(255,255,255,0.07); margin-top:40px;">
              <div style="max-width:1200px; margin:0 auto; padding:54px 24px 40px;">
                <div style="font-size:12.5px; color:#5a6478; line-height:1.65; border-top:1px solid rgba(255,255,255,0.06); padding-top:24px; margin:0 0 14px;">Mas Leads provides call center and prospecting support for insurance agencies. © 2026 Mas Leads. All rights reserved.</div>
              </div>
            </footer>
          
          </div>
          </x-dc>
          </body>
          </html>
        `}
        style={{
          width: '100%',
          minHeight: '100vh',
          border: 'none',
          display: 'block'
        }}
        title="Mas Leads"
      />
    </>
  );
}
