// og/_image.tsx
import { IncomingMessage, ServerResponse } from "http";
import { createCanvas, loadImage } from "canvas";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  const canvas = createCanvas(1200, 630);
  const context = canvas.getContext("2d");

  // Load the image
  const image = await loadImage("https://chamdom.vercel.app/sky.jpg");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Set the Content-Type to image/png
  res.setHeader("Content-Type", "image/png");

  // Send the image data
  res.end(canvas.toBuffer());
}
