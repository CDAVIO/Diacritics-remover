// Text for the 15 single-reason guide pages. The order matches the reasons in guide-data.js.
// Each entry: slug, title (for <title>), description, h1, why, example, tips, faq.
module.exports = {
  en: [
    {
      slug: 'diacritics-in-cv-and-recruitment-portals',
      title: 'Diacritics in CVs and recruitment portals: why names break',
      description: 'Why recruitment portals and HR systems turn ș, ț and ă into question marks, and how to send your CV and name in a form every system accepts.',
      h1: 'Diacritics in CVs and recruitment portals',
      why: 'Many applicant tracking systems were built years ago for English text and store names in old encodings. When they meet ș, ț or ă they replace the letter with a question mark or a random symbol. The recruiter then sees a broken name, and search by name stops working.',
      example: 'Nume: Ștefan Țăndărică\nE-mail: stefan.tandarica@email.ro\nPoziție: Analist financiar, București',
      tips: ['Use the plain version of your name in portal fields and keep diacritics in the PDF CV, where fonts show them correctly.', 'Always write your email address without diacritics.', 'If a portal asks for a file name, use plain letters: CV_Stefan_Tandarica.pdf.'],
      faq: [['Will recruiters think my name is misspelled?', 'No. Romanian names without diacritics are common in international and online systems, and recruiters are used to them.'], ['Should I remove diacritics from the whole CV?', 'Not necessarily. Keep them in the PDF if people read it, and remove them in portal forms, file names and plain text fields.']]
    },
    {
      slug: 'diacritics-in-csv-and-excel',
      title: 'Diacritics in CSV and Excel: fix IaČ™i and broken imports',
      description: 'Why Excel and CRM imports show Iași as IaČ™i or Ia?i, and how to clean a CSV file of diacritics in one step, in your browser.',
      h1: 'Diacritics in CSV files and Excel',
      why: 'A CSV file is plain text with no label saying which encoding it uses. If it was saved as UTF-8 and Excel or a CRM reads it as Windows-1250 or Latin-1, every letter with a diacritic turns into two or three strange symbols. The same file can look fine on one computer and broken on another.',
      example: 'nume;oraș;județ\nIonuț Popescu;Iași;Iași\nMihaela Ștefănescu;Brașov;Brașov',
      tips: ['Upload the .csv file to DIACR: it downloads a clean copy with the same name.', 'Clean the file before importing it into a CRM, newsletter tool or accounting software.', 'Keep the original file if you also need a version with diacritics.'],
      faq: [['Will cleaning change my separators or columns?', 'No. Only letters with diacritics, smart quotes and special spaces change. Commas, semicolons and line breaks stay exactly as they are.'], ['My file already looks broken. Can DIACR fix it?', 'DIACR reads both UTF-8 and older Windows-1250 files. If the text has already turned into symbols like Č™, export it again from the source and clean it then.']]
    },
    {
      slug: 'diacritics-in-file-names-and-links',
      title: 'Diacritics in file names and links: why files break',
      description: 'Why a file like Ofertă_București.pdf breaks in email, zip files and links, and how to rename files with plain letters that work everywhere.',
      h1: 'Diacritics in file names and links',
      why: 'Operating systems store letters like ă in different ways. macOS often saves ă as two characters, a plus a breve, while Windows and many servers expect one. When a file travels by email, zip archive or upload, the name can arrive as garbage, the file can seem to be missing, or the link turns into a long code like Oferta%CC%86.',
      example: 'Ofertă_București_2026.pdf\nContract semnat – Țară Nouă SRL.docx\nPoze nuntă Ștefan și Ioana.zip',
      tips: ['Paste a list of file names into DIACR and copy them back clean.', 'Avoid special dashes in names: DIACR turns long dashes into a normal hyphen.', 'Keep names short and use underscores or hyphens instead of spaces for links.'],
      faq: [['Why does the same file name work on my Mac but not on Windows?', 'macOS and Windows store some letters with diacritics differently. Plain letters are stored the same way everywhere, so they always match.'], ['Does DIACR rename files on my computer?', 'No. It cleans the text of the names. You copy the clean names and rename the files yourself, or clean a .txt list of names.']]
    },
    {
      slug: 'diacritics-in-email-subjects-and-sms',
      title: 'Diacritics in SMS and email subjects: cost and broken text',
      description: 'Why one ă in an SMS cuts it from 160 to 70 characters and why email subjects with diacritics can arrive garbled. How to send clean text.',
      h1: 'Diacritics in SMS messages and email subjects',
      why: 'SMS uses a basic alphabet called GSM-7, with 160 characters per message. Letters like ă, ș, ț, â and î are not in it, so a single one switches the whole message to Unicode, where the limit drops to 70 characters. A 150-character reminder suddenly costs three messages instead of one. Email subjects have a similar problem in older mail apps, which show the diacritics as symbols.',
      example: 'Bună ziua! Programarea dvs. la Clinica Sănătatea este confirmată pentru mâine, ora 10:00. Vă așteptăm!',
      tips: ['Clean SMS templates once and reuse them for every campaign.', 'Check the length in DIACR: the counts under the panes show how long the clean text is.', 'Keep diacritics in the email body if your mail tool supports them, and remove them from the subject line if your audience uses older apps.'],
      faq: [['Is the 70-character limit real?', 'Yes. It is part of the SMS standard. Any character outside the basic GSM-7 alphabet, including ă, ș and ț, switches the message to Unicode, with 70 characters per message.'], ['Do Romanian readers understand messages without diacritics?', 'Yes. SMS and chat messages without diacritics are very common in Romania and read naturally.']]
    },
    {
      slug: 'diacritics-in-online-forms',
      title: 'Diacritics in online forms: bank, flight and visa names',
      description: 'Why bank transfers, flight bookings, visa and card forms reject names like Søren Müller, and how to type the version every form accepts.',
      h1: 'Diacritics in online forms',
      why: 'Many forms allow only the letters A to Z because the data goes into systems that cannot store anything else: airline reservation systems, card networks and some bank and government databases. Airline tickets and the machine-readable lines of a passport, for example, use only plain letters. If you type a letter with a diacritic, the form shows an error or quietly deletes the letter.',
      example: 'Nume pe card: ȘTEFAN ȚĂNDĂRICĂ\nPasager: Søren Müller\nAdresă: Strada Mărășești nr. 12, Iași',
      tips: ['When booking flights, check how your name appears in the machine-readable lines at the bottom of your passport and use the same spelling.', 'Use the clean version for card holder names and bank beneficiary names.', 'Uppercase stays uppercase in DIACR, so ȘTEFAN becomes STEFAN, not Stefan.'],
      faq: [['Is my ticket valid if my name has no diacritics?', 'Yes. Airline systems use plain letters for everyone, so a name without diacritics is the normal format.'], ['Why did the form delete a letter instead of replacing it?', 'Some forms simply delete characters they do not accept, so Mărășești becomes Mreti. Cleaning the text first with DIACR keeps every letter.']]
    },
    {
      slug: 'diacritics-in-urls-and-seo-slugs',
      title: 'Diacritics in URLs and SEO slugs: clean links that work',
      description: 'Why diacritics in a URL turn into codes like %C4%83 when shared, and how to build clean, readable SEO slugs from Romanian titles.',
      h1: 'Diacritics in URLs and SEO slugs',
      why: 'Web addresses can technically contain letters like ă, but browsers and apps encode them when the link is copied, so /cum-să-scrii becomes /cum-s%C4%83-scrii. These links look broken in emails and chats, are easy to mistype, and some tools cut them. Search engines work best with plain slugs, and most people search without diacritics anyway.',
      example: 'Cum să scrii un CV fără greșeli în 2026',
      slugNote: true,
      tips: ['Paste your article title into DIACR, then replace spaces with hyphens and use lowercase.', 'Keep slugs short: 3 to 6 important words are enough.', 'Do not change the slug of a page that is already indexed without adding a redirect.'],
      faq: [['Does Google understand Romanian words without diacritics?', 'Yes. Google matches searches with and without diacritics, and many Romanian users type without them.'], ['Should the page title keep the diacritics?', 'Yes. Keep correct Romanian in the visible title and text, and use the plain version only in the URL.']]
    },
    {
      slug: 'diacritics-in-usernames-and-email-addresses',
      title: 'Diacritics in usernames and email addresses: what works',
      description: 'Why addresses like andreea.mărgărit@firma.ro are rejected, and how companies and people should write usernames and emails with plain letters.',
      h1: 'Diacritics in usernames and email addresses',
      why: 'Newer standards allow email addresses with diacritics, but most mail servers, sign-up forms and login systems still accept only plain letters, numbers, dots and a few symbols. An address with ă may be rejected, or mail sent to it may never arrive. Usernames have the same limits in many apps.',
      example: 'andreea.mărgărit@firma.ro\nionuț.șerban\nștefan_țăranu_2026',
      tips: ['When creating accounts for a team, paste the list of names into DIACR and build the addresses from the clean version.', 'Use the same clean spelling everywhere, so people can find each other in directories.', 'Keep the display name with diacritics: Andreea Mărgărit is fine as a name, only the address needs plain letters.'],
      faq: [['Are email addresses with diacritics allowed at all?', 'Newer standards allow them, but support is still limited. Plain letters are the only choice that works with every server and form.'], ['What about names like Øystein or Müller?', 'DIACR turns them into Oystein and Muller, which you can then write in lowercase for addresses.']]
    },
    {
      slug: 'diacritics-and-duplicate-crm-records',
      title: 'Diacritics and duplicate records in CRMs and databases',
      description: 'Why Ionuț Popescu and Ionut Popescu end up as two contacts, why searching Brasov misses Brașov, and how clean names keep one record per person.',
      h1: 'Diacritics and duplicate records in a CRM',
      why: 'To a computer, ț and t are completely different characters. Unless a CRM is set up to ignore diacritics, the same person typed once with diacritics and once without becomes two contacts, and a search for the plain spelling misses the other one. Over time this splits history, invoices and emails across duplicate records.',
      example: 'Ionuț Popescu, Brașov\nIonut Popescu, Brasov\nIONUȚ POPESCU, BRAȘOV',
      tips: ['Clean names and cities before importing a list, so new records match existing ones.', 'Agree on one rule for the team, at least for the fields used for search and matching.', 'Run old exports through DIACR to find duplicates: after cleaning, identical lines are easy to spot.'],
      faq: [['Can the CRM not just ignore diacritics?', 'Some can, if search is set up to ignore accents. Many CRMs, spreadsheets and import tools do not, which is why cleaning the data is the safest fix.'], ['Will I lose the correct spelling?', 'Only in the fields you clean. You can keep a display name with diacritics and a clean field for matching and search.']]
    },
    {
      slug: 'diacritics-on-printers-and-receipts',
      title: 'Diacritics on receipts, labels and courier printers',
      description: 'Why fiscal printers, label printers and courier systems print Pitești as Pite?ti, and how to send addresses and product names they print correctly.',
      h1: 'Diacritics on printers, receipts and shipping labels',
      why: 'Fiscal printers, thermal label printers and many courier and warehouse systems have a small built-in character set. If a letter is not in it, they print a question mark or a box, or skip it. A wrong street name on a label can delay a parcel, and broken product names on receipts look unprofessional.',
      example: 'Destinatar: Mihai Ștefănescu\nStr. Mihai Viteazu nr. 5, Pitești, Argeș\nProdus: Brânză de burduf 500 g',
      tips: ['Clean product names before adding them to a POS or online shop that sends data to printers.', 'Clean delivery addresses before exporting them to a courier.', 'Test one label or receipt with the clean text before a large batch.'],
      faq: [['Can the printer not just use another font?', 'Many fiscal and label printers have fixed internal fonts and cannot load new ones, so the only reliable fix is plain text.'], ['Will couriers still find the address?', 'Yes. Couriers and postal services work with addresses without diacritics every day.']]
    },
    {
      slug: 'diacritics-in-code-and-databases',
      title: 'Diacritics in code, databases, APIs and JSON',
      description: 'Why developers keep variable names, database columns, API fields and JSON keys in plain ASCII, and how to turn labels like Județ into Judet.',
      h1: 'Diacritics in code, databases and APIs',
      why: 'Programming languages, databases and APIs often allow Unicode, but many tools in the chain do not: old drivers, command-line scripts, CSV exports, URL parameters and other teams’ systems. A column called Județ works on your laptop and breaks in a report, a backup script or a partner’s import. Plain ASCII names avoid the whole class of problems.',
      example: '{ "județ": "Iași", "localitate": "Pașcani", "stradă": "Ștefan cel Mare" }',
      tips: ['Keep keys, column names and identifiers in plain ASCII, and keep user-facing values in correct Romanian.', 'Use DIACR to turn a list of Romanian labels into clean identifiers quickly.', 'Save files as UTF-8 so values with diacritics stay correct.'],
      faq: [['Is Unicode in code wrong?', 'Not wrong, but risky. Plain identifiers work in every tool, terminal and system your data passes through.'], ['Can I clean JSON in DIACR?', 'Yes. DIACR changes only letters with diacritics, smart quotes and special spaces. It also cleans the values, so keep a copy if the values must keep their diacritics.']]
    },
    {
      slug: 'diacritics-in-bank-transfers-and-invoices',
      title: 'Diacritics in bank transfers, SEPA payments and invoices',
      description: 'Why bank transfers and SEPA payments reject ș and ț in names and payment details, and how to write beneficiary names and references that go through.',
      h1: 'Diacritics in bank transfers and invoices',
      why: 'Bank payments, especially SEPA transfers in Europe, are only guaranteed to support a basic set of Latin characters. Some banks convert diacritics automatically, others reject the payment or replace letters with question marks. The result can be a returned transfer, a delayed payment or an invoice number the accountant cannot match.',
      example: 'Beneficiar: Țară Nouă SRL\nDetalii: Plată factură nr. 2026-0145, servicii octombrie',
      tips: ['Clean beneficiary names and payment details before saving them as templates in online banking.', 'Keep invoice numbers and references in plain letters and digits.', 'When exporting payment files from accounting software, clean the names first.'],
      faq: [['Will the payment reach the right company without diacritics?', 'Yes. Payments are matched by IBAN, and banks process names without diacritics every day.'], ['Should the invoices themselves drop diacritics?', 'No. Keep correct Romanian on the invoice document. Clean only the fields that go into bank transfers and payment files.']]
    },
    {
      slug: 'diacritics-in-hashtags-and-social-media',
      title: 'Diacritics in hashtags, handles and social media posts',
      description: 'Why #BucureștiNoaptea and #BucurestiNoaptea are two different hashtags, and how to choose the version people actually search for.',
      h1: 'Diacritics in hashtags and on social media',
      why: 'Social networks treat every character literally, so a hashtag with ș and the same hashtag with s collect separate posts and separate audiences. Many people type on phones without diacritics, so the plain version usually has more posts and more searches. On most platforms, usernames and handles allow only plain letters in the first place.',
      example: '#BucureștiNoaptea #MâncareTradițională #Brașov2026 #ViațaLaȚară',
      tips: ['Use the plain version for hashtags you want people to find.', 'Check both spellings on the platform and pick the one with more posts.', 'Keep diacritics in the caption, where they make your writing correct and easy to read.'],
      faq: [['Should I use both versions of a hashtag?', 'You can, if the platform allows enough hashtags. Otherwise choose the plain one, which most people type.'], ['Can my username contain diacritics?', 'Most platforms do not allow it. Clean the name in DIACR and use the plain version for your handle.']]
    },
    {
      slug: 'cedilla-vs-comma-romanian-letters',
      title: 'Ş or Ș? Romanian cedilla vs comma-below letters explained',
      description: 'The difference between ş ţ (cedilla) and ș ț (comma below), why search fails on mixed text, and how to clean both forms at once.',
      h1: 'Cedilla or comma below: ş ţ versus ș ț',
      why: 'For years, fonts and keyboards had no proper Romanian ș and ț, so people used the Turkish ş and ţ with a cedilla instead. The correct comma-below letters came later, and today both forms exist side by side in documents, websites and databases. They look almost identical on screen, but to a computer they are different characters, so search, sorting and find and replace treat Ştefan and Ștefan as different words.',
      example: 'Ştefan Şerban, Ţara Haţegului (cu sedilă)\nȘtefan Șerban, Țara Hațegului (cu virgulă)',
      tips: ['Remove diacritics from both forms when you only need a plain version for search or matching.', 'If you need correct Romanian, replace ş ţ with ș ț in your editor using find and replace.', 'Check old documents and websites: text copied from them often still uses the cedilla forms.'],
      faq: [['Which form is correct in Romanian?', 'The comma-below letters ș and ț are the correct Romanian letters. The cedilla forms ş and ţ belong to Turkish and other languages.'], ['Does DIACR treat both the same?', 'Yes. Both ş and ș become s, both ţ and ț become t, in lower and upper case.']]
    },
    {
      slug: 'clean-text-copied-from-word-or-pdf',
      title: 'Clean text copied from Word or PDF: quotes, dashes, spaces',
      description: 'Why text copied from Word or PDF brings curly quotes, long dashes and invisible spaces that break forms, and how to clean it in one paste.',
      h1: 'Cleaning text copied from Word or PDF',
      why: 'Word processors automatically turn straight quotes into curly ones and hyphens into long dashes, and add non-breaking spaces. PDFs often add invisible characters like zero-width spaces or soft hyphens. You cannot see them, but forms, code, spreadsheets and search treat them as unknown symbols, so a field fails validation or two identical-looking words do not match.',
      example: '„Ofertă specială” – valabilă până pe 31.10…\nPreț: 1.250 lei, livrare „gratuită”',
      tips: ['Paste text from Word or PDF into DIACR before putting it into a form, a spreadsheet or code.', 'Look at the list under the result: it names every invisible character that was removed or replaced.', 'Turn off automatic smart quotes in Word if you often write text for systems.'],
      faq: [['What are invisible characters?', 'Characters like non-breaking spaces, zero-width spaces, soft hyphens and byte order marks. They take no visible space or look like a normal space, but they are different characters.'], ['Does DIACR remove normal spaces or line breaks?', 'No. Normal spaces, tabs and line breaks stay exactly as they are.']]
    },
    {
      slug: 'diacritics-and-foreign-keyboards',
      title: 'Diacritics and foreign keyboards in international teams',
      description: 'Why colleagues abroad cannot type ș or ț, and how plain names for files, folders, projects and channels make shared work easier to find.',
      h1: 'Diacritics, foreign keyboards and international teams',
      why: 'A UK, US or German keyboard has no key for ș, ț or ă. Colleagues have to copy the letter from somewhere or guess, so they search for Hategului and miss the folder called Hațegului. In shared drives, project tools and chat channels, plain names are the ones everybody can type.',
      example: 'Proiect Țara Hațegului\nDosar: Ofertă clienți Brașov\nCanal: #echipa-vânzări',
      tips: ['Use plain names for shared folders, project codes, channels and tags.', 'Keep diacritics in documents written for Romanian readers.', 'When you rename many items, paste the list into DIACR and copy it back clean.'],
      faq: [['Is it disrespectful to drop diacritics from names?', 'Not for technical names like folders or codes. For people’s names in documents and letters, keep the correct spelling when the system allows it.'], ['Can colleagues abroad still read Romanian without diacritics?', 'Yes. Plain Romanian is easy to read, and it is easier for everyone to type and search.']]
    }
  ],
  ro: [
    {
      slug: 'diacritice-in-cv-si-portaluri-de-recrutare',
      title: 'Diacritice în CV și portaluri de recrutare: nume stricate',
      description: 'De ce portalurile de recrutare și sistemele HR transformă ș, ț și ă în semne de întrebare și cum îți trimiți CV-ul și numele într-o formă acceptată peste tot.',
      h1: 'Diacritice în CV și în portalurile de recrutare',
      why: 'Multe sisteme de recrutare au fost construite acum mulți ani pentru text în engleză și salvează numele în codificări vechi. Când întâlnesc ș, ț sau ă, înlocuiesc litera cu un semn de întrebare sau cu un simbol aleator. Recrutorul vede un nume stricat, iar căutarea după nume nu mai funcționează.',
      example: 'Nume: Ștefan Țăndărică\nE-mail: stefan.tandarica@email.ro\nPoziție: Analist financiar, București',
      tips: ['Folosește varianta simplă a numelui în câmpurile din portal și păstrează diacriticele în CV-ul PDF, unde fonturile le afișează corect.', 'Scrie adresa de e-mail mereu fără diacritice.', 'Dacă portalul cere un nume de fișier, folosește litere simple: CV_Stefan_Tandarica.pdf.'],
      faq: [['Vor crede recrutorii că numele meu e scris greșit?', 'Nu. Numele românești fără diacritice sunt folosite des în sistemele internaționale și online, iar recrutorii sunt obișnuiți cu ele.'], ['Ar trebui să elimin diacriticele din tot CV-ul?', 'Nu neapărat. Păstrează-le în PDF dacă îl citesc oameni și elimină-le în formularele din portal, în numele fișierelor și în câmpurile de text simplu.']]
    },
    {
      slug: 'diacritice-in-csv-si-excel',
      title: 'Diacritice în CSV și Excel: rezolvă IaČ™i și importurile',
      description: 'De ce Excel și importurile în CRM arată Iași ca IaČ™i sau Ia?i și cum cureți un fișier CSV de diacritice dintr-un singur pas, în browser.',
      h1: 'Diacritice în fișiere CSV și în Excel',
      why: 'Un fișier CSV este text simplu, fără nicio etichetă care să spună ce codificare folosește. Dacă a fost salvat în UTF-8, iar Excel sau un CRM îl citește ca Windows-1250 sau Latin-1, fiecare literă cu diacritice devine două sau trei simboluri ciudate. Același fișier poate arăta bine pe un calculator și stricat pe altul.',
      example: 'nume;oraș;județ\nIonuț Popescu;Iași;Iași\nMihaela Ștefănescu;Brașov;Brașov',
      tips: ['Încarcă fișierul .csv în DIACR: descarcă o copie curată cu același nume.', 'Curăță fișierul înainte să-l imporți într-un CRM, într-un program de newsletter sau de contabilitate.', 'Păstrează fișierul original dacă ai nevoie și de o variantă cu diacritice.'],
      faq: [['Se schimbă separatorii sau coloanele?', 'Nu. Se schimbă doar literele cu diacritice, ghilimelele tipografice și spațiile speciale. Virgulele, punctele și virgulă și rândurile noi rămân exact la fel.'], ['Fișierul meu arată deja stricat. Îl poate repara DIACR?', 'DIACR citește atât fișiere UTF-8, cât și fișiere vechi Windows-1250. Dacă textul a devenit deja simboluri ca Č™, exportă-l din nou din sursă și curăță-l atunci.']]
    },
    {
      slug: 'diacritice-in-nume-de-fisiere-si-linkuri',
      title: 'Diacritice în nume de fișiere și linkuri: de ce se strică',
      description: 'De ce un fișier ca Ofertă_București.pdf se strică în e-mail, în arhive zip și în linkuri și cum redenumești fișierele cu litere simple care merg peste tot.',
      h1: 'Diacritice în nume de fișiere și în linkuri',
      why: 'Sistemele de operare salvează literele ca ă în moduri diferite. macOS salvează des ă ca două caractere, a plus căciulița, în timp ce Windows și multe servere așteaptă unul singur. Când fișierul circulă prin e-mail, arhivă zip sau upload, numele poate ajunge stricat, fișierul poate părea că lipsește, iar linkul devine un cod lung ca Oferta%CC%86.',
      example: 'Ofertă_București_2026.pdf\nContract semnat – Țară Nouă SRL.docx\nPoze nuntă Ștefan și Ioana.zip',
      tips: ['Lipește o listă de nume de fișiere în DIACR și copiază-le înapoi curate.', 'Evită liniile speciale în nume: DIACR transformă liniile lungi în cratimă normală.', 'Păstrează numele scurte și folosește _ sau - în loc de spații pentru linkuri.'],
      faq: [['De ce același nume de fișier merge pe Mac, dar nu pe Windows?', 'macOS și Windows salvează diferit unele litere cu diacritice. Literele simple sunt salvate la fel peste tot, deci se potrivesc mereu.'], ['DIACR redenumește fișierele de pe calculator?', 'Nu. Curăță textul numelor. Copiezi numele curate și redenumești fișierele tu, sau cureți o listă de nume dintr-un fișier .txt.']]
    },
    {
      slug: 'diacritice-in-subiect-email-si-sms',
      title: 'Diacritice în SMS și e-mail: cost dublu și text stricat',
      description: 'De ce un singur ă într-un SMS îl scurtează de la 160 la 70 de caractere și de ce subiectele cu diacritice pot ajunge stricate. Cum trimiți text curat.',
      h1: 'Diacritice în SMS-uri și în subiectul e-mailurilor',
      why: 'SMS-ul folosește un alfabet de bază numit GSM-7, cu 160 de caractere pe mesaj. Literele ă, ș, ț, â și î nu fac parte din el, așa că una singură trece tot mesajul pe Unicode, unde limita scade la 70 de caractere. Un memento de 150 de caractere costă brusc trei mesaje în loc de unul. Subiectele de e-mail au o problemă asemănătoare în aplicațiile de mail mai vechi, care afișează diacriticele ca simboluri.',
      example: 'Bună ziua! Programarea dvs. la Clinica Sănătatea este confirmată pentru mâine, ora 10:00. Vă așteptăm!',
      tips: ['Curăță șabloanele de SMS o singură dată și refolosește-le la fiecare campanie.', 'Verifică lungimea în DIACR: numerele de sub panouri arată cât de lung e textul curat.', 'Păstrează diacriticele în corpul e-mailului dacă aplicația le suportă și elimină-le din subiect dacă publicul folosește aplicații vechi.'],
      faq: [['Limita de 70 de caractere e reală?', 'Da. Face parte din standardul SMS. Orice caracter din afara alfabetului GSM-7, inclusiv ă, ș și ț, trece mesajul pe Unicode, cu 70 de caractere pe mesaj.'], ['Înțeleg românii mesajele fără diacritice?', 'Da. SMS-urile și mesajele fără diacritice sunt foarte des întâlnite în România și se citesc natural.']]
    },
    {
      slug: 'diacritice-in-formulare-online',
      title: 'Diacritice în formulare online: bancă, zbor, viză și card',
      description: 'De ce transferurile bancare, rezervările de zbor, formularele de viză și de card resping nume ca Søren Müller și cum scrii varianta acceptată de orice formular.',
      h1: 'Diacritice în formularele online',
      why: 'Multe formulare acceptă doar literele de la A la Z, pentru că datele ajung în sisteme care nu pot salva altceva: sistemele de rezervări ale companiilor aeriene, rețelele de carduri și unele baze de date ale băncilor și instituțiilor. Biletele de avion și rândurile citite automat din pașaport, de exemplu, folosesc doar litere simple. Dacă scrii o literă cu diacritice, formularul arată o eroare sau o șterge pe tăcute.',
      example: 'Nume pe card: ȘTEFAN ȚĂNDĂRICĂ\nPasager: Søren Müller\nAdresă: Strada Mărășești nr. 12, Iași',
      tips: ['La rezervarea zborurilor, verifică cum apare numele în rândurile citite automat din partea de jos a pașaportului și folosește aceeași scriere.', 'Folosește varianta curată pentru numele titularului de card și pentru numele beneficiarului unui transfer.', 'Majusculele rămân majuscule în DIACR, deci ȘTEFAN devine STEFAN, nu Stefan.'],
      faq: [['Biletul e valabil dacă numele meu nu are diacritice?', 'Da. Sistemele companiilor aeriene folosesc litere simple pentru toată lumea, deci numele fără diacritice este formatul normal.'], ['De ce formularul a șters o literă în loc să o înlocuiască?', 'Unele formulare șterg pur și simplu caracterele pe care nu le acceptă, astfel Mărășești devine Mreti. Dacă cureți textul înainte cu DIACR, păstrezi fiecare literă.']]
    },
    {
      slug: 'diacritice-in-url-si-slug-seo',
      title: 'Diacritice în URL și slug SEO: linkuri curate care merg',
      description: 'De ce diacriticele dintr-un URL devin coduri ca %C4%83 când e distribuit și cum construiești slug-uri SEO curate și ușor de citit din titluri românești.',
      h1: 'Diacritice în URL-uri și în slug-urile SEO',
      why: 'Adresele web pot conține tehnic litere ca ă, dar browserele și aplicațiile le codifică atunci când linkul e copiat, deci /cum-să-scrii devine /cum-s%C4%83-scrii. Linkurile acestea par stricate în e-mailuri și în chat, se scriu ușor greșit, iar unele unelte le taie. Motoarele de căutare lucrează cel mai bine cu slug-uri simple, iar majoritatea oamenilor caută oricum fără diacritice.',
      example: 'Cum să scrii un CV fără greșeli în 2026',
      slugNote: true,
      tips: ['Lipește titlul articolului în DIACR, apoi înlocuiește spațiile cu cratime și folosește litere mici.', 'Păstrează slug-ul scurt: 3 până la 6 cuvinte importante sunt suficiente.', 'Nu schimba slug-ul unei pagini deja indexate fără un redirect.'],
      faq: [['Înțelege Google cuvintele românești fără diacritice?', 'Da. Google potrivește căutările cu și fără diacritice, iar mulți utilizatori români scriu fără ele.'], ['Titlul paginii trebuie să păstreze diacriticele?', 'Da. Păstrează româna corectă în titlul și textul vizibil și folosește varianta simplă doar în URL.']]
    },
    {
      slug: 'diacritice-in-nume-utilizator-si-email',
      title: 'Diacritice în nume de utilizator și adrese de e-mail',
      description: 'De ce adrese ca andreea.mărgărit@firma.ro sunt respinse și cum ar trebui scrise numele de utilizator și adresele de e-mail, cu litere simple.',
      h1: 'Diacritice în numele de utilizator și în adresele de e-mail',
      why: 'Standardele noi permit adrese de e-mail cu diacritice, dar majoritatea serverelor de mail, a formularelor de înregistrare și a sistemelor de autentificare acceptă încă doar litere simple, cifre, puncte și câteva simboluri. O adresă cu ă poate fi respinsă, iar mesajele trimise către ea pot să nu ajungă niciodată. Numele de utilizator au aceleași limite în multe aplicații.',
      example: 'andreea.mărgărit@firma.ro\nionuț.șerban\nștefan_țăranu_2026',
      tips: ['Când creezi conturi pentru o echipă, lipește lista de nume în DIACR și construiește adresele din varianta curată.', 'Folosește aceeași scriere curată peste tot, ca oamenii să se găsească ușor în liste și directoare.', 'Păstrează numele afișat cu diacritice: Andreea Mărgărit e în regulă ca nume, doar adresa are nevoie de litere simple.'],
      faq: [['Sunt permise adresele de e-mail cu diacritice?', 'Standardele noi le permit, dar suportul e încă limitat. Literele simple sunt singura variantă care merge cu orice server și formular.'], ['Ce fac cu nume ca Øystein sau Müller?', 'DIACR le transformă în Oystein și Muller, pe care le poți scrie apoi cu litere mici pentru adrese.']]
    },
    {
      slug: 'diacritice-si-duplicate-in-crm',
      title: 'Diacritice și înregistrări duplicate în CRM și baze de date',
      description: 'De ce Ionuț Popescu și Ionut Popescu devin două contacte, de ce căutarea Brasov nu găsește Brașov și cum păstrezi o singură înregistrare pe persoană.',
      h1: 'Diacritice și înregistrări duplicate în CRM',
      why: 'Pentru un calculator, ț și t sunt caractere complet diferite. Dacă un CRM nu e setat să ignore diacriticele, aceeași persoană scrisă o dată cu diacritice și o dată fără devine două contacte, iar căutarea variantei simple nu o găsește pe cealaltă. În timp, istoricul, facturile și e-mailurile se împart între înregistrări duplicate.',
      example: 'Ionuț Popescu, Brașov\nIonut Popescu, Brasov\nIONUȚ POPESCU, BRAȘOV',
      tips: ['Curăță numele și orașele înainte de a importa o listă, ca înregistrările noi să se potrivească cu cele existente.', 'Stabiliți o singură regulă în echipă, cel puțin pentru câmpurile folosite la căutare și potrivire.', 'Trece exporturile vechi prin DIACR ca să găsești duplicatele: după curățare, rândurile identice se văd imediat.'],
      faq: [['Nu poate CRM-ul să ignore diacriticele?', 'Unele pot, dacă sunt setate să caute fără să țină cont de accente. Multe CRM-uri, foi de calcul și unelte de import nu fac asta, de aceea curățarea datelor e soluția cea mai sigură.'], ['Pierd scrierea corectă?', 'Doar în câmpurile pe care le cureți. Poți păstra un nume afișat cu diacritice și un câmp curat pentru potrivire și căutare.']]
    },
    {
      slug: 'diacritice-la-imprimante-si-bonuri',
      title: 'Diacritice pe bonuri, etichete și imprimante de curierat',
      description: 'De ce imprimantele fiscale, cele de etichete și sistemele de curierat tipăresc Pitești ca Pite?ti și cum trimiți adrese și produse pe care le tipăresc corect.',
      h1: 'Diacritice la imprimante, pe bonuri și pe etichetele de livrare',
      why: 'Imprimantele fiscale, imprimantele termice de etichete și multe sisteme de curierat și depozit au un set mic de caractere încorporat. Dacă o literă nu e în el, tipăresc un semn de întrebare sau un pătrățel, ori o sar. Un nume de stradă greșit pe etichetă poate întârzia coletul, iar numele de produse stricate pe bon arată neprofesionist.',
      example: 'Destinatar: Mihai Ștefănescu\nStr. Mihai Viteazu nr. 5, Pitești, Argeș\nProdus: Brânză de burduf 500 g',
      tips: ['Curăță numele produselor înainte să le adaugi într-un POS sau magazin online care trimite date la imprimante.', 'Curăță adresele de livrare înainte să le exporți către curier.', 'Testează o etichetă sau un bon cu textul curat înainte de un lot mare.'],
      faq: [['Nu poate imprimanta să folosească alt font?', 'Multe imprimante fiscale și de etichete au fonturi interne fixe și nu pot încărca altele, deci singura soluție sigură e textul simplu.'], ['Mai găsesc curierii adresa?', 'Da. Curierii și poșta lucrează zilnic cu adrese fără diacritice.']]
    },
    {
      slug: 'diacritice-in-cod-si-baze-de-date',
      title: 'Diacritice în cod, baze de date, API și JSON',
      description: 'De ce programatorii păstrează numele de variabile, coloanele, câmpurile din API și cheile JSON în ASCII simplu și cum transformi etichete ca Județ în Judet.',
      h1: 'Diacritice în cod, în baze de date și în API-uri',
      why: 'Limbajele de programare, bazele de date și API-urile acceptă des Unicode, dar multe unelte din lanț nu: drivere vechi, scripturi din linia de comandă, exporturi CSV, parametri din URL și sistemele altor echipe. O coloană numită Județ merge pe laptopul tău și se strică într-un raport, într-un script de backup sau la importul unui partener. Numele în ASCII simplu evită toată această categorie de probleme.',
      example: '{ "județ": "Iași", "localitate": "Pașcani", "stradă": "Ștefan cel Mare" }',
      tips: ['Păstrează cheile, numele de coloane și identificatorii în ASCII simplu, iar valorile afișate utilizatorilor în româna corectă.', 'Folosește DIACR ca să transformi rapid o listă de etichete românești în identificatori curați.', 'Salvează fișierele în UTF-8, ca valorile cu diacritice să rămână corecte.'],
      faq: [['Este greșit Unicode în cod?', 'Nu e greșit, dar e riscant. Identificatorii simpli merg în orice unealtă, terminal și sistem prin care trec datele.'], ['Pot curăța JSON în DIACR?', 'Da. DIACR schimbă doar literele cu diacritice, ghilimelele tipografice și spațiile speciale. Le curăță și în valori, deci păstrează o copie dacă valorile trebuie să rămână cu diacritice.']]
    },
    {
      slug: 'diacritice-in-transferuri-bancare-si-facturi',
      title: 'Diacritice în transferuri bancare, plăți SEPA și facturi',
      description: 'De ce transferurile bancare și plățile SEPA resping ș și ț în nume și în detaliile plății și cum scrii numele beneficiarului și referințele ca plata să treacă.',
      h1: 'Diacritice în transferurile bancare și în facturi',
      why: 'Plățile bancare, mai ales transferurile SEPA din Europa, garantează doar un set de bază de caractere latine. Unele bănci transformă automat diacriticele, altele resping plata sau înlocuiesc literele cu semne de întrebare. Rezultatul poate fi un transfer returnat, o plată întârziată sau un număr de factură pe care contabilul nu-l poate potrivi.',
      example: 'Beneficiar: Țară Nouă SRL\nDetalii: Plată factură nr. 2026-0145, servicii octombrie',
      tips: ['Curăță numele beneficiarilor și detaliile plății înainte să le salvezi ca șabloane în internet banking.', 'Păstrează numerele de factură și referințele doar din litere simple și cifre.', 'Când exporți fișiere de plăți din programul de contabilitate, curăță întâi numele.'],
      faq: [['Ajunge plata la firma corectă fără diacritice?', 'Da. Plățile se potrivesc după IBAN, iar băncile procesează zilnic nume fără diacritice.'], ['Și facturile ar trebui să fie fără diacritice?', 'Nu. Păstrează româna corectă pe documentul facturii. Curăță doar câmpurile care ajung în transferuri și în fișierele de plăți.']]
    },
    {
      slug: 'diacritice-in-hashtag-uri-si-retele-sociale',
      title: 'Diacritice în hashtag-uri, conturi și postări pe rețele sociale',
      description: 'De ce #BucureștiNoaptea și #BucurestiNoaptea sunt două hashtag-uri diferite și cum alegi varianta pe care oamenii o caută cu adevărat.',
      h1: 'Diacritice în hashtag-uri și pe rețelele sociale',
      why: 'Rețelele sociale tratează fiecare caracter exact așa cum e, deci un hashtag cu ș și același hashtag cu s adună postări diferite și publicuri diferite. Mulți oameni scriu pe telefon fără diacritice, așa că varianta simplă are de obicei mai multe postări și mai multe căutări. Pe majoritatea platformelor, numele de utilizator acceptă oricum doar litere simple.',
      example: '#BucureștiNoaptea #MâncareTradițională #Brașov2026 #ViațaLaȚară',
      tips: ['Folosește varianta simplă pentru hashtag-urile pe care vrei să le găsească oamenii.', 'Verifică ambele variante pe platformă și alege-o pe cea cu mai multe postări.', 'Păstrează diacriticele în textul postării, unde fac scrisul corect și ușor de citit.'],
      faq: [['Ar trebui să folosesc ambele variante ale unui hashtag?', 'Poți, dacă platforma permite destule hashtag-uri. Altfel alege-o pe cea simplă, pe care o scriu cei mai mulți.'], ['Poate numele de utilizator să conțină diacritice?', 'Majoritatea platformelor nu permit. Curăță numele în DIACR și folosește varianta simplă pentru cont.']]
    },
    {
      slug: 's-si-t-cu-sedila-sau-cu-virgula',
      title: 'Ş sau Ș? Diferența dintre sedilă și virgulă în română',
      description: 'Diferența dintre ş ţ (cu sedilă) și ș ț (cu virgulă), de ce căutarea dă greș în textele amestecate și cum cureți ambele forme deodată.',
      h1: 'Cu sedilă sau cu virgulă: ş ţ față de ș ț',
      why: 'Ani de zile, fonturile și tastaturile nu au avut literele românești corecte ș și ț, așa că s-au folosit în locul lor literele turcești ş și ţ, cu sedilă. Literele corecte cu virgulă au apărut mai târziu, iar astăzi ambele forme există una lângă alta în documente, site-uri și baze de date. Pe ecran arată aproape la fel, dar pentru calculator sunt caractere diferite, deci căutarea, sortarea și find and replace văd Ştefan și Ștefan drept cuvinte diferite.',
      example: 'Ştefan Şerban, Ţara Haţegului (cu sedilă)\nȘtefan Șerban, Țara Hațegului (cu virgulă)',
      tips: ['Elimină diacriticele din ambele forme când ai nevoie doar de o variantă simplă pentru căutare sau potrivire.', 'Dacă ai nevoie de româna corectă, înlocuiește ş ţ cu ș ț în editor, cu find and replace.', 'Verifică documentele și site-urile vechi: textul copiat din ele folosește des formele cu sedilă.'],
      faq: [['Care formă este corectă în română?', 'Literele cu virgulă, ș și ț, sunt literele românești corecte. Formele cu sedilă, ş și ţ, aparțin limbii turce și altor limbi.'], ['DIACR le tratează la fel?', 'Da. Atât ş, cât și ș devin s, atât ţ, cât și ț devin t, mari și mici.']]
    },
    {
      slug: 'curatare-text-copiat-din-word-sau-pdf',
      title: 'Curăță textul copiat din Word sau PDF: ghilimele, linii, spații',
      description: 'De ce textul copiat din Word sau PDF aduce ghilimele tipografice, linii lungi și spații invizibile care strică formularele și cum îl cureți dintr-o lipire.',
      h1: 'Curățarea textului copiat din Word sau PDF',
      why: 'Editoarele de text transformă automat ghilimelele drepte în ghilimele tipografice și cratimele în linii lungi și adaugă spații indivizibile. Fișierele PDF adaugă des caractere invizibile, cum ar fi spațiile de lățime zero sau cratimele discrete. Nu le vezi, dar formularele, codul, foile de calcul și căutarea le tratează drept simboluri necunoscute, deci un câmp nu trece validarea sau două cuvinte care arată identic nu se potrivesc.',
      example: '„Ofertă specială” – valabilă până pe 31.10…\nPreț: 1.250 lei, livrare „gratuită”',
      tips: ['Lipește textul din Word sau PDF în DIACR înainte să-l pui într-un formular, într-o foaie de calcul sau în cod.', 'Uită-te la lista de sub rezultat: arată fiecare caracter invizibil eliminat sau înlocuit.', 'Dezactivează ghilimelele automate în Word dacă scrii des text pentru sisteme.'],
      faq: [['Ce sunt caracterele invizibile?', 'Caractere ca spațiile indivizibile, spațiile de lățime zero, cratimele discrete și marcajele BOM. Nu ocupă spațiu vizibil sau arată ca un spațiu normal, dar sunt caractere diferite.'], ['DIACR elimină spațiile normale sau rândurile noi?', 'Nu. Spațiile normale, tab-urile și rândurile noi rămân exact la fel.']]
    },
    {
      slug: 'diacritice-si-tastaturi-straine',
      title: 'Diacritice și tastaturi străine în echipe internaționale',
      description: 'De ce colegii din străinătate nu pot scrie ș sau ț și cum numele simple pentru fișiere, foldere, proiecte și canale fac munca comună mai ușor de găsit.',
      h1: 'Diacritice, tastaturi străine și echipe internaționale',
      why: 'O tastatură din Marea Britanie, SUA sau Germania nu are tastă pentru ș, ț sau ă. Colegii trebuie să copieze litera de undeva sau să ghicească, așa că o caută ca Hategului și nu găsesc folderul numit Hațegului. În drive-urile comune, în uneltele de proiect și în canalele de chat, numele simple sunt cele pe care le poate scrie oricine.',
      example: 'Proiect Țara Hațegului\nDosar: Ofertă clienți Brașov\nCanal: #echipa-vânzări',
      tips: ['Folosește nume simple pentru folderele comune, codurile de proiect, canale și etichete.', 'Păstrează diacriticele în documentele scrise pentru cititori români.', 'Când redenumești multe elemente, lipește lista în DIACR și copiaz-o înapoi curată.'],
      faq: [['E lipsit de respect să elimini diacriticele din nume?', 'Nu pentru numele tehnice, ca foldere sau coduri. Pentru numele oamenilor în documente și scrisori, păstrează scrierea corectă când sistemul permite.'], ['Pot colegii din străinătate să citească româna fără diacritice?', 'Da. Româna fără diacritice se citește ușor și este mai simplu de scris și de căutat pentru toată lumea.']]
    }
  ]
};
