const features = [
  {
    title: "Corporis voluptates",
    description:
      "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    icon: "🎖️",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Explicabo consectetur",
    description:
      "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore",
    icon: "✅",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Ullamco laboris",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    icon: "🌅",
    bg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Labore consequatur",
    description:
      "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    icon: "🛡️",
    bg: "bg-red-50",
    iconColor: "text-red-500",
  },
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 ${feature.bg} shadow-sm`}
          >
            <div className={`text-3xl ${feature.iconColor}`}>{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
