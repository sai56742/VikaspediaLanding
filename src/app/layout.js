
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";


export const metadata = {
  title: "Vikaspedia : Landing Page",
  description: "Vikaspedia | Multilingual | Multimodel | Multisectorial",
};

export default function RootLayout({ children }) {



  





  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="LandingPage" key="title" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="vikaspedia, multilingual, multimodel, multisectorial,
          বিকাশপেডিয়া, विकासपीडिया, વિકાસપીડિયા, ವಿಕಾಸ್ಪೀಡಿಯ, വികാസ്-പീഡിയ, বিকাসপিদিয়া, ବିକାଶପିଡ଼ିଆ, ਵਿਕਾਸਪੀਡੀਆ, விகாஸ்பீடியா, వికాస్పీడియా, وکاس-پیڈیا,
          agriculture, health, education, social welfare, energy, e governance, rural energy, aspirational district, schemes"
        />
        <meta name="description" content="vikaspedia landing page" />
        <title>Vikaspedia : Landing Page</title>
        <link rel="manifest" href="./manifest.json" />

      

        <link
          href="https://static.vikaspedia.in/media/pwa/favicon.ico"
          type="image/x-icon"
          rel="icon"
        />
        <link
          rel="alternate"
          href="https://vikaspedia.in/populer-topics/"
          hrefLang="en"
          title="English"
          description="Vikaspedia is a nationwide multilingual knowledge-sharing platform that provides digital resources for societal development."
        />
        <link
          rel="alternate"
          href="https://as.vikaspedia.in/populer-topics/"
          hrefLang="as"
          title="Assamese"
          description="বিকাশপিডিয়া হৈছে দেশজোৰা বহুভাষিক জ্ঞান বিনিময়ৰ মঞ্চ যিয়ে সমাজৰ উন্নয়নৰ বাবে ডিজিটেল সম্পদ প্ৰদান কৰে।"
        />
        <link
          rel="alternate"
          href="https://bn.vikaspedia.in/populer-topics/"
          hrefLang="bn"
          title="Bengali"
          description="বিকাশপিডিয়া হল একটি দেশব্যাপী বহুভাষিক জ্ঞান-ভাগ করার প্ল্যাটফর্ম যা সামাজিক উন্নয়নের জন্য ডিজিটাল সংস্থান সরবরাহ করে।"
        />
        <link
          rel="alternate"
          href="https://brx.vikaspedia.in/populer-topics/"
          hrefLang="brx"
          title="Bodo"
          description="Vikaspedia is a nationwide multilingual knowledge-sharing platform that provides digital resources for societal development."
        />
        <link
          rel="alternate"
          href="https://doi.vikaspedia.in/populer-topics/"
          hrefLang="doi"
          title="Dogri"
          description="विकासपीडिया इक राष्ट्रव्यापी बहुभाषी ज्ञान साझा करने आह् ला मंच ऐ जेह् ड़ा समाज दे विकास आस्तै डिजिटल संसाधन उपलब्ध करोआंदा ऐ।"
        />
        <link
          rel="alternate"
          href="https://gu.vikaspedia.in/populer-topics/"
          hrefLang="gu"
          title="Gujarati"
          description="વિકાસપીડિયા એ રાષ્ટ્રવ્યાપી બહુભાષી જ્ઞાન-શેરિંગ પ્લેટફોર્મ છે જે સામાજિક વિકાસ માટે ડિજિટલ સંસાધનો પ્રદાન કરે છે."
        />
        <link
          rel="alternate"
          href="https://hi.vikaspedia.in/populer-topics/"
          hrefLang="hi"
          title="Hindi"
          description="विकासपीडिया एक बहुभाषी ज्ञान साझा करने वाला प्लेटफ़ॉर्म है जो सामाजिक विकास के लिए डिजिटल संसाधन प्रदान करता है।"
        />
        <link
          rel="alternate"
          href="https://kn.vikaspedia.in/populer-topics/"
          hrefLang="kn"
          title="Kannada"
          description="ವಿಕಾಸ್‌ಪೀಡಿಯಾ ರಾಷ್ಟ್ರವ್ಯಾಪಿ ಬಹುಭಾಷಾ ಜ್ಞಾನ ಹಂಚಿಕೆ ವೇದಿಕೆಯಾಗಿದ್ದು ಅದು ಸಮಾಜದ ಅಭಿವೃದ್ಧಿಗೆ ಡಿಜಿಟಲ್ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ."
        />
        <link
          rel="alternate"
          href="https://kok.vikaspedia.in/populer-topics/"
          hrefLang="kok"
          title="Konkani"
          description="विकासपीडिया हें देशभरांतलें बहुभाषी गिन्यान वांटपाचें मंच आसा जें समाजाचे उदरगती खातीर डिजिटल साधनां दिता."
        />
        <link
          rel="alternate"
          href="https://ks.vikaspedia.in/populer-topics/"
          hrefLang="ks"
          title="Kashmiri"
          description="Vikaspedia is a nationwide multilingual knowledge-sharing platform that provides digital resources for societal development."
        />
        <link
          rel="alternate"
          href="https://mai.vikaspedia.in/populer-topics/"
          hrefLang="mai"
          title="Maithili"
          description="विकासपीडिया एकटा राष्ट्रव्यापी बहुभाषी ज्ञान साझा करय वाला मंच छै जे समाज के विकास के लेल डिजिटल संसाधन उपलब्ध कराबै छै."
        />
        <link
          rel="alternate"
          href="https://ml.vikaspedia.in/populer-topics/"
          hrefLang="ml"
          title="Malayalam"
          description="വികാസ്-പീഡിയ എന്നത് സാമൂഹിക വികസനത്തിന് ഡിജിറ്റൽ ഉപാധികൾ നൽകുന്ന ഒരു ബഹുഭാഷാ വിജ്ഞാന പങ്കിടൽ പ്ലാറ്റ്‌ഫോമാണ്."
        />
        <link
          rel="alternate"
          href="https://mni.vikaspedia.in/populer-topics/"
          hrefLang="mni"
          title="Manipuri"
          description="Vikaspedia is a nationwide multilingual knowledge-sharing platform that provides digital resources for societal development."
        />
        <link
          rel="alternate"
          href="https://mr.vikaspedia.in/populer-topics/"
          hrefLang="mr"
          title="Marathi"
          description="विकासपीडिया हे बहुभाषिक ज्ञान सामायिकरण व्यासपीठ आहे जे सामाजिक विकासासाठी डिजिटल संसाधने प्रदान करते."
        />
        <link
          rel="alternate"
          href="https://ne.vikaspedia.in/populer-topics/"
          hrefLang="ne"
          title="Nepali"
          description="विकासपिडिया एक राष्ट्रव्यापी बहुभाषिक ज्ञान साझेदारी प्लेटफर्म हो जसले समाजको विकासको लागि डिजिटल स्रोतहरू प्रदान गर्दछ।"
        />
        <link
          rel="alternate"
          href="https://or.vikaspedia.in/populer-topics/"
          hrefLang="or"
          title="Odia"
          description="ବିକାଶପେଡିଆ ହେଉଛି ଏକ ଦେଶବ୍ୟାପୀ ବହୁଭାଷୀ ଜ୍ଞାନ ବଣ୍ଟନ ପ୍ଲାଟଫର୍ମ ଯାହା ସାମାଜିକ ବିକାଶ ପାଇଁ ଡିଜିଟାଲ୍ ଉତ୍ସ ଯୋଗାଇଥାଏ|"
        />
        <link
          rel="alternate"
          href="https://pa.vikaspedia.in/populer-topics/"
          hrefLang="pa"
          title="Punjabi"
          description="ਵਿਕਾਸਪੀਡੀਆ ਇੱਕ ਦੇਸ਼ ਵਿਆਪੀ ਬਹੁ-ਭਾਸ਼ਾਈ ਗਿਆਨ ਸਾਂਝਾ ਕਰਨ ਵਾਲਾ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਸਮਾਜ ਦੇ ਵਿਕਾਸ ਲਈ ਡਿਜੀਟਲ ਸਰੋਤ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।"
        />
        <link
          rel="alternate"
          href="https://sa.vikaspedia.in/populer-topics/"
          hrefLang="sa"
          title="Sanskrit"
          description="विकासपीडिया राष्ट्रव्यापी बहुभाषिकज्ञानसाझेदारीमञ्चः अस्ति यः समाजस्य विकासाय अङ्कीयसंसाधनं प्रदाति।"
        />
        <link
          rel="alternate"
          href="https://sat.vikaspedia.in/populer-topics/"
          hrefLang="sat"
          title="Santali"
          description="Vikaspedia is a nationwide multilingual knowledge-sharing platform that provides digital resources for societal development."
        />
        <link
          rel="alternate"
          href="https://sd.vikaspedia.in/populer-topics/"
          hrefLang="sd"
          title="Sindhi"
          description="विकासपीडया हिक मुल्कु वारे ख़्ली लिसानी इलम जे हिसेदारी वारो प्लेट फ़ार्म आहे जेको समाजी तरिक़ी लाइ डिजीटल वसीला फ़राहमु करे थो."
        />
        <link
          rel="alternate"
          href="https://ta.vikaspedia.in/populer-topics/"
          hrefLang="ta"
          title="Tamil"
          description="விகாஸ்பீடியா சமூக வளர்ச்சிக்கான டிஜிட்டல் வளங்களை வழங்கும் ஒரு பன்மொழி அறிவுப் பகிர்வு தளமாகும்."
        />
        <link
          rel="alternate"
          href="https://te.vikaspedia.in/populer-topics/"
          hrefLang="te"
          title="Telugu"
          description="వికాస్పీడియా అనేది దేశవ్యాప్త బహుభాషా జ్ఞానాన్ని పంచుకునే వేదిక, ఇది సమాజ అభివృద్ధికి డిజిటల్ వనరులను అందిస్తుంది."
        />
        <link
          rel="alternate"
          href="https://ur.vikaspedia.in/populer-topics/"
          hrefLang="ur"
          title="Urdu"
          description="وکاس پیڈیا ایک ملک گیر کثیر لسانی نالج شیئرنگ پلیٹ فارم ہے جو معاشرے کی ترقی کے لیے ڈیجیٹل وسائل مہیا کرتا ہے۔یہ"
        />

        <link
          rel="alternate"
          href="https://vikaspedia.in/populer-topics/"
          hrefLang="x-default"
          title="Default Language"
          description="Vikaspedia is a nationwide multilingual knowledge-sharing platform that provides digital resources for societal development."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Localized Versions of Vikaspedia Page",
            "url": "https://vikaspedia.in/populer-topics/",
            "description": "This page provides links to localized versions of popular topics on Vikaspedia.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vikaspedia.in/populer-topics/{search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "inLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "alternateName": "en",
                "description": "The English version of Vikaspedia's popular topics page."
              },
              {
                "@type": "Language",
                "name": "Assamese",
                "alternateName": "as",
                "description": "ভিকাসপিডিয়াৰ জনপ্ৰিয় বিষয়সমূহৰ অসমীয়া সংস্কৰণ।"
              },
              {
                "@type": "Language",
                "name": "Bengali",
                "alternateName": "bn",
                "description": "ভিকাসপিডিয়ার জনপ্রিয় বিষয়গুলোর বাংলা সংস্করণ।"
              },
              {
                "@type": "Language",
                "name": "Bodo",
                "alternateName": "brx",
                "description": "ভিকাসপিডিয়াৰ প্ৰচলিত বিষয়সমূহৰ বোডো ভাষাৰ সংস্কৰণ।"
              },
              {
                "@type": "Language",
                "name": "Dogri",
                "alternateName": "doi",
                "description": "ਵਿਕਾਸਪੀਡੀਆ ਦੇ ਮਰਜਾਣਾ ਵਿਸ਼ਾਂ ਦਾ ਡੋਗਰੀ ਸੰਸਕਰਣ।"
              },
              {
                "@type": "Language",
                "name": "Gujarati",
                "alternateName": "gu",
                "description": "વિકાસપીડિયાની પ્રમુખ વિષયોનું ગુજરાતી સંસ્કરણ।"
              },
              {
                "@type": "Language",
                "name": "Hindi",
                "alternateName": "hi",
                "description": "विकासपीडिया के लोकप्रिय विषयों का हिंदी संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Kannada",
                "alternateName": "kn",
                "description": "ವಿಕಾಸಪೀಡಿಯಾದ ಜನಪ್ರಿಯ ವಿಷಯಗಳ ಕನ್ನಡ ಸಂಸ್ಕರಣ."
              },
              {
                "@type": "Language",
                "name": "Kashmiri",
                "alternateName": "ks",
                "description": "وچاسپیڈیا کے مشہور موضوعات کا کشمیری ورژن۔"
              },
              {
                "@type": "Language",
                "name": "Konkani",
                "alternateName": "kok",
                "description": "विकासपीडिया च्या प्रसिद्ध विषयांचा कोंकणी संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Maithili",
                "alternateName": "mai",
                "description": "विकासपीडिया के लोकप्रिय विषयों का मैथिली संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Malayalam",
                "alternateName": "ml",
                "description": "വികാസപീഡിയയുടെ ലോകപ്രിയ വിഷയങ്ങളുടെ മലയാളം പതിപ്പ്."
              },
              {
                "@type": "Language",
                "name": "Manipuri",
                "alternateName": "mni",
                "description": "विकासपीडिया के लोकप्रिय विषयों का मणिपुरी संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Marathi",
                "alternateName": "mr",
                "description": "विकासपीडिया च्या प्रसिद्ध विषयांचा मराठी संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Nepali",
                "alternateName": "ne",
                "description": "विकासपीडिया को लोकप्रिय विषयहरूको नेपाली संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Odia",
                "alternateName": "or",
                "description": "ବିକାଶପିଡ଼ିଆର ଜଣପ୍ରିୟ ବିଷୟଗୁଲୋର ଓଡ଼ିଆ ସଂସ୍କରଣ।"
              },
              {
                "@type": "Language",
                "name": "Punjabi",
                "alternateName": "pa",
                "description": "ਵਿਕਾਸਪੀਡੀਆ ਦੇ ਮਰਜਾਣੇ ਵਿਸ਼ਾਂ ਦਾ ਪੰਜਾਬੀ ਸੰਸਕਰਣ।"
              },
              {
                "@type": "Language",
                "name": "Sanskrit",
                "alternateName": "sa",
                "description": "विकासपीडिया स्य प्रसिद्धा विषयानां संस्कृत संस्करणं।"
              },
              {
                "@type": "Language",
                "name": "Santali",
                "alternateName": "sat",
                "description": "विकासपीडिया चां प्रसिद्ध विषयांचां संताली संस्करण।"
              },
              {
                "@type": "Language",
                "name": "Sindhi",
                "alternateName": "sd",
                "description": "Vikaspedia's popular topics page."
              },
              {
                "@type": "Language",
                "name": "Tamil",
                "alternateName": "ta",
                "description": "விகாஸ்பீடியாவின் பிரபலமான பாடங்களின் தமிழ் பதிப்பு."
              },
              {
                "@type": "Language",
                "name": "Telugu",
                "alternateName": "te",
                "description": "వికాస్‌పీడియా యొక్క ప్రముఖ విషయాల తెలుగు పత్రిక."
              },
              {
                "@type": "Language",
                "name": "Urdu",
                "alternateName": "ur",
                "description": "وکاسپیڈیا کے مقبول موضوعات کا اردو ورژن۔"
              }
            ]
          }
          `,
          }}
        />
      </head>
      <body
        style={{
          background: `url("/appstore/vikaspedialogos/LandingPageBg.jpeg") no-repeat center -20px`,
          margin: 0,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
