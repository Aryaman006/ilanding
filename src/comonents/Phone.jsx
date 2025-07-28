import {
  Monitor,
  Code2,
  PenLine,
  Smartphone,
  Eye,
  Globe,
} from "lucide-react";

const featuresLeft = [
  {
    icon: <Monitor className="w-6 h-6 text-blue-600" />,
    title: "Use On Any Device",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetur lacinia.",
  },
  {
    icon: <PenLine className="w-6 h-6 text-blue-600" />,
    title: "Feather Icons",
    desc: "Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.",
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    title: "Retina Ready",
    desc: "Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.",
  },
];

const featuresRight = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: "W3c Valid Code",
    desc: "Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: "Fully Responsive",
    desc: "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Browser Compatibility",
    desc: "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.",
  },
];

export default function DeviceFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Features */}
        <div className="space-y-10 max-w-md">
          {featuresLeft.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">{f.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {f.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Phone Image */}
        <div className="w-[300px] lg:w-[400px]">
          <img
            src="/phone.png"
            alt="App Preview"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-10 max-w-md">
          {featuresRight.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">{f.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {f.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
