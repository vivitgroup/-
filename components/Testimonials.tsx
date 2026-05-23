const reviews = [
  {
    name: "فهد العتيبي",
    role: "مصمم داخلي",
    text: "أقمشة بن صديق غيرت معايير التصميم الداخلي في مشاريعي. الجودة لا مثيل لها والتنوع يلهم الإبداع.",
  },
  {
    name: "نورة الشمري",
    role: "صاحبة منزل",
    text: "من أفخم الأقمشة اللي جربتها. لمسة الفخامة واضحة في كل قطعة. أنصح الجميع بتجربة بن صديق.",
  },
  {
    name: "خالد الدوسري",
    role: "منجّد محترف",
    text: "أتعامل مع بن صديق من أكثر من ١٥ سنة. دائماً يقدمون الأفضل في عالم الأقمشة بتشكيلة لا تُضاهى.",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-10 lg:py-14 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 lg:mb-10">
          <span className="text-brand font-bold text-[11px] md:text-xs block mb-3 tracking-widest uppercase">
            آراء عملائنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary">
            ماذا يقولون عنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl lg:rounded-3xl p-7 lg:p-9 border border-black/8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="text-brand/15 text-6xl lg:text-7xl font-serif leading-none mb-4 group-hover:text-brand/25 transition-colors">
                &ldquo;
              </div>
              <p className="text-secondary/70 text-sm lg:text-base leading-[1.9] font-medium mb-8">
                {r.text}
              </p>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <div className="flex items-center justify-between pt-5 border-t border-black/8">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-secondary font-bold text-sm">{r.name}</h4>
                    <p className="text-secondary/40 text-xs">{r.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
