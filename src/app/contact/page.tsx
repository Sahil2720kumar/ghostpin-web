"use client"
import { log } from 'console';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  // Do not allow headless browsers
  blockHeadless: true,
});


const ContactUs = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Support');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }


    e.preventDefault();
    console.log(email, subject, message);
    const result = await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
      message: message,
      from_name: email,
      reply_to: email,
      email: email,
      subject: subject,
    });
    console.log(result);
    alert('Message sent successfully');
  };

  return (
    <div className="max-w-4xl min-w-full min-h-screen px-7 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      <div className="backdrop-blur-xl rounded-3xl p-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white mr-4">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white">Contact Us</h1>
            <p className="text-white/80">Get in touch with our team</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">General Support</h4>
                  <p className="text-white/80 text-sm">sahilkr2909@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Privacy & Data</h4>
                  <p className="text-white/80 text-sm">sahilkr2909@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Legal & Terms</h4>
                  <p className="text-white/80 text-sm">sahilkr2909@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm mb-1">Business Inquiries</h4>
                  <p className="text-white/80 text-sm">sahilkr2909@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80 text-sm">General Support</span>
                  <span className="text-white text-sm font-medium">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 text-sm">Premium Support</span>
                  <span className="text-white text-sm font-medium">4-8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 text-sm">Critical Issues</span>
                  <span className="text-white text-sm font-medium">2-4 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="font-bold text-white mb-4">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm mb-2">Your Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40">
                  <option className='bg-white/10 text-black' >General Support</option>
                  <option className='bg-white/10 text-black' >Bug Report</option>
                  <option className='bg-white/10 text-black' >Feature Request</option>
                  <option className='bg-white/10 text-black' >Account Issues</option>
                  <option className='bg-white/10 text-black' >Privacy Concerns</option>
                  <option className='bg-white/10 text-black' >Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500   text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30">
          <h3 className="font-bold text-white mb-2">Before You Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
            <div>
              <p>• Check our FAQ section for common questions</p>
              <p>• Try restarting the app for technical issues</p>
            </div>
            <div>
              <p>• Include your device model and OS version</p>
              <p>• Describe steps to reproduce any bugs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
