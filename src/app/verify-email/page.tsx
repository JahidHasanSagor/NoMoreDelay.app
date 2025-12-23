"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Loader2 } from "lucide-react";

const API_BASE_URL = "https://api.nomoredelay.app/api";

type ViewState = "loading" | "success" | "error" | "no-token";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const [viewState, setViewState] = useState<ViewState>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDetails, setErrorDetails] = useState("");

  const closeWindow = () => {
    if (window.opener) {
      window.close();
    }
    // If window.close() doesn't work (browser restrictions), redirect to homepage
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  };

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (data.success) {
        setViewState("success");
      } else {
        setViewState("error");
        setErrorMessage(
          data.message || "Verification failed. The link may have expired."
        );
        if (data.message) {
          setErrorDetails(data.message);
        }
      }
    } catch (error: any) {
      setViewState("error");
      setErrorMessage("Network error. Please check your connection.");
      setErrorDetails(error.message || "An unexpected error occurred");
    }
  };

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      verifyEmail(token);
    } else {
      setViewState("no-token");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-10 md:p-12 text-center"
      >
        {/* Logo */}
        <div className="mb-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            NoMoreDelay
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Your AI Accountability Partner
          </p>
        </div>

        {/* Loading State */}
        {viewState === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <Loader2 className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-spin" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Verifying Email...
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Please wait while we verify your email address.
            </p>
          </motion.div>
        )}

        {/* Success State */}
        {viewState === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Email Verified!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Your email has been successfully verified. You can now log in to
              your account in the NoMoreDelay app.
            </p>
            <Button
              onClick={closeWindow}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
            >
              Close This Page
            </Button>
          </motion.div>
        )}

        {/* Error State */}
        {viewState === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Verification Failed
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {errorMessage}
            </p>
            {errorDetails && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6 text-sm text-yellow-800 dark:text-yellow-200">
                {errorDetails}
              </div>
            )}
            <Button
              onClick={closeWindow}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
            >
              Close This Page
            </Button>
          </motion.div>
        )}

        {/* No Token State */}
        {viewState === "no-token" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Invalid Link
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              This verification link is invalid or incomplete. Please check your
              email for the correct link.
            </p>
            <Button
              onClick={closeWindow}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
            >
              Close This Page
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center p-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-10 md:p-12 text-center"
          >
            <div className="mb-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                NoMoreDelay
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Your AI Accountability Partner
              </p>
            </div>
            <Loader2 className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-spin mt-8" />
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </motion.div>
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}

