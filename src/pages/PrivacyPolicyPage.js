import React from 'react';

const PrivacyPolicy = () => {
    // Customize your company information here
    const companyName = 'Hidden Traveller';
    const companyEmail = 'hiddentravellerindia@gmail.com';
    const companyPhone = '+91 8668271086';
    const companyWebsite = 'www.hiddentraveller.in';
    const companyContactPage = `mailto:${companyEmail}`; // Using email for contact page link as a fallback/primary

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-['Inter']">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900">Privacy Policy</h1>
                <p className="text-center text-gray-500 mb-10 text-sm">Last Updated: October 26, 2023</p>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    At <strong className="font-semibold text-gray-800">Hidden Traveller</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.
                </p>

                <div className="space-y-10">
                    {/* 1. Information We Collect */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
                        <p className="text-gray-600 mb-4">We may collect the following types of information:</p>

                        <h3 className="text-xl font-semibold text-gray-700 mb-2">a. Personal Information</h3>
                        <p className="text-gray-600 mb-4">When you register, book a trip, or fill out a form, we may collect:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Billing information</li>
                            <li>Emergency contact details</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">b. Non-Personal Information</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Cookies and usage data</li>
                        </ul>
                    </div>

                    {/* 2. How We Use Your Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4">Your information may be used to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>Process bookings and payments</li>
                            <li>Send trip updates and confirmations</li>
                            <li>Improve our website and services</li>
                            <li>Provide customer support</li>
                            <li>Share important announcements and promotions (with your consent)</li>
                        </ul>
                    </div>

                    {/* 3. Sharing Your Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Sharing Your Information</h2>
                        <p className="text-gray-600 mb-4">We do not sell or trade your personal information. However, we may share it with:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>Trusted partners and service providers (for bookings and trip arrangements)</li>
                            <li>Legal authorities, if required by law</li>
                        </ul>
                    </div>

                    {/* 4. Cookies */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Cookies</h2>
                        <p className="text-gray-600 mb-4">
                            Our website uses **cookies** to enhance your browsing experience. You can choose to disable cookies in your browser settings, but some features may not function properly.
                        </p>
                    </div>

                    {/* 5. Data Security */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Data Security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We implement appropriate security measures to protect your data. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </div>
                    
                    {/* 6. Third-Party Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Third-Party Links</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
                        </p>
                    </div>

                    {/* 7. Your Rights */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Your Rights</h2>
                        <p className="text-gray-600 mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>Access, update, or delete your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Request a copy of the data we hold about you</li>
                        </ul>
                        <p className="text-gray-600 mt-4">To exercise these rights, contact us at:</p>
                        <ul className="list-none space-y-2 pl-4 text-gray-600 mt-2">
                            <li>📧 <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">{companyEmail}</a></li>
                            <li>📞 {companyPhone}</li>
                        </ul>
                    </div>
                    
                    {/* 8. Changes to This Policy */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Changes to This Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. The latest version will always be available on our website.
                        </p>
                    </div>

                    {/* 9. Contact Us */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Contact Us</h2>
                        <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, please reach out:</p>
                        <ul className="list-none space-y-2 pl-4 text-gray-600">
                            <li>🌐 Website: <a href={`https://${companyWebsite}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{companyWebsite}</a></li>
                            <li>📧 Email: <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">{companyEmail}</a></li>
                            <li>📞 Phone: {companyPhone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;