// Rebuilds the two static guide pages from the data below.
// The site does not need this script; it only regenerates
// why-remove-diacritics/index.html and de-ce-sa-elimini-diacriticele/index.html.
// Run from the repo root: node scripts/build-guides.js
const fs = require('fs');

const SITE = 'https://diacr.cdav.io';
const MODIFIED = '2026-10-31';

// Use the real conversion code from index.html, so every "after" example is exactly what the tool produces.
const tool = fs.readFileSync('index.html', 'utf8');
const core = tool.split('/* CORE START */')[1].split('/* CORE END */')[0];
const cleanText = new Function(core + '; return cleanText;')();
const clean = s => cleanText(s).text;

const svg = fs.readFileSync('icon.svg', 'utf8').trim();
const ICON = 'data:image/svg+xml,' + svg.replace(/"/g, "'").replace(/[%#<>&]/g, c => encodeURIComponent(c));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = s => clean(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const PAGES = {
  en: {
    path: '/why-remove-diacritics/',
    other: 'ro',
    locale: 'en_US',
    title: 'Why remove diacritics? 15 real reasons and examples | DIACR',
    description: '15 real examples where diacritics break text: recruitment portals, CSV imports, file names, SMS, payments and URLs. Fix it free in your browser with DIACR.',
    crumbs: ['DIACR', 'Why remove diacritics'],
    langName: 'English',
    langAria: 'Change language to Romanian',
    eyebrow: 'Guide',
    h1: 'Why remove diacritics? <span class="hl">15 real reasons</span>',
    intro: 'Letters like ș, ț, ă, â, î, ø, ü or ł are correct and beautiful, but many systems still break on them. This guide explains what diacritics are, shows 15 everyday cases where removing them saves time, money and embarrassment, and gives clear before and after examples.',
    cta: 'Remove diacritics now',
    ctaNote: 'Free, private, nothing leaves your device',
    before: 'Before',
    after: 'After',
    short: ['The short answer', 'Because many systems still break on ș, ț, ă, ø or ü. DIACR turns them into plain letters in one paste, so names, files and imports work everywhere.'],
    what: {
      title: 'What are diacritics?',
      paras: [
        'Diacritics are the small marks added to letters to change how they sound: the comma under ș and ț, the breve on ă, the circumflex on â and î, the umlaut on ü, the slash through ø and ł. Romanian has five letters with diacritics: ă, â, î, ș and ț.',
        'Removing diacritics means replacing each marked letter with its plain Latin letter. “ș” becomes “s”, “ă” becomes “a”, “ü” becomes “u”, and the words stay easy to read: “Brașov” becomes “Brasov”, “Müller” becomes “Muller”.',
        'Computers store these letters as special Unicode characters. Modern apps handle them well, but older systems, CSV files, SMS gateways and many forms only understand the 26 basic letters, known as ASCII. That is where text breaks, and where a diacritics remover helps.'
      ]
    },
    tocTitle: 'In this guide',
    tocMore: 'Also in this guide',
    reasonsTitle: '15 reasons to remove diacritics',
    reasons: [
      ['Recruitment portals and HR systems mangle names', 'You paste “Ștefan Țăndărică” into an old applicant system and it saves “?tefan ?�nd?ric?”. Recruiters can’t find you by name, and your CV looks careless.', 'Ștefan Țăndărică'],
      ['CSV imports and Excel break the text', 'A list of 500 clients from Iași exported as CSV opens as “IaČ™i” in Excel or in a CRM import. Cleaning it first means every row arrives readable.', 'Iași, Brașov, Timișoara'],
      ['File names and links fail', 'A file called “Ofertă_București.pdf” can break in email attachments, on some servers or in zip files, and turns into “Oferta%CC%86” in links. “Oferta_Bucuresti.pdf” works everywhere.', 'Ofertă_București.pdf'],
      ['Email subjects and SMS cost more or look broken', '“Programare confirmată” in a subject line can show as garbled symbols in some mail apps. In an SMS, a single “ă” switches the message to Unicode, which cuts it from 160 to 70 characters per message, so a campaign can cost twice as much.', 'Programare confirmată'],
      ['Forms that only accept plain letters', 'Bank transfers, flight bookings, visa forms and card names often accept only A to Z. “Søren Müller” is rejected, while “Soren Muller” goes through and matches the name on the passport.', 'Søren Müller'],
      ['URLs and SEO slugs', 'A blog post titled “Cum să găsești un job în Cluj” needs the clean link “/cum-sa-gasesti-un-job-in-cluj”. With diacritics the address turns into unreadable codes when people share it.', 'Cum să găsești un job în Cluj'],
      ['Usernames and email addresses', '“andreea.mărgărit@firma.ro” is rejected by most mail servers and sign-up forms. Many companies create addresses from the employee’s name, so it has to be “andreea.margarit”.', 'andreea.mărgărit'],
      ['Search and duplicate records', 'In a CRM, “Ionuț Popescu” and “Ionut Popescu” end up as two different contacts, and searching “Brasov” misses everyone saved as “Brașov”. Cleaning names first keeps one record per person.', 'Ionuț Popescu, Brașov'],
      ['Old printers, POS systems and receipts', 'Fiscal printers, label printers and courier systems often print “Str. Mihai Viteazu nr. 5, Pitești” as “Pite?ti”, so parcels arrive late or labels look wrong.', 'Str. Mihai Viteazu nr. 5, Pitești'],
      ['Programming and databases', 'Variable names, database keys, API fields and JSON exports often must be plain ASCII. Developers convert “Județ” to “Judet” before using it as a column name.', 'Județ'],
      ['Payments and invoices', 'Bank transfer details and SEPA payments often reject “ș” and “ț” in the beneficiary name or payment reference. “Plată factură Țară Nouă SRL” may bounce, while “Plata factura Tara Noua SRL” goes through.', 'Plată factură Țară Nouă SRL'],
      ['Social media handles and hashtags', '“#BucureștiNoaptea” and “#BucurestiNoaptea” are separate hashtags. Many people type without diacritics, so the clean version is what they search for.', '#BucureștiNoaptea'],
      ['Mixed legacy text with cedilla letters', 'Old Romanian documents use “ş ţ” (cedilla) while new ones use “ș ț” (comma). Search and “find and replace” treat them as different letters, so “Ştefan” isn’t found when you search for “Ștefan”. Removing both fixes it.', 'Ştefan, Ștefan'],
      ['Copy and paste from Word or PDF', 'Text copied from Word brings curly quotes „ ”, long dashes and invisible spaces. Forms then show odd symbols or reject the input. DIACR cleans those too, not only the diacritics.', '„Ofertă” – 50 lei…'],
      ['International teams and foreign keyboards', 'A colleague in Germany or the UK can’t easily type “ș” or “ț”. If shared names, folders and project codes are written without diacritics, anyone can type and find them.', 'Proiect Țara Hațegului']
    ],
    examples: {
      title: 'Real examples, before and after',
      intro: 'These are typical texts people paste into DIACR. The right side is exactly what the tool returns.',
      items: [
        ['A Romanian CV header', 'Nume: Ștefan Țăndărică\nOraș: Brașov, România\nExperiență: 5 ani la „Fabrica de Pâine” SRL\nLimbi: română, engleză, germană'],
        ['A CSV file for a CRM import', 'nume;oraș;județ\nIonuț Popescu;Iași;Iași\nAndreea Mărgărit;Timișoara;Timiș\nSøren Müller;Kraków;Małopolska'],
        ['An email subject and an SMS', 'Subiect: Programare confirmată pentru mâine, ora 10:00\nSMS: Bună ziua! Comanda dvs. a fost livrată în București.'],
        ['File names', 'Ofertă_București_2026.pdf\nContract semnat – Țară Nouă SRL.docx\nPoze nuntă Ștefan și Ioana.zip'],
        ['A blog title for a URL', 'Cum să scrii un CV fără greșeli în 2026', 'Then replace spaces with hyphens for the link:']
      ]
    },
    table: {
      title: 'What DIACR converts, letter by letter',
      intro: 'Upper and lower case are kept: uppercase in, uppercase out.',
      head: ['Language or type', 'Before', 'After'],
      rows: [
        ['Romanian, correct comma-below', 'ș Ș ț Ț'],
        ['Romanian, old cedilla', 'ş Ş ţ Ţ'],
        ['Romanian vowels', 'ă Ă â Â î Î'],
        ['Polish', 'ł Ł ą ę ś ź ż ć ń ó'],
        ['German', 'ä ö ü Ä Ö Ü ß'],
        ['Danish, Norwegian, Swedish', 'ø Ø å Å æ Æ'],
        ['French, Spanish, Portuguese', 'é è ê ç à ñ ã õ œ'],
        ['Croatian, Serbian, Czech, Slovak', 'đ Đ č š ž ř ť'],
        ['Icelandic', 'ð Ð þ Þ'],
        ['Turkish', 'ı İ ğ ş'],
        ['Smart quotes and dashes', '“ ” „ ‘ ’ – \u2014 …']
      ],
      note: 'Invisible characters are cleaned too: non-breaking spaces become normal spaces, zero-width spaces and byte order marks are removed.'
    },
    steps: {
      title: 'How to remove diacritics in 3 steps',
      items: [
        ['Open diacr.cdav.io', 'It works in any browser, on desktop or phone. No account, no install.'],
        ['Paste your text', 'Press Cmd + V or Ctrl + V anywhere on the page, or upload a .txt or .csv file.'],
        ['Use the clean text', 'The result is already copied to your clipboard. Paste it into the portal, CRM, email or file name.']
      ]
    },
    keep: {
      title: 'When you should keep diacritics',
      text: 'Diacritics are part of correct Romanian. Keep them in official documents, contracts, books, articles and anywhere people read the text directly and the system supports them. Remove them only where they break: old systems, imports, file names, links, SMS and strict forms. DIACR never changes your original text, so you can keep both versions.'
    },
    faqTitle: 'Frequently asked questions',
    faq: [
      ['What is a diacritics remover?', 'A diacritics remover turns letters with accents and marks, such as ș, ț, ă, é, ø or ü, into their plain versions: s, t, a, e, o, u. DIACR also cleans smart quotes, long dashes and invisible spaces.'],
      ['Is DIACR free?', 'Yes. DIACR is free and open source under the MIT License. There is no account and no limit.'],
      ['Does my text leave my device?', 'No. Everything runs in your browser. The page makes no network requests, so your text, files and clipboard never reach a server.'],
      ['What is the difference between ș and ş?', 'ș and ț, with a comma below, are the correct Romanian letters. ş and ţ, with a cedilla, come from old fonts and keyboards. They look almost the same but are different characters, which is why search often fails. DIACR turns both into s and t, in lower and upper case.'],
      ['Does it work for languages other than Romanian?', 'Yes. It handles Polish, German, French, Spanish, Portuguese, Nordic languages, Czech, Croatian, Turkish, Icelandic and many more languages written in the Latin alphabet.'],
      ['What happens to characters with no plain version, like € or Cyrillic letters?', 'They are left as they are and listed under the result, so nothing disappears without you knowing.'],
      ['Can I clean a whole CSV or TXT file?', 'Yes. Upload a .txt or .csv file and DIACR downloads the cleaned version with the same file name. UTF-8 and older Windows-1250 files both work.'],
      ['Does it work on a phone?', 'Yes. The page works in any modern mobile browser. Tap Paste and the clean text is copied for you.'],
      ['How do I use it fastest?', 'Open diacr.cdav.io and press Cmd + V or Ctrl + V anywhere on the page. The text is cleaned and the result is copied to your clipboard automatically.']
    ],
    endTitle: 'Clean your text in one paste',
    endText: 'Paste anywhere on the page and DIACR copies the clean text for you.',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    developedBy: 'Developed by',
    openSource: 'open source under the MIT License',
    license: 'MIT License',
    security: 'Security',
    tool: 'Diacritics remover'
  },
  ro: {
    path: '/de-ce-sa-elimini-diacriticele/',
    other: 'en',
    locale: 'ro_RO',
    title: 'De ce să elimini diacriticele? 15 motive reale și exemple | DIACR',
    description: '15 exemple reale în care diacriticele strică textul: recrutare, importuri CSV, fișiere, SMS, plăți și URL-uri. Rezolvă gratuit în browser cu DIACR.',
    crumbs: ['DIACR', 'De ce să elimini diacriticele'],
    langName: 'Română',
    langAria: 'Schimbă limba în engleză',
    eyebrow: 'Ghid',
    h1: 'De ce să elimini diacriticele? <span class="hl">15 motive reale</span>',
    intro: 'Literele ș, ț, ă, â, î, ø, ü sau ł sunt corecte și frumoase, dar multe sisteme încă se strică la ele. Ghidul acesta explică ce sunt diacriticele, arată 15 situații de zi cu zi în care eliminarea lor economisește timp, bani și momente penibile și dă exemple clare, înainte și după.',
    cta: 'Elimină diacriticele acum',
    ctaNote: 'Gratuit, privat, nimic nu părăsește dispozitivul',
    before: 'Înainte',
    after: 'După',
    short: ['Răspunsul scurt', 'Pentru că multe sisteme încă se strică la ș, ț, ă, ø sau ü. DIACR le transformă în litere simple dintr-o singură lipire, ca numele, fișierele și importurile să meargă peste tot.'],
    what: {
      title: 'Ce sunt diacriticele?',
      paras: [
        'Diacriticele sunt semnele mici adăugate literelor ca să le schimbe sunetul: virgula de sub ș și ț, căciulița de pe ă, circumflexul de pe â și î, umlautul de pe ü, bara din ø și ł. Româna are cinci litere cu diacritice: ă, â, î, ș și ț.',
        'A elimina diacriticele înseamnă a înlocui fiecare literă cu semn cu litera latină simplă. „ș” devine „s”, „ă” devine „a”, „ü” devine „u”, iar cuvintele rămân ușor de citit: „Brașov” devine „Brasov”, „Müller” devine „Muller”.',
        'Calculatoarele salvează aceste litere drept caractere Unicode speciale. Aplicațiile moderne le înțeleg, dar sistemele vechi, fișierele CSV, serviciile de SMS și multe formulare înțeleg doar cele 26 de litere de bază, numite ASCII. Acolo se strică textul și acolo ajută un program de eliminare a diacriticelor.'
      ]
    },
    tocTitle: 'În acest ghid',
    tocMore: 'Tot în acest ghid',
    reasonsTitle: '15 motive să elimini diacriticele',
    reasons: [
      ['Portalurile de recrutare și sistemele HR stâlcesc numele', 'Lipești „Ștefan Țăndărică” într-un sistem vechi de candidați și se salvează „?tefan ?�nd?ric?”. Recrutorii nu te mai găsesc după nume, iar CV-ul pare neîngrijit.', 'Ștefan Țăndărică'],
      ['Importurile CSV și Excel strică textul', 'O listă cu 500 de clienți din Iași, exportată în CSV, apare ca „IaČ™i” în Excel sau la importul în CRM. Dacă o cureți înainte, fiecare rând ajunge lizibil.', 'Iași, Brașov, Timișoara'],
      ['Numele de fișiere și linkurile nu merg', 'Un fișier numit „Ofertă_București.pdf” se poate strica în atașamente, pe unele servere sau în arhive zip, iar în linkuri devine „Oferta%CC%86”. „Oferta_Bucuresti.pdf” merge peste tot.', 'Ofertă_București.pdf'],
      ['Subiectele de e-mail și SMS-urile costă mai mult sau arată stricat', '„Programare confirmată” în subiect poate apărea ca simboluri ciudate în unele aplicații de mail. Într-un SMS, un singur „ă” trece mesajul pe Unicode, care îl scurtează de la 160 la 70 de caractere, așa că o campanie poate costa dublu.', 'Programare confirmată'],
      ['Formulare care acceptă doar litere simple', 'Transferurile bancare, rezervările de zbor, formularele de viză și numele de pe card acceptă des doar literele de la A la Z. „Søren Müller” e respins, „Soren Muller” trece și se potrivește cu numele din pașaport.', 'Søren Müller'],
      ['URL-uri și slug-uri pentru SEO', 'Un articol cu titlul „Cum să găsești un job în Cluj” are nevoie de linkul curat „/cum-sa-gasesti-un-job-in-cluj”. Cu diacritice, adresa devine coduri ilizibile când e distribuită.', 'Cum să găsești un job în Cluj'],
      ['Nume de utilizator și adrese de e-mail', '„andreea.mărgărit@firma.ro” e respinsă de majoritatea serverelor de mail și a formularelor de înregistrare. Multe firme creează adresa din numele angajatului, așa că trebuie să fie „andreea.margarit”.', 'andreea.mărgărit'],
      ['Căutare și înregistrări duplicate', 'În CRM, „Ionuț Popescu” și „Ionut Popescu” devin două contacte diferite, iar căutarea „Brasov” nu-i găsește pe cei salvați ca „Brașov”. Dacă cureți numele înainte, ai o singură înregistrare pe persoană.', 'Ionuț Popescu, Brașov'],
      ['Imprimante vechi, case de marcat și bonuri', 'Imprimantele fiscale, cele de etichete și sistemele de curierat tipăresc des „Str. Mihai Viteazu nr. 5, Pitești” ca „Pite?ti”, iar coletele întârzie sau etichetele arată greșit.', 'Str. Mihai Viteazu nr. 5, Pitești'],
      ['Programare și baze de date', 'Numele de variabile, cheile din baze de date, câmpurile din API și exporturile JSON trebuie des să fie doar ASCII. Programatorii transformă „Județ” în „Judet” înainte să-l folosească drept nume de coloană.', 'Județ'],
      ['Plăți și facturi', 'Detaliile transferului bancar și plățile SEPA resping des „ș” și „ț” în numele beneficiarului sau în detaliile plății. „Plată factură Țară Nouă SRL” poate fi returnată, iar „Plata factura Tara Noua SRL” trece.', 'Plată factură Țară Nouă SRL'],
      ['Rețele sociale și hashtag-uri', '„#BucureștiNoaptea” și „#BucurestiNoaptea” sunt hashtag-uri diferite. Mulți scriu fără diacritice, deci varianta curată e cea pe care o caută.', '#BucureștiNoaptea'],
      ['Text vechi cu sedilă amestecat cu cel nou', 'Documentele românești vechi folosesc „ş ţ” (cu sedilă), iar cele noi „ș ț” (cu virgulă). Căutarea și „find and replace” le văd ca litere diferite, deci „Ştefan” nu apare când cauți „Ștefan”. Eliminarea ambelor rezolvă problema.', 'Ştefan, Ștefan'],
      ['Copy-paste din Word sau PDF', 'Textul copiat din Word aduce ghilimele „ ”, linii lungi și spații invizibile. Formularele arată apoi simboluri ciudate sau resping textul. DIACR le curăță și pe acestea, nu doar diacriticele.', '„Ofertă” – 50 lei…'],
      ['Echipe internaționale și tastaturi străine', 'Un coleg din Germania sau Marea Britanie nu poate scrie ușor „ș” sau „ț”. Dacă numele comune, folderele și codurile de proiect sunt scrise fără diacritice, oricine le poate scrie și găsi.', 'Proiect Țara Hațegului']
    ],
    examples: {
      title: 'Exemple reale, înainte și după',
      intro: 'Acestea sunt texte tipice pe care oamenii le lipesc în DIACR. Partea din dreapta este exact ce returnează aplicația.',
      items: [
        ['Antetul unui CV', 'Nume: Ștefan Țăndărică\nOraș: Brașov, România\nExperiență: 5 ani la „Fabrica de Pâine” SRL\nLimbi: română, engleză, germană'],
        ['Un fișier CSV pentru import în CRM', 'nume;oraș;județ\nIonuț Popescu;Iași;Iași\nAndreea Mărgărit;Timișoara;Timiș\nSøren Müller;Kraków;Małopolska'],
        ['Subiectul unui e-mail și un SMS', 'Subiect: Programare confirmată pentru mâine, ora 10:00\nSMS: Bună ziua! Comanda dvs. a fost livrată în București.'],
        ['Nume de fișiere', 'Ofertă_București_2026.pdf\nContract semnat – Țară Nouă SRL.docx\nPoze nuntă Ștefan și Ioana.zip'],
        ['Titlul unui articol pentru URL', 'Cum să scrii un CV fără greșeli în 2026', 'Apoi înlocuiește spațiile cu cratime pentru link:']
      ]
    },
    table: {
      title: 'Ce transformă DIACR, literă cu literă',
      intro: 'Literele mari și mici se păstrează: majusculă la intrare, majusculă la ieșire.',
      head: ['Limbă sau tip', 'Înainte', 'După'],
      rows: [
        ['Română, corect cu virgulă', 'ș Ș ț Ț'],
        ['Română, vechi cu sedilă', 'ş Ş ţ Ţ'],
        ['Vocale românești', 'ă Ă â Â î Î'],
        ['Poloneză', 'ł Ł ą ę ś ź ż ć ń ó'],
        ['Germană', 'ä ö ü Ä Ö Ü ß'],
        ['Daneză, norvegiană, suedeză', 'ø Ø å Å æ Æ'],
        ['Franceză, spaniolă, portugheză', 'é è ê ç à ñ ã õ œ'],
        ['Croată, sârbă, cehă, slovacă', 'đ Đ č š ž ř ť'],
        ['Islandeză', 'ð Ð þ Þ'],
        ['Turcă', 'ı İ ğ ş'],
        ['Ghilimele și linii tipografice', '“ ” „ ‘ ’ – \u2014 …']
      ],
      note: 'Sunt curățate și caracterele invizibile: spațiile indivizibile devin spații normale, iar spațiile de lățime zero și marcajele BOM sunt eliminate.'
    },
    steps: {
      title: 'Cum elimini diacriticele în 3 pași',
      items: [
        ['Deschide diacr.cdav.io', 'Merge în orice browser, pe calculator sau pe telefon. Fără cont, fără instalare.'],
        ['Lipește textul', 'Apasă Cmd + V sau Ctrl + V oriunde pe pagină, sau încarcă un fișier .txt sau .csv.'],
        ['Folosește textul curat', 'Rezultatul este deja copiat în clipboard. Lipește-l în portal, CRM, e-mail sau în numele fișierului.']
      ]
    },
    keep: {
      title: 'Când să păstrezi diacriticele',
      text: 'Diacriticele fac parte din româna corectă. Păstrează-le în documente oficiale, contracte, cărți, articole și oriunde textul este citit direct de oameni, iar sistemul le suportă. Elimină-le doar unde strică: sisteme vechi, importuri, nume de fișiere, linkuri, SMS și formulare stricte. DIACR nu modifică niciodată textul original, deci poți păstra ambele variante.'
    },
    faqTitle: 'Întrebări frecvente',
    faq: [
      ['Ce face un program de eliminare a diacriticelor?', 'Transformă literele cu accente și semne, cum ar fi ș, ț, ă, é, ø sau ü, în variantele lor simple: s, t, a, e, o, u. DIACR curăță și ghilimelele tipografice, liniile lungi și spațiile invizibile.'],
      ['DIACR este gratuit?', 'Da. DIACR este gratuit și open source sub licența MIT. Nu ai nevoie de cont și nu există limite.'],
      ['Textul meu părăsește dispozitivul?', 'Nu. Totul rulează în browserul tău. Pagina nu face nicio cerere în rețea, deci textul, fișierele și clipboardul nu ajung pe niciun server.'],
      ['Care e diferența dintre ș și ş?', 'ș și ț, cu virgulă dedesubt, sunt literele românești corecte. ş și ţ, cu sedilă, vin din fonturile și tastaturile vechi. Arată aproape la fel, dar sunt caractere diferite, de aceea căutarea dă des greș. DIACR le transformă pe ambele în s și t, mari și mici.'],
      ['Merge și pentru alte limbi în afară de română?', 'Da. Merge pentru poloneză, germană, franceză, spaniolă, portugheză, limbile nordice, cehă, croată, turcă, islandeză și multe alte limbi scrise cu alfabet latin.'],
      ['Ce se întâmplă cu caracterele fără variantă simplă, cum ar fi € sau literele chirilice?', 'Rămân neschimbate și sunt afișate sub rezultat, deci nimic nu dispare fără să știi.'],
      ['Pot curăța un fișier CSV sau TXT întreg?', 'Da. Încarci un fișier .txt sau .csv, iar DIACR descarcă varianta curată cu același nume. Merg și fișierele UTF-8, și cele vechi Windows-1250.'],
      ['Merge pe telefon?', 'Da. Pagina merge în orice browser modern de pe telefon. Apasă Lipește, iar textul curat este copiat pentru tine.'],
      ['Cum îl folosesc cel mai rapid?', 'Deschide diacr.cdav.io și apasă Cmd + V sau Ctrl + V oriunde pe pagină. Textul este curățat, iar rezultatul este copiat automat în clipboard.']
    ],
    endTitle: 'Curăță textul dintr-o singură lipire',
    endText: 'Lipește oriunde pe pagină, iar DIACR copiază textul curat pentru tine.',
    themeToLight: 'Comută la tema deschisă',
    themeToDark: 'Comută la tema întunecată',
    developedBy: 'Dezvoltat de',
    openSource: 'open source sub licența MIT',
    license: 'Licență MIT',
    security: 'Securitate',
    tool: 'Eliminare diacritice'
  }
};

