const drugs = [
  {
    "name": "Торасса",
    "sostav": "Торасемид",
    "form": "Раствор для инъекций",
    "dosage": "5 мг\\мл 4 мл",
    "group": "Диуретическое средство",
    "indications": "Лечение при отеках и/или выпотах, вызванных сердечной недостаточностью, если необходимо в/в применение лекарственного средства, например, в случае отека легких вследствие острой сердечной недостаточности.",
    "photo": "https://jurabek.uz/d/torassa_4_ml_no10_8162uzp01.png",
    "url": "https://jurabek.uz/magazin/product/torassa"
  },
  {
    "name": "Ларгин",
    "sostav": "Л-аргинин гидрохлорид",
    "form": "Раствор для инъекций",
    "dosage": "4,2% 100 мл",
    "group": "Донатор окиси азота",
    "indications": "Атеросклероз сосудов сердца и головного мозга, атеросклероз периферических сосудов, в том числе с проявлениями перемежающейся хромоты, диабетическая ангиопатия, ишемическая болезнь сердца, артериальная гипертензия, состояния после перенесенных острого инфаркта миокарда и острого нарушения мозгового кровообращения, кардиомиопатия, хроническая сердечная недостаточность, гиперхолестеринемия, стенокардия, хронические обструктивные заболевания легких, интерстициальная пневмония, идиопатическая легочная гипертензия, хроническая постэмболическая легочная гипертензия, острые и хронические гепатиты различной этиологии, гипераммониемия, гипоксические состояния, астенические состояния в процессе реконвалесценции, в том числе после инфекционных заболеваний и оперативных вмешательств, метаболический алкалоз, снижение функции вилочковой железы, задержка развития плода и преэклампсия.",
    "photo": "https://jurabek.uz/d/largin.png",
    "url": "https://jurabek.uz/magazin/product/largin"
  },
  {
    "name": "Карблок",
    "sostav": "Эсмолол",
    "form": "раствор для инъекций",
    "dosage": "10 мг\\мл 10 мл",
    "group": "Бета-адреноблокатор",
    "indications": "при суправентрикулярных тахикардиях (за исключением синдрома предвозбуждения желудочков);\nдля быстрого контроля желудочкового ритма у пациентов с фибрилляцией предсердий и трепетанием предсердий в периоперационном и постоперационном периодах;\nв любых других ситуациях, когда требуется кратковременный контроль частоты желудочковых сокращений при помощи короткодействующего лекарственного препарата.\nКарблок также показан для коррекции тахикардии и артериальной гипертензии в периоперационном периоде и при синусовой тахикардии некомпенсаторного характера, когда, по мнению врача, учащенное сердцебиение требует специального вмешательства.",
    "photo": "https://jurabek.uz/d/karblok_10ml_no5.png",
    "url": "https://jurabek.uz/magazin/product/karblok"
  },
  {
    "name": "Добутамин",
    "sostav": "Добутамин",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "250 мг",
    "group": "Кардиотоник",
    "indications": "острая сердечная недостаточность при инфаркте миокарда, кардиогенном шоке, операции на открытом сердце, последствия оперативного вмешательства на сердце;\nострая декомпенсация хронической сердечной недостаточности;\nв качестве вспомогательного средства: временное поддерживающее лечение пациентов с хронической сердечной недостаточностью, получающих стандартную терапию; острая сердечная недостаточность некардиогенного генеза (в т. ч. при септическом шоке); низкий минутный объем сердца на фоне искусственной вентиляции легких при положительном остаточном давлении на выдохе;\nдля проведения пробы «стресс-эхокардиографии» в качестве альтернативы функциональной пробы с физической нагрузкой (должно проводиться только в специализированных отделениях, имеющих опыт проведения указанного функционального исследования, т. к. его проведение требует особых мер предосторожности).\nУ детей всех возрастных групп (от рождения до 18 лет):\n\nпри необходимости инотропной поддержки на фоне низкого сердечного выброса и гипоперфузии при следующих состояниях: декомпенсированная сердечная недостаточность предстоящая операция на сердце кардиомиопатия, кардиогенный или септический шок.",
    "photo": "https://jurabek.uz/d/dobutamin_no1.png",
    "url": "https://jurabek.uz/magazin/product/dobutamin"
  },
  {
    "name": "Амиодарон",
    "sostav": "Амиодарон",
    "form": "раствор для инъекций",
    "dosage": "5% 3 мл",
    "group": "Антиаритмическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/amiodaron_no5.jpg",
    "url": "https://jurabek.uz/magazin/product/amiodaron"
  },
  {
    "name": "Энерфос",
    "sostav": "ФДП (фруктоза 1,6 -дифосфат)",
    "form": "Порошок для приготовления инфузионного раствора",
    "dosage": "5 % (5 г\\1000 мл) 1000 мл",
    "group": "Средство для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/enerfos.png",
    "url": "https://jurabek.uz/magazin/product/enerfos"
  },
  {
    "name": "Оксиум",
    "sostav": "Мельдоний",
    "form": "раствор для внутримышечного, внутривенного и парабульбарного введения",
    "dosage": "10% (100мг\\мл) 5мл",
    "group": "Средство для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/oksium.png",
    "url": "https://jurabek.uz/magazin/product/oksium"
  },
  {
    "name": "Каспаргин (инфузионный раствор)",
    "sostav": "Калия, магния аспартат",
    "form": "раствор для инфузий",
    "dosage": "100 мл, 250 мл, 500 мл",
    "group": "Препараты калия, магния",
    "indications": "",
    "photo": "https://jurabek.uz/d/kaspargin_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/kaspargin-infuzionnyj-rastvor"
  },
  {
    "name": "Каспаргин (концентрат)",
    "sostav": "Калия, магния аспартат",
    "form": "концентрат для приготовления раствора для инфузий",
    "dosage": "5 мл, 10 мл",
    "group": "Препараты калия, магния",
    "indications": "",
    "photo": "https://jurabek.uz/d/kaspargin_5_ml_no5.png",
    "url": "https://jurabek.uz/magazin/product/kaspargin-koncentrat"
  },
  {
    "name": "Кромостаб",
    "sostav": "Натрия кромогликат",
    "form": "капли глазные и назальные 2% и 4 %",
    "dosage": "2% (20мг\\мл) 5мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/kromostab_4_kapli.png",
    "url": "https://jurabek.uz/magazin/product/kromostab2"
  },
  {
    "name": "Нубетал",
    "sostav": "Сальбутамол",
    "form": "раствор для ингаляций",
    "dosage": "0,1%\\0,2% 2,5 мл",
    "group": "Бронхолитическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/nubetal.png",
    "url": "https://jurabek.uz/magazin/product/nubetal"
  },
  {
    "name": "Изивент Дуо",
    "sostav": "Сальбутамол+ипратропия бромид",
    "form": "раствор для ингаляций",
    "dosage": "2,5 мл",
    "group": "Бронхолитическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/izivent_duo_25_ml_no10_890uzp01_ot_27072020_g.png",
    "url": "https://jurabek.uz/magazin/product/izivent-duo"
  },
  {
    "name": "Изивент",
    "sostav": "Ипратропия бромид",
    "form": "раствор для ингаляций в ампулах (небулах)",
    "dosage": "0,25мг\\мл 2 мл",
    "group": "Бронхолитическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/izivent_025mgml_2_ml_no10_432uzp01_ot_20082020_g.png",
    "url": "https://jurabek.uz/magazin/product/izivent"
  },
  {
    "name": "Ликвин",
    "sostav": "Ацетилцистеин",
    "form": "раствор для инъекций и ингаляций",
    "dosage": "300мг/3мл",
    "group": "Муколитическое и отхаркивающиее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/likvin_sirop_5_ml_no10_819uzp01_ot_30092020_g.png",
    "url": "https://jurabek.uz/magazin/product/likvin"
  },
  {
    "name": "Буфесал 3 Гиал, Буфесал 7 Гиал",
    "sostav": "Натрия хлорид, натрия гидрокарбонат, гиалуроновая кислота",
    "form": "раствор для ингаляций и назальных ирригаций",
    "dosage": "5 мл",
    "group": "Муколитическое и отхаркивающиее средство",
    "indications": "",
    "photo": "https://jurabek.uz/magazin/product/bufesal-3-gial-bufesal-7-gial",
    "url": "https://jurabek.uz/magazin/product/bufesal-3-gial-bufesal-7-gial"
  },
  {
    "name": "Буфесал",
    "sostav": "Натрия хлорид, натрия гидрокарбонат",
    "form": "раствор для ингаляций",
    "dosage": "7% 4мл",
    "group": "Муколитическое и отхаркивающиее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/bufesal.png",
    "url": "https://jurabek.uz/magazin/product/bufesal"
  },
  {
    "name": "Брокс/Брокс Кидс",
    "sostav": "Амброксол",
    "form": "сироп для приема внутрь",
    "dosage": "30 мг\\5 мл 5мл, 10мл",
    "group": "Муколитическое и отхаркивающиее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/broks_kids_30_mg_10_ml_1.png",
    "url": "https://jurabek.uz/broks-broks-kids"
  },
  {
    "name": "Февалган",
    "sostav": "Парацетомол",
    "form": "сироп для приема внутрь",
    "dosage": "120 мг\\5мл",
    "group": "Анальгетик -антипиретик",
    "indications": "",
    "photo": "https://jurabek.uz/d/fevalgan_sirop.png",
    "url": "https://jurabek.uz/magazin/product/fevalgan1"
  },
  {
    "name": "Ифента",
    "sostav": "Ибупрофен",
    "form": "суспензия для приема внутрь",
    "dosage": "100 мг\\5мл",
    "group": "НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/ifenta.png",
    "url": "https://jurabek.uz/magazin/product/ifenta"
  },
  {
    "name": "Энтеробакт",
    "sostav": "Бациллус Клаузи",
    "form": "суспензия для приема внутрь",
    "dosage": "2 млрд\\5мл 5 мл",
    "group": "Эубиотик",
    "indications": "",
    "photo": "https://jurabek.uz/d/enterobakt.png",
    "url": "https://jurabek.uz/magazin/product/enterobakt"
  },
  {
    "name": "Хеликаф",
    "sostav": "Плюща листьев экстракт",
    "form": "сироп для приема внутрь",
    "dosage": "7мг\\мл 5мл",
    "group": "Муколитическое и отхаркивающиее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/helikaf_5_ml_uzr01_ot_24072020_g.png",
    "url": "https://jurabek.uz/magazin/product/helikaf"
  },
  {
    "name": "Брокс Кидс",
    "sostav": "Амброксол",
    "form": "сироп для приема внутрь",
    "dosage": "15 мг\\5 мл",
    "group": "Муколитическое и отхаркивающиее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/broks_kids_15_mg_5_ml.png",
    "url": "https://jurabek.uz/magazin/product/broks-kids"
  },
  {
    "name": "Косептол Юни",
    "sostav": "Сульфаметоксазол+триметоприм",
    "form": "суспензия для приема внутрь",
    "dosage": "5 мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/koseptol_yuni_5_ml.png",
    "url": "https://jurabek.uz/magazin/product/koseptol-yuni"
  },
  {
    "name": "Ирригол",
    "sostav": "Сорбитол + Маннитол",
    "form": "раствор для ирригации в пакетах",
    "dosage": "1000 мл, 3000 мл",
    "group": "Раствор для ирригаций",
    "indications": "",
    "photo": "https://jurabek.uz/d/irrigol_1000_ml.png",
    "url": "https://jurabek.uz/magazin/product/irrigol"
  },
  {
    "name": "Эноксапарин-JL",
    "sostav": "Эноксапарин натрия",
    "form": "раствор для инъекций",
    "dosage": "2000 МЕ, 4000 МЕ, 6000 МЕ, 8000 МЕ",
    "group": "Антикоагулянт",
    "indications": "",
    "photo": "https://jurabek.uz/d/enoksoparin_2000_me_ml_no1.png",
    "url": "https://jurabek.uz/magazin/product/enoksaparin-jl"
  },
  {
    "name": "Фруктол",
    "sostav": "Фруктоза",
    "form": "раствор для инфузий",
    "dosage": "5%, 10% 100мл, 250мл, 500мл",
    "group": "Средство углеводного питания",
    "indications": "",
    "photo": "https://jurabek.uz/d/fruktol_5_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/fruktol"
  },
  {
    "name": "Февалган П",
    "sostav": "Парацетомол",
    "form": "раствор для инфузий",
    "dosage": "1% 100 мл",
    "group": "Анальгетик -антипиретик",
    "indications": "",
    "photo": "https://jurabek.uz/d/fevalgan_p.png",
    "url": "https://jurabek.uz/magazin/product/fevalgan-p"
  },
  {
    "name": "Фаморадин",
    "sostav": "Фамотидин",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "20 мг",
    "group": "Противоязвенное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/famoradin.png",
    "url": "https://jurabek.uz/magazin/product/famoradin"
  },
  {
    "name": "Урсула",
    "sostav": "Урсодезоксихолевая кислота",
    "form": "суспензия для приема внутрь",
    "dosage": "250мг\\5мл",
    "group": "Гепатопротекторное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/ursula.png",
    "url": "https://jurabek.uz/magazin/product/ursula"
  },
  {
    "name": "Натрия гидрокарбонат",
    "sostav": "Натрия гидрокарбонат",
    "form": "раствор для инфузий",
    "dosage": "4% 100мл, 250мл, 500мл",
    "group": "Антиацидемическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/natriya_gidrokarbonat_penal.png",
    "url": "https://jurabek.uz/magazin/product/natriya-gidrokarbonat"
  },
  {
    "name": "Маннитол",
    "sostav": "Маннитол",
    "form": "раствор для инфузий",
    "dosage": "10%,15%,20% 100мл, 250мл, 500мл",
    "group": "Осмолярный диуретик",
    "indications": "",
    "photo": "https://jurabek.uz/d/mannitol_15_100ml.jpg",
    "url": "https://jurabek.uz/magazin/product/mannitol"
  },
  {
    "name": "Локсанор",
    "sostav": "Лорноксикам",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "8 мг",
    "group": "Противовоспалительное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/no1.png",
    "url": "https://jurabek.uz/magazin/product/loksanor"
  },
  {
    "name": "Дитилин",
    "sostav": "Суксаметония хлорид",
    "form": "раствор для инъекций",
    "dosage": "2% 5мл, 10мл",
    "group": "Миорелаксант центрального действия",
    "indications": "",
    "photo": "https://jurabek.uz/d/ditilin-5ml-no10.png",
    "url": "https://jurabek.uz/magazin/product/ditilin"
  },
  {
    "name": "Гастрогист",
    "sostav": "Ранитидин",
    "form": "раствор для инъекций",
    "dosage": "2,5% (25 мг\\мл) 2мл",
    "group": "Блокатор Н2-гистаминовых рецепторов",
    "indications": "",
    "photo": "https://jurabek.uz/d/gastrogist.png",
    "url": "https://jurabek.uz/magazin/product/gastrogist"
  },
  {
    "name": "Алкалин",
    "sostav": "Трометамол, натрия хлорид, калия хлорид",
    "form": "раствор для инфузий",
    "dosage": "100мл, 250мл",
    "group": "Антиацидемическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/0_2.png",
    "url": "https://jurabek.uz/magazin/product/alkalin"
  },
  {
    "name": "Парамента Кидс",
    "sostav": "Аминокислотный комплекс",
    "form": "раствор для инфузий",
    "dosage": "7% 10% 100мл, 250мл",
    "group": "Препарат для парентерального питания",
    "indications": "",
    "photo": "https://jurabek.uz/d/parementa_kids_7_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/paramenta-kids"
  },
  {
    "name": "Парамента",
    "sostav": "Аминокислотный комплекс",
    "form": "раствор для инфузий",
    "dosage": "5% 10% 15% 100мл, 250мл 500мл",
    "group": "Препарат для парентерального питания",
    "indications": "",
    "photo": "https://jurabek.uz/d/parementa_5_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/paramenta"
  },
  {
    "name": "Плазмафор",
    "sostav": "Гидроксиэтилкрахмал (ГЭК 200)",
    "form": "раствор для инфузий",
    "dosage": "6 % 10% 250мл, 500мл",
    "group": "Плазмозаменитель",
    "indications": "",
    "photo": "https://jurabek.uz/d/0_1.png",
    "url": "https://jurabek.uz/magazin/product/plazmafor"
  },
  {
    "name": "Волюстим плюс",
    "sostav": "Гидроксиэтилкрахмал (ГЭК 130)",
    "form": "раствор для инфузий",
    "dosage": "6 % 10% 100мл, 250мл, 500мл",
    "group": "Плазмозаменитель",
    "indications": "",
    "photo": "https://jurabek.uz/d/0564d4ec.png",
    "url": "https://jurabek.uz/magazin/product/volyustim-plyus"
  },
  {
    "name": "Этамзилат",
    "sostav": "Этамзилат",
    "form": "раствор для инъекций",
    "dosage": "12,5% 2мл",
    "group": "Гемостатическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/etimzilat-no5.jpg",
    "url": "https://jurabek.uz/magazin/product/etamzilat"
  },
  {
    "name": "Гемостакс",
    "sostav": "Транексамовая кислота",
    "form": "раствор для инъекций",
    "dosage": "10% (100мг\\мл) 5мл, 10мл",
    "group": "Гемостатическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/gemostaks_10-5_ml_5_appula.png",
    "url": "https://jurabek.uz/magazin/product/gemostaks"
  },
  {
    "name": "Эзофаст",
    "sostav": "Эзомепразол",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "40 мг",
    "group": "Ингибитор протонной помпы",
    "indications": "",
    "photo": "https://jurabek.uz/d/ezofast.png",
    "url": "https://jurabek.uz/magazin/product/ezofast"
  },
  {
    "name": "Ульсегаст",
    "sostav": "Омепрозол",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "40 мг",
    "group": "Ингибитор протонной помпы",
    "indications": "",
    "photo": "https://jurabek.uz/d/ulsegast.png",
    "url": "https://jurabek.uz/magazin/product/ulsegast"
  },
  {
    "name": "Пантипро",
    "sostav": "Пантопрозол",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "40 мг",
    "group": "Ингибитор протонной помпы",
    "indications": "",
    "photo": "https://jurabek.uz/d/pantipro.png",
    "url": "https://jurabek.uz/magazin/product/pantipro"
  },
  {
    "name": "Ринфант",
    "sostav": "Декстроза, Натрия хлор, Калия хлор, Кальция хлорид, Натрия ацетат",
    "form": "раствор для инфузий",
    "dosage": "100 мл, 250 мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/rinfant_100.png",
    "url": "https://jurabek.uz/magazin/product/rinfant"
  },
  {
    "name": "Рингацет плюс",
    "sostav": "Декстроза, Натрия хлор, Калия хлор, Кальция хлорид, Натрия ацетат",
    "form": "раствор для инфузий",
    "dosage": "100 мл, 250 мл, 500 мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/ringacet_100ml_1.png",
    "url": "https://jurabek.uz/magazin/product/ringacet-plyus"
  },
  {
    "name": "Рингацет",
    "sostav": "Натрия хлорид, калия хлорид, кальция хлорид, магния хлорид, натрия ацетат",
    "form": "раствор для инфузий",
    "dosage": "100 мл, 250 мл, 500 мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/ringacet_100ml.png",
    "url": "https://jurabek.uz/magazin/product/ringacet"
  },
  {
    "name": "Ресорбилон",
    "sostav": "Сорбитол, Натрия Лактат, натрия хлорид, калия хлорид, магния хлорид",
    "form": "",
    "dosage": "100 мл, 200 мл, 250 мл, 400 мл, 500 мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/resorbilon_100ml.jpg",
    "url": "https://jurabek.uz/magazin/product/resorbilon"
  },
  {
    "name": "Софанест 0,75%",
    "sostav": "Левобупивакаин",
    "form": "раствор для инфузий",
    "dosage": "0,75 % (7,5 мг\\мл) 10 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/sofanest_05_10_ml_no10_4118uzp01.png",
    "url": "https://jurabek.uz/magazin/product/sofanest1"
  },
  {
    "name": "Софанест 0,5%",
    "sostav": "Левобупивакаин",
    "form": "раствор для инъекций",
    "dosage": "0,5 % (5 мг\\мл) 10 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/sofanest_05_10_ml_no10_4117uzp01.png",
    "url": "https://jurabek.uz/magazin/product/sofanest"
  },
  {
    "name": "Лидокаина гидрохлорид",
    "sostav": "Лидокаин",
    "form": "раствор для инъекций",
    "dosage": "1 % (3,5мл) 5 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/lidokain.png",
    "url": "https://jurabek.uz/magazin/product/lidokaina-gidrohlorid"
  },
  {
    "name": "Бупилонг гипер",
    "sostav": "Бупивакаин+Декстроза",
    "form": "раствор для инъекций",
    "dosage": "0,75% + 8,25% 2 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/3d.gif",
    "url": "https://jurabek.uz/magazin/product/bupilong-giper"
  },
  {
    "name": "Блокаст 1%",
    "sostav": "Ропивакаин",
    "form": "раствор для инъекций",
    "dosage": "1 % (10мг\\мл) 5 мл, 10 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/blokast_02_10_ml_no5_4108uzp01_1.png",
    "url": "https://jurabek.uz/magazin/product/blokast3"
  },
  {
    "name": "Блокаст 0,75%",
    "sostav": "Ропивакаин",
    "form": "раствор для инъекций",
    "dosage": "0,75 % (7,5мг\\мл) 5 мл, 10 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/blokast_02_10_ml_no5_4112uzp01.png",
    "url": "https://jurabek.uz/magazin/product/blokast2"
  },
  {
    "name": "Блокаст 0,5%",
    "sostav": "Ропивакаин",
    "form": "раствор для инъекций",
    "dosage": "0,5 % (5мг\\мл) 5 мл, 10 мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/blokast_02_5_ml_no5_4105uzp01.png",
    "url": "https://jurabek.uz/magazin/product/blokast1"
  },
  {
    "name": "Артисофт",
    "sostav": "Артикаин",
    "form": "раствор для инъекций",
    "dosage": "4% (40 мг\\мл) 2мл",
    "group": "Местноанестезирующая группа",
    "indications": "",
    "photo": "https://jurabek.uz/d/artisoft.png",
    "url": "https://jurabek.uz/magazin/product/artisoft"
  },
  {
    "name": "Каденс Форте",
    "sostav": "Глюкоза моногидрат, калия хлорид, натрия хлорид",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "5% + 0,45 % + 0,3% 100 мл, 250 мл, 500 мл",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/kadens_forte_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/kadens-forte"
  },
  {
    "name": "Ювира",
    "sostav": "Ацикловир",
    "form": "суспензия для приема внутрь",
    "dosage": "200 мг\\5 мл",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/yuvira_200_mg_5_ml_8116uzuzp01.png",
    "url": "https://jurabek.uz/magazin/product/yuvira-200"
  },
  {
    "name": "Фрегато",
    "sostav": "Софосбувир",
    "form": "таблетки",
    "dosage": "400 мг",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/fregato_penal_213uze01.png",
    "url": "https://jurabek.uz/magazin/product/fregato"
  },
  {
    "name": "Тенефа",
    "sostav": "Тенофовир",
    "form": "таблетки",
    "dosage": "300 мг",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/tenefa_penal_212uzp01.png",
    "url": "https://jurabek.uz/magazin/product/tenefa"
  },
  {
    "name": "Салувир",
    "sostav": "Умифеновир",
    "form": "капсулы",
    "dosage": "100 мг",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/saluvir.png",
    "url": "https://jurabek.uz/magazin/product/saluvir"
  },
  {
    "name": "Ремдесса",
    "sostav": "Ремдесивир",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "100 мг",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/remdessa.png",
    "url": "https://jurabek.uz/magazin/product/remdessa"
  },
  {
    "name": "Ковидафавир",
    "sostav": "Фавипиравир",
    "form": "таблетки",
    "dosage": "400 мг",
    "group": "Противовирусное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/kovidafavir.png",
    "url": "https://jurabek.uz/magazin/product/kovidafavir"
  },
  {
    "name": "Моксафор",
    "sostav": "Моксифлоксацин",
    "form": "раствор для инфузий",
    "dosage": "400мг\\100мл; 400мг\\250мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/moksafor.png",
    "url": "https://jurabek.uz/magazin/product/moksafor"
  },
  {
    "name": "Спирофлокс",
    "sostav": "Левофлоксацин",
    "form": "раствор для инфузий",
    "dosage": "0,5% 100мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/spirofloks_100ml.png",
    "url": "https://jurabek.uz/magazin/product/spirofloks"
  },
  {
    "name": "Флоксурол",
    "sostav": "Офлоксацин",
    "form": "раствор для инфузий",
    "dosage": "0,2% 100мл, 250мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/floksurol.jpg",
    "url": "https://jurabek.uz/magazin/product/floksurol"
  },
  {
    "name": "Ципраксол 100 мл",
    "sostav": "Ципрофлоксацин",
    "form": "раствор для инъекций",
    "dosage": "1% 10мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/cipraksol_100ml.jpg",
    "url": "https://jurabek.uz/magazin/product/cipraksol1"
  },
  {
    "name": "Ципраксол 10 мл",
    "sostav": "Ципрофлоксацин",
    "form": "раствор для инъекций",
    "dosage": "1% 10мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/cipraksol.png",
    "url": "https://jurabek.uz/magazin/product/cipraksol"
  },
  {
    "name": "Савелид",
    "sostav": "Линезолид",
    "form": "раствор для инфузий",
    "dosage": "200мг\\100мл; 400мг\\200мл; 600мг\\300мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/savelid_100.png",
    "url": "https://jurabek.uz/magazin/product/savelid"
  },
  {
    "name": "Ванкомицин Jurabek",
    "sostav": "Ванкомицин",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "0,5 г; 1,0 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vankomicin_500_mg.png",
    "url": "https://jurabek.uz/magazin/product/vankomicin-jurabek"
  },
  {
    "name": "Метралин",
    "sostav": "Метронидазол",
    "form": "раствор для инфузий",
    "dosage": "0,5% 100мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/metralin_05_100ml.png",
    "url": "https://jurabek.uz/magazin/product/metralin"
  },
  {
    "name": "Экстреф",
    "sostav": "Цефоперазон\\сульбактам",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "1,0 г; 2,- г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/ekstref.jpg",
    "url": "https://jurabek.uz/magazin/product/ekstref"
  },
  {
    "name": "Пиперацид",
    "sostav": "Пиперациллин тазобактам",
    "form": "Порошок для приготовления инфузионного раствора",
    "dosage": "2,0 г + 0,25 г; 4,0 г + 0,5 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/3d.png",
    "url": "https://jurabek.uz/magazin/product/piperacid"
  },
  {
    "name": "Амирокс",
    "sostav": "Амоксициллин+Клавулановая кислота",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "0,6 г; 1,2 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/gruppa_1.png",
    "url": "https://jurabek.uz/magazin/product/amiroks"
  },
  {
    "name": "Тетрапим",
    "sostav": "Цефепим",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "0,5 г; 1,0 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/tetrapim_3_d_05_g.jpg",
    "url": "https://jurabek.uz/magazin/product/tetrapim"
  },
  {
    "name": "Журазидим",
    "sostav": "Цефтазидим",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "0,5 г; 1,0 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/zhurazidim_05_g_no1.png",
    "url": "https://jurabek.uz/magazin/product/zhurazidim"
  },
  {
    "name": "Цеффаст",
    "sostav": "Цефотаксим",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "0,5 г; 1,0 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/no1_05_ml.jpg",
    "url": "https://jurabek.uz/magazin/product/ceffast"
  },
  {
    "name": "Витаксон",
    "sostav": "Цефтриаксон",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "0,5 г; 1,0 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vitakson_05_g_no1.png",
    "url": "https://jurabek.uz/magazin/product/vitakson"
  },
  {
    "name": "Интралин",
    "sostav": "Цефазолин",
    "form": "Порошок для приготовления инъекционного раствора",
    "dosage": "0,5 г; 1,0 г",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/intralin_05_g_no1.png",
    "url": "https://jurabek.uz/magazin/product/intralin"
  },
  {
    "name": "ГАМ-Ковид-ВАК Комп II",
    "sostav": "ГАМ-Ковид-ВАК Комп",
    "form": "раствор для внутримышечного введения",
    "dosage": "20,5 мл/доза 3 мл",
    "group": "Вакцина",
    "indications": "",
    "photo": "https://jurabek.uz/d/gam-kovid-vak_2komponenta.png",
    "url": "https://jurabek.uz/magazin/product/gam-kovid-vak-komp1"
  },
  {
    "name": "ZF-UZ-VAC 2001",
    "sostav": "ZF-UZ-VAC 2001 (CHO CELL)",
    "form": "раствор для внутримышечного введения",
    "dosage": "25 мкг\\доза (0,5 мл) 2,5 мл - 5 доз, 5мл-10 доз",
    "group": "Вакцина",
    "indications": "",
    "photo": "https://jurabek.uz/d/zf-uz-vac_2001.png",
    "url": "https://jurabek.uz/magazin/product/zf-uz-vac-2001"
  },
  {
    "name": "ГАМ-Ковид-ВАК Комп I",
    "sostav": "ГАМ-Ковид-ВАК Комп",
    "form": "раствор для внутримышечного введения",
    "dosage": "10,5 мл\\доза 3 мл",
    "group": "Вакцина",
    "indications": "",
    "photo": "https://jurabek.uz/d/gam-kovid-vak.png",
    "url": "https://jurabek.uz/magazin/product/gam-kovid-vak-komp"
  },
  {
    "name": "Вермув",
    "sostav": "Албендазол",
    "form": "суспензия для приема внутрь",
    "dosage": "400мг\\10 мл",
    "group": "Антигельминтное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vermuv_3d.png",
    "url": "https://jurabek.uz/magazin/product/vermuv"
  },
  {
    "name": "Орса Цинк",
    "sostav": "Цинк сульфат, декстроза, натрия хлорид, калия хлорид, натрия цитрат",
    "form": "раствор для приема внутрь",
    "dosage": "100мл, 250мл, 500мл",
    "group": "Средство для ПРТ",
    "indications": "",
    "photo": "https://jurabek.uz/d/orsa_cink_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/orsa-cink"
  },
  {
    "name": "Орса",
    "sostav": "Декстроза, натрия хлорид, калия хлорид, натрия цитрат",
    "form": "раствор для приема внутрь",
    "dosage": "100мл, 250мл, 500мл",
    "group": "Средство для ПРТ",
    "indications": "",
    "photo": "https://jurabek.uz/d/orsa_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/orsa"
  },
  {
    "name": "Регидротоник Форте",
    "sostav": "Декстроза, натрия хлорид",
    "form": "раствор для инфузий",
    "dosage": "10%+0,9% 100мл, 250мл, 500мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/regidratonik_forte_etik_100ml_uz.png",
    "url": "https://jurabek.uz/magazin/product/regidrotonik-forte"
  },
  {
    "name": "Регидротоник",
    "sostav": "Декстроза, натрия хлорид",
    "form": "раствор для инфузий",
    "dosage": "5%+0,9% 100мл, 250мл, 500мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/regidratonik.png",
    "url": "https://jurabek.uz/magazin/product/regidrotonik"
  },
  {
    "name": "Каденс",
    "sostav": "Декстроза, натрия хлорид, калия хлорид",
    "form": "раствор для инфузий",
    "dosage": "5%+ 0,45%+0,15% 100мл, 250мл, 500мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/kadens_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/kadens"
  },
  {
    "name": "Диалит",
    "sostav": "Ксилитол, натрия хлорид, калия хлорид, кальция хлорид, магния хлорид, натрия ацетат",
    "form": "раствор для инфузий",
    "dosage": "100мл, 250мл, 500мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/dialit_100_ml.png",
    "url": "https://jurabek.uz/magazin/product/dialit"
  },
  {
    "name": "Лолат",
    "sostav": "Л-орнитин-л-аспартат",
    "form": "концентрат для приготовления раствора для инфузий",
    "dosage": "3г\\10мл 10мл",
    "group": "Гепатопротектор",
    "indications": "",
    "photo": "https://jurabek.uz/d/lolatno5.png",
    "url": "https://jurabek.uz/magazin/product/lolat"
  },
  {
    "name": "Гепта",
    "sostav": "Адеметионин",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "400 мг",
    "group": "Гепатопротектор",
    "indications": "",
    "photo": "https://jurabek.uz/d/gepta_no5.png",
    "url": "https://jurabek.uz/magazin/product/gepta"
  },
  {
    "name": "Армария",
    "sostav": "Глутатион восстановленный",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "600 мг",
    "group": "Гепатопротектор",
    "indications": "",
    "photo": "https://jurabek.uz/d/armariya_1.png",
    "url": "https://jurabek.uz/magazin/product/armariya"
  },
  {
    "name": "Прессикарб",
    "sostav": "Ацетазоламид",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "500мг",
    "group": "Диуретическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/pressikarb_no1.png",
    "url": "https://jurabek.uz/magazin/product/pressikarb"
  },
  {
    "name": "Невробен",
    "sostav": "Витамин В комплекс (В1, В6, В 12, РР)",
    "form": "раствор для инъекций",
    "dosage": "",
    "group": "Комплекс витаминов",
    "indications": "",
    "photo": "https://jurabek.uz/d/nevroben_5_ampul_web.png",
    "url": "https://jurabek.uz/magazin/product/nevroben"
  },
  {
    "name": "Миора",
    "sostav": "Толперизон+лидокаин",
    "form": "раствор для инъекций",
    "dosage": "1 мл",
    "group": "Миорелаксант центрального действия",
    "indications": "",
    "photo": "https://jurabek.uz/d/miora_5.png",
    "url": "https://jurabek.uz/magazin/product/miora"
  },
  {
    "name": "Витамин В",
    "sostav": "Витамин В комплекс (В1, В6, РР)",
    "form": "раствор для инъекций",
    "dosage": "2 мл",
    "group": "Витамин",
    "indications": "",
    "photo": "https://jurabek.uz/d/vitamin_v_kompleks_no5.jpg",
    "url": "https://jurabek.uz/magazin/product/vitamin-v"
  },
  {
    "name": "Сермиголин",
    "sostav": "Ницерголин",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "4 мг",
    "group": "Средство улучшающее мозгового кровообращения",
    "indications": "",
    "photo": "https://jurabek.uz/d/sermigolin.png",
    "url": "https://jurabek.uz/magazin/product/sermigolin"
  },
  {
    "name": "Винпоцетин",
    "sostav": "Винпоцетин",
    "form": "концентрат для приготовления раствора для инфузий",
    "dosage": "0,5% (5мг\\мл) 2мл",
    "group": "Средство улучшающее мозгового кровообращения",
    "indications": "",
    "photo": "https://jurabek.uz/d/vinpotsetsin_05_2ml_486uzp01_1.png",
    "url": "https://jurabek.uz/magazin/product/vinpocetin"
  },
  {
    "name": "Титризол",
    "sostav": "Морфолиниевая соль тиазотовой кислоты",
    "form": "раствор для инъекций",
    "dosage": "2,5% (25мг\\мл)",
    "group": "Средство для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/titrizol_2ml_no10_487uzpn01.png",
    "url": "https://jurabek.uz/magazin/product/titrizol"
  },
  {
    "name": "Лекорн",
    "sostav": "Левокарнитин",
    "form": "раствор для инъекций",
    "dosage": "10% (500мг\\5мл) 5 мл",
    "group": "Средство для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/lekorn_10_5_ml.png",
    "url": "https://jurabek.uz/magazin/product/lekorn"
  },
  {
    "name": "Тиоцерат",
    "sostav": "Тиотриозалин+пирацетам\nраствор для инъекций",
    "form": "раствор для инъекций",
    "dosage": "10 мл",
    "group": "Ноотропное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/tiocerat.png",
    "url": "https://jurabek.uz/magazin/product/tiocerat"
  },
  {
    "name": "Коралин 25%",
    "sostav": "Цитиколин",
    "form": "питьевой раствор",
    "dosage": "25% (100мг\\4мл) 4мл",
    "group": "Ноотропное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/koralin_25.gif",
    "url": "https://jurabek.uz/magazin/product/koralin1"
  },
  {
    "name": "Пирацетам",
    "sostav": "Пирацетам",
    "form": "раствор для инъекций",
    "dosage": "20% 5 мл, 10мл",
    "group": "Ноотропное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/3d.jpg",
    "url": "https://jurabek.uz/magazin/product/piracetam"
  },
  {
    "name": "Коралин 12,5%",
    "sostav": "Цитиколин",
    "form": "раствор для инъекций",
    "dosage": "12,5% (500мг\\4мл) 4мл",
    "group": "Ноотропное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/koralin_125.gif",
    "url": "https://jurabek.uz/magazin/product/koralin"
  },
  {
    "name": "Мелоксикам",
    "sostav": "Мелоксикам",
    "form": "раствор для инъекций",
    "dosage": "1% (15мг\\1,5мл) 1,5 мл",
    "group": "НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/meloksikam.png",
    "url": "https://jurabek.uz/magazin/product/meloksikam"
  },
  {
    "name": "Кобафен",
    "sostav": "Мекобаламин",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "10мг 3 мл",
    "group": "НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/kobafen.png",
    "url": "https://jurabek.uz/magazin/product/kobafen"
  },
  {
    "name": "Кеторайт",
    "sostav": "Дексетопрофен",
    "form": "раствор для инъекций",
    "dosage": "50мг\\2мл 2мл",
    "group": "НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/ketorajt_5_ampul_web.png",
    "url": "https://jurabek.uz/magazin/product/ketorajt"
  },
  {
    "name": "Мексунат",
    "sostav": "Этилметилгидроксипиридина сукцинат",
    "form": "раствор для инъекций",
    "dosage": "5% (50 мг\\мл) 2 мл, 5 мл, 10 мл",
    "group": "Антиоксидант",
    "indications": "",
    "photo": "https://jurabek.uz/d/meksunat_5_ml.png",
    "url": "https://jurabek.uz/magazin/product/meksunat"
  },
  {
    "name": "Лесцинат",
    "sostav": "Л-лизин, Эсцинат",
    "form": "концентрат для приготовления раствора для инфузий",
    "dosage": "5 мл",
    "group": "Ангиопротектор",
    "indications": "",
    "photo": "https://jurabek.uz/d/lescinat_no5.png",
    "url": "https://jurabek.uz/magazin/product/lescinat"
  },
  {
    "name": "Феругар",
    "sostav": "Железо-сахарозный комплеск",
    "form": "раствор для инъекций",
    "dosage": "20 мг\\мл 5мл",
    "group": "Антианемический препарат",
    "indications": "",
    "photo": "https://jurabek.uz/d/ferrugar_5ml-5_ampul_web.png",
    "url": "https://jurabek.uz/magazin/product/ferugar"
  },
  {
    "name": "Зокласт",
    "sostav": "Золедроновая кислота",
    "form": "раствор для инфузий",
    "dosage": "4 мг\\5мг\\100 мл",
    "group": "Ингибитор костной резорбции",
    "indications": "",
    "photo": "https://jurabek.uz/d/zoklast_no1.png",
    "url": "https://jurabek.uz/magazin/product/zoklast"
  },
  {
    "name": "Ворифунг",
    "sostav": "Вориконазол",
    "form": "лиофилизат для приготовления инъекционного раствора",
    "dosage": "200мг\\100мл; 400мг\\200мл; 600мг\\300мл",
    "group": "Противогрибковое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vorifung.png",
    "url": "https://jurabek.uz/magazin/product/vorifung"
  },
  {
    "name": "Вомитон 4 мл",
    "sostav": "Ондансетрон",
    "form": "раствор для инъекций",
    "dosage": "0,2% (8мг\\4 мл) 4 мл",
    "group": "Противорвотное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vomiton_4ml.png",
    "url": "https://jurabek.uz/magazin/product/vomiton-4-ml"
  },
  {
    "name": "Вомитон 2 мл",
    "sostav": "Ондансетрон",
    "form": "раствор для инъекций",
    "dosage": "0,2% (4мг\\2 мл) 2 мл",
    "group": "Противорвотное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vomiton_2ml.png",
    "url": "https://jurabek.uz/magazin/product/vomiton-2-ml"
  },
  {
    "name": "Полиноса 1,25мг/5мл",
    "sostav": "Левоцетиризин",
    "form": "сироп для приема внутрь",
    "dosage": "1,25; 2,5; 5мг\\5мл 5мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/polinosa_125_mg_5ml_sirop_8121uzp01.png",
    "url": "https://jurabek.uz/magazin/product/polinosa1"
  },
  {
    "name": "Рефэзо",
    "sostav": "Домперидон",
    "form": "суспензия для приема внутрь",
    "dosage": "5 мг\\5мл 5мл",
    "group": "Прокинетик",
    "indications": "",
    "photo": "https://jurabek.uz/d/refezo.png",
    "url": "https://jurabek.uz/magazin/product/refezo"
  },
  {
    "name": "Литомарен",
    "sostav": "Лимонная кислота калия цитрата, натрия цитрат",
    "form": "раствор для приема внутрь",
    "dosage": "5 мл",
    "group": "Средства, применяемые при моческаменной болезни",
    "indications": "",
    "photo": "https://jurabek.uz/d/litomaren.jpg",
    "url": "https://jurabek.uz/magazin/product/litomaren"
  },
  {
    "name": "Лактакс",
    "sostav": "Лактулоза",
    "form": "сироп для приема внутрь",
    "dosage": "667 мг\\мл 60 мл",
    "group": "Слабительное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/laktaks_90_ml_129uzr01.png",
    "url": "https://jurabek.uz/magazin/product/laktaks"
  },
  {
    "name": "Слаботакс",
    "sostav": "Натрия Пикосульфат",
    "form": "раствор для приема внутрь",
    "dosage": "3,75 мг\\5мл; 7,5 мг/10 мл",
    "group": "Слабительное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/slabotaks.png",
    "url": "https://jurabek.uz/magazin/product/slabotaks"
  },
  {
    "name": "Лекорн Энерджи",
    "sostav": "Левокарнитин",
    "form": "питьевой раствор",
    "dosage": "10% 5 мл, 10 мл",
    "group": "Средство для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/lekorn_enerdzhi_5_ml_no10psd.png",
    "url": "https://jurabek.uz/magazin/product/lekorn-enerdzhi"
  },
  {
    "name": "Дезалерт",
    "sostav": "Дезлоратадин",
    "form": "сироп для приема внутрь",
    "dosage": "2,5мг/5мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "",
    "url": "https://jurabek.uz/magazin/product/dezalert"
  },
  {
    "name": "Полиноса 5мг/мл",
    "sostav": "Левоцетиризин",
    "form": "капли для приема внутрь",
    "dosage": "5 мг\\10 мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/polinosa.png",
    "url": "https://jurabek.uz/magazin/product/polinosa"
  },
  {
    "name": "Бакдиар",
    "sostav": "Нифуроксазид",
    "form": "суспензия для приема внутрь",
    "dosage": "220 мг\\5мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/bakdiar.png",
    "url": "https://jurabek.uz/magazin/product/bakdiar"
  },
  {
    "name": "Алмидоз",
    "sostav": "Алюминий+магний",
    "form": "суспензия для приема внутрь",
    "dosage": "10 мл",
    "group": "Антацидное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/almidoz-10ml-no10.png",
    "url": "https://jurabek.uz/magazin/product/almidoz"
  },
  {
    "name": "Фунгазид офтальмо",
    "sostav": "Флуконазол",
    "form": "капли глазные 0,3%",
    "dosage": "0,3 % 5 мл",
    "group": "Противогрибковое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/fungazid_oftalmo.png",
    "url": "https://jurabek.uz/magazin/product/fungazid-oftalmo"
  },
  {
    "name": "Мина Офтальмо",
    "sostav": "Кеторолак",
    "form": "капли глазные 0,5%",
    "dosage": "0,5 % 5 мл",
    "group": "НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/mina_oftalmo.png",
    "url": "https://jurabek.uz/magazin/product/mina-oftalmo"
  },
  {
    "name": "Тауфон",
    "sostav": "Таурин",
    "form": "капли глазные 4%",
    "dosage": "4% 5мл, 10мл",
    "group": "метаболическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/taufon_5_ml.png",
    "url": "https://jurabek.uz/magazin/product/taufon"
  },
  {
    "name": "Прессимол",
    "sostav": "Тимолол",
    "form": "капли глазные 0,25 % или 0,5 %",
    "dosage": "0,25%, 0,5% 5 мл",
    "group": "Противоглаукомное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/pressimol.png",
    "url": "https://jurabek.uz/magazin/product/pressimol"
  },
  {
    "name": "Флоксурол Офтальмо",
    "sostav": "Офлоксацин",
    "form": "капли глазные 0,3%",
    "dosage": "0,3% 5мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/floksurol_kapli_glaznye.png",
    "url": "https://jurabek.uz/magazin/product/floksurol-oftalmo"
  },
  {
    "name": "Ципраксол Офтальмо",
    "sostav": "Ципрофлоксацин",
    "form": "капли глазные 0,3%",
    "dosage": "0,3% 5мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/cipraksol_kapli_glaznye.png",
    "url": "https://jurabek.uz/magazin/product/cipraksol-oftalmo"
  },
  {
    "name": "Спирофлокс Офтальмо",
    "sostav": "Левофлоксацин",
    "form": "капли глазные 0,5%",
    "dosage": "0,5% 5мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/spirofloks_oftalmo.png",
    "url": "https://jurabek.uz/magazin/product/spirofloks-oftalmo"
  },
  {
    "name": "Моксафор Офтальмо",
    "sostav": "Моксифлоксацин",
    "form": "капли глазные 0,5%",
    "dosage": "0,5% 5мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/moksafor_oftalmo.jpg",
    "url": "https://jurabek.uz/magazin/product/moksafor-oftalmo"
  },
  {
    "name": "Левомицитин",
    "sostav": "Хлорамфеникол",
    "form": "капли глазные 0,25%",
    "dosage": "0,25% 5мл, 10 мл",
    "group": "Антибактериальное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/levomicetin.png",
    "url": "https://jurabek.uz/magazin/product/levomicitin"
  },
  {
    "name": "ОФТ-Аллерг",
    "sostav": "Олопатадин",
    "form": "капли глазные 0,1%",
    "dosage": "0,1% 5 мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/kromostab.png",
    "url": "https://jurabek.uz/magazin/product/kromostab"
  },
  {
    "name": "Анальгин",
    "sostav": "Метамизол натрия",
    "form": "раствор для инъекций",
    "dosage": "50% 1мл,2мл",
    "group": "Анальгетик -антипиретик",
    "indications": "",
    "photo": "https://jurabek.uz/d/analgin_1ml_5_ampul_web.png",
    "url": "https://jurabek.uz/magazin/product/analgin"
  },
  {
    "name": "Септум Лор",
    "sostav": "Бензидамин+хлоргексидин",
    "form": "раствор для полосканий",
    "dosage": "0,0012 10мл",
    "group": "Антисептик местного действия +НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/septum_lor.png",
    "url": "https://jurabek.uz/magazin/product/septum-lor"
  },
  {
    "name": "Нафасол",
    "sostav": "Ксилометазолин",
    "form": "назальные капли",
    "dosage": "0,05% 10мл",
    "group": "местное сосудосуживаюшее средство (деконгестант)",
    "indications": "",
    "photo": "https://jurabek.uz/d/nafasol_01.png",
    "url": "https://jurabek.uz/magazin/product/nafasol"
  },
  {
    "name": "Назимет",
    "sostav": "Оксиметазолин",
    "form": "назальные капли",
    "dosage": "0,01 %10мл",
    "group": "местное сосудосуживаюшее средство (деконгестант)",
    "indications": "",
    "photo": "https://jurabek.uz/d/nazimet_001_5_ml.png",
    "url": "https://jurabek.uz/magazin/product/nazimet"
  },
  {
    "name": "Септум Этил",
    "sostav": "Хлоргексидин",
    "form": "раствор для наружного применения",
    "dosage": "1% 5мл, 10мл, 50мл, 100мл, 250мл, 500мл",
    "group": "Антисептическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/septum_etil.png",
    "url": "https://jurabek.uz/magazin/product/septum-etil"
  },
  {
    "name": "Септум Форте",
    "sostav": "Хлоргексидин",
    "form": "раствор для наружного применения",
    "dosage": "0,5% 5мл, 10мл, 50мл, 100мл, 250мл, 500мл",
    "group": "Антисептическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/septum_forte_05_ampula.png",
    "url": "https://jurabek.uz/magazin/product/septum-forte"
  },
  {
    "name": "Септум",
    "sostav": "Хлоргексидин",
    "form": "раствор для наружного применения",
    "dosage": "0,05% 5мл, 10мл, 50мл, 100мл, 250мл, 500мл",
    "group": "Антисептическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/septum_5_ml_no10.png",
    "url": "https://jurabek.uz/magazin/product/septum"
  },
  {
    "name": "Миристосепт",
    "sostav": "Мирамистин",
    "form": "раствор для наружного применения и ингаляций",
    "dosage": "0,01% 5мл, 10мл",
    "group": "Антисептическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/miristosept_001_5_ml_8130uzp0178.png",
    "url": "https://jurabek.uz/magazin/product/miristosept"
  },
  {
    "name": "Декатос",
    "sostav": "Декаметоксин",
    "form": "раствор для наружного и внутриполостного применения",
    "dosage": "0,2мг\\мл 2мл, 5мл, 250мл, 500мл",
    "group": "Антисептическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/dekatos_02_2_ml_no10864uzp01_2.png",
    "url": "https://jurabek.uz/magazin/product/dekatos"
  },
  {
    "name": "Видон",
    "sostav": "Повидон-Йод",
    "form": "раствор для наружного применения",
    "dosage": "10% 5мл, 10мл, 100мл",
    "group": "Антисептическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/vidon.png",
    "url": "https://jurabek.uz/magazin/product/vidon"
  },
  {
    "name": "Cтронгиум цинк",
    "sostav": "Цинка сульфат моногидрат",
    "form": "раствор для приема внутрь",
    "dosage": "5 мл и 10 мл",
    "group": "БАД",
    "indications": "",
    "photo": "https://jurabek.uz/d/strongium_cink_5ml_no10.png",
    "url": "https://jurabek.uz/magazin/product/ctrongium-cink"
  },
  {
    "name": "Пентоксифиллин",
    "sostav": "Пентоксифиллин",
    "form": "раствор для инъекций",
    "dosage": "2% (20 мг\\мл) 5мл",
    "group": "Средство для лечения нарушений приферического кровообращения",
    "indications": "",
    "photo": "https://jurabek.uz/d/pentoksifillin.jpg",
    "url": "https://jurabek.uz/magazin/product/pentoksifillin"
  },
  {
    "name": "Натрия тиосульфат",
    "sostav": "Натрия тиосульфат",
    "form": "раствор для инъекций",
    "dosage": "30% 5мл 10 мл",
    "group": "Гипосенсибилизирующее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/natriya_tiosulfat.png",
    "url": "https://jurabek.uz/magazin/product/natriya-tiosulfat"
  },
  {
    "name": "Метоклопрамид",
    "sostav": "Метоклопрамид",
    "form": "раствор для инъекций",
    "dosage": "0,5% (5мг\\мл) 2 мл",
    "group": "Противорвотное средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/metoklopramid.png",
    "url": "https://jurabek.uz/magazin/product/metoklopramid"
  },
  {
    "name": "Натрия хлорид",
    "sostav": "Натрия хлорид",
    "form": "раствор для инъекций",
    "dosage": "0,9% 5мл, 10мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/natriya_hlorid.png",
    "url": "https://jurabek.uz/magazin/product/natriya-hlorid"
  },
  {
    "name": "Атропина сульфат",
    "sostav": "Атропина сульфат",
    "form": "раствор для внутримышечного и внутривенного введения",
    "dosage": "0,01 5мл, 0,1% 1мл",
    "group": "М-холиноблокатор",
    "indications": "",
    "photo": "https://jurabek.uz/d/atropina_sulfat_01.png",
    "url": "https://jurabek.uz/magazin/product/atropina-sulfat"
  },
  {
    "name": "Рибоксин",
    "sostav": "Инозин",
    "form": "раствор для инъекций",
    "dosage": "2% 5мл, 10мл",
    "group": "Средства для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/riboksin.png",
    "url": "https://jurabek.uz/magazin/product/riboksin"
  },
  {
    "name": "Магния сульфат",
    "sostav": "Магния сульфат",
    "form": "раствор для инъекций",
    "dosage": "25% 5 мл 10 мл",
    "group": "препарат магния",
    "indications": "",
    "photo": "https://jurabek.uz/d/magniya_sulfat_5ml_no10.png",
    "url": "https://jurabek.uz/magazin/product/magniya-sulfat"
  },
  {
    "name": "Кальция хлорид",
    "sostav": "Кальция хлорид",
    "form": "раствор для инъекций",
    "dosage": "10% 5 мл, 10 мл",
    "group": "препарат кальция",
    "indications": "",
    "photo": "https://jurabek.uz/d/kalcij-hlorid.png",
    "url": "https://jurabek.uz/magazin/product/kalciya-hlorid"
  },
  {
    "name": "Калия хлорид",
    "sostav": "Калия хлорид",
    "form": "раствор для инъекций",
    "dosage": "4%, 10% 5мл, 10мл",
    "group": "Препарат калия",
    "indications": "",
    "photo": "https://jurabek.uz/d/kaliya_hlorid.jpg",
    "url": "https://jurabek.uz/magazin/product/kaliya-hlorid"
  },
  {
    "name": "Папаверин гидрохлорид",
    "sostav": "Папаверин гидрохлорид",
    "form": "раствор для инъекций",
    "dosage": "2 % 2мл",
    "group": "Спазмолитическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/papaverina_g_no10.png",
    "url": "https://jurabek.uz/magazin/product/papaverin-gidrohlorid"
  },
  {
    "name": "Супра",
    "sostav": "Хлоропирамин",
    "form": "раствор для инъекций",
    "dosage": "2% 1мл 20мг\\мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/supra.png",
    "url": "https://jurabek.uz/magazin/product/supra"
  },
  {
    "name": "Димедрол",
    "sostav": "Дифенгидрамин",
    "form": "раствор для инъекций",
    "dosage": "1% 1мл",
    "group": "Антиаллергическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/dimedrol.png",
    "url": "https://jurabek.uz/magazin/product/dimedrol"
  },
  {
    "name": "Диклофенак",
    "sostav": "Диклофенак",
    "form": "раствор для инъекций",
    "dosage": "2,5% 3 мл",
    "group": "НПВС",
    "indications": "",
    "photo": "https://jurabek.uz/d/diklofenak.png",
    "url": "https://jurabek.uz/magazin/product/diklofenak"
  },
  {
    "name": "Дибазол",
    "sostav": "Дибазол (Бендазол)",
    "form": "раствор для инъекций",
    "dosage": "1 % 1мл, 2мл, 5мл",
    "group": "Вазодилятирующее средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/dibazol-1ml-no10.png",
    "url": "https://jurabek.uz/magazin/product/dibazol"
  },
  {
    "name": "Дексаметазон",
    "sostav": "Дексаметозон",
    "form": "раствор для инъекций",
    "dosage": "0,4% (4мг\\мл) 1 мл, 2мл",
    "group": "Глюкокортикостероид",
    "indications": "",
    "photo": "https://jurabek.uz/d/deksametazon.png",
    "url": "https://jurabek.uz/magazin/product/deksametazon"
  },
  {
    "name": "Глюкоза Jurabek",
    "sostav": "Декстроза",
    "form": "раствор для инъекций",
    "dosage": "10%,25%, 40% 10мл",
    "group": "Препарат для парентерального питания",
    "indications": "",
    "photo": "https://jurabek.uz/d/glyukoza.png",
    "url": "https://jurabek.uz/magazin/product/glyukoza-jurabek"
  },
  {
    "name": "Гепарин",
    "sostav": "Гепарин",
    "form": "раствор для инъекций",
    "dosage": "5000 МЕ\\мл 1 мл, 5мл",
    "group": "Антикоагулянт",
    "indications": "",
    "photo": "https://jurabek.uz/d/ac-1-geparin.png",
    "url": "https://jurabek.uz/magazin/product/geparin"
  },
  {
    "name": "Вода для инъекции",
    "sostav": "Вода для инъекции",
    "form": "раствор для инъекций",
    "dosage": "2мл, 4мл, 5мл, 10мл",
    "group": "Растворитель",
    "indications": "",
    "photo": "https://jurabek.uz/d/voda.png",
    "url": "https://jurabek.uz/magazin/product/voda-dlya-in-ekcii"
  },
  {
    "name": "Пиридоксин",
    "sostav": "Пиридоксин (витамин в6)",
    "form": "раствор для инъекций",
    "dosage": "2,5%, 5% 1 мл",
    "group": "Витамины",
    "indications": "",
    "photo": "https://jurabek.uz/d/v6.png",
    "url": "https://jurabek.uz/magazin/product/piridoksin"
  },
  {
    "name": "Цианокоболамин",
    "sostav": "Цианокобаламин (витамин В12)",
    "form": "раствор для инъекций",
    "dosage": "0,05% 1мл",
    "group": "Витамины",
    "indications": "",
    "photo": "https://jurabek.uz/d/vitamin-v12.png",
    "url": "https://jurabek.uz/magazin/product/cianokobolamin"
  },
  {
    "name": "Тиамин",
    "sostav": "Тиамин (витамин В1)",
    "form": "раствор для инъекций",
    "dosage": "2,5%, 5% 1 мл",
    "group": "Витамины",
    "indications": "",
    "photo": "https://jurabek.uz/d/vitamin-v1.png",
    "url": "https://jurabek.uz/magazin/product/tiamin"
  },
  {
    "name": "Аскорбиновая кислота",
    "sostav": "Аскорбиновая кислота",
    "form": "раствор для инъекций",
    "dosage": "5% 2мл",
    "group": "Витамины",
    "indications": "",
    "photo": "https://jurabek.uz/d/askorbinovaya_kislota_no5.png",
    "url": "https://jurabek.uz/magazin/product/askorbinovaya-kislota"
  },
  {
    "name": "Эуфиллин",
    "sostav": "Аминофиллин",
    "form": "раствор для инъекций",
    "dosage": "2,4% 10мл",
    "group": "Бронхолитик",
    "indications": "",
    "photo": "https://jurabek.uz/d/eufillin_5_ml_no10.png",
    "url": "https://jurabek.uz/magazin/product/eufillin"
  },
  {
    "name": "Фуросемид",
    "sostav": "Фуросемид",
    "form": "раствор для инъекций",
    "dosage": "1% 2мл",
    "group": "Диуретическое средство",
    "indications": "",
    "photo": "https://jurabek.uz/d/furosemid_penal_1_2_ml_no10_468uzpn01.png",
    "url": "https://jurabek.uz/magazin/product/furosemid"
  },
  {
    "name": "Сульфокамфокаин",
    "sostav": "Сульфокамфокаин",
    "form": "раствор для инъекций",
    "dosage": "10% 2мл, 100мг\\мл",
    "group": "Аналептик",
    "indications": "",
    "photo": "https://jurabek.uz/d/sulfokamfokain.png",
    "url": "https://jurabek.uz/magazin/product/sulfokamfokain"
  },
  {
    "name": "Ринлактин",
    "sostav": "Натрия лактат, натрия хлорид, калия хлорид, кальция хлорид",
    "form": "раствор для инфузий",
    "dosage": "100мл, 250мл, 500мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/rinlactin_etiketka_100_ml_629uze02.png",
    "url": "https://jurabek.uz/magazin/product/rinlaktin"
  },
  {
    "name": "Рингер",
    "sostav": "Натрия хлорид, калия хлорид, кальция хлорид",
    "form": "раствор для инфузий",
    "dosage": "100мл, 250мл, 500мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/ringer_100.png",
    "url": "https://jurabek.uz/magazin/product/ringer"
  },
  {
    "name": "Ацесоль Jurabek",
    "sostav": "Натрия ацетат, натрия хлорид, калия хлорид",
    "form": "раствор для инфузий",
    "dosage": "250мл, 400мл",
    "group": "Солевой раствор",
    "indications": "",
    "photo": "https://jurabek.uz/d/acesol_250.png",
    "url": "https://jurabek.uz/magazin/product/acesol-jurabek"
  },
  {
    "name": "Реополиглюкин",
    "sostav": "Реополиглюкин",
    "form": "раствор для инфузий",
    "dosage": "10% 100 мл, 250 мл, 500мл",
    "group": "Средства для коррекции метаболических процессов",
    "indications": "",
    "photo": "https://jurabek.uz/d/01.png",
    "url": "https://jurabek.uz/magazin/product/reopoliglyukin"
  },
  {
    "name": "Спирт этиловый",
    "sostav": "Спирт этиловый",
    "form": "раствор для наружного применения",
    "dosage": "70% - 50мл",
    "group": "Антисептик",
    "indications": "",
    "photo": "https://jurabek.uz/d/spirt_etil.png",
    "url": "https://jurabek.uz/magazin/product/spirt-etilovyj"
  }
]