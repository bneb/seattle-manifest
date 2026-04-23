import { chromium } from "playwright-core";
import { presentation } from "./src/content";
import { join } from "path";
import { mkdirSync } from "fs";

const screenshotsDir = join(process.cwd(), "screenshots");
mkdirSync(screenshotsDir, { recursive: true });

async function run() {
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  const url = "http://localhost:51694";
  console.log(`Navigating to ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });

  // Add some styles to hide scrollbars for cleaner screenshots
  await page.addStyleTag({
    content: `
      ::-webkit-scrollbar { display: none !important; }
      body { overflow: hidden !important; }
      section { opacity: 1 !important; transform: none !important; transition: none !important; }
    `
  });

  for (let i = 0; i < presentation.length; i++) {
    const section = presentation[i];
    console.log(`Taking screenshot of slide ${i + 1}: ${section.id}`);
    
    // Scroll to the section and wait for it to be visible
    const selector = `#${section.id}`;
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) {
        // Force all other sections to be hidden/inactive
        document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
        el.classList.add('active');
        el.scrollIntoView();
      }
    }, section.id);

    // Wait a bit more for any lazy-loaded content or matrix effects
    await new Promise(r => setTimeout(r, 2000));

    await page.screenshot({
      path: join(screenshotsDir, `${String(i + 1).padStart(2, '0')}-${section.id}.png`),
      fullPage: false
    });
  }

  await browser.close();
  console.log("Screenshots captured in ./screenshots directory.");
}

run().catch(console.error);
