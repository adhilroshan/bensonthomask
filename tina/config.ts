import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
	branch,
	clientId: '53818de1-cab1-4625-a298-0ee64e6f501a', // Get this from tina.io
	token: '89fa0a830fb30f4d19a108ec9c30d1b89ac64f37', // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: 'uploads',
			publicFolder: 'static'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			}
		]
	}
});
