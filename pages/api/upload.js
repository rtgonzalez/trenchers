import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false // Disables body parser since we're handling forms
    }
};

export default async function handler(req, res) {
    const form = new IncomingForm();
    form.uploadDir = './public/assets/images/events';
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: 'Error parsing the files' });
            return;
        }

        const file = files.file[0];
        const originalExtension = path.extname(file.originalFilename);
        const newFilePath = `${form.uploadDir}/${file.newFilename}${originalExtension}`;

        fs.rename(file.filepath, newFilePath, (err) => {
            if (err) {
                res.status(500).json({ error: 'Error saving the file' });
                return;
            }

            res.status(200).json({
                message: 'File uploaded successfully',
                path: newFilePath
            });
        });
    });
}
