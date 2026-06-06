"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Redirect to dashboard if already logged in
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            router.push('/admin/dashboard');
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            toast.error('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const isPhpBackend = process.env.NEXT_PUBLIC_BACKEND_TYPE === 'php';
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const endpoint = isPhpBackend 
                ? `${backendUrl}/login.php` 
                : '/api/admin/login';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                toast.success('Login successful!');
                localStorage.setItem('adminToken', data.token);
                localStorage.setItem('adminUser', JSON.stringify(data.user));
                router.push('/admin/dashboard');
            } else {
                toast.error(data.message || 'Invalid credentials.');
            }
        } catch (error) {
            console.error('Login Error:', error);
            toast.error('A network error occurred. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0A111E 0%, #15243F 100%)',
            fontFamily: 'var(--body-font), sans-serif',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '450px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '40px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            }}>
                <div className="text-center mb-4">
                    <h2 style={{
                        color: '#FFFFFF',
                        fontWeight: '700',
                        fontSize: '28px',
                        letterSpacing: '-0.5px',
                        margin: '0 0 8px 0',
                        fontFamily: 'var(--heading-font), sans-serif'
                    }}>
                        Admin Portal
                    </h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '15px',
                        margin: 0
                    }}>
                        Enter credentials to access the enquiries dashboard.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label style={{
                            display: 'block',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '14px',
                            fontWeight: '500',
                            marginBottom: '8px'
                        }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="admin"
                            disabled={isSubmitting}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '10px',
                                color: '#FFFFFF',
                                fontSize: '15px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.border = '1px solid #EA7925';
                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            }}
                            onBlur={(e) => {
                                e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        />
                    </div>

                    <div className="mb-4">
                        <label style={{
                            display: 'block',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '14px',
                            fontWeight: '500',
                            marginBottom: '8px'
                        }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            disabled={isSubmitting}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '10px',
                                color: '#FFFFFF',
                                fontSize: '15px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.border = '1px solid #EA7925';
                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            }}
                            onBlur={(e) => {
                                e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '14px',
                            background: '#EA7925',
                            border: 'none',
                            borderRadius: '10px',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            marginTop: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) e.currentTarget.style.background = '#d86d1d';
                        }}
                        onMouseLeave={(e) => {
                            if (!isSubmitting) e.currentTarget.style.background = '#EA7925';
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Logging in...
                            </>
                        ) : 'Log In'}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="/" style={{
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
                    >
                        ← Back to Homepage
                    </a>
                </div>
            </div>
        </div>
    );
}
