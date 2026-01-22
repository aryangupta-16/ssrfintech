"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { jobs } from "@/data/jobs";
import { ArrowLeft, CheckCircle2, Upload, Briefcase, User, Mail, Phone, FileText, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import styles from "./apply.module.css";

export default function JobApplicationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const job = jobs.find(j => j.id === id);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    github: "",
    experience: "",
    currentCompany: "",
    currentRole: "",
    noticePeriod: "",
    expectedSalary: "",
    coverLetter: "",
    whyJoin: "",
    availability: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [resume, setResume] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", { ...formData, resume, jobId: id });
    setShowSuccess(true);
    setTimeout(() => {
      router.push("/careers");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  if (!job) {
    return (
      <GradientWrapper className="pt-20">
        <div className={styles.container}>
          <div className={styles.notFoundCard}>
            <h1 className={styles.notFoundTitle}>Job Not Found</h1>
            <p className={styles.notFoundText}>The job position you're looking for doesn't exist.</p>
            <Link href="/careers">
              <Button className={styles.notFoundButton}>
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
      </GradientWrapper>
    );
  }

  if (showSuccess) {
    return (
      <GradientWrapper className="pt-20">
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.successCard}
          >
            <div className={styles.successIcon}>
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h1 className={styles.successTitle}>Application Submitted!</h1>
            <p className={styles.successText}>
              Thank you for applying for the <span className={styles.successJobTitle}>{job.title}</span> position.
              We'll review your application and get back to you soon.
            </p>
            <p className={styles.successRedirect}>Redirecting to careers page...</p>
          </motion.div>
        </div>
      </GradientWrapper>
    );
  }

  return (
    <GradientWrapper className="pt-20">
      {/* Header */}
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <Link href="/careers">
            <Button variant="outline" className={styles.backButton}>
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Careers
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.jobHeader}
          >
            <div className={styles.jobInfo}>
              <div className={styles.jobIcon}>
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={styles.jobTitle}>{job.title}</h1>
                <p className={styles.jobMeta}>{job.department} • {job.location} • {job.type}</p>
              </div>
            </div>
            <p className={styles.jobDescription}>{job.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <Card className={styles.formCard}>
              <CardHeader>
                <CardTitle className={styles.formTitle}>Application Form</CardTitle>
                <p className={styles.formSubtitle}>Please fill out all required fields marked with *</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Personal Information */}
                  <div className={styles.formGroup}>
                    <h3 className={styles.sectionHeading}>
                      <User className="w-5 h-5 text-indigo-400" />
                      Personal Information
                    </h3>
                    
                    <div className={styles.formGrid}>
                      <div>
                        <label htmlFor="fullName" className={styles.label}>
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={styles.input}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className={styles.label}>
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div>
                        <label htmlFor="phone" className={styles.label}>
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={styles.input}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="location" className={styles.label}>
                          Current Location *
                        </label>
                        <Input
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Mumbai, India"
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Links */}
                  <div className={styles.formGroup}>
                    <h3 className={styles.sectionHeading}>
                      <Linkedin className="w-5 h-5 text-indigo-400" />
                      Professional Links
                    </h3>
                    
                    <div className={styles.formGrid}>
                      <div>
                        <label htmlFor="linkedin" className={styles.label}>
                          LinkedIn Profile
                        </label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className={styles.input}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="portfolio" className={styles.label}>
                          Portfolio Website
                        </label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={handleChange}
                          placeholder="https://yourportfolio.com"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="github" className={styles.label}>
                        GitHub Profile
                      </label>
                      <Input
                        id="github"
                        name="github"
                        type="url"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="https://github.com/yourusername"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className={styles.formGroup}>
                    <h3 className={styles.sectionHeading}>
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                      Work Experience
                    </h3>
                    
                    <div className={styles.formGrid}>
                      <div>
                        <label htmlFor="experience" className={styles.label}>
                          Years of Experience *
                        </label>
                        <Input
                          id="experience"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="5 years"
                          className={styles.input}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="currentCompany" className={styles.label}>
                          Current/Last Company *
                        </label>
                        <Input
                          id="currentCompany"
                          name="currentCompany"
                          required
                          value={formData.currentCompany}
                          onChange={handleChange}
                          placeholder="ABC Corp"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.formGrid}>
                      <div>
                        <label htmlFor="currentRole" className={styles.label}>
                          Current/Last Role *
                        </label>
                        <Input
                          id="currentRole"
                          name="currentRole"
                          required
                          value={formData.currentRole}
                          onChange={handleChange}
                          placeholder="Senior Developer"
                          className={styles.input}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="noticePeriod" className={styles.label}>
                          Notice Period *
                        </label>
                        <select
                          id="noticePeriod"
                          name="noticePeriod"
                          required
                          value={formData.noticePeriod}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                        >
                          <option value="">Select notice period</option>
                          <option value="immediate">Immediate</option>
                          <option value="15days">15 Days</option>
                          <option value="1month">1 Month</option>
                          <option value="2months">2 Months</option>
                          <option value="3months">3 Months</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="expectedSalary" className={styles.label}>
                        Expected Salary (Annual) *
                      </label>
                      <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        required
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        placeholder="₹15,00,000"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className={styles.formGroup}>
                    <h3 className={styles.sectionHeading}>
                      <FileText className="w-5 h-5 text-indigo-400" />
                      Resume & Documents
                    </h3>
                    
                    <div>
                      <label htmlFor="resume" className={styles.label}>
                        Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                      </label>
                      <div className="relative">
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="bg-slate-900/50 border-slate-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-600 file:text-white file:cursor-pointer hover:file:bg-indigo-700"
                        />
                        <Upload className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {resume && (
                        <p className="mt-2 text-sm text-green-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          {resume.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className={styles.formGroup}>
                    <h3 className={styles.sectionHeading}>
                      <Mail className="w-5 h-5 text-indigo-400" />
                      Additional Information
                    </h3>
                    
                    <div>
                      <label htmlFor="coverLetter" className={styles.label}>
                        Cover Letter
                      </label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder="Tell us about yourself and why you're interested in this position..."
                        rows={6}
                        className={styles.input}
                      />
                    </div>

                    <div>
                      <label htmlFor="whyJoin" className={styles.label}>
                        Why do you want to join SSR Fintech? *
                      </label>
                      <Textarea
                        id="whyJoin"
                        name="whyJoin"
                        required
                        value={formData.whyJoin}
                        onChange={handleChange}
                        placeholder="Share your motivation for joining our team..."
                        rows={4}
                        className={styles.input}
                      />
                    </div>

                    <div>
                      <label htmlFor="availability" className={styles.label}>
                        When can you start? *
                      </label>
                      <Input
                        id="availability"
                        name="availability"
                        type="date"
                        required
                        value={formData.availability}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className={styles.submitSection}>
                    <Button
                      type="submit"
                      size="lg"
                      className={styles.submitButton}
                    >
                      Submit Application
                    </Button>
                    <p className={styles.disclaimerText}>
                      By submitting this application, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
}
