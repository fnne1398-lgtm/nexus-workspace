```json
{
  "name": "server.js",
  "content": "
const express = require('express');
const app = express();
const port = 3000;

// تعريف متغيرات البيئة
const ENV_API_KEY = process.env.API_KEY;

// إعداد تقنية إعادة التوجيه الآمنة
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// تعريف مسار الصفحة الرئيسية
app.get('/', (req, res) => {
  try {
    res.sendFile(__dirname + '/index.html');
  } catch (error) {
    console.error('خطأ في تحميل الصفحة الرئيسية:', error);
    res.status(500).send('خطأ في تحميل الصفحة الرئيسية');
  }
});

// تعريف مسار الصفحة عن الموقع
app.get('/about', (req, res) => {
  try {
    res.send('هذا هو موقع عايزك تساعدني اعمل نوقع تقدر؟');
  } catch (error) {
    console.error('خطأ في تحميل صفحة عن الموقع:', error);
    res.status(500).send('خطأ في تحميل صفحة عن الموقع');
  }
});

// تعريف مسار طلبات API
app.get('/api/data', (req, res) => {
  try {
    // إعداد بيانات الرد
    const data = {
      message: 'هذا هو رد من الخادم',
      apiKey: ENV_API_KEY
    };

    // إرسال الرد
    res.json(data);
  } catch (error) {
    console.error('خطأ في إرسال بيانات API:', error);
    res.status(500).send('خطأ في إرسال بيانات API');
  }
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`الخادم يعمل على المنفذ ${port}`);
});
",
  "type": "JavaScript",
  "summary": "ملف خادم الموقع الذي يستخدم تقنية Node.js وExpress لتشغيل الخادم وتقديم الصفحات والبيانات للمستخدمين"
}
```