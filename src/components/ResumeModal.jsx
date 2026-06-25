import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ResumeModal.module.css";

const RESUME_PATH = "/JulharieMaddin_Resume.docx";

// Bump this every time you replace the resume file in /public.
// Office's online viewer (and browsers) cache by URL, so without a
// changing query string they'll keep serving the old file even after
// you've redeployed the new one.
const RESUME_VERSION = "2026-06-25";

const RESUME_URL_WITH_VERSION = `${RESUME_PATH}?v=${RESUME_VERSION}`;

export default function ResumeModal({ open, onClose }) {
  const [loaded, setLoaded] = useState(false);

  // Lock body scroll while open, close on Escape.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Reset loading state each time the modal is opened.
  useEffect(() => {
    if (open) setLoaded(false);
  }, [open]);

  if (typeof document === "undefined") return null;

  // Build an absolute URL — the Office/Google viewers fetch the file
  // server-side, so a relative path won't resolve for them. This only
  // returns a real public URL once deployed; on localhost it stays
  // non-functional, which is expected (see fallback note in the UI).
  const absoluteResumeUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${RESUME_URL_WITH_VERSION}`
      : RESUME_URL_WITH_VERSION;

  const isLocalhost =
    typeof window !== "undefined" &&
    /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

  const viewerSrc = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    absoluteResumeUrl
  )}`;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            <div className={styles.titleBar}>
              <div className={styles.dots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <p className={styles.titleText}>
                julhariemaddin@portfolio: ~/resume
              </p>
              <div className={styles.titleActions}>
                <a
                  href={RESUME_URL_WITH_VERSION}
                  download
                  className={styles.downloadLink}
                >
                  download
                </a>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={onClose}
                  aria-label="Close resume preview"
                >
                  ×
                </button>
              </div>
            </div>

            <div className={styles.viewerArea}>
              {isLocalhost ? (
                <div className={styles.localNotice}>
                  <p className={styles.localNoticeTitle}>
                    # preview unavailable on localhost
                  </p>
                  <p className={styles.localNoticeBody}>
                    The inline viewer needs a public URL to fetch the file
                    from, so it only works on the deployed site. You can
                    still download it below to check it locally.
                  </p>
                  <a href={RESUME_URL_WITH_VERSION} download className={styles.localDownloadBtn}>
                    download resume.docx
                  </a>
                </div>
              ) : (
                <>
                  {!loaded && (
                    <div className={styles.loadingOverlay}>
                      <span className={styles.spinner} />
                      <p>rendering resume.docx…</p>
                    </div>
                  )}
                  <iframe
                    key={viewerSrc}
                    src={viewerSrc}
                    title="Resume preview"
                    className={styles.iframe}
                    onLoad={() => setLoaded(true)}
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}