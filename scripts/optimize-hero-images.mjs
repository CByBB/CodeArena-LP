import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");

/**
 * Upscale small masters and write high-quality WebP + PNG for the hero.
 * Prefer dropping a true HD master into public/ when available.
 */
async function prepare(srcName, webpName, targetWidth) {
  const input = path.join(publicDir, srcName);
  const webpOut = path.join(publicDir, webpName);
  const pngTmp = path.join(publicDir, `${srcName}.hq.tmp.png`);

  const pipeline = sharp(input)
    .resize({
      width: targetWidth,
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.9, m1: 0.8, m2: 0.4 });

  await pipeline.clone().webp({ quality: 92, effort: 6 }).toFile(webpOut);
  await pipeline.clone().png({ compressionLevel: 8 }).toFile(pngTmp);
  fs.renameSync(pngTmp, input);

  const meta = await sharp(webpOut).metadata();
  console.log(
    `${srcName} → ${webpName}: ${meta.width}x${meta.height}, ${(fs.statSync(webpOut).size / 1024).toFixed(1)} KiB`,
  );
}

await prepare("top-landscape.png", "top-landscape.webp", 1920);
await prepare("top.png", "top.webp", 1280);
console.log("Done. For best results, replace PNGs with true HD masters (≥1920px wide) and re-run.");
