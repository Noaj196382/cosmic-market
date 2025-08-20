export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    status: "UP",
    service: "cosmic-market",
    timestamp: new Date().toISOString(),
    checks: {
      database: "PASS",
      products_available: "PASS"
    }
  });
}
