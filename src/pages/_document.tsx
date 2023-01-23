/* eslint-disable no-useless-escape */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

const SITE_NAME = 'INCOURSE_E-COMMERCE';
const SITE_TITLE = 'INCOURSE_E-COMMERCE';
const SITE_DESCRIPTION = '피부개선의 대명사 인코스런 E-커머스';
const SITE_IMAGE = '/images/Logo.png';

const GOOGLE_ANALYTICS_ID = '인코스런 화장품';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  redirectIEtoEdge() {
    return {
      __html: `
      if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function() {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1);
      }`,
    };
  }

  setGoogleAnalytics() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}');
      `,
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* SEO */}
          <link rel="apple-touch-icon" href="/icons/120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="canonical" href="https://www.toktokhan.dev/" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
