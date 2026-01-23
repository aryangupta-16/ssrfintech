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
  Briefcase,
  User,
  Linkedin,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => router.push("/careers"), 3000);
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
            <form onSubmit={handleSubmit} className={styles.form}>
              <FormSection icon={<User />} title="Personal details">
                <Input placeholder="Full name *" required />
                <Input type="email" placeholder="Email address *" required />
              </FormSection>

              <FormSection icon={<Linkedin />} title="Professional links">
                <Input placeholder="LinkedIn profile" />
                <Input placeholder="Portfolio website" />
              </FormSection>

              <FormSection icon={<FileText />} title="Resume">
                <Input type="file" required />
              </FormSection>

              <FormSection icon={<Mail />} title="Why SSR Fintech?">
                <Textarea rows={4} required />
              </FormSection>

              <Button size="lg" className={styles.submitButton}>
                Submit application
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
