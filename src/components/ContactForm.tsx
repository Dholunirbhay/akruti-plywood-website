import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '', requirement: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'service_1iwc7hz',
      'template_f3b74xd',
      {
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        city: form.city,
        requirement: form.requirement,
        message: form.message,
      },
      'ZWFQxxKe3ql6UNPG2'
    );

    setSubmitted(true);

    setForm({
      name: '',
      mobile: '',
      email: '',
      city: '',
      requirement: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 4000);
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('Failed to send message. Please try again.');
  }
};

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { field: 'name', placeholder: 'Full Name', type: 'text' },
          { field: 'mobile', placeholder: 'Mobile Number', type: 'tel' },
          { field: 'email', placeholder: 'Email Address', type: 'email' },
          { field: 'city', placeholder: 'City', type: 'text' },
        ].map(({ field, placeholder, type }) => (
          <input
            key={field}
            type={type}
            placeholder={placeholder}
            value={form[field as keyof typeof form]}
            onChange={(e) => handleChange(field, e.target.value)}
            required
            className="px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-[#2D2D2D] dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#4E342E] dark:focus:border-[#D7B899] transition-colors"
          />
        ))}
      </div>
      <select
        value={form.requirement}
        onChange={(e) => handleChange('requirement', e.target.value)}
        required
        className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-[#2D2D2D] dark:text-white focus:outline-none focus:border-[#4E342E] dark:focus:border-[#D7B899] transition-colors"
      >
        <option value="">Select Requirement</option>
        <option value="commercial">Commercial Plywood</option>
        <option value="marine">Marine Plywood</option>
        <option value="bwr">BWR Grade Plywood</option>
        <option value="blockboard">Block Board</option>
        <option value="laminates">Decorative Laminates</option>
        <option value="doors">Flush Doors</option>
        <option value="veneers">Veneers</option>
        <option value="panels">Interior Panels</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Your Message"
        rows={4}
        value={form.message}
        onChange={(e) => handleChange('message', e.target.value)}
        className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-[#2D2D2D] dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#4E342E] dark:focus:border-[#D7B899] transition-colors resize-none"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#4E342E] hover:bg-[#3E2723] text-white rounded-lg font-semibold transition-all hover:shadow-lg"
      >
        {submitted ? 'Message Sent!' : 'Send Message'} <Send size={16} />
      </button>
    </form>
  );
}
