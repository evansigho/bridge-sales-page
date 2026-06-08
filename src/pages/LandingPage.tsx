import { motion } from 'motion/react';
import { Apple, Smartphone, ShieldCheck, Zap, ArrowRight, RefreshCcw, Bell, History, MessageCircle, User, Wallet, Landmark, ArrowRightLeft, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1D2331] font-sans selection:bg-[#CCFF00] selection:text-[#053624]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F4F5F7]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#053624] rounded-lg flex items-center justify-center">
              <span className="text-[#CCFF00] font-bold text-lg leading-none">B</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-[#053624]">Bridge</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-bold tracking-wide text-[#6B7484] hover:text-[#053624] transition-colors uppercase">Features</a>
            <a href="#security" className="text-sm font-bold tracking-wide text-[#6B7484] hover:text-[#053624] transition-colors uppercase">Security</a>
            <a href="#support" className="text-sm font-bold tracking-wide text-[#6B7484] hover:text-[#053624] transition-colors uppercase">Support</a>
          </div>
          <div className="flex gap-4">
            <a href="https://ai.studio/apps/2f917398-9ccf-4262-b025-a17994e8bfa2" target="_blank" rel="noreferrer" className="text-sm font-bold bg-[#053624] text-white px-6 py-2.5 rounded-xl hover:bg-[#074d33] transition-colors shadow-sm inline-block">Get App</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
            <span className="text-[#053624] text-xs font-bold tracking-wider uppercase">Live in The Gambia</span>
          </div>
          <h1 className="text-[3.5rem] md:text-[4.75rem] font-black tracking-tight text-[#1D2331] leading-[1.05] mb-6">
            Move money <br/><span className="text-[#053624]">without limits.</span>
          </h1>
          <p className="text-lg text-[#6B7484] mb-12 max-w-lg leading-relaxed font-medium">
            Instantly transfer funds between Wave and APS Wallet in The Gambia. Enjoy low fees, secure bridging, and 24/7 availability all in one bold app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="https://ai.studio/apps/2f917398-9ccf-4262-b025-a17994e8bfa2" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105 active:scale-95 inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[48px] w-auto drop-shadow-sm" />
            </a>
            <a href="https://ai.studio/apps/2f917398-9ccf-4262-b025-a17994e8bfa2" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105 active:scale-95 inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[48px] w-auto drop-shadow-sm" />
            </a>
          </div>
        </motion.div>

        {/* Hero Image/Mockup Component - Matching the screenshot */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative flex justify-center w-full"
        >
          {/* Main App Mockup */}
          <div className="w-full max-w-[360px] bg-[#F4F5F7] rounded-[48px] border-[12px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative h-[780px]">
             
             {/* App Header */}
             <div className="px-6 pt-12 pb-4 flex justify-between items-start bg-[#F4F5F7]">
                <div className="flex-1">
                  <h3 className="text-[22px] leading-tight font-extrabold text-[#111B2B] tracking-tight">Hello,<br/>ASSAN</h3>
                  <p className="text-xs text-[#5B6577] font-medium mt-1">Ready to bridge your funds?</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
                    <Bell size={18} className="text-[#5B6577]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#E5E7EB] overflow-hidden border border-[#D1D5DB]">
                     <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover grayscale" />
                  </div>
                </div>
             </div>
             
             {/* Scrollable Content Area */}
             <div className="flex-1 px-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col gap-4 pb-4 bg-[#F9FAFB] pt-4">
                
                <div className="flex flex-col gap-4">
                  {/* Wave -> APS Card */}
                  <div className="bg-[#053624] rounded-[32px] p-6 text-white shadow-lg relative flex flex-col justify-between min-h-[160px] cursor-pointer hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 rounded-[14px] bg-white/10 flex items-center justify-center mb-6">
                       <Wallet size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-[24px] font-bold leading-tight mb-1 flex items-center gap-2">Wave <ArrowRight size={20}/> APS</h4>
                      <div className="flex items-center justify-between">
                         <p className="text-white/80 text-[13px] font-medium">Bridge your Wave funds to APS</p>
                         <ArrowRight size={20} className="text-[#3b6653]" />
                      </div>
                    </div>
                  </div>

                  {/* APS -> Wave Card */}
                  <div className="bg-white rounded-[32px] p-6 text-[#1D2331] relative flex flex-col justify-between min-h-[160px] cursor-pointer hover:scale-[1.02] transition-transform shadow-sm">
                    <div className="w-12 h-12 rounded-[14px] bg-[#CCFF00] flex items-center justify-center mb-6">
                       <Landmark size={24} className="text-[#1D2331]" />
                    </div>
                    <div>
                      <h4 className="text-[24px] font-bold leading-tight mb-1 flex items-center gap-2">APS <ArrowRight size={20}/> Wave</h4>
                      <div className="flex items-center justify-between">
                         <p className="text-[#6B7484] text-[13px] font-medium">Bridge your APS funds to Wave</p>
                         <ArrowRight size={20} className="text-[#D1D5DB]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Promotional banner */}
                <div className="bg-[#053624] rounded-[32px] p-4 text-white relative overflow-hidden mt-2 h-[120px] shadow-sm flex items-end">
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400 via-[#053624] to-[#053624]"></div>
                   <div className="relative z-10 w-full">
                      <div className="text-[10px] bg-white/10 text-white px-2 py-1 flex items-center gap-1 uppercase tracking-wider font-bold rounded-full w-fit mb-1 border border-white/10">
                         <Zap size={10} className="text-[#CCFF00] fill-[#CCFF00]" /> Promotion
                      </div>
                   </div>
                   <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-2xl"></div>
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                       <div className="w-10 h-10 rounded-xl bg-blue-400 flex items-center justify-center shadow-md border 2px border-[#053624]">
                           <span className="text-white font-black italic">W</span>
                       </div>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 border-dashed"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md border 2px border-[#053624]">
                           <span className="text-blue-700 font-black text-xs">APS</span>
                       </div>
                   </div>
                </div>
                
                 {/* Recent Activity List */}
                <div className="mt-4">
                    <div className="flex justify-between items-end mb-4 px-2">
                        <h4 className="text-[17px] font-bold text-[#1D2331]">Recent Activity</h4>
                        <span className="text-[13px] font-bold text-[#053624] cursor-pointer hover:underline">View All</span>
                    </div>
                    
                    <div className="space-y-3">
                         <div className="bg-white rounded-3xl p-4 flex justify-between items-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] border border-[#F4F5F7]">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-[14px] bg-[#f0faeb] text-[#053624] flex justify-center items-center">
                                  <ArrowRightLeft size={20} />
                               </div>
                               <div>
                                  <div className="text-[15px] font-bold text-[#1D2331]">WAVE TO APS</div>
                                  <div className="text-[13px] text-[#6B7484] font-medium mt-0.5">Apr 22, 2026</div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-[16px] font-bold text-[#1D2331]">D 500</div>
                               <div className="text-[10px] font-bold uppercase text-[#00c950] tracking-wide mt-1">COMPLETED</div>
                            </div>
                         </div>
                         
                         <div className="bg-white rounded-3xl p-4 flex justify-between items-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] border border-[#F4F5F7]">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-[14px] bg-[#f0faeb] text-[#053624] flex justify-center items-center">
                                  <ArrowRightLeft size={20} />
                               </div>
                               <div>
                                  <div className="text-[15px] font-bold text-[#1D2331]">WAVE TO APS</div>
                                  <div className="text-[13px] text-[#6B7484] font-medium mt-0.5">Apr 22, 2026</div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-[16px] font-bold text-[#1D2331]">D 100</div>
                               <div className="text-[10px] font-bold uppercase text-[#00c950] tracking-wide mt-1">COMPLETED</div>
                            </div>
                         </div>

                         <div className="bg-white rounded-3xl p-4 flex justify-between items-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] border border-[#F4F5F7]">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-[14px] bg-[#f0faeb] text-[#053624] flex justify-center items-center">
                                  <ArrowRightLeft size={20} />
                               </div>
                               <div>
                                  <div className="text-[15px] font-bold text-[#1D2331]">APS TO WAVE</div>
                                  <div className="text-[13px] text-[#6B7484] font-medium mt-0.5">Apr 22, 2026</div>
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="text-[16px] font-bold text-[#1D2331]">D 700</div>
                               <div className="text-[10px] font-bold uppercase text-[#00c950] tracking-wide mt-1">COMPLETED</div>
                            </div>
                         </div>
                    </div>

                    {/* Contact Support Button */}
                    <div className="mt-8 mb-4 px-1">
                       <button className="w-full bg-[#111B2B] text-white py-[16px] rounded-[24px] flex items-center justify-center gap-3 text-[12px] font-bold tracking-wider hover:bg-[#1a2942] transition-colors shadow-[0_8px_16px_-6px_rgba(17,27,43,0.3)]">
                          <MessageCircle size={18} />
                          NEED HELP? CONTACT SUPPORT
                       </button>
                    </div>
                </div>
             </div>

             {/* Bottom Nav */}
             <div className="bg-[#F9FAFB] px-8 py-5 flex justify-between items-center z-10 sticky bottom-0">
                <div className="w-12 h-12 rounded-2xl bg-[#CCFF00] flex items-center justify-center shadow-lg shadow-[#CCFF00]/20 cursor-pointer hover:scale-105 transition-transform text-[#053624]">
                   <Landmark size={24} className="fill-current" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center text-[#9CA3AF] hover:text-[#053624] transition-colors cursor-pointer">
                   <History size={24} />
                </div>
                <div className="w-12 h-12 flex items-center justify-center text-[#9CA3AF] hover:text-[#053624] transition-colors cursor-pointer">
                   <MessageCircle size={24} />
                </div>
                <div className="w-12 h-12 flex items-center justify-center text-[#9CA3AF] hover:text-[#053624] transition-colors cursor-pointer">
                   <User size={24} />
                </div>
             </div>
             
          </div>

          <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-[#CCFF00]/30 rounded-full blur-[80px]"></div>
          <div className="absolute -z-10 bottom-20 -left-10 w-64 h-64 bg-[#053624]/20 rounded-full blur-[60px]"></div>
        </motion.div>
      </section>

      {/* Stats/Logo Banner - Optional separator */}
      <div className="border-y border-[#E5E7EB] bg-white mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center gap-6 md:gap-24 grayscale opacity-40 text-lg md:text-xl font-bold uppercase tracking-widest text-[#053624] overflow-hidden">
           <span>Secure</span>
           <span className="w-1.5 h-1.5 rounded-full bg-current hidden md:block"></span>
           <span>Instant</span>
           <span className="w-1.5 h-1.5 rounded-full bg-current hidden md:block"></span>
           <span>Seamless</span>
        </div>
      </div>

      {/* Features Detail */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-[3rem] font-black tracking-tight text-[#1D2331] leading-none mb-6">
                 Bridge your <br/><span className="text-[#053624]">favorite wallets.</span>
               </h2>
               <p className="text-lg text-[#6B7484] leading-relaxed mb-10 font-medium max-w-md">
                 Enjoy convenient transfers from the comfort of your home, 24/7 with no holidays or rest days. Securely bridge your Gambian Dalasi between Wave and APS for real-time, fast transactions.
               </p>
               <div className="space-y-6">
                  <FeatureRow icon={<RefreshCcw className="text-[#053624]" />} title="Real-Time Transfers" desc="Your funds are settled and available in the destination account instantly." />
                  <FeatureRow icon={<Smartphone className="text-[#053624]" />} title="Simple Payment Process" desc="Pay securely via Wave merchant links or quick APS account transfers to bridge your funds instantly." />
                  <FeatureRow icon={<Zap className="text-[#053624]" />} title="Ultra-Low Fees" desc="Keep more of your money with transparent, affordable bridging rates." />
               </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[#053624] rounded-[40px] rotate-3 blur-md opacity-10"></div>
              <div className="bg-[#053624] rounded-[40px] p-8 md:p-10 relative overflow-hidden text-white shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                 <h3 className="text-2xl font-bold mb-8 tracking-tight">Recent Activity</h3>
                 <div className="space-y-4 relative z-10">
                    <ActivityRow type="WAVE TO APS" amount="D 500" date="Apr 22, 2026" />
                    <ActivityRow type="APS TO WAVE" amount="D 1,200" date="Apr 21, 2026" />
                    <ActivityRow type="WAVE TO APS" amount="D 20" date="Apr 20, 2026" />
                 </div>
                 <button className="w-full mt-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors font-bold tracking-widest uppercase text-xs border border-white/10 backdrop-blur-md">View All History</button>
              </div>
            </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-32 bg-[#F4F5F7]">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="bg-white rounded-[40px] p-8 md:p-10 relative overflow-hidden shadow-xl border border-[#E5E7EB]">
                  <h3 className="text-2xl font-bold mb-8 tracking-tight text-[#1D2331]">Security Center</h3>
                  <div className="space-y-6">
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="font-bold text-[#1D2331]">App Login Biometrics</div>
                           <div className="text-xs text-[#6B7484] font-medium mt-1">Require Face ID / Touch ID to open app</div>
                        </div>
                        <div className="w-12 h-6 rounded-full bg-[#CCFF00] flex items-center p-1 shadow-inner relative">
                           <div className="w-4 h-4 bg-[#053624] rounded-full translate-x-6 shadow-sm"></div>
                        </div>
                     </div>
                     <div className="h-px bg-[#E5E7EB] w-full"></div>
                     <div className="flex items-center justify-between">
                        <div>
                           <div className="font-bold text-[#1D2331]">High-Value Protection</div>
                           <div className="text-xs text-[#6B7484] font-medium mt-1">Require biometrics for payments over D500</div>
                        </div>
                        <div className="w-12 h-6 rounded-full bg-[#E5E7EB] flex items-center p-1 shadow-inner relative">
                           <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                     </div>
                  </div>

                  <h3 className="text-2xl font-bold mt-12 mb-6 tracking-tight text-[#1D2331]">Your Tier Status</h3>
                  <div className="bg-[#053624] rounded-3xl p-6 text-white relative overflow-hidden">
                     <div className="flex justify-between items-start mb-2">
                        <div className="text-lg font-bold flex items-center gap-2">
                            <ShieldCheck size={20} className="text-[#CCFF00]" />
                            Tier 2 (Silver)
                        </div>
                        <span className="text-[10px] bg-[#CCFF00] text-[#053624] px-2 py-1 rounded-full font-bold uppercase">Active</span>
                     </div>
                     <div className="space-y-2 mt-4 text-[13px] font-medium text-white/80">
                        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#CCFF00]/20 flex items-center justify-center"><div className="w-2 h-2 bg-[#CCFF00] rounded-full"></div></div> Government ID Required</div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#CCFF00]/20 flex items-center justify-center"><div className="w-2 h-2 bg-[#CCFF00] rounded-full"></div></div> Limit: D25,000 / day</div>
                     </div>
                     <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs font-medium text-white/60">Upgrade to Tier 3 (Gold)</span>
                        <div className="text-[10px] bg-[#CCFF00] text-[#053624] px-3 py-1.5 rounded-full font-bold uppercase cursor-pointer hover:bg-white transition-colors flex items-center gap-1">Submit Utility Bill</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm mb-6">
                 <ShieldCheck size={16} className="text-[#053624]" />
                 <span className="text-[#053624] text-xs font-bold tracking-wider uppercase">Bank-Grade Protection</span>
               </div>
               <h2 className="text-[3rem] font-black tracking-tight text-[#1D2331] leading-none mb-6">
                 Ironclad <br/><span className="text-[#053624]">Security Tiers.</span>
               </h2>
               <p className="text-lg text-[#6B7484] leading-relaxed mb-10 font-medium max-w-md">
                 Your peace of mind is our priority. We provide a highly secure system to move funds between your wallets without any breaches. With biometric app locks and verified KYC tiers, your data and transactions are safely guarded.
               </p>
            </div>
         </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-32 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-[3rem] font-black tracking-tight text-[#1D2331] leading-none mb-6">
              Always here <br/><span className="text-[#053624]">when you need us.</span>
            </h2>
            <p className="text-xl text-[#6B7484] leading-relaxed mb-12 font-medium">
              We offer 24/7 support with a dedicated team ready to respond to any enquiries. Plus, our smart AI agent is built right into the app to help you instantly.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
               <div className="bg-[#F4F5F7] p-8 rounded-[32px] border border-[#E5E7EB]">
                  <MessageCircle size={32} className="text-[#053624] mb-6" />
                  <h4 className="text-2xl font-bold text-[#1D2331] mb-2">24/7 Dedicated Team</h4>
                  <p className="text-[#6B7484] font-medium">Our Gambian support staff are always on standby to resolve any complex issues via live channel.</p>
               </div>
               <div className="bg-[#053624] p-8 rounded-[32px] text-white">
                  <Zap size={32} className="text-[#CCFF00] mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-2">Smart AI Agent</h4>
                  <p className="text-white/70 font-medium">Get instant answers and guidance on bridging, tiers, and limits within seconds.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#CCFF00] py-32 border-t border-[#c0eb02]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[3rem] md:text-[4.5rem] font-extrabold tracking-tight text-[#053624] leading-tight mb-8">
            Ready to bridge?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://ai.studio/apps/2f917398-9ccf-4262-b025-a17994e8bfa2" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#053624] text-white px-8 py-5 rounded-2xl font-bold hover:bg-[#074d33] transition-colors shadow-xl shadow-[#053624]/20 text-lg uppercase tracking-wider group inline-flex">
               Get the App
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white py-16 border-t border-[#E5E7EB]">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
               <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#053624] rounded-lg flex items-center justify-center">
                      <span className="text-[#CCFF00] font-bold text-lg leading-none">B</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[#053624]">Bridge</span>
                  </div>
                  <p className="text-sm font-medium text-[#6B7484] leading-relaxed mb-6">
                     Moving money without limits. <br />Bridge your Wave and APS funds instantly.
                  </p>
                  <div className="flex items-center gap-3">
                     <a href="#" className="w-10 h-10 rounded-full bg-[#F4F5F7] flex items-center justify-center text-[#6B7484] hover:bg-[#053624] hover:text-[#CCFF00] transition-colors"><Facebook size={18} /></a>
                     <a href="#" className="w-10 h-10 rounded-full bg-[#F4F5F7] flex items-center justify-center text-[#6B7484] hover:bg-[#053624] hover:text-[#CCFF00] transition-colors"><Twitter size={18} /></a>
                     <a href="#" className="w-10 h-10 rounded-full bg-[#F4F5F7] flex items-center justify-center text-[#6B7484] hover:bg-[#053624] hover:text-[#CCFF00] transition-colors"><Instagram size={18} /></a>
                     <a href="#" className="w-10 h-10 rounded-full bg-[#F4F5F7] flex items-center justify-center text-[#6B7484] hover:bg-[#053624] hover:text-[#CCFF00] transition-colors"><Linkedin size={18} /></a>
                  </div>
               </div>
               
               <div className="lg:col-span-1">
                  <h4 className="font-bold text-[#1D2331] mb-4 tracking-tight">Resources</h4>
                  <ul className="space-y-3">
                     <li><a href="/privacy" className="text-sm font-medium text-[#6B7484] hover:text-[#053624] transition-colors">Privacy Policy</a></li>
                     <li><a href="/terms" className="text-sm font-medium text-[#6B7484] hover:text-[#053624] transition-colors">Terms & Conditions</a></li>
                     <li><a href="/security" className="text-sm font-medium text-[#6B7484] hover:text-[#053624] transition-colors">Security Details</a></li>
                  </ul>
               </div>

               <div className="lg:col-span-1">
                  <h4 className="font-bold text-[#1D2331] mb-4 tracking-tight">Contact Us</h4>
                  <ul className="space-y-3">
                     <li className="text-sm font-medium text-[#6B7484]">
                        <span className="block text-[#1D2331] mb-1">Email</span>
                        <a href="mailto:support@bridge.gm" className="hover:text-[#053624] transition-colors">support@bridge.gm</a>
                     </li>
                     <li className="text-sm font-medium text-[#6B7484]">
                        <span className="block text-[#1D2331] mb-1">Address</span>
                        Brufut Gardens, West Coast region, The Gambia.
                     </li>
                  </ul>
               </div>

               <div className="lg:col-span-2">
                  <h4 className="font-bold text-[#1D2331] mb-4 tracking-tight">Stay Updated</h4>
                  <p className="text-sm font-medium text-[#6B7484] leading-relaxed mb-4">
                     Get the latest news on feature releases and new wallet integrations directly to your inbox.
                  </p>
                  <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                     <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="flex-1 bg-[#F4F5F7] border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-medium text-[#1D2331] focus:outline-none focus:border-[#053624] focus:ring-1 focus:ring-[#053624]/20 transition-all placeholder:text-[#6B7484]/70"
                        required
                     />
                     <button type="submit" className="bg-[#053624] hover:bg-[#074d33] text-[#CCFF00] px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors">
                        Subscribe
                     </button>
                  </form>
               </div>
            </div>

            <div className="pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-sm font-bold text-[#6B7484] uppercase tracking-wider">
                  © {new Date().getFullYear()} Bridge App. The Gambia.
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

function FeatureRow({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-[#1D2331] mb-1">{title}</h4>
        <p className="text-[#6B7484] font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ActivityRow({ type, amount, date }: { type: string, amount: string, date: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-between border border-white/5 backdrop-blur-md">
       <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#CCFF00] flex items-center justify-center">
             <RefreshCcw size={20} className="text-[#053624]" />
          </div>
          <div>
             <div className="font-bold text-sm tracking-wide">{type}</div>
             <div className="text-[10px] text-white/50 font-bold uppercase mt-0.5 tracking-wider">{date}</div>
          </div>
       </div>
       <div className="text-right">
          <div className="font-black text-lg">{amount}</div>
          <div className="text-[9px] text-[#CCFF00] font-bold uppercase tracking-wider mt-0.5">Completed</div>
       </div>
    </div>
  )
}
