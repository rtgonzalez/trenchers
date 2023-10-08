import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const file = path.join(process.cwd(), 'data', 'form.json');
  switch (req.method) {
    case 'GET':
      fs.readFile(file, (err, data) => {
        if (err) {
          console.error(err);
        }
        const content = JSON.parse(data);
        return res.json(content);
      });
      break;
    case 'POST':
      const { body } = req;
      const content = JSON.stringify(body);
      fs.writeFile(file, content, (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
      return res.json(body);
      break;
    default:
      res.status(405).end(); // Method not allowed
      break;
  }
}
