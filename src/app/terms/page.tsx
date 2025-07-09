"use client"
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TermsOfService = () => {
  const router = useRouter();
  return (
  <div className="max-w-4xl min-w-full min-h-screen px-7 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
    <div className="backdrop-blur-xl rounded-3xl p-8 max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white mr-4">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-white">Terms of Service</h1>
          <p className="text-white/80">Last updated: December 2024</p>
        </div>
      </div>

      <div className="space-y-8 text-white/90">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
          <div className="bg-white/5 rounded-xl p-6">
            <p className="mb-4">By using GhostPin, you agree to these terms. If you don't agree, please don't use our service.</p>
            <p>GhostPin is a photo location editing app that allows you to add custom GPS coordinates to your photos. We provide this service subject to the following terms and conditions.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What You Can Do</h2>
          <div className="bg-white/5 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-400" />
                  Allowed Uses
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Edit location data in your personal photos</li>
                  <li>• Share your modified photos on social media</li>
                  <li>• Use the app for creative and personal projects</li>
                  <li>• Export photos with custom location data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                  Prohibited Uses
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Creating false evidence or misleading content</li>
                  <li>• Violating others' privacy or rights</li>
                  <li>• Using the app for illegal activities</li>
                  <li>• Reverse engineering or copying our technology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Your Content</h2>
          <div className="bg-white/5 rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">Ownership</h3>
                <p className="text-sm">You own all photos and content you upload to GhostPin. We don't claim any ownership rights to your content.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Responsibility</h3>
                <p className="text-sm">You're responsible for ensuring you have the right to modify and share any photos you use with GhostPin.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Processing License</h3>
                <p className="text-sm">By using our service, you grant us permission to process your photos to provide the location editing features.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
          <div className="bg-white/5 rounded-xl p-6">
            <div className="space-y-4">
              <p className="text-sm">We strive to keep GhostPin available 24/7, but we can't guarantee uninterrupted service. We may need to suspend service for maintenance or updates.</p>
              <p className="text-sm">We reserve the right to modify or discontinue features, with or without notice. We'll do our best to communicate significant changes in advance.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Premium Features</h2>
          <div className="bg-white/5 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-white mb-3">Subscription Terms</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Monthly or annual billing cycles</li>
                  <li>• Automatic renewal unless canceled</li>
                  <li>• Cancel anytime through your account</li>
                  <li>• Refunds subject to app store policies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3">Premium Benefits</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Unlimited photo processing</li>
                  <li>• Advanced location search features</li>
                  <li>• Priority customer support</li>
                  <li>• No ads or watermarks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
          <div className="bg-white/5 rounded-xl p-6">
            <div className="space-y-4">
              <p className="text-sm">GhostPin is provided "as is" without warranties. We're not liable for any damages arising from your use of the service.</p>
              <p className="text-sm">We're not responsible for how you use the modified photos or any consequences of sharing them.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
          <h3 className="font-bold text-white mb-2">Questions About Terms?</h3>
          <p className="text-sm mb-4">Contact our legal team at legal@ghostpin.app for clarification on any terms.</p>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Contact Legal Team
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TermsOfService;