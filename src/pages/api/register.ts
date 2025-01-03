import { addSubscriberToMailchimp } from '../../services/mailchimp';
import { saveToGoogleSheet } from '../../services/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email } = req.body;

  try {
    // Add user to Mailchimp
    await addSubscriberToMailchimp(name, email);

    // Save user to Google Sheets
    await saveToGoogleSheet(name, email);

    return res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error processing registration:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
