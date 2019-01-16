exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
          // Inserts seed entries
          return knex('users').insert([{
                "name": "Orran Daymont",
                "email": "odaymont0@biblegateway.com",
                "password": "SYpUREUxkT",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Jase Cassedy",
                "email": "jcassedy1@hubpages.com",
                "password": "MqQcQZQu",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Elicia McGilmartin",
                "email": "emcgilmartin2@accuweather.com",
                "password": "Ds6BKWm",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Knox Dorking",
                "email": "kdorking3@miitbeian.gov.cn",
                "password": "FEAXddOo",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Wynn Hullah",
                "email": "whullah4@hp.com",
                "password": "kuqVrs",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Kaylee Yakov",
                "email": "kyakov5@canalblog.com",
                "password": "r31ILtAiDsmO",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Leeann MacKibbon",
                "email": "lmackibbon6@instagram.com",
                "password": "S9AkbSMnW",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Clifford Lindback",
                "email": "clindback7@people.com.cn",
                "password": "BTyXhAelk",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Ginnifer Thireau",
                "email": "gthireau8@techcrunch.com",
                "password": "2MTDX5wZE5OI",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Robbie Booth-Jarvis",
                "email": "rboothjarvis9@creativecommons.org",
                "password": "F2VLhg6",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lyndel Simanek",
                "email": "lsimaneka@a8.net",
                "password": "pwUlrRB5zw",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Patrica Hassent",
                "email": "phassentb@moonfruit.com",
                "password": "5EJ1wQ4BJB",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Farr Springall",
                "email": "fspringallc@google.com.hk",
                "password": "nUEK9nA6r",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Warden Robak",
                "email": "wrobakd@lycos.com",
                "password": "9moI2cqd",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lanie Phinnis",
                "email": "lphinnise@nhs.uk",
                "password": "kc5uHiNN4yr8",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Jeff Thurborn",
                "email": "jthurbornf@instagram.com",
                "password": "bmixew",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lorrie O'Day",
                "email": "lodayg@sina.com.cn",
                "password": "jnnadw661z",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Jewel Smeeton",
                "email": "jsmeetonh@illinois.edu",
                "password": "WI7CKT2R",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Rafe Godbert",
                "email": "rgodberti@google.ru",
                "password": "xb3J2naOfO",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Grata Stearn",
                "email": "gstearnj@bloglovin.com",
                "password": "jn789xVdcqd",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Nancee Stelfox",
                "email": "nstelfoxk@amazon.co.jp",
                "password": "uw2eLU7U",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Rickey Ricoald",
                "email": "rricoaldl@rakuten.co.jp",
                "password": "BH21Zuz",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Deanna Tieman",
                "email": "dtiemanm@mozilla.com",
                "password": "BzEYD7IM9m",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Jacobo Lavelle",
                "email": "jlavellen@sohu.com",
                "password": "RwHSIA",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Estrella Armatage",
                "email": "earmatageo@sohu.com",
                "password": "DG66NwG",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Magdalena Goodere",
                "email": "mgooderep@slideshare.net",
                "password": "H7daGe",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Norbie Treadgold",
                "email": "ntreadgoldq@hud.gov",
                "password": "o5I7BzT",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Floria Ravenscroftt",
                "email": "fravenscrofttr@guardian.co.uk",
                "password": "zMRaTt1WhARj",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Andrey Camidge",
                "email": "acamidges@rediff.com",
                "password": "mvSKVmsr",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Dennison Anstead",
                "email": "dansteadt@feedburner.com",
                "password": "KHOhmeUVuK",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Faulkner Sive",
                "email": "fsiveu@t-online.de",
                "password": "tGeOzTNb",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Iona Malyj",
                "email": "imalyjv@guardian.co.uk",
                "password": "a9e1Y5aKi",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Vic Arguile",
                "email": "varguilew@tripod.com",
                "password": "8Yb2W6KpRg",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Kelli Farfull",
                "email": "kfarfullx@cafepress.com",
                "password": "YKLyHLUOUncy",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Jefferson French",
                "email": "jfrenchy@phpbb.com",
                "password": "C9UBCssFNny",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Brendis Le Sieur",
                "email": "blez@cpanel.net",
                "password": "39HVHsn",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Garland Brosch",
                "email": "gbrosch10@blog.com",
                "password": "as60lnLVp5",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Dwayne Dilland",
                "email": "ddilland11@freewebs.com",
                "password": "4hDWDmtBIx7",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Eugene Phizackarley",
                "email": "ephizackarley12@fotki.com",
                "password": "GfPLtnhTrn7g",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Iolanthe Flack",
                "email": "iflack13@cbc.ca",
                "password": "NGui6IwDI",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lauryn Burberye",
                "email": "lburberye14@walmart.com",
                "password": "1NclriT15",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Sergent Otterwell",
                "email": "sotterwell15@fotki.com",
                "password": "ciyPSN",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Penelopa Killock",
                "email": "pkillock16@netvibes.com",
                "password": "n8McwL",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Granville Hayley",
                "email": "ghayley17@qq.com",
                "password": "zaFNTevep",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Morey Marrable",
                "email": "mmarrable18@deviantart.com",
                "password": "FqhIgojYURFd",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Cull Marrill",
                "email": "cmarrill19@seattletimes.com",
                "password": "WvW4oS",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Joshua Fonzone",
                "email": "jfonzone1a@woothemes.com",
                "password": "0LTjbfu",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Rabi Grute",
                "email": "rgrute1b@noaa.gov",
                "password": "jsxLELyj",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Sindee Doorbar",
                "email": "sdoorbar1c@cam.ac.uk",
                "password": "E1tjCVog",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Zacherie Rickword",
                "email": "zrickword1d@xrea.com",
                "password": "JfUNVm3B",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lynn Fazan",
                "email": "lfazan1e@purevolume.com",
                "password": "fvVCiKT",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Fina Irvin",
                "email": "firvin1f@senate.gov",
                "password": "E5tKhp0ndB5",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Viole Kinson",
                "email": "vkinson1g@icio.us",
                "password": "6ZZr0qD",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lorianna Glennie",
                "email": "lglennie1h@google.cn",
                "password": "Hg557EUg",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Modestine O'Hare",
                "email": "mohare1i@blog.com",
                "password": "DOFOqWaCo6",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Rafael Taunton",
                "email": "rtaunton1j@columbia.edu",
                "password": "Lf9662td114",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Noel Maly",
                "email": "nmaly1k@apple.com",
                "password": "stfzQakHGGE",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Meade Alderwick",
                "email": "malderwick1l@epa.gov",
                "password": "IRqW5IYv",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Jan Esberger",
                "email": "jesberger1m@cyberchimps.com",
                "password": "JnN8d2IWNe",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Bord Diben",
                "email": "bdiben1n@archive.org",
                "password": "pSG62Ib",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Klarika Eppson",
                "email": "keppson1o@indiatimes.com",
                "password": "BMJwMaqpuj",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Kit McMains",
                "email": "kmcmains1p@blogtalkradio.com",
                "password": "kPRISy",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Erminia Brunroth",
                "email": "ebrunroth1q@barnesandnoble.com",
                "password": "SdASH86uG",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Cherey Karadzas",
                "email": "ckaradzas1r@icio.us",
                "password": "F6uEJyZ",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Caty Antoniottii",
                "email": "cantoniottii1s@weather.com",
                "password": "6Cifp1",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Karlik Kennham",
                "email": "kkennham1t@free.fr",
                "password": "PHvQdjiBmuv2",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Creight Clewlowe",
                "email": "cclewlowe1u@businessinsider.com",
                "password": "R6bK2AG",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Marley Squibbs",
                "email": "msquibbs1v@mtv.com",
                "password": "FaXr2Ugb",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Albina Dunning",
                "email": "adunning1w@blog.com",
                "password": "gsIOA7F0T",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Lindsey Tierny",
                "email": "ltierny1x@ameblo.jp",
                "password": "IE636wvYE1Zk",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Berti Alesbrook",
                "email": "balesbrook1y@craigslist.org",
                "password": "RjpMTt",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Nina Sherringham",
                "email": "nsherringham1z@icio.us",
                "password": "HvU1dRqqas",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Osbert Simonnot",
                "email": "osimonnot20@japanpost.jp",
                "password": "91YvcSoVb",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Rozanne Manthorpe",
                "email": "rmanthorpe21@harvard.edu",
                "password": "g3GSN0c",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Tani Leddy",
                "email": "tleddy22@berkeley.edu",
                "password": "77sRimzW",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Eba Deluca",
                "email": "edeluca23@reuters.com",
                "password": "lOujvbEfC",
                "gravatar": "https://loremflickr.com/200/200"
              },
              {
                "name": "Anne-marie Witcombe",
                "email": "awitcombe24@bigcartel.com",
                "password": "qbcOVjuTj, "
                gravatar ": "
                https: //loremflickr.com/200/200""},
                {
                  "name": "Luciana Antill",
                  "email": "lantill25@slashdot.org",
                  "password": "paX95V",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Shauna Wake",
                  "email": "swake26@nifty.com",
                  "password": "Vedjq6eo2vxV",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Bellina McGarrie",
                  "email": "bmcgarrie27@desdev.cn",
                  "password": "uhxbzOgI",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Sumner Rennox",
                  "email": "srennox28@free.fr",
                  "password": "TBUU6M6yG",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Prentiss Thomelin",
                  "email": "pthomelin29@blog.com",
                  "password": "c3LfjUFwsLZ",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Kayne Attew",
                  "email": "kattew2a@cargocollective.com",
                  "password": "ZQQKFNF1tx",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Baron Mation",
                  "email": "bmation2b@1und1.de",
                  "password": "Q322OIoFl",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Mort Beccero",
                  "email": "mbeccero2c@ifeng.com",
                  "password": "BKhGfz8l",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Linnea MacDonell",
                  "email": "lmacdonell2d@cdc.gov",
                  "password": "TDnwvt7xBPR",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Kirstin Rounds",
                  "email": "krounds2e@odnoklassniki.ru",
                  "password": "hxXS9wMffE",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Ellyn Baraclough",
                  "email": "ebaraclough2f@va.gov",
                  "password": "u9RYiXWhvOa",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Kacie Praundl",
                  "email": "kpraundl2g@apache.org",
                  "password": "4IY3VZyLFzcJ",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Vina Hendrichs",
                  "email": "vhendrichs2h@hibu.com",
                  "password": "cpz5Vt7BLB",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Frederick Lammie",
                  "email": "flammie2i@delicious.com",
                  "password": "rhV6NImcY",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Laina Jozwik",
                  "email": "ljozwik2j@adobe.com",
                  "password": "XLtFQOxo",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Konstance Lomansey",
                  "email": "klomansey2k@zimbio.com",
                  "password": "0zzlqHph",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Alina Meachan",
                  "email": "ameachan2l@cmu.edu",
                  "password": "vqdJHtm8P",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Stacy Muffin",
                  "email": "smuffin2m@accuweather.com",
                  "password": "TYa6yg",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Clair Rapi",
                  "email": "crapi2n@baidu.com",
                  "password": "8eK7dKD7",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Patton Trigg",
                  "email": "ptrigg2o@yale.edu",
                  "password": "QA45Wlzwi4",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Tomasine Hryncewicz",
                  "email": "thryncewicz2p@biglobe.ne.jp",
                  "password": "GO13X2ZRS",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Nolie Rowett",
                  "email": "nrowett2q@1688.com",
                  "password": "lUGYNJl",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Elene Erat",
                  "email": "eerat2r@behance.net",
                  "password": "W6anmKW",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Cyndie Habeshaw",
                  "email": "chabeshaw2s@fema.gov",
                  "password": "6oCPjfJB5E",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Hamlin Pearl",
                  "email": "hpearl2t@toplist.cz",
                  "password": "yCklZyKjmf2",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Coralyn Gunston",
                  "email": "cgunston2u@pen.io",
                  "password": "ySj5ftTw",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Daryle Wermerling",
                  "email": "dwermerling2v@biglobe.ne.jp",
                  "password": "hkFb68vqXU",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Bren Seward",
                  "email": "bseward2w@sfgate.com",
                  "password": "6P6fC9Yy",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Sarah Whistlecraft",
                  "email": "swhistlecraft2x@jalbum.net",
                  "password": "WjWbK9",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Evyn Jewers",
                  "email": "ejewers2y@amazon.co.jp",
                  "password": "QPC0AUuIbia",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Bartholomew Steddall",
                  "email": "bsteddall2z@kickstarter.com",
                  "password": "G9OFvIY6w",
                  "gravatar": "https://loremflickr.com/200/200"
                },
                {
                  "name": "Melodee Lendon",
                  "email": "mlendon30@hubpages.com",
                  "password": "j3fGGt",
                  "gravatar": "https://loremflickr.com/200/200"
                }
              ]);
          });
      };