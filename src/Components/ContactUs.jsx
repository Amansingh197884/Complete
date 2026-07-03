import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-5 bg-dark text-white">
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-lg-5 d-flex flex-column justify-content-between">
                        <div>
                            <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
                            <p className="text-secondary mb-5">Drop us a line to discuss setup architecture, system planning, or structural property onboarding maps.</p>
                        </div>
                        <div className="d-flex flex-column gap-4 mb-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-primary text-white p-3 rounded-circle"><FaEnvelope /></div>
                                <div>
                                    <small className="text-secondary d-block">Email</small>
                                    <span className="fw-medium">hello@vanguardliving.com</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-primary text-white p-3 rounded-circle"><FaPhone /></div>
                                <div>
                                    <small className="text-secondary d-block">Phone</small>
                                    <span className="fw-medium">+1 (555) 234-5678</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-primary text-white p-3 rounded-circle"><FaMapMarkerAlt /></div>
                                <div>
                                    <small className="text-secondary d-block">HQ Location</small>
                                    <span className="fw-medium">Downtown Innovation Hub, Ste 200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bg-secondary bg-opacity-10 border border-secondary p-4 p-md-5 rounded-4">
                            {sent ? (
                                <div className="text-center py-5 animate__animated animate__zoomIn">
                                    <h3 className="text-success fw-bold">Message Logged!</h3>
                                    <p className="text-muted">An operations technician will reach out directly.</p>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label text-secondary small fw-bold text-uppercase">Full Name</label>
                                        <input type="text" className="form-control bg-dark text-white border-secondary custom-input-focus" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Aman Singh" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label text-secondary small fw-bold text-uppercase">Email Address</label>
                                        <input type="email" className="form-control bg-dark text-white border-secondary custom-input-focus" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="aman@example.com" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label text-secondary small fw-bold text-uppercase">Message Parameters</label>
                                        <textarea className="form-control bg-dark text-white border-secondary custom-input-focus" rows="4" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Outline your project timeline..."></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold contact-btn-hover d-flex align-items-center justify-content-center gap-2">
                                        Send Message <FaPaperPlane size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}