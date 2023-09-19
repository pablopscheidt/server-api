import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideosRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify();

const port = Number(process.env.PORT ?? 3000);
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideosRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)
  
app.listen({
    host: host, 
    port: port
}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})