import React, { useState } from 'react';
import axios from 'axios';

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>(['Hello! I can help with: Apply / Check status / Feedback']);
  const [input, setInput] = useState('');

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, `You: ${text}`]);

    if (/apply/i.test(text)) {
      setMessages((m) => [...m, 'Bot: Please provide your name, email, phone and program as a JSON object. Example: {"name":"...","email":"...","phone":"...","program":"..."}']);
    } else if (/feedback/i.test(text)) {
      setMessages((m) => [...m, 'Bot: Please send feedback as JSON: {"program":"...","rating":5,"comment":"...","anonymous":false}']);
    } else if (/status/i.test(text)) {
      setMessages((m) => [...m, 'Bot: Please enter your email to search applications:']);
    } else {
      setMessages((m) => [...m, 'Bot: I did not understand. Try: Apply / Feedback / Check status']);
    }

    setInput('');
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, width: 480 }}>
      <div style={{ minHeight: 120 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: 6 }}>{m}</div>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} style={{ width: '70%' }} />
        <button onClick={send} style={{ marginLeft: 8 }}>Send</button>
      </div>
    </div>
  );
}