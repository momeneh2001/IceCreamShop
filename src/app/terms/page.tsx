import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import React from 'react'

function TermsPage() {
    return (
        <>
            <Header variant='default' />
            <main>
                <PageHeading title="Terms & Conditions" items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" },]} />
                <section className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 my-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-4">
                            Terms and Conditions
                        </h2>

                        <p className="text-sm xs:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome to [Your Online Education Platform]! Before accessing or using our website, please read these Terms and Conditions carefully. By accessing or using any part of the site, you agree to be bound by these Terms and Conditions.
                        </p>

                        <ul className="space-y-6">
                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    1. Use of Website:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    Your use of our website is subject to these Terms and Conditions. You must be at least 18 years old to use our services.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    2. User Account:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information when creating an account.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    3. Intellectual Property:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    All content on this website, including text, graphics, logos, and images, is the property of [Your Online Education Platform] and protected by copyright laws. You may not reproduce, distribute, or transmit any content without prior written consent.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    4. Payment and Billing:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    Payment for our services is required in advance. All fees are non-refundable.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    5. Termination:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    We reserve the right to suspend or terminate your account at any time for violation of these Terms and Conditions. You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us. Please review our full Terms and Conditions for more detailed information.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default TermsPage 
