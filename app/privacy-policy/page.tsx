"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import styles from "./privacy-policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <GradientWrapper>
      <PageHero
        title="Privacy Policy"
        description="Your privacy and data security are fundamental to how we operate"
        backgroundImage="/ssrfintech_1.jpg"
        primaryCTA={{
          text: "Contact Us",
          href: "/contact",
        }}
        icon={<Shield className="w-10 h-10" />}
      />

      <section className={styles.content}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.policyDocument}
          >
            {/* Last Updated */}
            <div className={styles.lastUpdated}>
              <p><strong>Last Updated:</strong> February 7, 2026</p>
            </div>

            {/* 1. INTRODUCTION */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>1. Introduction</h2>
              </div>
              <p className={styles.paragraph}>
                This is the Website Privacy Policy for all data collected, processed, and stored through the website of SSR Fintech.
              </p>
            </section>

            {/* 2. PURPOSE */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Eye className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>2. Purpose</h2>
              </div>
              <p className={styles.paragraph}>
                Confidentiality and privacy of user data is of utmost priority to SSR Fintech, also referred to as "We" or "Us".
                This Privacy Policy, also referred to as "Privacy Statement", has been created to demonstrate our privacy commitment to users.
              </p>
              <p className={styles.paragraph}>
                This privacy statement applies to SSR Fintech website: <a href="https://ssrfintech.com" className={styles.link}>https://ssrfintech.com</a>
              </p>
              <p className={styles.paragraph}>
                SSR Fintech's websites are not intended for children under 18 years of age. SSR Fintech does not knowingly solicit data online from,
                or market online to, children under 18 years of age.
              </p>
            </section>

            {/* 3. NATURE AND CATEGORIES OF PERSONAL DATA */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Lock className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>3. Nature and Categories of Personal Data Being Collected</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech may collect the following categories of personal data and sensitive personal data in providing our services:
              </p>
              <ul className={styles.list}>
                <li>Website usage and similar data collected via automated means, such as cookies, IP address, etc.</li>
                <li>Job applications, CV, and related data when you visit the Careers section</li>
                <li>Contact & location information when you raise a query, request, complaint, or schedule a callback</li>
                <li>Business contact data when you are one of our business partners, affiliates, or third parties</li>
              </ul>
            </section>

            {/* 4. MODES OF COLLECTION */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>4. Modes of Collection of Data</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech collects personal data for the products and services availed by you. SSR Fintech obtains your data:
              </p>
              <ul className={styles.list}>
                <li>When you contact us via one of our channels (SMS, email, call, social media, etc.)</li>
                <li>Via Cookies (please refer to our cookie policy for more details)</li>
                <li>Via Service Providers or Third-Party Ad-Servers appointed by us</li>
                <li>Via the device you use to browse our websites</li>
                <li>Via ads or online content from us and our Partners</li>
                <li>Via data publicly available through public and third-party platforms (such as social media), through online repositories, databases, and/or directories, or that is otherwise legitimately obtained</li>
              </ul>
              <p className={styles.paragraph}>
                SSR Fintech requests the data subject to provide their personal data when:
              </p>
              <ul className={styles.list}>
                <li>SSR Fintech first collects the personal data of the data subject</li>
                <li>SSR Fintech uses the personal data of the data subject for a purpose other than the purpose for which it was collected</li>
                <li>SSR Fintech discloses the personal data to a third party</li>
              </ul>
            </section>

            {/* 5. PURPOSES */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>5. Purposes for Which Personal Data is Processed</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech uses your personal data to provide the services availed by you and to conduct business. Most commonly,
                SSR Fintech will use your personal data for the following:
              </p>
              <ul className={styles.list}>
                <li>Provide and communicate with you about services offered by SSR Fintech, partners, affiliates, and third parties</li>
                <li>Developing new products and services</li>
                <li>Protect against and prevent fraud, and other legal or information security risks</li>
                <li>Provide connectivity and dispute resolution services as part of our services</li>
                <li>Provide you with personalized services and recommendations</li>
                <li>Operate, evaluate, and improve our business, including anonymization and analytics</li>
                <li>Process your job application</li>
                <li>Serve a legal obligation</li>
                <li>Serve other purposes for which we provide specific notice at the time of collection, and as otherwise authorized or required by law</li>
                <li>Respond to queries and complaints received from you regarding our services and products</li>
                <li>Where you have given explicit consent to do so (e.g., marketing communications, promotions, etc.)</li>
              </ul>

              <h3 className={styles.subsectionTitle}>5.1 Change of Purpose</h3>
              <p className={styles.paragraph}>
                SSR Fintech will only use your data for the purposes for which it was collected, unless it is required to be used for another reason
                that is compatible with the original purpose.
              </p>
              <p className={styles.paragraph}>
                Please note that SSR Fintech may process your personal data without knowledge or consent, in compliance with the above rules,
                where it is required or permitted by law.
              </p>
            </section>

            {/* 6. RIGHTS OF DATA SUBJECTS */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Shield className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>6. Rights of Data Subjects</h2>
              </div>
              <p className={styles.paragraph}>
                The rights that are available to you are as follows:
              </p>
              <ul className={styles.list}>
                <li>Right to confirmation</li>
                <li>Right to access</li>
                <li>Right to data portability</li>
                <li>Right to correct/rectify</li>
                <li>Right to deletion</li>
                <li>Right to be forgotten (Right to erasure)</li>
                <li>Right to lodge a complaint with the Supervisory Authority</li>
                <li>Right to not be subject to automated individual decision-making including profiling</li>
                <li>Right to object</li>
              </ul>
              <p className={styles.paragraph}>
                In addition to the above-mentioned rights, for personal data processed on the basis of consent, you also have the right to withdraw
                your consent and the right to be informed before Personal Data is disclosed for the first time to third parties or used on their behalf
                for the purposes of direct marketing.
              </p>
              <p className={styles.paragraph}>
                You can exercise your rights by submitting a request to SSR Fintech at{" "}
                <a href="mailto:privacy@ssrfintech.com" className={styles.link}>privacy@ssrfintech.com</a>.
                Upon receiving the request from you, SSR Fintech will conduct a verification check to validate your identity and accordingly process the request.
              </p>
              <p className={styles.paragraph}>
                Where any request made is refused by SSR Fintech, you will be provided the reasons in writing for such refusal and have the right
                to file a complaint with the Authority against the refusal.
              </p>
            </section>

            {/* 7. TELEMARKETING */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Phone className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>7. Telemarketing</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech will adhere to the do-not-call registry as maintained by the nation and opted by the data subjects.
              </p>
            </section>

            {/* 8. DATA SHARING */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>8. Personal Data Sharing and Disclosure</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech does not share personal data with anyone except as described below. SSR Fintech may share personal data as required
                or as permitted by law, such as:
              </p>
              <ul className={styles.list}>
                <li>With regulatory authorities, courts, and governmental agencies to comply with legal orders, legal or regulatory requirements, and government requests</li>
                <li>With our partners, regulatory authorities, and governmental agencies to detect and prevent fraud or criminal activity, and to protect the rights of SSR Fintech or others</li>
                <li>With our partners, affiliates, and third parties who perform services for us, collaborate with us, and/or help us operate our business</li>
              </ul>
            </section>

            {/* 9. DATA RETENTION */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>9. Data Retention</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech will only retain your data for as long as necessary as per mandatory retention periods provided by applicable laws,
                to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p className={styles.paragraph}>
                We will destroy the personal data in a secure manner post retention period as per the organization retention policy and schedule.
              </p>
            </section>

            {/* 10. SECURITY PRACTICES */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Lock className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>10. Reasonable Security Practices and Procedures</h2>
              </div>
              <p className={styles.paragraph}>
                SSR Fintech maintains appropriate security safeguards to protect your personal data and only retain it for a limited period of time.
                SSR Fintech is committed to protecting the data we collect. SSR Fintech maintains reasonable administrative, technical, and physical
                safeguards designed to protect the personal data you provide, or we collect against accidental, unlawful, or unauthorized destruction,
                loss, alteration, access, disclosure, or use.
              </p>
            </section>

            {/* 11. KEY CONTACTS */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Mail className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>11. Key Contacts</h2>
              </div>
              <div className={styles.contactBox}>
                <h3 className={styles.subsectionTitle}>Data Protection Officer (DPO)</h3>
                <p className={styles.paragraph}>
                  For any additional queries related to processing of personal data or reporting of an incident/breach, please write to us at:
                </p>
                <div className={styles.contactInfo}>
                  <p><strong>Name:</strong> Data Protection Officer</p>
                  <p><strong>Email:</strong> <a href="mailto:privacy@ssrfintech.com" className={styles.link}>privacy@ssrfintech.com</a></p>
                  <p><strong>General Contact:</strong> <a href="mailto:contact@ssrfintech.com" className={styles.link}>contact@ssrfintech.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919669336333" className={styles.link}>+91 96693 36333</a></p>
                </div>
              </div>
            </section>

            {/* 12. KEY DEFINITIONS */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>12. Key Definitions</h2>
              </div>
              <div className={styles.definitionsList}>
                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Data</h4>
                  <p className={styles.paragraph}>
                    Includes a representation of information, facts, concepts, opinions, or instructions in a manner suitable for communication,
                    interpretation, or processing by humans or by automated means.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Personal Data</h4>
                  <p className={styles.paragraph}>
                    Means data about or relating to a natural person who is directly or indirectly identifiable, having regard to any characteristic,
                    trait, attribute, or any other feature of the identity of such natural person, whether online or offline, or any combination of
                    such features with any other information, and shall include any inference drawn from such data for the purpose of profiling.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Data Controller/Fiduciary</h4>
                  <p className={styles.paragraph}>
                    Means any person, including the State, a company, any juristic entity, or any individual who alone or in conjunction with others
                    determines the purpose and means of processing of personal data.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Data Subject/Principal</h4>
                  <p className={styles.paragraph}>
                    Means the natural person to whom the personal data relates.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Data Processor</h4>
                  <p className={styles.paragraph}>
                    Means any person, including the State, a company, any juristic entity, or any individual, who processes personal data on behalf
                    of a data controller.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Processing</h4>
                  <p className={styles.paragraph}>
                    In relation to personal data, means an operation or set of operations performed on personal data, and may include operations such as
                    collection, recording, organisation, structuring, storage, adaptation, alteration, retrieval, use, alignment or combination, indexing,
                    disclosure by transmission, dissemination or otherwise making available, restriction, erasure, or destruction.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Sensitive Personal Data</h4>
                  <p className={styles.paragraph}>
                    Means such personal data which may reveal, be related to, or constitute:
                  </p>
                  <ul className={styles.list}>
                    <li>Financial data</li>
                    <li>Health data</li>
                    <li>Official identifier</li>
                    <li>Sex life</li>
                    <li>Sexual orientation</li>
                    <li>Biometric data</li>
                    <li>Genetic data</li>
                    <li>Transgender status</li>
                    <li>Intersex status</li>
                    <li>Caste or tribe</li>
                    <li>Religious or political belief or affiliation</li>
                    <li>Any other data categorized as sensitive personal data under applicable law</li>
                  </ul>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Child</h4>
                  <p className={styles.paragraph}>
                    Means a person who has not completed eighteen years of age.
                  </p>
                </div>

                <div className={styles.definition}>
                  <h4 className={styles.definitionTerm}>Personal Data Breach</h4>
                  <p className={styles.paragraph}>
                    Means any unauthorised or accidental disclosure, acquisition, sharing, use, alteration, destruction of, or loss of access to,
                    personal data that compromises the confidentiality, integrity, or availability of personal data to a data principal.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. CHANGES TO POLICY */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <FileText className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>13. Changes to This Policy</h2>
              </div>
              <p className={styles.paragraph}>
                This policy is subject to modification from time to time. If we make any changes to this policy, we will post those changes at the top
                of this page or notify you by other means such as email, etc.
              </p>
            </section>

            {/* Contact Section */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <Mail className={styles.sectionIcon} />
                <h2 className={styles.sectionTitle}>Contact Us</h2>
              </div>
              <p className={styles.paragraph}>
                If you have questions, requests, or concerns regarding your privacy and rights, please let us know how we can help.
              </p>
              <div className={styles.contactBox}>
                <h3 className={styles.subsectionTitle}>Data Protection Officer</h3>
                <div className={styles.contactInfo}>
                  <p><strong>Name:</strong> Data Protection Officer</p>
                  <p><strong>Email:</strong> <a href="mailto:privacy@ssrfintech.com" className={styles.link}>privacy@ssrfintech.com</a></p>
                </div>
              </div>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaButton}>
                  Contact Our Team
                </Link>
                <Link href="/trust" className={styles.ctaButtonSecondary}>
                  Learn More About Our Security
                </Link>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </GradientWrapper>
  );
}
