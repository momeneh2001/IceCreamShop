import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import React from 'react'

function PrivacyPolicy() {
    return (
        <>
            <Header variant='default' />
            <main>
                <PageHeading title="Privacy Policy" items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" },]} />
                <section className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 my-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className=" text-2xl xs:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                            Privacy Policy :
                        </h2>

                        <p className=" text-sm xs:text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                            Protecting your privacy is important to us. This Privacy Policy outlines
                            how we collect, use, and disclose personal information when you use our
                            website.
                        </p>

                        <ul className="my-9 space-y-5 md:space-y-6">
                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    1. Information We Collect:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    We collect personal information such as your name, email address, and
                                    payment details when you create an account or make a purchase. We also
                                    collect usage data such as IP address, browser type, and pages visited.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    2. How We Use Your Information:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    We use your personal information to provide and improve our services.
                                    Your information may also be used for communication purposes, such as
                                    sending newsletters or updates.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    3. Information Sharing:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    We do not sell, trade, or otherwise transfer your personal information
                                    to third parties without your consent. We may share your information
                                    with trusted third-party service providers who assist us in operating
                                    our website.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    4. Security:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    We implement security measures to protect your personal information
                                    against unauthorized access or alteration. However, no method of
                                    transmission over the Internet or electronic storage is 100% secure.
                                </p>
                            </li>

                            <li className="p-4 xs:p-5 md:p-6 rounded-xl border border-gray-200">
                                <h3 className="mb-2 text-base xs:text-lg md:text-xl font-semibold text-gray-900">
                                    5. Your Choices:
                                </h3>
                                <p className="text-sm xs:text-base leading-relaxed text-gray-700">
                                    You have the right to access, update, or delete your personal information
                                    at any time. You can opt out of receiving promotional emails by following
                                    the instructions provided in the email. By using our website, you consent
                                    to the terms of this Privacy Policy.
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

export default PrivacyPolicy
