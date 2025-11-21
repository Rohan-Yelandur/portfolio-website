import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import './ChatbotContent.css';

const ChatbotContent = () => {
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage on initial render
    const savedMessages = localStorage.getItem('chatbot-messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState('');
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatbot-messages', JSON.stringify(messages));
  }, [messages]);

  // Debug: Log environment variables
  useEffect(() => {
    console.log('Environment variables:', {
      REACT_APP_GEMINI_API_KEY: process.env.REACT_APP_GEMINI_API_KEY,
      all_env: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
    });
  }, []);

  // Load context from public folder
  useEffect(() => {
    fetch('/context.txt')
      .then(response => response.text())
      .then(text => setContext(text))
      .catch(err => {
        console.error('Error loading context:', err);
        setContext(''); // Continue without context
      });
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    // Check for API key
    if (!process.env.REACT_APP_GEMINI_API_KEY) {
      const errorMessage = {
        role: 'error',
        content: 'Gemini API key not configured. Please create a .env file in the frontend folder with REACT_APP_GEMINI_API_KEY=your_api_key_here',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Initialize Gemini AI
      const ai = new GoogleGenAI({
        apiKey: process.env.REACT_APP_GEMINI_API_KEY
      });

      // Create the prompt with context
      const prompt = `${context}

User Question: ${userMessage.content}`;

      // Generate response
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const assistantMessage = {
        role: 'assistant',
        content: response.text,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        role: 'error',
        content: `Sorry, I encountered an error: ${error.message}. Please check your API key and try again.`,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.length === 0 && (
          <div className="chatbot-welcome">
            <h3>👋 Hello!</h3>
            <p>Ask me anything about my background, skills, or experience!</p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.role}`}>
            <div className="chatbot-message-avatar">
              {message.role === 'user' ? 'You' : message.role === 'error' ? '⚠️' : 'AI'}
            </div>
            <div className="chatbot-message-content">
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="chatbot-message assistant">
            <div className="chatbot-message-avatar">AI</div>
            <div className="chatbot-message-content">
              <div className="chatbot-typing">
                <div className="chatbot-typing-dot"></div>
                <div className="chatbot-typing-dot"></div>
                <div className="chatbot-typing-dot"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="chatbot-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="chatbot-input"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="chatbot-send-button"
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatbotContent;
