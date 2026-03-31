import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Download, FileText } from "lucide-react";

const CatalogueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-gold mb-4 inline-block">Catalogue</span>
          <h2 className="section-title mb-4">Download Our Catalogue</h2>
          <p className="section-subtitle mx-auto">
            Browse our complete collection of kitchen designs, materials, and finishes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="card-hover rounded-2xl bg-card border border-border overflow-hidden">
            <div className="wood-gradient p-8 flex items-center justify-center">
              <div className="w-24 h-32 bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 flex items-center justify-center">
                <FileText className="w-12 h-12" style={{ color: "hsl(43, 80%, 55%)" }} />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Rajendra Traders Catalogue 2025
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Complete product catalogue with designs, pricing & specifications
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/917869543555?text=Hello!%20Please%20share%20the%20product%20catalogue."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4" />
                  View Catalogue
                </a>
                <a
                  href="https://wa.me/917869543555?text=Hello!%20I'd%20like%20to%20download%20the%20product%20catalogue."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogueSection;
