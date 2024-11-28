const express = require('express');
const path = require('path');
const {writeFile} = require('node:fs/promises');
const textToSpeech = require('@google-cloud/text-to-speech');

const app = express();
const client = new textToSpeech.TextToSpeechClient();

app.use(express.json());

app.use('/audio', express.static(path.join(__dirname, 'audio')));

app.post('/synthesize', async (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid text parameter' });
  }

  try {
    const request = {
      input: { text },
      voice: { languageCode: 'pt-BR', name : "pt-BR-Wavenet-C", ssmlGender: 'FEMALE'},
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);

    const fileName = `output-${Date.now()}.mp3`;
    const filePath = path.join(__dirname, 'audio', fileName);

    await writeFile(filePath, response.audioContent, 'binary');

    console.log(`Audio content written to file: ${filePath}`);
    
    res.status(200).json({
      message: 'Audio syntheAsized successfully',
      fileUrl: `${req.protocol}://${req.get('host')}/audio/${fileName}`,
    });
  } catch (error) {
    console.error('Error synthesizing speech:', error);
    res.status(500).json({ error: 'Failed to synthesize speech' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
