import React from "react";
import { extractCritical } from "emotion-server";
import { renderToString } from "react-dom/server";

// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
export default {
  // siteRoot: "http://www.anatamassage.com/",
  siteRoot: "http://www.tobygu.com/anata-react-static/",
  paths: {
    src: "src", // The source directory. Must include an index.js entry file.
    dist: "docs", // The production output directory.
    devDist: "dist", // The development scratch directory.
    public: "public" // The public directory (files copied to dist during build)
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      // const script1 = "window.child_process = require('child_process')";
      // const script2 =
      //   "window.lazySizesConfig = window.lazySizesConfig || {}; window.lazySizesConfig.loadMode = 1"
      let extractedComp = extractCritical(renderToString(children));

      return (
        <Html lang="en-us">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Anata Massage</title>
            {renderMeta.styleTags}
            {/* <script dangerouslySetInnerHTML={{ __html: script1 }} /> */}
            {/* <script dangerouslySetInnerHTML={{ __html: script2 }} /> */}
            <style type="text/css">{extractedComp.css}</style>
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
