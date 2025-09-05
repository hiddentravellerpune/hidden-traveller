import React from 'react';

const PrivacyPolicy = () => {
    // Customize your company information here
    const companyName = '[Your Company Name]';
    const companyEmail = '[Your Email Address]';

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-['Inter']">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900">Privacy Policy</h1>
                <p className="text-center text-gray-500 mb-10 text-sm">Last Updated: October 26, 2023</p>

                <p className="text-gray-600 mb-8 leading-relaxed">This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
                        <p className="text-gray-600 mb-4">We collect different types of information for various purposes to provide and improve our Service to You.</p>

                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Data</h3>
                        <p className="text-gray-600 mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Usage Data</h3>
                        <p className="text-gray-600 mb-4">Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
                        <p className="text-gray-600">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h2>
                        <p className="text-gray-600 mb-4">We may use Your Personal Data for the following purposes:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li><strong className="font-semibold text-gray-800">To provide and maintain our Service:</strong> including to monitor the usage of our Service.</li>
                            <li><strong className="font-semibold text-gray-800">To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                            <li><strong className="font-semibold text-gray-800">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                            <li><strong className="font-semibold text-gray-800">To provide You with news and offers:</strong> To provide You with news, special offers, and general information about other goods, services, and events.</li>
                            <li><strong className="font-semibold text-gray-800">To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">3. How We Share Your Information</h2>
                        <p className="text-gray-600 mb-4">We may share Your personal information in the following situations:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li><strong className="font-semibold text-gray-800">With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                            <li><strong className="font-semibold text-gray-800">With affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                            <li><strong className="font-semibold text-gray-800">With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                            <li><strong className="font-semibold text-gray-800">With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Your Rights</h2>
                        <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li><strong className="font-semibold text-gray-800">Access:</strong> The right to request a copy of the personal data we hold about you.</li>
                            <li><strong className="font-semibold text-gray-800">Rectification:</strong> The right to request that we correct any inaccurate or incomplete personal data.</li>
                            <li><strong className="font-semibold text-gray-800">Erasure:</strong> The right to request that we delete your personal data.</li>
                            <li><strong className="font-semibold text-gray-800">Restriction:</strong> The right to request that we restrict the processing of your personal data.</li>
                            <li><strong className="font-semibold text-gray-800">Portability:</strong> The right to request that we transfer your data to another organization.</li>
                            <li><strong className="font-semibold text-gray-800">Objection:</strong> The right to object to our processing of your personal data.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Data Security</h2>
                        <p className="text-gray-600 leading-relaxed">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 leading-relaxed">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Contact Us</h2>
                        <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            <li>By email: <a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">{companyEmail}</a></li>
                            <li>By visiting this page on our website: <a href="[Your Website Contact Page Here]" className="text-blue-600 hover:underline">[Your Website Contact Page Here]</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
