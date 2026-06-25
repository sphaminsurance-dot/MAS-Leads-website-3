# Mas Leads - Insurance Call Center Support

A modern landing page for Mas Leads, an insurance-focused call center support service.

## Features

- Responsive design for desktop and mobile
- Interactive capacity calculator
- Contact form with validation
- Smooth animations and transitions
- FAQ accordion section
- Testimonials carousel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sphaminsurance-dot/MAS-Leads-website-3.git
cd MAS-Leads-website-3
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploy to Vercel

The easiest way to deploy is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select this repository
5. Vercel will automatically configure and deploy it

### Environment Variables

If you need to add environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://your-api.com
```

## Build

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
.
├── pages/              # Page routes
├── public/            # Static assets
├── styles/            # Global styles
├── components/        # React components
├── api/               # API routes (if needed)
└── index.html         # Main landing page
```

## Contact Form Integration

The contact form currently logs submissions to the browser console. To integrate with a backend service:

1. **Email Service**: Use Resend, SendGrid, or Mailgun
2. **Webhook**: Use Zapier or Make
3. **CRM**: Connect to GoHighLevel or Close CRM
4. **Google Sheets**: Use Google Apps Script

Update the `submitForm` function in the page component to send data to your chosen service.

## Support

For issues or questions, please open an issue on GitHub or contact the team.

## License

© 2026 Mas Leads. All rights reserved.
