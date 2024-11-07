import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import React from 'react';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://9597d49aef0a6970398da9b88d8db9fc@o4508228993089536.ingest.us.sentry.io/4508228996038656",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect:React.useEffect
    }),
    Sentry.replayIntegration(),
  ],
  
  tracesSampleRate: 1.0, 
 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
 

  replaysSessionSampleRate: 0.1, 
    replaysOnErrorSampleRate: 1.0, 
  });



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
