import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, Type, FunctionDeclaration } from "@google/genai";
import { CLINIC_INFO } from '../constants';

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [messages, setMessages] = useState([
    { 
      text: "⚠️ IA : Aucun diagnostic médical ne sera fourni. Pour toute urgence, appelez le (514) 555-0123.", 
      from: 'bot',
      isDisclaimer: true 
    },
    { 
      text: "Bonjour ! Je suis l'assistant virtuel de la Clinique Saint-Laurent. Comment puis-je vous aider ? 😊", 
      from: 'bot' 
    }
  ]);
  
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, showDisclaimer]);

  const initChat = () => {
    if (chatRef.current) return;
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Tu es l'assistante virtuelle de la Clinique Dentaire Saint-Laurent. 
        STYLE : Court, chaleureux, professionnel. 
        URGENCE : Toujours donner le numéro (514) 555-0123.`,
      },
    });
  };

  const handleSend = async (text: string = userInput) => {
    if (!text.trim() || isTyping) return;
    setMessages(p => [...p, { text: text.trim(), from: 'user' }]);
    setUserInput('');
    setIsTyping(true);
    try {
      if (!chatRef.current) initChat();
      let response = await chatRef.current!.sendMessage({ message: text });
      setMessages(p => [...p, { text: response.text || "Désolé, j'ai eu un petit souci technique.", from: 'bot' }]);
    } catch (e) {
      setMessages(p => [...p, { text: "Appelez-nous directement au (514) 555-0123. 😉", from: 'bot' }]);
    } finally { setIsTyping(false); }
  };

  return (
    /* LE FIX : pointer-events-none sur le parent pour ne pas bloquer le site */
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[130] flex flex-col items-end pointer-events-none">
      <div className={`w-[85vw] sm:w-80 md:w-96 bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden mb-4 transition-all duration-500 transform origin-bottom-right pointer-events-auto ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 !pointer-events-none'}`}>
        <div className="bg-primary p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cta flex items-center justify-center text-dark shadow-inner">
              <i className="fa-solid fa-robot"></i>
            </div>
            <div className="font-bold font-serif text-sm">Assistant Saint-Laurent</div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 active:scale-90"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="h-80 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50 flex flex-col">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
              {m.isDisclaimer && showDisclaimer ? (
                <div className="w-full bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-[10px] text-dark/70 relative">
                  <button onClick={() => setShowDisclaimer(false)} className="absolute top-2 right-2 opacity-30 hover:opacity-100"><i className="fa-solid fa-xmark"></i></button>
                  {m.text}
                </div>
              ) : (
                !m.isDisclaimer && (
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${m.from === 'user' ? 'bg-primary text-white rounded-tr-none shadow-md' : 'bg-white text-dark rounded-tl-none border border-gray-100 shadow-sm'}`}>
                    {m.text}
                  </div>
                )
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex gap-1">
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input 
            placeholder="Écrivez ici..." 
            className="flex-grow px-4 py-2.5 bg-light rounded-full text-sm outline-none border border-transparent focus:border-primary/20 transition-all" 
            value={userInput} onChange={e => setUserInput(e.target.value)} 
          />
          <button type="submit" disabled={!userInput.trim()} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90 ${userInput.trim() ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-300'}`}>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
      
      {/* LE FIX : pointer-events-auto sur le bouton uniquement */}
      <button 
        onClick={() => { setIsOpen(!isOpen); if(!isOpen) initChat(); }} 
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl text-white transition-all transform hover:scale-110 active:scale-90 relative z-[130] pointer-events-auto ${isOpen ? 'bg-primary' : 'bg-cta animate-pulse-custom'}`}
        aria-label="Clavarder"
      >
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-comment-dots'}`}></i>
      </button>
    </div>
  );
};

export default ChatBox;