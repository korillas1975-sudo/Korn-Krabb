import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour. I am Anna. How can I style you today?' }
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
    <section id="ai-stylist" className="py-12 bg-ink text-white relative overflow-hidden reveal-section">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-gray-900 to-ink"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]"></div>

        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-5 gap-8 items-center relative z-10">
            
            {/* Left: Compact Context (2 cols) */}
            <div className="md:col-span-2 space-y-4">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    <Sparkles size={10} className="text-white/80" />
                    <span className="text-[9px] uppercase tracking-widest text-white/70">Pearl Consultant</span>
                 </div>
                 <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                    Digital Atelier
                 </h2>
                 <p className="font-sans text-xs text-white/50 leading-relaxed">
                    Ask Anna about styling advice, pairings, or gift ideas.
                 </p>
            </div>

            {/* Right: Compact Chat UI (3 cols) */}
            <div className="md:col-span-3">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden h-[350px] flex flex-col relative">
                    
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-white/5 bg-white/5 flex items-center justify-between">
                       <span className="text-[10px] uppercase tracking-widest text-white/80">Live Chat</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"></div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div 
                            className={`max-w-[90%] px-4 py-2 text-xs font-sans leading-relaxed ${
                                msg.role === 'user' 
                                ? 'bg-white text-ink rounded-2xl rounded-tr-none' 
                                : 'bg-white/10 text-white border border-white/5 rounded-2xl rounded-tl-none'
                            }`}
                            >
                            {msg.text}
                            </div>
                        </div>
                        ))}
                        {isLoading && (
                             <div className="flex gap-1 pl-2">
                                <span className="w-1 h-1 bg-white/50 rounded-full animate-bounce"></span>
                                <span className="w-1 h-1 bg-white/50 rounded-full animate-bounce delay-100"></span>
                                <span className="w-1 h-1 bg-white/50 rounded-full animate-bounce delay-200"></span>
                             </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Compact Input */}
                    <div className="p-3 bg-black/20 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask Anna..."
                                className="flex-1 bg-transparent px-2 py-2 text-xs text-white placeholder-white/30 focus:outline-none"
                            />
                            <button 
                                onClick={handleSend}
                                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-ink transition-colors text-white"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AIStylist;