const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

function page(lang) {
  const p = PAGES[lang], o = PAGES[p.other];
  const url = SITE + p.path, otherUrl = SITE + o.path;
  const ids = p.reasons.map((r, i) => `${i + 1}-${slug(r[0])}`);
  const sec = { what: slug(p.what.title), examples: slug(p.examples.title), table: slug(p.table.title), steps: slug(p.steps.title), keep: slug(p.keep.title), faq: slug(p.faqTitle) };
  const plainH1 = p.h1.replace(/<[^>]+>/g, '');

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': url + '#article', headline: plainH1, description: p.description,
        inLanguage: lang, mainEntityOfPage: url, image: SITE + '/preview.png',
        datePublished: '2026-10-28', dateModified: MODIFIED,
        author: { '@type': 'Person', name: 'David Constantin Cristea', url: 'https://www.linkedin.com/in/cristea-david/' },
        publisher: { '@type': 'Organization', name: 'CDAV.IO', url: 'https://cdav.io/', logo: { '@type': 'ImageObject', url: SITE + '/icon.svg' } },
        about: { '@type': 'SoftwareApplication', name: 'DIACR', url: SITE + '/', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } }
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: p.crumbs[0], item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: p.crumbs[1], item: url }
        ]
      },
      {
        '@type': 'ItemList', name: p.reasonsTitle, numberOfItems: p.reasons.length,
        itemListElement: p.reasons.map((r, i) => ({ '@type': 'ListItem', position: i + 1, name: r[0], url: url + '#' + ids[i] }))
      },
      {
        '@type': 'HowTo', name: p.steps.title, inLanguage: lang,
        step: p.steps.items.map(([n, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: t }))
      },
      {
        '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
      }
    ]
  };

  const pair = (before, after, tagB, tagA, block) => `
          <div class="ex${block ? ' ex-block' : ''}">
            <div class="from"><span class="tag">${tagB}</span><code>${esc(before)}</code></div>
            <span class="arrow" aria-hidden="true">${ARROW}</span>
            <div class="to"><span class="tag">${tagA}</span><code>${esc(after)}</code></div>
          </div>`;

  const reasons = p.reasons.map((r, i) => `
      <section class="reason" id="${ids[i]}">
        <span class="num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <div class="body">
          <h3>${esc(r[0])}</h3>
          <p>${esc(r[1])}</p>${pair(r[2], clean(r[2]), p.before, p.after)}
        </div>
      </section>`).join('');

  const examples = p.examples.items.map(([label, text, note]) => `
      <figure class="example">
        <figcaption>${esc(label)}</figcaption>${pair(text, clean(text), p.before, p.after, true)}${note ? `
        <p class="note">${esc(note)} <code>/${slug(text)}</code></p>` : ''}
      </figure>`).join('');

  const rows = p.table.rows.map(([name, chars]) => `
          <tr><th scope="row">${esc(name)}</th><td><code>${esc(chars)}</code></td><td><code>${esc(chars.split(' ').map(clean).join(' '))}</code></td></tr>`).join('');

  const steps = p.steps.items.map(([n, t], i) => `
        <li><span class="step-num" aria-hidden="true">${i + 1}</span><div><h3>${esc(n)}</h3><p>${esc(t)}</p></div></li>`).join('');

  const faq = p.faq.map(([q, a]) => `
        <details>
          <summary>${esc(q)}</summary>
          <p>${esc(a)}</p>
        </details>`).join('');

  const toc = p.reasons.map((r, i) => `<li><a href="#${ids[i]}">${esc(r[0])}</a></li>`).join('\n          ');
  const tocMore = [[sec.what, p.what.title], [sec.examples, p.examples.title], [sec.table, p.table.title], [sec.steps, p.steps.title], [sec.keep, p.keep.title], [sec.faq, p.faqTitle]]
    .map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('\n          ');

  const html = `<!doctype html>
<html lang="${lang}" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src data:; connect-src 'none'; base-uri 'none'; form-action 'none'">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${lang}" href="${url}">
<link rel="alternate" hreflang="${p.other}" href="${otherUrl}">
<link rel="alternate" hreflang="x-default" href="${SITE}/why-remove-diacritics/">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="author" content="David Constantin Cristea">
<meta name="theme-color" content="#0c0c0c">
<meta name="color-scheme" content="dark light">
<meta property="og:type" content="article">
<meta property="og:site_name" content="CDAV.IO">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${p.locale}">
<meta property="og:locale:alternate" content="${o.locale}">
<meta property="og:image" content="${SITE}/preview.png">
<meta property="og:image:width" content="1920">
<meta property="og:image:height" content="1080">
<meta property="article:published_time" content="2026-10-28">
<meta property="article:modified_time" content="${MODIFIED}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@cdav_io">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${SITE}/preview.png">
<link rel="icon" type="image/svg+xml" href="${ICON}">
<script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
</script>
<script>
  (function () {
    var t = null;
    try { t = localStorage.getItem('dr-theme'); } catch (e) {}
    document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
  })();
</script>
<style>
  :root {
    --yellow: #FFD905;
    --font-ui: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-mark: "Montserrat", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  }
  :root[data-theme="dark"] {
    --bg: #0c0c0c; --surface: #161616; --surface-2: #1d1d1d; --border: rgba(255,255,255,.09); --border-strong: rgba(255,255,255,.2);
    --text: #ffffff; --muted: #a3a3a3; --accent-ink: #FFD905; --glow: rgba(255,217,5,.16); --to-bg: #1d1a07; --to-border: rgba(255,217,5,.35);
    --focus: #FFD905; color-scheme: dark;
  }
  :root[data-theme="light"] {
    --bg: #f7f6f1; --surface: #ffffff; --surface-2: #f1f0ea; --border: rgba(17,17,17,.1); --border-strong: rgba(17,17,17,.24);
    --text: #111111; --muted: #5d5d57; --accent-ink: #7a6400; --glow: rgba(255,217,5,.32); --to-bg: #fffbe6; --to-border: rgba(160,130,0,.35);
    --focus: #111111; color-scheme: light;
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body { position: relative; margin: 0; background: var(--bg); color: var(--text); font: 17px/1.65 var(--font-ui); overflow-x: hidden; }
  body::after { content: ""; position: absolute; inset: 0 0 auto 0; height: 700px; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 55% 55% at 50% 0%, var(--glow), transparent 70%); }
  body > * { position: relative; z-index: 1; }
  a { color: inherit; }
  :focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
  .wrap { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 16px; }
  .narrow { max-width: 820px; margin: 0 auto; }
  .bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 72px; }
  .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
  .brand img { display: block; border-radius: 9px; }
  .wordmark { font-family: var(--font-mark); font-weight: 800; font-size: 20px; letter-spacing: .02em; color: var(--text); text-decoration: none; white-space: nowrap; }
  .wordmark .io { color: var(--yellow); }
  .bar-actions { display: flex; gap: 8px; }
  .pill-btn { display: inline-flex; align-items: center; gap: 8px; height: 40px; padding: 0 14px; background: var(--surface); color: var(--text);
    border: 1px solid var(--border); border-radius: 999px; cursor: pointer; font: 600 14px var(--font-ui); text-decoration: none; }
  .pill-btn:hover { border-color: var(--border-strong); }
  .pill-btn svg { width: 18px; height: 18px; }
  .icon-only { width: 40px; padding: 0; justify-content: center; }
  .crumbs { margin: 24px 0 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 6px; font-size: 14px; color: var(--muted); }
  .crumbs li + li::before { content: "/"; margin-right: 6px; opacity: .6; }
  .crumbs a { text-decoration: none; border-bottom: 1px solid var(--border-strong); }
  header.hero { padding: 18px 0 8px; }
  .eyebrow { display: inline-block; margin: 22px 0 0; padding: 4px 12px; border: 1px solid var(--border); border-radius: 999px; background: var(--surface);
    font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }
  h1 { margin: 16px 0 14px; font-family: var(--font-mark); font-weight: 800; font-size: clamp(34px, 6vw, 58px); line-height: 1.05; letter-spacing: -.025em; }
  :root[data-theme="dark"] h1 .hl { color: var(--yellow); }
  :root[data-theme="light"] h1 .hl { background: linear-gradient(transparent 62%, var(--glow) 62%); }
  .intro { margin: 0; font-size: 19px; color: var(--muted); }
  .cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px; margin: 26px 0 0; }
  .btn { display: inline-flex; align-items: center; gap: 10px; height: 50px; padding: 0 22px; background: var(--yellow); color: #111; border-radius: 12px;
    font-weight: 800; text-decoration: none; box-shadow: 0 10px 28px -12px rgba(255,217,5,.8); }
  .btn:hover { filter: brightness(.97); }
  .btn svg { width: 18px; height: 18px; }
  .cta-note { font-size: 14px; color: var(--muted); }
  .short { margin: 34px 0 0; padding: 20px 22px; background: var(--surface); border: 1px solid var(--border); border-left: 4px solid var(--yellow); border-radius: 0; }
  .short h2 { margin: 0 0 6px; font-size: 15px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
  .short p { margin: 0; font-size: 18px; }
  .block { margin: 56px 0 0; scroll-margin-top: 16px; }
  .block > h2 { margin: 0 0 12px; font-family: var(--font-mark); font-size: clamp(26px, 4vw, 34px); line-height: 1.15; letter-spacing: -.02em; }
  .block > p { margin: 0 0 14px; color: var(--muted); }
  .block > p.lead { color: var(--text); font-size: 18px; }
  .toc { margin: 34px 0 0; padding: 20px 22px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
  .toc h2 { margin: 0 0 10px; font-size: 15px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
  .toc h2 + ol, .toc h2 + ul { margin-bottom: 0; }
  .toc .more { margin-top: 16px; }
  .toc ol, .toc ul { margin: 0; padding-left: 22px; columns: 2; column-gap: 32px; font-size: 15px; }
  .toc li { break-inside: avoid; margin: 0 0 6px; }
  .toc a { text-decoration: none; }
  .toc a:hover { color: var(--accent-ink); }
  .reasons { display: grid; gap: 16px; }
  .reason { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 18px; padding: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; scroll-margin-top: 16px; }
  .num { font-family: var(--font-mark); font-weight: 800; font-size: 34px; line-height: 1; color: var(--accent-ink); }
  .reason h3 { margin: 0 0 6px; font-family: var(--font-mark); font-size: 22px; line-height: 1.25; letter-spacing: -.01em; }
  .reason p { margin: 0 0 14px; color: var(--muted); }
  .ex { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); gap: 10px; align-items: stretch; }
  .ex .from, .ex .to { padding: 10px 14px; border-radius: 12px; border: 1px solid var(--border); background: var(--surface-2); min-width: 0; }
  .ex .to { background: var(--to-bg); border-color: var(--to-border); }
  .ex .tag { display: block; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }
  .ex code { display: block; font-family: var(--font-mono); font-size: 15px; overflow-wrap: anywhere; color: var(--text); }
  .ex-block code { white-space: pre-wrap; line-height: 1.6; }
  .ex .arrow { display: grid; place-items: center; color: var(--accent-ink); }
  .ex .arrow svg { width: 20px; height: 20px; }
  .example { margin: 0 0 18px; padding: 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .example figcaption { margin: 0 0 12px; font-weight: 800; font-family: var(--font-mark); font-size: 18px; }
  .example .note { margin: 12px 0 0; font-size: 15px; color: var(--muted); }
  .example .note code { font-family: var(--font-mono); color: var(--accent-ink); overflow-wrap: anywhere; }
  .table-wrap { border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: var(--surface); }
  table { width: 100%; border-collapse: collapse; font-size: 15px; }
  th, td { padding: 12px 16px; text-align: left; vertical-align: top; border-top: 1px solid var(--border); }
  thead th { border-top: 0; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); background: var(--surface-2); }
  tbody th { font-weight: 600; }
  td code { font-family: var(--font-mono); font-size: 16px; overflow-wrap: anywhere; }
  td:last-child code { color: var(--accent-ink); font-weight: 700; }
  .table-note { margin: 12px 0 0; font-size: 15px; color: var(--muted); }
  .steps { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
  .steps li { display: flex; gap: 14px; padding: 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .step-num { flex: none; display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; background: var(--yellow); color: #111; font-weight: 800; }
  .steps h3 { margin: 0 0 4px; font-size: 17px; }
  .steps p { margin: 0; font-size: 15px; color: var(--muted); }
  .keep { padding: 22px 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .keep h2 { margin: 0 0 8px; font-family: var(--font-mark); font-size: 24px; letter-spacing: -.01em; }
  .keep p { margin: 0; color: var(--muted); }
  details { border: 1px solid var(--border); background: var(--surface); border-radius: 14px; padding: 0 20px; margin: 0 0 10px; }
  summary { cursor: pointer; padding: 16px 0; font-weight: 700; font-size: 18px; list-style: none; display: flex; justify-content: space-between; gap: 12px; }
  summary::-webkit-details-marker { display: none; }
  summary::after { content: "+"; color: var(--accent-ink); font-size: 22px; line-height: 1; }
  details[open] summary::after { content: "\\2212"; }
  details p { margin: 0 0 16px; color: var(--muted); }
  .end { margin: 56px 0 0; padding: 34px 28px; text-align: center; background: var(--surface); border: 1px solid var(--border); border-radius: 22px; position: relative; }
  .end::before { content: ""; position: absolute; top: -1px; left: 15%; right: 15%; height: 1px; background: linear-gradient(90deg, transparent, var(--yellow), transparent); }
  .end h2 { margin: 0 0 6px; font-family: var(--font-mark); font-size: clamp(24px, 4vw, 32px); letter-spacing: -.02em; }
  .end p { margin: 0 0 20px; color: var(--muted); }
  footer { padding: 56px 0 40px; text-align: center; }
  .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px; margin: 0 0 22px; padding: 0; list-style: none; }
  .links a { text-decoration: none; border-bottom: 1px solid var(--border-strong); padding-bottom: 2px; }
  .dev { margin: 0 0 8px; font-family: var(--font-mark); font-weight: 800; font-size: 18px; color: var(--muted); }
  .dev .wordmark { font-size: 18px; }
  .copy { margin: 0; font-size: 14px; color: var(--muted); }
  @media (max-width: 760px) {
    .toc ol, .toc ul { columns: 1; }
    .reason { grid-template-columns: minmax(0, 1fr); gap: 6px; padding: 18px; }
    .num { font-size: 26px; }
    .ex { grid-template-columns: minmax(0, 1fr); }
    .ex .arrow svg { transform: rotate(90deg); }
    .steps { grid-template-columns: minmax(0, 1fr); }
    th, td { padding: 10px 12px; }
    td code { font-size: 14px; }
  }
</style>
</head>
<body>
<div class="wrap bar">
  <a class="brand" href="/" aria-label="DIACR by CDAV.IO"><img src="${ICON}" alt="" width="34" height="34"><span class="wordmark">CDAV.<span class="io">IO</span></span></a>
  <div class="bar-actions">
    <a class="pill-btn" href="${o.path}" hreflang="${p.other}" aria-label="${esc(p.langAria)}" id="langLink">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></svg>
      <span>${p.langName}</span>
    </a>
    <button type="button" class="pill-btn icon-only" id="themeBtn">
      <svg id="iconSun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      <svg id="iconMoon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>
    </button>
  </div>
</div>

<main class="wrap">
  <article class="narrow">
    <nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="/">${p.crumbs[0]}</a></li><li aria-current="page">${esc(p.crumbs[1])}</li></ol></nav>
    <header class="hero">
      <span class="eyebrow">${p.eyebrow}</span>
      <h1>${p.h1}</h1>
      <p class="intro">${esc(p.intro)}</p>
      <div class="cta-row">
        <a class="btn" href="/">${esc(p.cta)} ${ARROW}</a>
        <span class="cta-note">${esc(p.ctaNote)}</span>
      </div>
    </header>

    <section class="short">
      <h2>${esc(p.short[0])}</h2>
      <p>${esc(p.short[1])}</p>
    </section>

    <section class="block" id="${sec.what}">
      <h2>${esc(p.what.title)}</h2>
      ${p.what.paras.map((t, i) => `<p${i === 0 ? ' class="lead"' : ''}>${esc(t)}</p>`).join('\n      ')}
    </section>

    <nav class="toc" aria-label="${esc(p.tocTitle)}">
      <h2>${esc(p.tocTitle)}</h2>
      <ol>
          ${toc}
      </ol>
      <h2 class="more">${esc(p.tocMore)}</h2>
      <ul>
          ${tocMore}
      </ul>
    </nav>

    <section class="block">
      <h2>${esc(p.reasonsTitle)}</h2>
      <div class="reasons">${reasons}
      </div>
    </section>

    <section class="block" id="${sec.examples}">
      <h2>${esc(p.examples.title)}</h2>
      <p>${esc(p.examples.intro)}</p>${examples}
    </section>

    <section class="block" id="${sec.table}">
      <h2>${esc(p.table.title)}</h2>
      <p>${esc(p.table.intro)}</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th scope="col">${esc(p.table.head[0])}</th><th scope="col">${esc(p.table.head[1])}</th><th scope="col">${esc(p.table.head[2])}</th></tr></thead>
          <tbody>${rows}
          </tbody>
        </table>
      </div>
      <p class="table-note">${esc(p.table.note)}</p>
    </section>

    <section class="block" id="${sec.steps}">
      <h2>${esc(p.steps.title)}</h2>
      <ol class="steps">${steps}
      </ol>
    </section>

    <section class="block keep" id="${sec.keep}">
      <h2>${esc(p.keep.title)}</h2>
      <p>${esc(p.keep.text)}</p>
    </section>

    <section class="block" id="${sec.faq}">
      <h2>${esc(p.faqTitle)}</h2>${faq}
    </section>

    <section class="end">
      <h2>${esc(p.endTitle)}</h2>
      <p>${esc(p.endText)}</p>
      <a class="btn" href="/">${esc(p.cta)} ${ARROW}</a>
    </section>
  </article>
</main>

<footer>
  <div class="wrap">
    <ul class="links">
      <li><a href="/">DIACR, ${esc(p.tool)}</a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover/blob/main/LICENSE" rel="noopener">${esc(p.license)}</a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover" rel="noopener">GitHub CDAVIO/Diacritics-remover</a></li>
      <li><a href="https://github.com/CDAVIO/Diacritics-remover/blob/main/SECURITY.md" rel="noopener">${esc(p.security)}</a></li>
    </ul>
    <p class="dev">${esc(p.developedBy)} <a class="wordmark" href="https://cdav.io/" rel="noopener">CDAV.<span class="io">IO</span></a></p>
    <p class="copy">&copy; <span id="year">2026</span> CDAV.IO, ${esc(p.openSource)}</p>
  </div>
</footer>

<script>
  (function () {
    var root = document.documentElement, btn = document.getElementById('themeBtn');
    function paint() {
      var dark = root.getAttribute('data-theme') === 'dark';
      document.getElementById('iconSun').style.display = dark ? '' : 'none';
      document.getElementById('iconMoon').style.display = dark ? 'none' : '';
      var label = dark ? ${JSON.stringify(p.themeToLight)} : ${JSON.stringify(p.themeToDark)};
      btn.setAttribute('aria-label', label); btn.title = label;
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('dr-theme', next); } catch (e) {}
      paint();
    });
    document.getElementById('langLink').addEventListener('click', function () {
      try { localStorage.setItem('dr-lang', ${JSON.stringify(p.other)}); } catch (e) {}
    });
    try { localStorage.setItem('dr-lang', ${JSON.stringify(lang)}); } catch (e) {}
    document.getElementById('year').textContent = String(new Date().getFullYear());
    paint();
  })();
</script>
</body>
</html>
`;
  // Keep the source free of a literal em dash; it is only shown as an example character.
  return html.replace(/\u2014/g, '&#8212;');
}

for (const lang of ['en', 'ro']) {
  const dir = PAGES[lang].path.replace(/^\/|\/$/g, '');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dir + '/index.html', page(lang));
  console.log('wrote', dir + '/index.html');
}
