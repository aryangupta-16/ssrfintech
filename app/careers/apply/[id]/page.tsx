"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { jobs } from "@/data/jobs";
import {
  ArrowLeft,
  CheckCircle2,
  User,
  FileText,
  Mail,
} from "lucide-react";
import Link from "next/link";
import styles from "./apply.module.css";

export default function JobApplicationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const job = jobs.find((j) => j.id === id);

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare application data
      const applicationData = {
        jobId: job!.id,
        jobTitle: job!.title,
        fullName: formData.fullName,
        email: formData.email,
        linkedIn: formData.linkedIn || undefined,
        portfolio: formData.portfolio || undefined,
        coverLetter: formData.coverLetter,
        // Note: Resume file upload would need separate handling (e.g., upload to cloud storage)
        // For now, we'll just note that a resume was provided
        resumeUrl: formData.resume ? `Resume: ${formData.resume.name}` : undefined,
      };

      // Submit to API
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit application');
      }

      // Show success message
      setShowSuccess(true);
      setTimeout(() => router.push("/careers"), 3000);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to submit application. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className={styles.page}>
        <Card className={styles.notFoundCard}>
          <h1>Job not found</h1>
          <p>This role is no longer available.</p>
          <Link href="/careers">
            <Button>Back to careers</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className={styles.page}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.successCard}
        >
          <CheckCircle2 className={styles.successIcon} />
          <h1>Application submitted</h1>
          <p>
            Thanks for applying for <strong>{job.title}</strong>.  
            Our team will reach out if your profile matches.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/careers" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to careers
        </Link>

        {/* Job Header */}
        <section className={styles.jobHeader}>
          <div className={styles.jobTitleRow}>
            {/* <Briefcase /> */}
            <div>
              <h1>{job.title}</h1>
              <span>
                {job.department} · {job.location} · {job.type}
              </span>
            </div>
          </div>
          <p>{job.description}</p>
        </section>

        {/* Application Form */}
        <Card className={styles.formCard}>
          <CardHeader>
            <CardTitle>Apply for this role</CardTitle>
            <p className={styles.subtitle}>
              Fill in your details below. All fields marked * are required.
            </p>
          </CardHeader>

          <CardContent>
            {error && (
              <div className={styles.errorMessage}>
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <FormSection icon={<User />} title="Personal details">
                <Input
                  className={styles.input}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name *"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  className={styles.input}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address *"
                  required
                  disabled={isSubmitting}
                />
              </FormSection>

              <FormSection icon={<FileText />} title="Professional links">
                <Input
                  className={styles.input}
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  placeholder="LinkedIn profile"
                  disabled={isSubmitting}
                />
                <Input
                  className={styles.input}
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="Portfolio website"
                  disabled={isSubmitting}
                />
              </FormSection>

              <FormSection icon={<FileText />} title="Resume">
                <Input
                  className={styles.input}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  disabled={isSubmitting}
                />
                {formData.resume && (
                  <p className={styles.fileName}>{formData.resume.name}</p>
                )}
              </FormSection>

              <FormSection icon={<Mail />} title="Why SSR Fintech?">
                <Textarea
                  className={styles.textarea}
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us why you want to join SSR Fintech and what makes you a great fit for this role..."
                  required
                  disabled={isSubmitting}
                />
              </FormSection>

              <Button
                size="lg"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit application'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function FormSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.formSection}>
      <h3>
        {icon}
        {title}
      </h3>
      <div className={styles.formGrid}>{children}</div>
    </section>
  );
}
