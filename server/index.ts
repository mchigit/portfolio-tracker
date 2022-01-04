import express from 'express';
import puppeteer from 'puppeteer';
import { userLogin } from '../scraper/wealthsimple';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch();
  const newPage = await browser.newPage();
  await userLogin(newPage, 'michael.chi1997@gmail.com', 'google@88');
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
