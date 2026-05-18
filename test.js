const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');
  await page.waitForSelector('.card-porto .card');
  
  const jarCard = await page.evaluateHandle(() => {
     return Array.from(document.querySelectorAll('.card-porto .card')).find(el => el.innerText.includes('Jogja Airport Resto'));
  });
  
  if (jarCard) {
    await jarCard.click();
    // Wait for modal to open
    await new Promise(r => setTimeout(r, 1000));
    
    const modalHtml = await page.evaluate(() => {
      const modal = document.querySelector('.modal.show');
      return modal ? modal.innerHTML : 'Modal not found';
    });
    console.log('Modal HTML:', modalHtml.substring(0, 500) + '...');
    
    const isArticleVisible = await page.evaluate(() => {
      const article = document.querySelector('article');
      if (!article) return 'No article tag';
      const style = window.getComputedStyle(article);
      return {
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        height: style.height
      };
    });
    console.log('Article styles:', isArticleVisible);
  } else {
    console.log('Card not found');
  }
  await browser.close();
})();
