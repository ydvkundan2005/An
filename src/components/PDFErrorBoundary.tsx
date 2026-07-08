"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "motion/react";
import { HiExternalLink, HiDownload } from "react-icons/hi";

interface Props {
  children: ReactNode;
  pdfUrl: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class PDFErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("PDF Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-full p-8 text-center relative">
          <motion.div
            className="space-y-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-destructive text-xl font-semibold">
              PDF Viewer Error
            </div>

            <p className="text-primary-foreground/70 text-lg max-w-md">
              An unexpected error occurred while loading the PDF viewer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={this.props.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 rounded-xl overflow-hidden transition-colors duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
                  boxShadow: "0 8px 32px hsl(var(--primary) / 0.3)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <div className="relative flex items-center gap-2 text-white font-medium">
                  <HiExternalLink className="w-5 h-5" />
                  Open PDF in New Tab
                </div>
              </motion.a>

              <motion.a
                href={this.props.pdfUrl}
                download="aarab_nishchal_resume.pdf"
                className="group relative px-6 py-3 rounded-xl overflow-hidden transition-colors duration-200 border border-secondary/30"
                style={{
                  background: "hsl(var(--card) / 0.5)",
                  backdropFilter: "blur(8px)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <div className="flex items-center gap-2 text-primary-foreground font-medium">
                  <HiDownload className="w-5 h-5" />
                  Download PDF
                </div>
              </motion.a>
            </div>

            <motion.button
              onClick={() => this.setState({ hasError: false })}
              className="mt-6 px-6 py-2 rounded-lg transition-colors duration-200 border border-accent/30 bg-accent/10 hover:bg-accent/20 text-accent-foreground"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Try Again
            </motion.button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
