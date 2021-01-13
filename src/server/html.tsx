import { Config } from "./config";
import { Stats } from "./types";

/**
 * This HTML file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const html = ({ stats, content, config }: { stats: Stats; content: string; config: Config }): string => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="${config.app.THEME_COLOR}" />
      <title>${config.app.TITLE}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="${config.app.PUBLIC_URL}/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="${config.app.PUBLIC_URL}/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="${config.app.PUBLIC_URL}/favicon-16x16.png">
      <link rel="manifest" href="${config.app.PUBLIC_URL}/manifest.json">
      <meta name="msapplication-TileColor" content="#da532c">
      <meta name="theme-color" content="#ffffff">
      <link rel="stylesheet" href="${config.app.DIST_URL}/${stats.css}" />
      <script>
        window.__CONFIG__ = ${JSON.stringify(config)};
      </script>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="${config.app.DIST_URL}/${stats.main}"></script>
    </body>
  </html>`;

export default html;
