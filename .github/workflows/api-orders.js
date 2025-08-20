let orders = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const orderNumber = 'CM' + Date.now();
    const order = {
      ...req.body,
      id: Math.random().toString(36),
      orderNumber,
      createdAt: new Date()
    };
    orders.push(order);
    return res.status(201).json(order);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
