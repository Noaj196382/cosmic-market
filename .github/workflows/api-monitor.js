export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send("ONLINE");
}
