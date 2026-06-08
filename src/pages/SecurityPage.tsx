export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1D2331] font-sans">
      <nav className="w-full bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#053624] rounded-lg flex items-center justify-center">
               <span className="text-[#CCFF00] font-bold text-lg leading-none">B</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-[#053624]">Bridge</span>
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20 pb-32">
        <h1 className="text-4xl font-black text-[#1D2331] mb-8 tracking-tight">Security & Infrastructure</h1>
        <p className="text-lg text-[#6B7484] mb-12 font-medium leading-relaxed">
          At Bridge, your security is integrated into our architecture. Understand how your identity is protected across our tiered verification system and how funds traverse safely between endpoints.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#053624]">The 3 Tiers of Verification</h2>
            <div className="grid gap-6">
               <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#053624] bg-[#CCFF00] w-max px-2 py-1 rounded mb-2">Tier 1: Basic Entry</div>
                  <h3 className="font-bold text-xl mb-2">Number Verification</h3>
                  <p className="text-[#6B7484] text-sm">
                     Upon downloading Bridge, you authenticate via OTP linked to your active mobile wallet number. Limits are restricted to minimal daily allowances to prevent spoofing and immediate fraud.
                  </p>
               </div>
               
               <div className="bg-[#053624] p-6 rounded-2xl border border-[#053624] shadow-sm text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#053624] bg-[#CCFF00] w-max px-2 py-1 rounded mb-2">Tier 2: Standard Verification</div>
                  <h3 className="font-bold text-xl mb-2 text-white">Government ID Match</h3>
                  <p className="text-white/80 text-sm">
                     To transfer up to D25,000 per day, users must submit a valid Government ID matching the name associated with their Wave and APS accounts. All ID reviews are automated utilizing secure OCR and biometric comparators against your live selfie.
                  </p>
               </div>

               <div className="bg-gradient-to-br from-[#111B2B] to-[#1D2331] p-6 rounded-2xl shadow-xl text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#053624] bg-[#CCFF00] w-max px-2 py-1 rounded mb-2">Tier 3: Maximum Access</div>
                  <h3 className="font-bold text-xl mb-2 text-white">Full KYC & Utility Bill</h3>
                  <p className="text-white/80 text-sm">
                     For unlimited or high-volume transfers, proof of address (utility bill) combined with secondary manual auditing grants you Tier 3. High-volume accounts have dedicated risk-monitoring models looking for anomalous activities.
                  </p>
               </div>
            </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">How Money Actually Moves</h2>
             <p className="text-[#6B7484] leading-relaxed mb-4">
                Bridge operates a revolutionary, secure clearing model without directly accessing your private wallet credentials.
             </p>
             <ul className="list-disc pl-6 space-y-3 text-[#6B7484]">
               <li><strong>Merchant Interfaces:</strong> Sending money out of Wave via Bridge uses a secure merchant payment link that you authorize directly in your Wave terminal. Bridge cannot pull funds without your intentional, biometric confirmation in Wave. </li>
               <li><strong>APS Funding:</strong> Funding arriving to APS through Bridge triggers an automated B2B treasury instruction, instantly crediting your destination account without Bridge acting as a holding bank.</li>
               <li><strong>No Middleman Holdings:</strong> We do not pool customer deposits. Your money leaves your wallet and instantly touches your secondary wallet. If a network fails midway, our routing architecture mandates an automatic reversal to the origin balance.</li>
             </ul>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">Safety Information & Best Practices</h2>
             <div className="space-y-6">
                 <div>
                     <h3 className="text-xl font-bold mb-2 text-[#1D2331]">Safeguard Your Account</h3>
                     <p className="text-[#6B7484] leading-relaxed mb-4">
                        Safeguard your account as your personal property; refrain from sharing wallet information, login credentials, or OTP tokens via phone, SMS, or email. Bridge is committed to enhancing platform security, ensuring your online safety, and maintaining customer account confidentiality. Learn more about online protection measures below.
                     </p>
                 </div>
                 
                 <div>
                     <h3 className="text-xl font-bold mb-2 text-[#1D2331]">Security Tips</h3>
                     <ul className="list-disc pl-6 space-y-2 text-[#6B7484]">
                        <li>Avoid sharing your account login details and PIN to prevent unauthorized access. Bridge never requests such information through any communication channel.</li>
                        <li>Recognizing a familiar phone number or email doesn't guarantee authenticity; be cautious with cold-callers.</li>
                        <li>Hide your screen when entering your PIN or authorising app transactions in public view.</li>
                        <li>Create strong and robust passwords for your app login. Change them regularly.</li>
                        <li>Review your transaction history in the Bridge app regularly to ensure it only includes your transactions; please report any unexplained activities.</li>
                        <li>Enable app notifications for timely updates on account activities sent to your device.</li>
                        <li>Access our services exclusively through the official Bridge mobile app for added security.</li>
                        <li>Exercise caution against copycat websites or applications resembling Bridge's; be wary of fake sites or apps that mimic our platform.</li>
                     </ul>
                 </div>
             </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">Recognizing Fraud</h2>
             <p className="text-[#6B7484] leading-relaxed mb-6">
                You are the first and most effective line of defense in combatting online fraud. Learning how to identify and prevent online fraud is the most efficient protection.
             </p>
             
             <div className="space-y-6">
                 <div>
                     <h3 className="text-xl font-bold mb-2 text-[#1D2331]">Fraudulent Emails</h3>
                     <p className="text-[#6B7484] leading-relaxed">
                        A "spoofed" email mimics a legitimate source, aiming to deceive you into divulging personal or account information. Despite visible warning signs, individuals still succumb to "phishing" emails, some of which prompt customers to update their accounts by clicking on links leading to counterfeit websites. Stay vigilant against these tactics.
                     </p>
                 </div>

                 <div>
                     <h3 className="text-xl font-bold mb-2 text-[#1D2331]">Spoofed Websites</h3>
                     <p className="text-[#6B7484] leading-relaxed">
                        Fraudsters build fake websites that look very similar to Bridge's website to lure unsuspecting customers into providing their online log-in information. Bridge will never ask a customer to provide, verify or update their personal, account or financial information via email or pop-up windows. This includes Passwords, PINs, or Wallet details. Do not respond to or click links in suspicious emails.
                     </p>
                 </div>

                 <div>
                     <h3 className="text-xl font-bold mb-2 text-[#1D2331]">Phishing & Vishing Scams</h3>
                     <p className="text-[#6B7484] leading-relaxed">
                        Phishing involves deceptive tactics like false calls or emails. A common scenario includes receiving a call warning that your account will be suspended unless you click a link or provide details. The scammers aim to trick you into revealing personal information to commit financial crimes. Never open suspicious emails or attachments. In case of uncertainty, please contact Bridge support.
                     </p>
                 </div>
                 
                 <div className="bg-[#f0faeb] p-6 rounded-2xl border border-[#CCFF00] shadow-sm">
                     <h3 className="text-lg font-bold mb-2 text-[#053624]">Emergency Actions</h3>
                     <ul className="list-disc pl-6 space-y-2 text-[#6B7484]">
                        <li>If your phone is lost or stolen, contact us immediately at <strong>support@bridge.gm</strong> to freeze your Bridge access.</li>
                        <li>You will never be contacted directly by our partner wallets (Wave, APS) through Bridge to verify your PIN or request that you transfer funds to "protect" your account.</li>
                     </ul>
                 </div>
             </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">Your Responsibility & Our Policy</h2>
             <p className="text-[#6B7484] leading-relaxed mb-4">
                <strong>Bridge, its staff, or agents will never contact you via phone call or email requesting you to update your passwords, OTP codes, or PIN.</strong> Anyone soliciting such information is a fraudster.
             </p>
             <p className="text-[#6B7484] leading-relaxed mb-6">
                If you encounter a suspicious telephone call or email, please report it immediately to <strong>support@bridge.gm</strong>. Our dedicated team is available 24/7 to safeguard your account.
             </p>
             
             <div className="bg-[#053624] text-white p-8 rounded-3xl shadow-xl">
                 <h3 className="text-2xl font-bold mb-4 text-[#CCFF00]">Bridge's Security Policy</h3>
                 <p className="text-white/80 leading-relaxed mb-6 font-medium">
                    Bridge is committed to constant innovation and the implementation of security features to uphold the integrity of our platform. While we provide a secure transaction environment across Wave and APS, customers should take steps to protect confidential information:
                 </p>
                 <ul className="list-disc pl-6 space-y-3 text-white/90">
                    <li>Create a strong unique app PIN. Select a PIN that is hard to guess.</li>
                    <li>Do not share your PIN with anyone else. Keep it strictly confidential.</li>
                    <li>Change your PIN regularly. We recommend changing it every 60 to 90 days.</li>
                    <li>Close your app window or log out when you have finished your app session.</li>
                 </ul>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}
