import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Saul Goodman",
    title: "Founder, FinTech Startup",
    avatar: "/testimonials-1.png",
    rating: 5,
    text: 'HireX helped us double our team size while maintaining culture and quality.'
  },
  {
    name: "Sara Wilsson",
    title: "HR Head, Healthcare Group",
    avatar: "/testimonials-2.jpg",
    rating: 5,
    text: `Their policy drafting and HRMS rollout were spot on.`,
  },
  // {
  //   name: "Jena Karlis",
  //   title: "Store Owner",
  //   avatar: "/testimonials-3.jpg",
  //   rating: 5,
  //   text: `Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.`,
  // },
  // {
  //   name: "Matt Brandon",
  //   title: "Freelancer",
  //   avatar: "/testimonials-4.jpg",
  //   rating: 4,
  //   text: `Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.`,
  // },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-3 rounded"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-white shadow"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Star key={i} fill="currentColor" className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="relative text-gray-600 italic text-sm">
                <Quote className="absolute left-0 -top-2 w-5 h-5 text-blue-400" />
                <p className="pl-6">{t.text}</p>
                <Quote className="w-5 h-5 text-blue-400 float-right mt-2" />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
