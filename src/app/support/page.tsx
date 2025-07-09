"use client"
import { HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SupportCenter = () => {
  const router = useRouter();
  return (
  <div className="max-w-4xl min-w-full min-h-screen px-7 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
    <div className="backdrop-blur-xl rounded-3xl p-8 max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white mr-4">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-white">Support Center</h1>
          <p className="text-white/80">Get help with GhostPin</p>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How do I add a custom location to my photo?",
                answer: "Open GhostPin, tap the map icon, search for your desired location or enter coordinates manually, then take a photo or select one from your gallery. The custom location will be embedded automatically."
              },
              {
                question: "Does GhostPin work offline?",
                answer: "Core photo processing works offline, but location search and map features require an internet connection. Previously searched locations are cached for offline use."
              },
              {
                question: "Can I remove location data from photos?",
                answer: "Yes! GhostPin can also strip all location data from photos if you want to remove GPS information completely."
              },
              {
                question: "What photo formats are supported?",
                answer: "GhostPin supports JPEG, PNG, and HEIF formats. Most modern smartphone photos will work perfectly."
              },
              {
                question: "How do I cancel my premium subscription?",
                answer: "Cancel through your device's app store settings (App Store for iOS, Google Play for Android). Your premium features will remain active until the current billing period ends."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Troubleshooting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Common Issues</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">App crashes when processing photos</h4>
                  <p className="text-white/70 text-xs">Try restarting the app and ensure you have sufficient storage space</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Location search not working</h4>
                  <p className="text-white/70 text-xs">Check your internet connection and location permissions</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Photos not saving with location</h4>
                  <p className="text-white/70 text-xs">Ensure you've granted photo library permissions in device settings</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Performance Tips</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Faster processing</h4>
                  <p className="text-white/70 text-xs">Close other apps and ensure good cellular/WiFi signal</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Battery optimization</h4>
                  <p className="text-white/70 text-xs">Process photos in batches and close app when not in use</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Storage management</h4>
                  <p className="text-white/70 text-xs">Regularly clear cache and remove processed photos from temp storage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-pink-400/20 to-rose-500/20 rounded-xl p-6 border border-pink-400/30">
          <h3 className="font-bold text-white mb-2">Still Need Help?</h3>
          <p className="text-sm text-white/80 mb-4">Can't find what you're looking for? Our support team is here to help.</p>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SupportCenter;