import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import kitchenL from "@/assets/kitchen-l-shaped.jpg";
import kitchenU from "@/assets/kitchen-u-shaped.jpg";
import kitchenParallel from "@/assets/kitchen-parallel.jpg";
import kitchenStraight from "@/assets/kitchen-straight.jpg";
import kitchenIsland from "@/assets/kitchen-island.jpg";

const kitchenTypes = [
  { image: kitchenL, title: "L-Shaped Kitchen", desc: "Best for corner spaces with efficient workflow" },
  { image: kitchenU, title: "U-Shaped Kitchen", desc: "Maximum storage and countertop space" },
  { image: kitchenParallel, title: "Parallel Kitchen", desc: "Efficient workflow for medium-sized spaces" },
  { image: kitchenStraight, title: "Straight Kitchen", desc: "Perfect for compact and small spaces" },
  { image: kitchenIsland, title: "Island Kitchen", desc: "Premium & spacious for open-plan homes" },
];

const KitchenTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kitchen-types" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-gold mb-4 inline-block">Kitchen Layouts</span>
          <h2 className="section-title mb-4">Types of Modular Kitchen</h2>
          <p className="section-subtitle mx-auto">
            Choose the perfect layout that fits your space and lifestyle
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitchenTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover rounded-2xl overflow-hidden bg-card border border-border group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={type.image}
                  alt={type.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{type.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{type.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenTypesSection;
