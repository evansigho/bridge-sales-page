export default function TermsAndConditions() {
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
        <h1 className="text-4xl font-black text-[#1D2331] mb-8 tracking-tight">Terms of Service</h1>
        <p className="text-lg text-[#6B7484] mb-12 font-medium leading-relaxed">
          Welcome to Bridge! The Bridge service, website and/or software application (collectively, the "Service") enables you to transfer funds between your mobile money wallets, specifically Wave and APS. These Terms constitute a contract between you and Bridge.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#053624]">1. Acceptance & Registration</h2>
            <p className="text-[#6B7484] leading-relaxed mb-4">
               If you do not accept these Terms, please do not use the Service. By using any part of the Service, you accept these Terms. You must register a wallet account with valid information. To use the Service, you must provide a valid Gambian mobile phone number associated with a Wave or APS account.
            </p>
            <p className="text-[#6B7484] leading-relaxed">
               You are responsible for keeping your PIN and app credentials secure at all times. Bridge will not be responsible when you compromise your details by disclosing them to third parties. You are liable for all transactions initiated using your account even if not authorised by you or if done in error.
            </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">2. Third-Party Wallets & Processing</h2>
             <p className="text-[#6B7484] leading-relaxed mb-4">
                The Service provides an opportunity to bridge funds between independent third-party processors (Wave and APS). These entities process their respective payments subject to their own terms and conditions. Bridge does not hold, pool, or process the underlying funds directly.
             </p>
             <ul className="list-disc pl-6 space-y-2 text-[#6B7484]">
                <li>We will not be liable for any experienced downtime on the service, particularly as the availability depends on Wave and APS platforms over which we have no control.</li>
                <li>You agree that Bridge is not responsible or liable for delayed settlements, frozen accounts, or financial losses stemming directly from the internal policies or compliance freezes of destination wallets.</li>
             </ul>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">3. Chargebacks & Reversals</h2>
             <p className="text-[#6B7484] leading-relaxed">
                If a transaction results in an amount deducted from your source wallet but not credited to your destination wallet due to system errors or technical faults from the processors, Bridge will facilitate automated reversals via our routing architecture. You acknowledge that under applicable rules issued by the Central Bank of The Gambia, reversals depend on the reporting windows of the respective wallets. We reserve the right to pass on any recovery fees incurred from reversed actions if deemed to be fraudulent.
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">4. Legal Compliance & Anti-Fraud</h2>
             <p className="text-[#6B7484] leading-relaxed">
                You must not use the Service to violate any laws, including engaging in fraud, money laundering, or related illegalities. In the event that Bridge reasonably suspects such activities, we reserve the right to block your account immediately without liability, suspend your bridging access, and report your information to appropriate law enforcement and financial agencies in The Gambia.
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">5. Limitation of Liability</h2>
             <p className="text-[#6B7484] leading-relaxed font-bold mb-4">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
             </p>
             <p className="text-[#6B7484] leading-relaxed">
                In no event shall Bridge, its suppliers, or affiliates be liable for any direct, indirect, punitive, incidental, special, consequential damages, or any damages whatsoever arising out of, or in any way connected with the delay or inability to use the service, or the failure of any third-party network (APS/Wave).
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">6. Dispute Resolution & Arbitration</h2>
             <p className="text-[#6B7484] leading-relaxed">
                This Agreement shall be governed by and construed in accordance with the laws of The Gambia. Any matters arising concerning the interpretation, validity or implementation of this Agreement not solved by mutual agreement shall be submitted to arbitration in the English language taking place in the West Coast Region, The Gambia. The arbitral decision shall be final and binding.
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mb-4 text-[#053624]">7. Contact & Modifications</h2>
             <p className="text-[#6B7484] leading-relaxed">
                We may modify these Terms at any time in the future to reflect API structure changes or Gambian Central Bank directives. By continuing to use the Service, you agree to be bound by the latest version. For product inquiries, account termination, or reporting suspicious activities, please contact us immediately at <strong className="text-[#1D2331]">support@bridge.gm</strong>.
             </p>
          </section>
        </div>
      </main>
    </div>
  );
}
