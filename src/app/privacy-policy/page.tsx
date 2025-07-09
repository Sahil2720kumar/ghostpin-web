"use client"
import { Shield, Eye, Database, Settings, CheckCircle, Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PrivacyPolicy = () => {
  const router = useRouter();
  return (
    <div className="max-w-4xl min-w-full min-h-screen px-7 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      
      <div className=" backdrop-blur-xl rounded-3xl p-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white mr-4">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white">Privacy Policy</h1>
            <p className="text-white/80">Last updated: December 2024</p>
          </div>
        </div>

        <div className="space-y-8 text-white/90">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              What We Collect
            </h2>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Location Data</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Custom GPS coordinates you add to photos</li>
                    <li>• Location searches and map interactions</li>
                    <li>• Saved location preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Photo Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Photos you process through the app</li>
                    <li>• EXIF data modifications</li>
                    <li>• Export and sharing activities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Device Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Device model and operating system</li>
                    <li>• App version and usage analytics</li>
                    <li>• Crash reports and performance data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Account Data</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Email address (if you create an account)</li>
                    <li>• Usage preferences and settings</li>
                    <li>• Purchase history for premium features</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Database className="w-6 h-6 mr-2" />
              How We Use Your Data
            </h2>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">App Functionality</h3>
                  <p className="text-sm">Process photos, embed location data, and provide core app features</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Improve Experience</h3>
                  <p className="text-sm">Analyze usage patterns to enhance features and fix issues</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Communication</h3>
                  <p className="text-sm">Send important updates, security alerts, and feature announcements</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2" />
              Data Protection
            </h2>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">End-to-End Encryption</h3>
                    <p className="text-sm">All photo processing happens locally on your device. We never store your actual photos.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Secure Storage</h3>
                    <p className="text-sm">Any data we collect is encrypted and stored on secure servers with industry-standard protection.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Limited Access</h3>
                    <p className="text-sm">Only essential personnel have access to user data, and all access is logged and monitored.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Data Retention</h3>
                    <p className="text-sm">We only keep data as long as necessary to provide services, then securely delete it.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Request a copy of your data</li>
                    <li>• Update or correct your information</li>
                    <li>• Delete your account and data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Privacy Settings</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Control analytics and tracking</li>
                    <li>• Manage notification preferences</li>
                    <li>• Opt out of data collection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-xl p-6 border border-emerald-400/30">
            <h3 className="font-bold text-white mb-2">Questions About Privacy?</h3>
            <p className="text-sm mb-4">Contact our privacy team at privacy@ghostpin.app for any questions or concerns.</p>
            <button
              onClick={() => router.push('/contact')}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Contact Privacy Team
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;