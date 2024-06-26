var word = document.getElementById("word");
var btn = document.getElementById("btn");
var h1 = document.getElementById("h1");
var pra = document.getElementById("pra");

var quotes = [
    {
        qutes: '<div class="quotes" id="quotes">“Earth turns into heaven if a person is close to God in it.”</div>',
        author: '<div class="author">ahmed bahgat</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“Everyone cries for his past and yearns for it, so why don’t we think about the present before it becomes the past?</div>',
        author: '<div class="author">ali el-tantawy</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“Perseverance trumps intelligence, patience trumps luck, and the result always matters!”</div>',
        author: '<div class="author">anes masor</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“When our morals are corrected, and its purity and purity are restored to our Arab essence, and its filth is washed away, we will regain Palestine and restore the kingdom of our ancestors.”</div>',
        author: '<div class="author">ali el-tantawy</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“Isolation: a small corner in which one stands in front of one’s mind, where confrontation is inevitable.”</div>',
        author: '<div class="author">Saud Al Sanousi</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“Be the change that you wish to see in the world.”</div>',
        author: '<div class="author" id="author">Mahatma Gandhi</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“If you tell the truth, you dont have to remember anything.”</div>',
        author: '<div class="author">Mark Twain</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“Always forgive your enemies; nothing annoys them so much.”</div>',
        author: '<div class="author">Oscar Wilde</div>'
    },
    {
        qutes: '<div class="quotes" id="quotes">“Insanity is doing the same thing, over and over again, but expecting different results.”</div>',
        author: '<div class="author">Narcotics Anonymous</div>'
    },
];

var lastQuoteIndex = -1;

btn.addEventListener("click", function () {
    h1.innerHTML = "Quote of the Day" ;
    pra.innerHTML =" Press the button below to recieve a random quote" ;
    var randomIndex;
        do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    var randomQuote = quotes[randomIndex];
    word.innerHTML = randomQuote.qutes + randomQuote.author;
    word.classList.add("show");
    });



var quotesAr = [
    {
        qutes: '<div class="quotes ar" id="quotes">"تتحوّل الأرض إلى جنة إذا كان الإنسان فيها قريبًا من الله"</div>',
        author: '<div class="author">أحمد بهجت</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">الجميع يبكي على ماضيه ويتوق إليه، فلماذا لا نفكر في الحاضر قبل أن يصبح ماضيًا؟</div>',
        author: '<div class="author">علي الطنطاوي</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">!المثابرة تفوق الذكاء، والصبر يفوق الحظ، والنتيجة دائمًا مهمة</div>',
        author: '<div class="author">أنس منصور</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">.عندما تُصحح أخلاقنا، ويُعيد نقاوتها ونقاءها إلى جوهرنا العربي، ويُغسل قذارتها، سنستعيد فلسطين ونعيد مملكة آبائنا</div>',
        author: '<div class="author">علي الطنطاوي</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">.العزلة: زاوية صغيرة تقف فيها أمام عقلك، حيث أن المواجهة لا مفر منها</div>',
        author: '<div class="author">سعود السنعوسي</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">كن التغيير الذي تتمناه في العالم.</div>',
        author: '<div class="author" id="author">مهاتما غاندي</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">إذا قلت الحقيقة، فليس عليك أن تتذكر شيئًا.</div>',
        author: '<div class="author">مارك توين</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">.اغفر دائمًا لأعدائك؛ فلا شيء يزعجهم كثيرًا</div>',
        author: '<div class="author">أوسكار وايلد</div>'
    },
    {
        qutes: '<div class="quotes ar" id="quotes">.الجنون هو القيام بالشيء نفسه مرارًا وتكرارًا، ولكن بتوقع نتائج مختلفة</div>',
        author: '<div class="author">مجموعة مجهولة</div>'
    }
    ];

    var btnAr = document.getElementById("lang-btn");


    btnAr.addEventListener("click", function () {
        h1.innerHTML = "اقتبس من اليوم" ;
    pra.innerHTML ="! اضغط على الزر أدناه لتلقي عرض اقتباس عشوائي" ;
        var randomIndex;
            do {
            randomIndex = Math.floor(Math.random() * quotesAr.length);
        } while (randomIndex === lastQuoteIndex);
    
        lastQuoteIndex = randomIndex;
    
        var randomQuote = quotesAr[randomIndex];
        word.innerHTML = randomQuote.qutes + randomQuote.author;
        word.classList.add("show");
    });
    var lood = document.getElementById("load");

    window.addEventListener('load', (event) => {
        lood.style.display = "flex";
    });
    
    setTimeout(() => {
        lood.style.display = "none";
    }, 1000);
    
