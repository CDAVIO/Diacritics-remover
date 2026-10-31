// Text for the two main guide pages, in English and Romanian.
module.exports = {
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
