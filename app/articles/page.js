import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    const data = await fs.readFile('/Users/aleighdinara/Developer/SUINC/my-app/app/articles/posts.json', 'utf-8');
    const articles = JSON.parse(data);

    const articleList = articles.map(article => (
      `Title: ${article.title}
      Description: ${article.description}
      Author: ${article.author}
      Date: ${article.date}`
    )).join('\n\n');

    const text = `Articles:\n\n${articleList}`;

    return text;
  } catch (error) {
    console.error('Error fetching data:', error);
    return 'Error fetching data';
  }
}