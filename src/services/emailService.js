import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You will need to replace these with your actual Service ID, Template ID, and Public Key
// from your EmailJS dashboard: https://dashboard.emailjs.com/

export const EMAILJS_SERVICE_ID = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim();
export const EMAILJS_TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim();
export const EMAILJS_PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim();

const hasEmailConfig = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

export const sendQuoteEmail = (formData) => {
    if (!hasEmailConfig) {
        return Promise.reject(new Error('EmailJS is not configured. Set VITE_EMAILJS_* env vars.'));
    }

    return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
            company_name: formData.companyName,
            contact_person: formData.contactPerson,
            email: formData.email,
            phone: formData.phone,
            waste_type: formData.wasteType,
            quantity: formData.quantity,
            frequency: formData.frequency,
            location: formData.location,
            requirements: formData.requirements,
            to_email: 'connect.ecogreen@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
    );
};
