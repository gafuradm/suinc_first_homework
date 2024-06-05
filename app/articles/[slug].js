// articles/page.js
import fs from 'fs/promises';

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const data = await fs.readFile('/Users/aleighdinara/Developer/SUINC/my-app/app/articles/posts.json', 'utf-8');
    const articles = JSON.parse(data);
    const article = articles.find(article => article.slug === slug);

    if (!article) {
      res.status(404).json({ message: 'Article not found' });
      return;
    }

    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
