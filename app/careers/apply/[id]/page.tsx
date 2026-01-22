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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-8">The job position you're looking for doesn't exist.</p>
            <Link href="/careers">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Application Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for applying for the <span className="text-indigo-400">{job.title}</span> position.
              We'll review your application and get back to you soon.
            </p>
            <p className="text-gray-400">Redirecting to careers page...</p>
          </motion.div>
        </div>
      </GradientWrapper>
    );
  }

  return (
    <GradientWrapper className="pt-20">
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers">
            <Button variant="outline" className="group mb-6">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Careers
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{job.title}</h1>
                <p className="text-gray-400">{job.department} • {job.location} • {job.type}</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg">{job.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Application Form</CardTitle>
                <p className="text-gray-400">Please fill out all required fields marked with *</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-indigo-400" />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
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
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
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
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-600 mb-2">
                          Current Location *
                        </label>
                        <Input
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Mumbai, India"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Links */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-indigo-400" />
                      Professional Links
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-600 mb-2">
                          LinkedIn Profile
                        </label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-gray-600 mb-2">
                          Portfolio Website
                        </label>
                        <Input
                          id="portfolio"
                          name="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={handleChange}
                          placeholder="https://yourportfolio.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="github" className="block text-sm font-medium text-gray-600 mb-2">
                        GitHub Profile
                      </label>
                      <Input
                        id="github"
                        name="github"
                        type="url"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="https://github.com/yourusername"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                      Work Experience
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-600 mb-2">
                          Years of Experience *
                        </label>
                        <Input
                          id="experience"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="5 years"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-600 mb-2">
                          Current/Last Company *
                        </label>
                        <Input
                          id="currentCompany"
                          name="currentCompany"
                          required
                          value={formData.currentCompany}
                          onChange={handleChange}
                          placeholder="ABC Corp"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentRole" className="block text-sm font-medium text-gray-600 mb-2">
                          Current/Last Role *
                        </label>
                        <Input
                          id="currentRole"
                          name="currentRole"
                          required
                          value={formData.currentRole}
                          onChange={handleChange}
                          placeholder="Senior Developer"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-600 mb-2">
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
                      <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-600 mb-2">
                        Expected Salary (Annual) *
                      </label>
                      <Input
                        id="expectedSalary"
                        name="expectedSalary"
                        required
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        placeholder="₹15,00,000"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      Resume & Documents
                    </h3>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-600 mb-2">
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
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Mail className="w-5 h-5 text-indigo-400" />
                      Additional Information
                    </h3>
                    
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-600 mb-2">
                        Cover Letter
                      </label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder="Tell us about yourself and why you're interested in this position..."
                        rows={6}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-600 mb-2">
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
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-600 mb-2">
                        When can you start? *
                      </label>
                      <Input
                        id="availability"
                        name="availability"
                        type="date"
                        required
                        value={formData.availability}
                        onChange={handleChange}
                        className="bg-slate-900/50 border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-slate-700">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12"
                    >
                      Submit Application
                    </Button>
                    <p className="mt-4 text-sm text-gray-400">
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
