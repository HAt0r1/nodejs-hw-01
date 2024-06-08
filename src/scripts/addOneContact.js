import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact());

    fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
    console.log('Operation success');
  } catch (error) {
    console.log(`Operation failed. Error: ${error}`);
  }
};

await addOneContact();
