"use client"
import React, { useState } from "react"
import { toast } from "react-toastify"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [focused, setFocused] = useState<Record<string, boolean>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFocus = (field: string) => {
        setFocused(prev => ({ ...prev, [field]: true }))
    }

    const handleBlur = (field: string) => {
        setFocused(prev => ({ ...prev, [field]: false }))
        validateField(field, formData[field as keyof typeof formData])
    }

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }))
        }
    }

    const validateField = (field: string, value: string) => {
        let error = ""
        if (field === "name" && !value.trim()) {
            error = "Full name is required"
        } else if (field === "email") {
            if (!value.trim()) {
                error = "Email address is required"
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = "Please enter a valid email address"
            }
        } else if (field === "phone" && !value.trim()) {
            error = "Phone number is required"
        } else if (field === "service" && !value) {
            error = "Please select a service option"
        } else if (field === "message") {
            if (!value.trim()) {
                error = "Message is required"
            } else if (value.trim().length < 10) {
                error = "Message must be at least 10 characters long"
            }
        }

        setErrors(prev => ({ ...prev, [field]: error }))
        return !error
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        let isValid = true
        Object.keys(formData).forEach(key => {
            const ok = validateField(key, formData[key as keyof typeof formData])
            if (!ok) isValid = false
        })

        if (!isValid) {
            toast.error("Please fill in all required fields correctly.")
            return
        }

        setIsSubmitting(true)

        try {
            const nameParts = formData.name.trim().split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ' ';
            const combinedMessage = formData.service ? `[Service: ${formData.service}] ${formData.message}` : formData.message;

            const payload = {
                firstName,
                lastName,
                email: formData.email,
                phone: formData.phone,
                message: combinedMessage
            };

            const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ids-web-three.vercel.app/php-backend';
            const endpoint = `${backendUrl}/submit.php`;

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
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
                toast.success("Thank you! Your message has been sent successfully.")
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: ""
                })
                setErrors({})
            } else {
                toast.error(data.message || "Failed to send message. Please try again.")
            }
        } catch (err) {
            console.error("Form submission error:", err);
            toast.error("Failed to send message. Please check your network connection or console for details.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} id="contact-form" noValidate>
            <div className="row g-4">
                {/* Full Name */}
                <div className="col-lg-6 col-md-6">
                    <div className={`classic-input-group ${focused.name || formData.name ? "floated" : ""} ${errors.name ? "has-error" : ""}`}>
                        <label className="classic-label">Full Name *</label>
                        <input
                            type="text"
                            className={`classic-input ${errors.name ? "is-invalid" : ""}`}
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            onFocus={() => handleFocus("name")}
                            onBlur={() => handleBlur("name")}
                            required
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>
                </div>

                {/* Email Address */}
                <div className="col-lg-6 col-md-6">
                    <div className={`classic-input-group ${focused.email || formData.email ? "floated" : ""} ${errors.email ? "has-error" : ""}`}>
                        <label className="classic-label">Email Address *</label>
                        <input
                            type="email"
                            className={`classic-input ${errors.email ? "is-invalid" : ""}`}
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onFocus={() => handleFocus("email")}
                            onBlur={() => handleBlur("email")}
                            required
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>
                </div>

                {/* Phone Number */}
                <div className="col-lg-6 col-md-6">
                    <div className={`classic-input-group ${focused.phone || formData.phone ? "floated" : ""} ${errors.phone ? "has-error" : ""}`}>
                        <label className="classic-label">Phone Number *</label>
                        <input
                            type="tel"
                            className={`classic-input ${errors.phone ? "is-invalid" : ""}`}
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            onFocus={() => handleFocus("phone")}
                            onBlur={() => handleBlur("phone")}
                            required
                        />
                        {errors.phone && <span className="error-msg">{errors.phone}</span>}
                    </div>
                </div>

                {/* Service Dropdown */}
                <div className="col-lg-6 col-md-6">
                    <div className={`classic-input-group floated ${errors.service ? "has-error" : ""}`}>
                        <label className="classic-label">Service Required *</label>
                        <div className="classic-select-wrapper">
                            <select
                                className={`classic-input ${errors.service ? "is-invalid" : ""}`}
                                value={formData.service}
                                onChange={(e) => handleChange("service", e.target.value)}
                                onFocus={() => handleFocus("service")}
                                onBlur={() => handleBlur("service")}
                            >
                                <option value="">Choose an option</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Software & IT Service">Software & IT Service</option>
                                <option value="Finance & Investment">Finance & Investment</option>
                            </select>
                        </div>
                        {errors.service && <span className="error-msg">{errors.service}</span>}
                    </div>
                </div>

                {/* Message Textarea */}
                <div className="col-lg-12">
                    <div className={`classic-input-group ${focused.message || formData.message ? "floated" : ""} ${errors.message ? "has-error" : ""}`}>
                        <label className="classic-label">Type your message here *</label>
                        <textarea
                            className={`classic-input ${errors.message ? "is-invalid" : ""}`}
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            onFocus={() => handleFocus("message")}
                            onBlur={() => handleBlur("message")}
                            required
                        ></textarea>
                        {errors.message && <span className="error-msg">{errors.message}</span>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="col-lg-12">
                    <button type="submit" className="classic-btn" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                Sending Message... <i className="fa-solid fa-spinner fa-spin"></i>
                            </>
                        ) : (
                            <>
                                Send Now <i className="fa-solid fa-arrow-up-right"></i>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm

