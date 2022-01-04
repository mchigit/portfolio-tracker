import puppeteer from 'puppeteer';

export const userLogin = async (
  page: puppeteer.Page,
  username: string,
  password: string
) => {
  await page.goto('https://my.wealthsimple.com/app/login');
  await page.waitForNavigation();
};
