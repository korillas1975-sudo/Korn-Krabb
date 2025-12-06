import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour. I am Anna, your personal pearl consultant. Are you looking for a piece for a specific occasion or outfit today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const reply = await getGeminiResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="ai-stylist" className="py-24 bg-gradient-to-b from-white to-platinum overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-champagne rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-ink/70" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Virtual Pearl Consultant</h2>
          <p className="font-sans text-ink-light">Ask for styling advice from our AI specialist.</p>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden flex flex-col h-[500px]">
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed font-sans ${
                    msg.role === 'user' 
                      ? 'bg-ink text-white rounded-tr-sm' 
                      : 'bg-platinum text-ink rounded-tl-sm border border-hairline'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-platinum p-4 rounded-2xl rounded-tl-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-ink/50" />
                  <span className="text-xs text-ink/50 font-sans tracking-wide">Consulting archives...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-hairline flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="E.g., What goes well with a navy business suit?"
              className="flex-1 bg-platinum/50 border-none rounded-full px-6 py-3 font-sans text-sm focus:ring-1 focus:ring-ink/20 focus:outline-none placeholder-ink/30 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-3 bg-ink text-white rounded-full hover:bg-ink-light transition-all disabled:opacity-50 shadow-md"
            >
              <Send size={18} />
            </button>
          </div>

        </div>

        <div className="mt-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-ink/40">Powered by Google Gemini 2.5</p>
        </div>

      </div>
    </section>
  );
};

export default AIStylist;