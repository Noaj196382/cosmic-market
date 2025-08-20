let orders = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const orderNumber = req.query.orderNumber;
  const order = orders.find(o => o.orderNumber === orderNumber);
  
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }
  
  res.json(order);
}
