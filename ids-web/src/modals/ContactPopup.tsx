"use client";
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFocus = (field: keyof typeof formData) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof typeof formData) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
    validateField(field, formData[field]);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateField = (field: keyof typeof formData, value: string) => {
    let error = "";
    if (field === "firstName" && !value.trim()) {
      error = "First name is required";
    } else if (field === "lastName" && !value.trim()) {
      error = "Last name is required";
    } else if (field === "email") {
      if (!value.trim()) {
        error = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (field === "phone" && !value.trim()) {
      error = "Phone number is required";
    } else if (field === "service" && !value) {
      error = "Please select a service option";
    } else if (field === "message") {
      if (!value.trim()) {
        error = "Message is required";
      } else if (value.trim().length < 10) {
        error = "Message must be at least 10 characters long";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;
    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
      const ok = validateField(key, formData[key]);
      if (!ok) isValid = false;
    });

    if (!isValid) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const combinedMessage = formData.service
        ? `[Service: ${formData.service}] ${formData.message}`
        : formData.message;

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: combinedMessage,
      };

      const backendUrl =
        process.env.NEXT_PUBLIC_API_URL || "https://ids-web-three.vercel.app/php-backend";
      const endpoint = `${backendUrl}/submit.php`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

      if (response.ok && data.status === "success") {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
        // Close modal on success after a short delay so user can read toast/confirm
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Failed to send message. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFloated = (field: keyof typeof formData) =>
    focused[field] || (formData[field] && formData[field].length > 0);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{
        modal: "classic-contact-modal",
        overlay: "classic-contact-overlay",
        closeButton: "classic-contact-close-btn",
      }}
      styles={{
        closeIcon: { fill: "currentColor" }, // Uses CSS styling instead of fixed white
      }}
    >
      <div className="classic-modal-content">
        <div className="classic-modal-header text-center mb-4">
          <span className="subtitle">Let's Work Together</span>
          <h2 className="title">Get In Touch</h2>
          <p className="desc">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} id="contact-popup-form" noValidate>
          <div className="row g-3">
            {/* First Name */}
            <div className="col-lg-6 col-md-6">
              <div
                className={`classic-input-group ${isFloated("firstName") ? "floated" : ""
                  } ${errors.firstName ? "has-error" : ""}`}
              >
                <label className="classic-label">First Name *</label>
                <input
                  type="text"
                  className={`classic-input ${errors.firstName ? "is-invalid" : ""}`}
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  onFocus={() => handleFocus("firstName")}
                  onBlur={() => handleBlur("firstName")}
                  required
                  disabled={isSubmitting}
                />
                {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
              </div>
            </div>

            {/* Last Name */}
            <div className="col-lg-6 col-md-6">
              <div
                className={`classic-input-group ${isFloated("lastName") ? "floated" : ""
                  } ${errors.lastName ? "has-error" : ""}`}
              >
                <label className="classic-label">Last Name *</label>
                <input
                  type="text"
                  className={`classic-input ${errors.lastName ? "is-invalid" : ""}`}
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  onFocus={() => handleFocus("lastName")}
                  onBlur={() => handleBlur("lastName")}
                  required
                  disabled={isSubmitting}
                />
                {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
              </div>
            </div>

            {/* Email Address */}
            <div className="col-lg-6 col-md-6">
              <div
                className={`classic-input-group ${isFloated("email") ? "floated" : ""
                  } ${errors.email ? "has-error" : ""}`}
              >
                <label className="classic-label">Email Address *</label>
                <input
                  type="email"
                  className={`classic-input ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  required
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-lg-6 col-md-6">
              <div
                className={`classic-input-group ${isFloated("phone") ? "floated" : ""
                  } ${errors.phone ? "has-error" : ""}`}
              >
                <label className="classic-label">Phone Number *</label>
                <input
                  type="tel"
                  className={`classic-input ${errors.phone ? "is-invalid" : ""}`}
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                  required
                  disabled={isSubmitting}
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="col-lg-12">
              <div
                className={`classic-input-group floated ${errors.service ? "has-error" : ""}`}
              >
                <label className="classic-label">Service Required *</label>
                <div className="classic-select-wrapper">
                  <select
                    className={`classic-input ${errors.service ? "is-invalid" : ""}`}
                    value={formData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    onFocus={() => handleFocus("service")}
                    onBlur={() => handleBlur("service")}
                    disabled={isSubmitting}
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
              <div
                className={`classic-input-group ${isFloated("message") ? "floated" : ""
                  } ${errors.message ? "has-error" : ""}`}
              >
                <label className="classic-label">Type your message here *</label>
                <textarea
                  className={`classic-input ${errors.message ? "is-invalid" : ""}`}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  required
                  disabled={isSubmitting}
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
      </div>
    </Modal>
  );
};

export default ContactPopup;
