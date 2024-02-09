import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    try {
        //Find the absolute path of the data directory
        const jsonDirectory = path.join(process.cwd(), 'data');
        //Read the json data file
        const fileContents = await fs.readFile(
            jsonDirectory + '/hostEvents.json',
            'utf8'
        );
        //Return the content of the data file in json format
        res.status(200).json(fileContents);
    } catch (error) {
        // Sends error to the client side
        res.status(500).send('Internal Server Error.');
    }
}
