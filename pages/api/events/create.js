import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler(req, res) {
    const form = new IncomingForm();
    form.uploadDir = '/assets/images/events';
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: 'Error parsing the files' });
            return;
        }
        if (files && Object.keys(files).length !== 0) {
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
            const event = await prisma.event.create({
                data: {
                    title: fields.title[0],
                    description: fields.description[0],
                    eventDate: new Date(fields.eventDate[0]),
                    showStarts: fields.showStarts[0],
                    showEnds: fields.showEnds[0],
                    ageRequirement: fields.ageRequirement[0] === 'allages',
                    pictureUrl: newFilePath
                }
            });
        }

        // Handle picture upload and get URL
        else {
            const event = await prisma.event.create({
                data: {
                    title: fields.title[0],
                    description: fields.description[0],
                    eventDate: new Date(fields.eventDate[0]),
                    showStarts: fields.showStarts[0],
                    showEnds: fields.showEnds[0],
                    ageRequirement: fields.ageRequirement[0] === 'allages'
                }
            });
        }
    });
}
