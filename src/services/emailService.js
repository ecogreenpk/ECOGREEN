import emailjs from '@emailjs/browser';

// EmailJS Configuration
// You will need to replace these with your actual Service ID, Template ID, and Public Key
// from your EmailJS dashboard: https://dashboard.emailjs.com/

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

export const sendQuoteEmail = (formData) => {
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
