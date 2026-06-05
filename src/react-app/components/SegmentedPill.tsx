import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type SegmentedPillProps<T extends string> = {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    labels?: Partial<Record<T, string>>;
    syncWithUrl?: boolean;
    paramName?: string;
};

export default function SegmentedPill<T extends string>({
    options,
    value,
    onChange,
    labels,
}: SegmentedPillProps<T>) {
    const containerRef = useRef<HTMLDivElement>(null);

    const activeIndex = options.indexOf(value);

    // keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!containerRef.current?.contains(document.activeElement)) return;

            if (e.key === "ArrowRight") {
                e.preventDefault();
                const next = options[Math.min(options.length - 1, activeIndex + 1)];
                if (next) onChange(next);
            }

            if (e.key === "ArrowLeft") {
                e.preventDefault();
                const prev = options[Math.max(0, activeIndex - 1)];
                if (prev) onChange(prev);
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [activeIndex, options, onChange]);

    
    return (
        <div
            ref={containerRef}
            className="inline-flex rounded-full border border-stone-200 bg-white p-1"
        >
            {options.map((opt) => {
                const isActive = opt === value;

                return (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className="relative rounded-full px-4 py-2 text-sm transition focus:outline-none"
                    >
                        {/* animated pill */}
                        {isActive && (
                            <motion.div
                                layoutId="segmented-pill"
                                className="absolute inset-0 rounded-full bg-[#d8401c]"
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 35,
                                }}
                            />
                        )}

                        <span
                            className={`relative z-10 transition-colors ${isActive ? "text-white" : "text-stone-600"
                                }`}
                        >
                            {labels?.[opt] ?? opt}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}