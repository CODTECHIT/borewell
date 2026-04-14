import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919042432061"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] rounded-full shadow-lg hover:shadow-xl transition-shadow group"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="w-14 h-14 flex items-center justify-center">
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.742 3.068 9.372L1.06 31.44l6.304-2.012c2.51 1.672 5.504 2.572 8.64 2.572C24.826 32 32 24.824 32 16.004 32 7.176 24.826 0 16.004 0zm9.43 22.616c-.396 1.116-2.308 2.132-3.188 2.216-.8.076-1.816.108-2.932-.184a26.708 26.708 0 01-2.656-1.02c-4.668-2.02-7.716-6.752-7.948-7.068-.232-.316-1.892-2.52-1.892-4.808 0-2.288 1.196-3.412 1.62-3.876.424-.464.924-.58 1.232-.58.308 0 .616.004.884.016.284.012.664-.108.94.716.308.888 1.04 2.54 1.132 2.724.092.184.152.4.032.644-.12.248-.18.4-.356.616-.176.216-.372.484-.532.648-.176.18-.36.376-.156.736.204.36.912 1.504 1.96 2.436 1.344 1.196 2.48 1.568 2.832 1.74.352.176.556.148.76-.088.204-.236.876-1.02 1.108-1.372.232-.352.464-.292.78-.176.316.116 2.004.948 2.348 1.12.344.176.572.26.656.4.084.14.084.808-.312 1.584z" />
      </svg>
    </div>
    <span className="hidden sm:block pr-5 text-white font-heading text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity max-w-0 group-hover:max-w-[120px] overflow-hidden whitespace-nowrap">
      Chat with us
    </span>
  </motion.a>
);

export default WhatsAppButton;
