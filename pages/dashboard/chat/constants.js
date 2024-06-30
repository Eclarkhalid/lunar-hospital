const z = require('zod');

const formSchema = z.object({
  prompt: z.string().min(1, 'Prompt is required'),
});

module.exports = {
  formSchema,
};
