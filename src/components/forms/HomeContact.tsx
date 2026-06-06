"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const HomeContact = () => {
    const [focused, setFocused] = useState<Record<string, boolean>>({});
    const [values, setValues] = useState<Record<string, string>>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFocus = (field: string) => setFocused(prev => ({ ...prev, [field]: true }));
    const handleBlur = (field: string) => setFocused(prev => ({ ...prev, [field]: false }));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setValues(prev => ({ ...prev, [field]: e.target.value }));
    };

    const isFloated = (field: string) => focused[field] || (values[field] && values[field].length > 0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const { firstName, lastName, email, phone, message } = values;
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
            toast.error('All fields are required.');
            return;
        }

        // Email validation pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ids-web-three.vercel.app/php-backend';
            const endpoint = `${backendUrl}/submit.php`;

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                const textData = await response.text();
                console.error("Non-JSON response from server:", textData);
                throw new Error(`Server returned a non-JSON response (${response.status})`);
            }

            if (response.ok && data.status === 'success') {
                toast.success('Your message has been sent successfully!');
                // Reset form values
                setValues({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                toast.error(data.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Contact Form Submission Error:', error);
            toast.error('A network error occurred. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="classic-form-card">
            <h3 className="form-title">Send a Message</h3>
            <form onSubmit={handleSubmit} id="contact-form">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className={`classic-input-group ${isFloated('firstName') ? 'floated' : ''}`}>
                            <input
                                type="text"
                                className="classic-input"
                                value={values.firstName}
                                onFocus={() => handleFocus('firstName')}
                                onBlur={() => handleBlur('firstName')}
                                onChange={(e) => handleChange(e, 'firstName')}
                                disabled={isSubmitting}
                            />
                            <label className="classic-label">First Name*</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`classic-input-group ${isFloated('lastName') ? 'floated' : ''}`}>
                            <input
                                type="text"
                                className="classic-input"
                                value={values.lastName}
                                onFocus={() => handleFocus('lastName')}
                                onBlur={() => handleBlur('lastName')}
                                onChange={(e) => handleChange(e, 'lastName')}
                                disabled={isSubmitting}
                            />
                            <label className="classic-label">Last Name*</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`classic-input-group ${isFloated('email') ? 'floated' : ''}`}>
                            <input
                                type="email"
                                className="classic-input"
                                value={values.email}
                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleBlur('email')}
                                onChange={(e) => handleChange(e, 'email')}
                                disabled={isSubmitting}
                            />
                            <label className="classic-label">Email Address*</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`classic-input-group ${isFloated('phone') ? 'floated' : ''}`}>
                            <input
                                type="tel"
                                className="classic-input"
                                value={values.phone}
                                onFocus={() => handleFocus('phone')}
                                onBlur={() => handleBlur('phone')}
                                onChange={(e) => handleChange(e, 'phone')}
                                disabled={isSubmitting}
                            />
                            <label className="classic-label">Phone Number*</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className={`classic-input-group ${isFloated('message') ? 'floated' : ''}`}>
                            <textarea
                                className="classic-input"
                                value={values.message}
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                                onChange={(e) => handleChange(e, 'message')}
                                disabled={isSubmitting}
                            ></textarea>
                            <label className="classic-label">Write your message*</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" className="classic-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send message'} <i className="fa-regular fa-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomeContact
