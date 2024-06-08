import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const thanosArray = [];

    contacts.forEach((contact) => {
      if (Math.random() >= 0.5) {
        thanosArray.push(contact);
      }
    });

    await fs.writeFile(PATH_DB, JSON.stringify(thanosArray));
    console.log('Thanos delete some element in your array');
  } catch (error) {
    console.log(`Thanos misclick. Error: ${error}`);
  }
};

await thanos();
