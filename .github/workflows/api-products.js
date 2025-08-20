export default function handler(req, res) {
  const products = [
    {
      id: "netflix-lifetime",
      name: "Netflix Lifetime",
      description: "Premium Netflix account with lifetime access",
      price: "1.00",
      currency: "USD",
      category: "streaming",
      icon: "fas fa-play-circle"
    },
    {
      id: "nitro-boost-1year",
      name: "1 Year Nitro Boost",
      description: "Discord Nitro Boost subscription for 1 year",
      price: "20.00",
      currency: "EUR",
      category: "nitro",
      icon: "fas fa-crown"
    },
    {
      id: "premium-deco-18",
      name: "Premium Decoration Set (€18)",
      description: "Any €18 decoration set for a discounted price",
      price: "8.00",
      currency: "EUR",
      category: "decorations",
      icon: "fas fa-fire"
    }
  ];

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(products);
}
