"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface Enquiry {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
    created_at: string;
}

export default function AdminDashboardPage() {
    const router = useRouter();
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [adminUser, setAdminUser] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('enquiries');

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        const userStr = localStorage.getItem('adminUser');
        if (!token) {
            router.push('/admin/login');
        } else {
            setIsAuthenticated(true);
            if (userStr) {
                setAdminUser(JSON.parse(userStr));
            }
            fetchEnquiries(token);
        }
    }, [router]);

    const fetchEnquiries = async (token: string) => {
        setIsLoading(true);
        try {
            const isPhpBackend = process.env.NEXT_PUBLIC_BACKEND_TYPE === 'php';
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const endpoint = isPhpBackend
                ? `${backendUrl}/enquiries.php`
                : '/api/admin/enquiries';

            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                setEnquiries(data.data || []);
            } else {
                toast.error(data.message || 'Failed to fetch enquiries.');
                if (response.status === 401) {
                    handleLogout();
                }
            }
        } catch (error) {
            console.error('Fetch Enquiries Error:', error);
            toast.error('Could not fetch enquiries. Check network/server connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this enquiry? This action cannot be undone.')) {
            return;
        }

        const token = localStorage.getItem('adminToken');
        if (!token) return;

        try {
            const isPhpBackend = process.env.NEXT_PUBLIC_BACKEND_TYPE === 'php';
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const endpoint = isPhpBackend
                ? `${backendUrl}/enquiries.php?id=${id}`
                : `/api/admin/enquiries?id=${id}`;

            const response = await fetch(endpoint, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                toast.success('Enquiry deleted successfully.');
                setEnquiries(prev => prev.filter(item => item.id !== id));
            } else {
                toast.error(data.message || 'Failed to delete enquiry.');
            }
        } catch (error) {
            console.error('Delete Enquiry Error:', error);
            toast.error('A network error occurred while deleting.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin/login');
    };

    const handleExportCSV = () => {
        if (enquiries.length === 0) {
            toast.warn('No enquiries to export.');
            return;
        }

        const headers = ['ID', 'Date', 'First Name', 'Last Name', 'Email', 'Phone', 'Message'];
        const csvRows = [headers.join(',')];

        filteredEnquiries.forEach(item => {
            const values = [
                item.id,
                new Date(item.created_at).toLocaleString(),
                `"${item.first_name.replace(/"/g, '""')}"`,
                `"${item.last_name.replace(/"/g, '""')}"`,
                `"${item.email.replace(/"/g, '""')}"`,
                `"${item.phone.replace(/"/g, '""')}"`,
                `"${item.message.replace(/"/g, '""')}"`
            ];
            csvRows.push(values.join(','));
        });

        const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `enquiries_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('CSV file exported successfully.');
    };

    const filteredEnquiries = enquiries.filter(item => {
        const search = searchTerm.toLowerCase();
        const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
        return (
            fullName.includes(search) ||
            item.email.toLowerCase().includes(search) ||
            item.phone.toLowerCase().includes(search) ||
            item.message.toLowerCase().includes(search)
        );
    });

    const newToday = enquiries.filter(item => {
        const itemDate = new Date(item.created_at).setHours(0, 0, 0, 0);
        const today = new Date().setHours(0, 0, 0, 0);
        return itemDate === today;
    }).length;

    if (!isAuthenticated) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F172A', color: '#FFFFFF' }}>
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: '#0F172A',
            color: '#E2E8F0',
            fontFamily: 'var(--body-font), sans-serif',
        }}>
            {/* Sidebar Navigation */}
            <aside style={{
                width: '280px',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                padding: '30px 0'
            }}>
                <div style={{ padding: '0 30px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #EA7925, #f59e0b)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-solid fa-bolt" style={{ color: '#fff', fontSize: '14px' }}></i>
                    </div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', margin: 0, fontFamily: 'var(--heading-font), sans-serif', letterSpacing: '-0.5px' }}>
                        IntellectWorks
                    </h2>
                </div>

                <nav style={{ flex: 1, padding: '0 20px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li>
                            <button
                                onClick={() => setActiveTab('enquiries')}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    background: activeTab === 'enquiries' ? 'rgba(234, 121, 37, 0.1)' : 'transparent',
                                    border: '1px solid',
                                    borderColor: activeTab === 'enquiries' ? 'rgba(234, 121, 37, 0.2)' : 'transparent',
                                    borderRadius: '12px',
                                    color: activeTab === 'enquiries' ? '#EA7925' : '#94A3B8',
                                    fontSize: '15px',
                                    fontWeight: activeTab === 'enquiries' ? '600' : '500',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'left'
                                }}
                            >
                                <i className="fa-regular fa-envelope" style={{ fontSize: '16px' }}></i> Customer Enquiries
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab('settings')}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    background: activeTab === 'settings' ? 'rgba(234, 121, 37, 0.1)' : 'transparent',
                                    border: '1px solid transparent',
                                    borderRadius: '12px',
                                    color: activeTab === 'settings' ? '#EA7925' : '#94A3B8',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'left'
                                }}
                            >
                                <i className="fa-solid fa-gear" style={{ fontSize: '16px' }}></i> Settings
                            </button>
                        </li>
                    </ul>
                </nav>

                <div style={{ padding: '0 20px', marginTop: 'auto' }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        textAlign: 'center'
                    }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                            <i className="fa-solid fa-user-tie" style={{ color: '#94A3B8' }}></i>
                        </div>
                        <span style={{ fontSize: '14px', color: '#F1F5F9', fontWeight: '600', marginBottom: '4px' }}>
                            {adminUser?.username || 'Admin'}
                        </span>
                        <span style={{ fontSize: '12px', color: '#64748B', marginBottom: '16px' }}>Administrator</span>

                        <button
                            onClick={handleLogout}
                            style={{
                                width: '100%',
                                padding: '8px',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                color: '#E2E8F0',
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                                e.currentTarget.style.color = '#EF4444';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = '#E2E8F0';
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main style={{ flex: 1, padding: '40px', overflowY: 'auto', background: 'radial-gradient(circle at 100% 0%, rgba(39, 84, 153, 0.08) 0%, transparent 50%)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Top Header */}
                    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                        <div>
                            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#F8FAFC', margin: '0 0 8px 0', fontFamily: 'var(--heading-font), sans-serif', letterSpacing: '-0.5px' }}>
                                Dashboard Overview
                            </h1>
                            <p style={{ margin: 0, color: '#94A3B8', fontSize: '15px' }}>
                                Monitor and manage your recent customer enquiries in real-time.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search enquiries..."
                                    style={{
                                        padding: '12px 16px 12px 44px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        color: '#F8FAFC',
                                        fontSize: '14px',
                                        outline: 'none',
                                        width: '280px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#275499';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                    }}
                                />
                                <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }}></i>
                            </div>
                            <button
                                onClick={handleExportCSV}
                                style={{
                                    padding: '12px 20px',
                                    background: '#275499',
                                    border: 'none',
                                    borderRadius: '12px',
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    boxShadow: '0 4px 12px rgba(39, 84, 153, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(39, 84, 153, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(39, 84, 153, 0.3)';
                                }}
                            >
                                <i className="fa-solid fa-download"></i> Export CSV
                            </button>
                        </div>
                    </header>

                    {/* Stats Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #EA7925, transparent)' }}></div>
                            <div>
                                <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 8px 0', fontWeight: '500' }}>Total Enquiries</p>
                                <h3 style={{ color: '#F8FAFC', fontSize: '32px', fontWeight: '700', margin: 0 }}>{enquiries.length}</h3>
                            </div>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(234, 121, 37, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fa-solid fa-inbox" style={{ color: '#EA7925', fontSize: '20px' }}></i>
                            </div>
                        </div>

                        <div style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #275499, transparent)' }}></div>
                            <div>
                                <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 8px 0', fontWeight: '500' }}>New Today</p>
                                <h3 style={{ color: '#F8FAFC', fontSize: '32px', fontWeight: '700', margin: 0 }}>{newToday}</h3>
                            </div>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(39, 84, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fa-solid fa-calendar-day" style={{ color: '#3b82f6', fontSize: '20px' }}></i>
                            </div>
                        </div>

                        <div style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #10b981, transparent)' }}></div>
                            <div>
                                <p style={{ color: '#94A3B8', fontSize: '14px', margin: '0 0 8px 0', fontWeight: '500' }}>System Status</p>
                                <h3 style={{ color: '#F8FAFC', fontSize: '24px', fontWeight: '700', margin: '8px 0 0 0' }}>Online</h3>
                            </div>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fa-solid fa-check-circle" style={{ color: '#10b981', fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </div>

                    {/* Enquiries Data Table */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                    }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <h3 style={{ color: '#F8FAFC', fontSize: '18px', fontWeight: '600', margin: 0 }}>Recent Enquiries</h3>
                        </div>

                        {isLoading ? (
                            <div style={{ padding: '80px 0', textAlign: 'center' }}>
                                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem', color: '#275499' }}></div>
                                <p style={{ marginTop: '16px', color: '#64748B' }}>Fetching data from secure server...</p>
                            </div>
                        ) : filteredEnquiries.length === 0 ? (
                            <div style={{ padding: '80px 0', textAlign: 'center' }}>
                                <div style={{ width: '80px', height: '80px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                                    <i className="fa-solid fa-inbox" style={{ fontSize: '32px', color: '#475569' }}></i>
                                </div>
                                <h4 style={{ color: '#F1F5F9', marginBottom: '8px' }}>No Enquiries Found</h4>
                                <p style={{ color: '#64748B', margin: 0 }}>
                                    {searchTerm ? 'No results matched your search query.' : 'New contact form submissions will appear here.'}
                                </p>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '16px 24px', color: '#94A3B8', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Customer</th>
                                            <th style={{ padding: '16px 24px', color: '#94A3B8', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Contact Info</th>
                                            <th style={{ padding: '16px 24px', color: '#94A3B8', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', width: '35%' }}>Message Excerpt</th>
                                            <th style={{ padding: '16px 24px', color: '#94A3B8', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Date</th>
                                            <th style={{ padding: '16px 24px', color: '#94A3B8', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'right' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEnquiries.map((item) => (
                                            <tr key={item.id} style={{
                                                borderBottom: '1px solid rgba(255, 255, 255, 0.02)',
                                                transition: 'background 0.2s ease',
                                            }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.015)'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EA7925', fontWeight: '600', fontSize: '15px' }}>
                                                            {item.first_name.charAt(0)}{item.last_name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div style={{ color: '#F1F5F9', fontWeight: '500', fontSize: '15px' }}>{item.first_name} {item.last_name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                        <a href={`mailto:${item.email}`} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'} onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                                                            <i className="fa-regular fa-envelope me-2" style={{ color: '#64748B' }}></i>{item.email}
                                                        </a>
                                                        <a href={`tel:${item.phone}`} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#3b82f6'} onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                                                            <i className="fa-solid fa-phone me-2" style={{ color: '#64748B', fontSize: '12px' }}></i>{item.phone}
                                                        </a>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                        {item.message}
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px' }}>
                                                    <div style={{ color: '#E2E8F0', fontSize: '14px', fontWeight: '500' }}>
                                                        {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </div>
                                                    <div style={{ color: '#64748B', fontSize: '12px', marginTop: '2px' }}>
                                                        {new Date(item.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                                    </div>
                                                </td>
                                                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        style={{
                                                            background: 'rgba(239, 68, 68, 0.1)',
                                                            border: '1px solid rgba(239, 68, 68, 0.2)',
                                                            color: '#EF4444',
                                                            cursor: 'pointer',
                                                            padding: '8px 12px',
                                                            borderRadius: '8px',
                                                            transition: 'all 0.2s'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                                                        }}
                                                        title="Delete Enquiry"
                                                    >
                                                        <i className="fa-regular fa-trash-can" style={{ fontSize: '14px' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
