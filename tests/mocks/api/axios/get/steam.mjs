/** Mocked data */
export default function ({ faker, url, options, login = faker.internet.userName() }) {
  // App details
  if (/^https:..store.steampowered.com.api.appdetails*$/.test(url)) {
    console.debug(`metrics/compute/mocks > mocking steam api result > ${url}`)
    return ({
      status: 200,
      data: {
        524220: {
          success: true,
          data: {
            type: 'game',
            name: 'NieR:Automata™',
            steam_appid: 524220,
            required_age: 0,
            is_free: false,
            dlc: [
              580600
            ],
            detailed_description:
              '<h1>NieR:Automata™ Game of the YoRHa Edition<\/h1><p><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/extras\/Nier-GOTY-Steam-EN.jpg?t=1646911723" \/><br>The NieR:Automata™ Game of the YoRHa Edition includes the game itself and comes packed with DLC and bonus content for the full experience of the award-winning post-apocalyptic action RPG, including:<br><br><ul class="bb_ul"><li>3C3C1D119440927 DLC*<br><\/li><li>Valve Character Accessory<br><\/li><li>Cardboard Pod Skin<br><\/li><li>Retro Grey Pod Skin<br><\/li><li>Retro Red Pod Skin<br><\/li><li>Grimoire Weiss Pod<br><\/li><li>Machine Mask Accessory<br><\/li><li>Exclusive set of wallpapers in the following sizes: 1024 x 768, 1280 x 1024, 1920 x 1080, 2560 x 1600<\/li><\/ul><br>*To enjoy this content you will need to have progressed a certain way into the main story of the game. There are also some scenes during the progression of the main game scenario in which this content cannot be accessed.<\/p><br><h1>Featured DLC<\/h1><p><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/extras\/PromoBanner_616x389_en.png?t=1646911723" \/><br>The NieR: Automata 3C3C1D119440927 DLC is out now and includes three new colosseums to challenge, plus additional sub-quests. Upon completion of these quests, players can earn various rewards including new costumes from NieR: Replicant, new equipment and cosmetic accessories such as masks, hairspray that change the color of your character, records that add special music tracks to the players’ jukebox and much more!<\/p><br><h1>Reviews &amp; Accolades<\/h1><p>9\/10 <i>&quot;Don’t miss this&quot;<\/i> – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=https:\/\/www.videogamer.com\/reviews\/nier-automata-review" target="_blank" rel=" noopener"  >VideoGamer<\/a><br><br>10\/10 <i>&quot;One of the best games I’ve ever played&quot;<\/i> – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/www.rpgsite.net\/review\/5372-nier-automata-review" target="_blank" rel=" noopener"  >RPGSite<\/a><br><br>4\/5 <i>&quot;Pure genius&quot;<\/i> – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/www.trustedreviews.com\/nier-automata-review" target="_blank" rel=" noopener"  >Trusted Reviews<\/a><br><br>9\/10 <i>&quot;One of the most interesting and unique games you’ll play this year&quot;<\/i> – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/www.godisageek.com\/reviews\/nier-automata-review" target="_blank" rel=" noopener"  >God is a Geek<\/a><br><br>9\/10 <i>&quot;Classic Platinum action combined with a deep role-playing system&quot;<\/i> – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/metro.co.uk\/2017\/03\/06\/nier-automata-review-bullet-hell-meets-existential-role-player-6491251\/" target="_blank" rel=" noopener"  >Metro<\/a><\/p><br><h1>About the Game<\/h1><a href="https:\/\/store.steampowered.com\/app\/1113560\/NieR_Replicant_ver122474487139\/" target="_blank" rel=""  id="dynamiclink_0" >https:\/\/store.steampowered.com\/app\/1113560\/NieR_Replicant_ver122474487139\/<\/a><br><br><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/extras\/Nier_PRE_Launch-ENG_UK_Multi_06_Mod.jpg?t=1646911723" \/><br>NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.<br><br>Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.<br><br>Key Features:<br><ul class="bb_ul"><li><strong>Action-Packed Battles<\/strong> – Players will switch between using melee and ranged attacks in battle against hordes of enemies and challenging bosses across a variety of open field maps. The tight controls and incredibly fluid combat are simple to learn for newcomers while offering plenty of depth for more experienced action gamers. Players can perform high-speed battle actions—combining light and heavy attacks—and switch through an arsenal of weaponry while evading enemies with speed and style. <br><\/li><li><strong>Beautifully Desolate Open-World<\/strong> – The game seamlessly joins together hauntingly beautiful vistas and locations with no area loading. The environments are rendered in 60fps and contain a wealth of sub-events in addition to the main storyline. <br><\/li><li><strong>Masterfully Crafted Story and Characters<\/strong> – NieR: Automata tells the story of androids 2B, 9S and A2 and their ferocious battle to reclaim a machine-driven dystopia overrun by powerful weapons known as machine lifeforms.<br><\/li><li><strong>Elements of an RPG<\/strong> – Players will obtain a variety of weapon types, level up in battle, learn new combat skills, and customise a loadout that caters to their playstyle.<br><\/li><li><strong>Utilise the Pod Support System to Assist In and Outside of Battle<\/strong> – Pods can attack the enemy in both manual and lock-on modes. They can also assist outside of battle, such as allowing the player to glide through the air. Pods can be enhanced throughout the game, with upgrades including new attack methods and variations.<br><\/li><li><strong>“Auto Mode” Available for Beginners <\/strong>– Novice players can elect “Auto Mode” for easy attacks and evasions.<\/li><\/ul>',
            about_the_game:
              '<a href="https:\/\/store.steampowered.com\/app\/1113560\/NieR_Replicant_ver122474487139\/" target="_blank" rel=""  id="dynamiclink_1" >https:\/\/store.steampowered.com\/app\/1113560\/NieR_Replicant_ver122474487139\/<\/a><br><br><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/extras\/Nier_PRE_Launch-ENG_UK_Multi_06_Mod.jpg?t=1646911723" \/><br>NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.<br><br>Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.<br><br>Key Features:<br><ul class="bb_ul"><li><strong>Action-Packed Battles<\/strong> – Players will switch between using melee and ranged attacks in battle against hordes of enemies and challenging bosses across a variety of open field maps. The tight controls and incredibly fluid combat are simple to learn for newcomers while offering plenty of depth for more experienced action gamers. Players can perform high-speed battle actions—combining light and heavy attacks—and switch through an arsenal of weaponry while evading enemies with speed and style. <br><\/li><li><strong>Beautifully Desolate Open-World<\/strong> – The game seamlessly joins together hauntingly beautiful vistas and locations with no area loading. The environments are rendered in 60fps and contain a wealth of sub-events in addition to the main storyline. <br><\/li><li><strong>Masterfully Crafted Story and Characters<\/strong> – NieR: Automata tells the story of androids 2B, 9S and A2 and their ferocious battle to reclaim a machine-driven dystopia overrun by powerful weapons known as machine lifeforms.<br><\/li><li><strong>Elements of an RPG<\/strong> – Players will obtain a variety of weapon types, level up in battle, learn new combat skills, and customise a loadout that caters to their playstyle.<br><\/li><li><strong>Utilise the Pod Support System to Assist In and Outside of Battle<\/strong> – Pods can attack the enemy in both manual and lock-on modes. They can also assist outside of battle, such as allowing the player to glide through the air. Pods can be enhanced throughout the game, with upgrades including new attack methods and variations.<br><\/li><li><strong>“Auto Mode” Available for Beginners <\/strong>– Novice players can elect “Auto Mode” for easy attacks and evasions.<\/li><\/ul>',
            short_description: 'NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.',
            supported_languages: 'English<strong>*<\/strong>, French, Italian, German, Spanish - Spain, Japanese<strong>*<\/strong><br><strong>*<\/strong>languages with full audio support',
            reviews:
              '“Riveting and gratifying combat”<br>9\/10 – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/www.gamespot.com\/reviews\/nier-automata-review\/1900-6416628\/" target="_blank" rel=" noopener"  >Gamespot<\/a><br><br>“A breath of fresh air”<br>4.5\/5 – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/www.gamesradar.com\/nier-automata-review\/" target="_blank" rel=" noopener"  >GamesRadar+<\/a><br><br>“Bold, ambitious, and surprising”<br>Recommended – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=http:\/\/www.eurogamer.net\/articles\/2017-02-27-nier-automata-review" target="_blank" rel=" noopener"  >Eurogamer<\/a><br>',
            header_image: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/header.jpg?t=1646911723',
            website: 'http:\/\/www.niergame.com\/',
            pc_requirements: {
              minimum:
                '<strong>Minimum:<\/strong><br><ul class="bb_ul"><li><strong>OS:<\/strong> Windows 7 \/8.1 \/10 64bit<br><\/li><li><strong>Processor:<\/strong> Intel Core i3 2100 or AMD A8-6500<br><\/li><li><strong>Memory:<\/strong> 4 GB RAM<br><\/li><li><strong>Graphics:<\/strong> NVIDIA GeForce GTX 770 VRAM 2GB or AMD Radeon R9 270X VRAM 2GB<br><\/li><li><strong>DirectX:<\/strong> Version 11<br><\/li><li><strong>Network:<\/strong> Broadband Internet connection<br><\/li><li><strong>Storage:<\/strong> 50 GB available space<br><\/li><li><strong>Sound Card:<\/strong> DirectX® 11 supported<br><\/li><li><strong>Additional Notes:<\/strong> Mouse, keyboard and game pad (XInput only). Screen resolution: 1280x720. This product only supports MS-IME keyboard input. There is a possibility that other IME will not function correctly with it.<\/li><\/ul>',
              recommended:
                '<strong>Recommended:<\/strong><br><ul class="bb_ul"><li><strong>OS:<\/strong> Windows 8.1 \/10 64bit<br><\/li><li><strong>Processor:<\/strong> Intel Core i5 4670 or AMD A10-7850K<br><\/li><li><strong>Memory:<\/strong> 8 GB RAM<br><\/li><li><strong>Graphics:<\/strong> NVIDIA GeForce GTX 980 VRAM 4GB or AMD Radeon R9 380X VRAM 4GB<br><\/li><li><strong>DirectX:<\/strong> Version 11<br><\/li><li><strong>Network:<\/strong> Broadband Internet connection<br><\/li><li><strong>Storage:<\/strong> 50 GB available space<br><\/li><li><strong>Sound Card:<\/strong> DirectX® 11 supported<br><\/li><li><strong>Additional Notes:<\/strong> Mouse, keyboard and game pad (XInput only). Screen resolution: 1920x1080. Depending on the monitor and PC graphics card environment and setup used, this title can expand its display resolution to 4K. However, please be aware that 4K resolutions are not officially supported. This product only supports MS-IME keyboard input. There is a possibility that other IME will not function correctly with it.<\/li><\/ul>'
            },
            mac_requirements: [],
            linux_requirements: [],
            legal_notice:
              '© 2017 SQUARE ENIX CO., LTD. All Rights Reserved. Developed by PlatinumGames Inc. Character Design by Akihiko Yoshida. NieR: Automata is a registered trademark or trademark of Square Enix Co., Ltd. SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd. All other marks are properties of their respective owners.',
            developers: [
              'Square Enix',
              'PlatinumGames Inc.'
            ],
            publishers: [
              'Square Enix'
            ],
            price_overview: {
              currency: 'CAD',
              initial: 5350,
              final: 5350,
              discount_percent: 0,
              initial_formatted: '',
              final_formatted: 'CDN$ 53.50'
            },
            packages: [
              339705
            ],
            package_groups: [
              {
                name: 'default',
                title: 'Buy NieR:Automata™',
                description: '',
                selection_text: 'Select a purchase option',
                save_text: '',
                display_type: 0,
                is_recurring_subscription: 'false',
                subs: [
                  {
                    packageid: 339705,
                    percent_savings_text: ' ',
                    percent_savings: 0,
                    option_text: 'NieR:Automata™ Game of the YoRHa Edition - CDN$ 53.50',
                    option_description: '',
                    can_get_free_license: '0',
                    is_free_license: false,
                    price_in_cents_with_discount: 5350
                  }
                ]
              }
            ],
            platforms: {
              windows: true,
              mac: false,
              linux: false
            },
            metacritic: {
              score: 84,
              url: 'https:\/\/www.metacritic.com\/game\/pc\/nier-automata?ftag=MCD-06-10aaa1f'
            },
            categories: [
              {
                id: 2,
                description: 'Single-player'
              },
              {
                id: 22,
                description: 'Steam Achievements'
              },
              {
                id: 29,
                description: 'Steam Trading Cards'
              },
              {
                id: 18,
                description: 'Partial Controller Support'
              },
              {
                id: 23,
                description: 'Steam Cloud'
              },
              {
                id: 41,
                description: 'Remote Play on Phone'
              },
              {
                id: 42,
                description: 'Remote Play on Tablet'
              }
            ],
            genres: [
              {
                id: '1',
                description: 'Action'
              },
              {
                id: '3',
                description: 'RPG'
              }
            ],
            screenshots: [
              {
                id: 0,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_d0314b4c134329a483b5e43af951f60274abc66b.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_d0314b4c134329a483b5e43af951f60274abc66b.1920x1080.jpg?t=1646911723'
              },
              {
                id: 1,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_8b29f7e1ce9a8b9313dc3eb50dbe76a4cf94eef9.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_8b29f7e1ce9a8b9313dc3eb50dbe76a4cf94eef9.1920x1080.jpg?t=1646911723'
              },
              {
                id: 2,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_2c265df38c3d2d393d74ee8e74d79bdafa16b143.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_2c265df38c3d2d393d74ee8e74d79bdafa16b143.1920x1080.jpg?t=1646911723'
              },
              {
                id: 3,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_831e0e7c9d514393b711e9ed1d6796042521a80c.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_831e0e7c9d514393b711e9ed1d6796042521a80c.1920x1080.jpg?t=1646911723'
              },
              {
                id: 4,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_a6d164452c1aa00a0d7b7ca31aa76d787853b39e.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_a6d164452c1aa00a0d7b7ca31aa76d787853b39e.1920x1080.jpg?t=1646911723'
              },
              {
                id: 5,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_edcb7633ff42d7200bcb240a1ebb1116d602d9fe.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_edcb7633ff42d7200bcb240a1ebb1116d602d9fe.1920x1080.jpg?t=1646911723'
              },
              {
                id: 6,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_e926e3b5d440b4f244525745c7100edc2d717b85.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_e926e3b5d440b4f244525745c7100edc2d717b85.1920x1080.jpg?t=1646911723'
              },
              {
                id: 7,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_02d2f3f2b7b7add8e6ad50d6b9325d05fa1d7bc7.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_02d2f3f2b7b7add8e6ad50d6b9325d05fa1d7bc7.1920x1080.jpg?t=1646911723'
              },
              {
                id: 8,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_b55c67ac11781513183391c18ea86819e047577d.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_b55c67ac11781513183391c18ea86819e047577d.1920x1080.jpg?t=1646911723'
              },
              {
                id: 9,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_c538e630c5cc224124104cc42ec6220ab90b5852.600x338.jpg?t=1646911723',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/ss_c538e630c5cc224124104cc42ec6220ab90b5852.1920x1080.jpg?t=1646911723'
              }
            ],
            movies: [
              {
                id: 256744000,
                name: 'ESRB EN Nier GOTY',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256744000\/movie.293x165.jpg?t=1551200572',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256744000\/movie480.webm?t=1551200572',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256744000\/movie_max.webm?t=1551200572'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256744000\/movie480.mp4?t=1551200572',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256744000\/movie_max.mp4?t=1551200572'
                },
                highlight: true
              },
              {
                id: 256681401,
                name: 'Nier Pre-Launch ESRB EN',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256681401\/movie.293x165.jpg?t=1489664283',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256681401\/movie480.webm?t=1489664283',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256681401\/movie_max.webm?t=1489664283'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256681401\/movie480.mp4?t=1489664283',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256681401\/movie_max.mp4?t=1489664283'
                },
                highlight: true
              },
              {
                id: 256680536,
                name: 'Nier Attract Trailer Unrated EN',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256680536\/movie.293x165.jpg?t=1493741191',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256680536\/movie480.webm?t=1493741191',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256680536\/movie_max.webm?t=1493741191'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256680536\/movie480.mp4?t=1493741191',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256680536\/movie_max.mp4?t=1493741191'
                },
                highlight: true
              }
            ],
            recommendations: {
              total: 80839
            },
            achievements: {
              total: 47,
              highlighted: [
                {
                  name: 'Resuscitated Body',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/3396a4732f6c521900195182eadc9c523988e271.jpg'
                },
                {
                  name: 'Vestiges of Prosperity',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/a68518be86868a69b68d64b9720d65a33068713f.jpg'
                },
                {
                  name: "It's a Healthy Baby Boy!",
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/9c038749e650134ddbe142a76c7a920e98947a82.jpg'
                },
                {
                  name: 'We Await Your Next Visit',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/e028dca2f5773e58e6a36c0bbb5e3dfc4de1806a.jpg'
                },
                {
                  name: 'Creation and Insurrection',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/52cadba291448ae488147c0a31e9ffddd64adab7.jpg'
                },
                {
                  name: 'The Mechanical Kingdom',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/f57deb02acdf63c9cf9adc21abb5a3158db77cfa.jpg'
                },
                {
                  name: 'Ruler of the Deep',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/6af7569b29b4f6f2b62f4a8d4b3be6f25183e8da.jpg'
                },
                {
                  name: 'Those Who Love Humans',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/ef85393debcb1c87e0f48f50b8afd89305d65c73.jpg'
                },
                {
                  name: 'Iron Soul',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/80808a96458c14f827bb66a12c1ef0a5c877b9d4.jpg'
                },
                {
                  name: 'One Battle Ends',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/524220\/5172a623c717e83a83c41b52f52e9b39077f0289.jpg'
                }
              ]
            },
            release_date: {
              coming_soon: false,
              date: '17 Mar, 2017'
            },
            support_info: {
              url: 'http:\/\/sqex.to\/steamsupport',
              email: ''
            },
            background: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/page_bg_generated_v6b.jpg?t=1646911723',
            background_raw: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/524220\/page.bg.jpg?t=1646911723',
            content_descriptors: {
              ids: [],
              notes: null
            }
          }
        },
        1113560: {
          success: true,
          data: {
            type: 'game',
            name: 'NieR Replicant™ ver.1.22474487139...',
            steam_appid: 1113560,
            required_age: '17',
            is_free: false,
            dlc: [
              1408390
            ],
            detailed_description:
              '<h1>Reviews &amp; Accolades<\/h1><p><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/SNOW_Accolades_Banner_616x600_Steam_in-text_banner.jpg?t=1673963725" \/><\/p><br><h1>4 YoRHa<\/h1><p><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/SNOW_steamautomata_intextEN.jpg?t=1673963725" \/><br>4 YoRHa is a free downloadable content. <br>Enjoy 4 costumes and 4 weapons from NieR:Automata in NieR Replicant ver.1.22474487139....<br><br>*Due to the story of the game, this content may not be playable during some scenes.<br>*The full game (sold separately) is required to use this content. Also, if the latest patch needs to be applied, please update before use.<\/p><br><h1>About the Game<\/h1><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/Steam_Overview_Banner_new.png?t=1673963725" \/><br>A thousand-year lie that would live on for eternity...<br><br>NieR Replicant ver.1.22474487139... is an updated version of NieR Replicant, previously only released in Japan.<br><br>Discover the one-of-a-kind prequel to the critically-acclaimed masterpiece NieR:Automata. Now with a modern upgrade, experience masterfully revived visuals, a fascinating storyline and more! <br><br>The protagonist is a kind young man living in a remote village. In order to save his sister Yonah, who fell terminally ill to the Black Scrawl, he sets out with Grimoire Weiss, a strange talking tome, to search for the &quot;Sealed verses.&quot;<br><br>Experience the NieR Replicant story for the first time in the west through the eyes of the protagonist as a brother. <br><br>The original all-star team returns including acclaimed director, YOKO TARO (Drakengard \/ NieR:Automata), composer Keiichi Okabe (TEKKEN \/ Drakengard \/ NieR:Automata), and producer Yosuke Saito (DRAGON QUEST X \/ NieR:Automata).<br><br><br><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/Steam_Story_Banner_new.png?t=1673963725" \/><br>In a distant, distant future, humanity is on the brink of extinction.<br>A black scrawl disease and strange beasts threaten the world. <br>A young kindhearted boy makes a promise to his little sister.<br>A thousand-year lie that would live on for eternity...<br><br><br><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/Steam_Features_Banner_new.png?t=1673963725" \/><br><ul class="bb_ul"><li>Uncover the truth behind the world of NieR and prepare to question everything in this dark, twisting tale.<br><\/li><li>Journey alongside an unlikely group of allies through a ruined world, plagued by sickness and monstrous horrors.<br><\/li><li>A mesmerizing iconic soundtrack, newly recorded by NieR:Automata composer, Keiichi Okabe.<br><\/li><li>Fight back dreadful enemies with a visceral, uniquely customizable blend of swordplay and powerful magic.<br><\/li><li>Customize your character\'s magic, skills, and weapons with the power of Words.  <\/li><\/ul>',
            about_the_game:
              '<img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/Steam_Overview_Banner_new.png?t=1673963725" \/><br>A thousand-year lie that would live on for eternity...<br><br>NieR Replicant ver.1.22474487139... is an updated version of NieR Replicant, previously only released in Japan.<br><br>Discover the one-of-a-kind prequel to the critically-acclaimed masterpiece NieR:Automata. Now with a modern upgrade, experience masterfully revived visuals, a fascinating storyline and more! <br><br>The protagonist is a kind young man living in a remote village. In order to save his sister Yonah, who fell terminally ill to the Black Scrawl, he sets out with Grimoire Weiss, a strange talking tome, to search for the &quot;Sealed verses.&quot;<br><br>Experience the NieR Replicant story for the first time in the west through the eyes of the protagonist as a brother. <br><br>The original all-star team returns including acclaimed director, YOKO TARO (Drakengard \/ NieR:Automata), composer Keiichi Okabe (TEKKEN \/ Drakengard \/ NieR:Automata), and producer Yosuke Saito (DRAGON QUEST X \/ NieR:Automata).<br><br><br><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/Steam_Story_Banner_new.png?t=1673963725" \/><br>In a distant, distant future, humanity is on the brink of extinction.<br>A black scrawl disease and strange beasts threaten the world. <br>A young kindhearted boy makes a promise to his little sister.<br>A thousand-year lie that would live on for eternity...<br><br><br><img src="https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/extras\/Steam_Features_Banner_new.png?t=1673963725" \/><br><ul class="bb_ul"><li>Uncover the truth behind the world of NieR and prepare to question everything in this dark, twisting tale.<br><\/li><li>Journey alongside an unlikely group of allies through a ruined world, plagued by sickness and monstrous horrors.<br><\/li><li>A mesmerizing iconic soundtrack, newly recorded by NieR:Automata composer, Keiichi Okabe.<br><\/li><li>Fight back dreadful enemies with a visceral, uniquely customizable blend of swordplay and powerful magic.<br><\/li><li>Customize your character\'s magic, skills, and weapons with the power of Words.  <\/li><\/ul>',
            short_description: 'The upgraded prequel of NieR:Automata. A kind young man sets out with Grimoire Weiss, a strange talking book, to search for the &quot;Sealed verses&quot; in order to save his sister Yonah, who fell terminally ill to the Black Scrawl.',
            supported_languages: 'English<strong>*<\/strong>, French, Italian, German, Spanish - Spain, Japanese<strong>*<\/strong>, Korean, Simplified Chinese, Traditional Chinese<br><strong>*<\/strong>languages with full audio support',
            reviews:
              '“Lives up to the hype”<br>4.5\/5 – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=https:\/\/www.windowscentral.com\/nier-replicant-review" target="_blank" rel=" noopener"  >Windows Central<\/a><br><br>“Incredible, refined version”<br>5\/5 – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=https:\/\/www.thegamer.com\/nier-replicant-remake-review\/" target="_blank" rel=" noopener"  >https:\/\/www.thegamer.com\/nier-replicant-remake-review\/<\/a><br><br>“Ambitious, fascinating game”<br>10\/10 – <a href="https:\/\/steamcommunity.com\/linkfilter\/?url=https:\/\/www.gamingbible.co.uk\/reviews\/games-nier-replicant-ver122474487139-review-a-replayable-masterpiece-20210422?source=twitter" target="_blank" rel=" noopener"  >GAMINGbible<\/a><br>',
            header_image: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/header.jpg?t=1673963725',
            website: 'https:\/\/nier.square-enix-games.com\/',
            pc_requirements: {
              minimum:
                '<strong>Minimum:<\/strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br><\/li><li><strong>OS:<\/strong> Windows® 10 64-bit<br><\/li><li><strong>Processor:<\/strong> AMD Ryzen™ 3 1300X; Intel® Core™ i5-6400<br><\/li><li><strong>Memory:<\/strong> 8 GB RAM<br><\/li><li><strong>Graphics:<\/strong> AMD Radeon™ R9 270X; NVIDIA® GeForce® GTX 960<br><\/li><li><strong>DirectX:<\/strong> Version 11<br><\/li><li><strong>Storage:<\/strong> 26 GB available space<br><\/li><li><strong>Sound Card:<\/strong> DirectX Compatible Sound Card<br><\/li><li><strong>Additional Notes:<\/strong> 60 FPS @ 1280x720<\/li><\/ul>',
              recommended:
                '<strong>Recommended:<\/strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br><\/li><li><strong>OS:<\/strong> Windows® 10 64-bit<br><\/li><li><strong>Processor:<\/strong> AMD Ryzen™ 3 1300X; Intel® Core™ i5-6400<br><\/li><li><strong>Memory:<\/strong> 16 GB RAM<br><\/li><li><strong>Graphics:<\/strong> AMD Radeon™ RX Vega 56; NVIDIA® GeForce® GTX 1660<br><\/li><li><strong>DirectX:<\/strong> Version 11<br><\/li><li><strong>Storage:<\/strong> 26 GB available space<br><\/li><li><strong>Sound Card:<\/strong> DirectX Compatible Sound Card<br><\/li><li><strong>Additional Notes:<\/strong> 60 FPS @ 1920x1080<\/li><\/ul>'
            },
            mac_requirements: {
              minimum: '<strong>Minimum:<\/strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<\/li><\/ul>',
              recommended: '<strong>Recommended:<\/strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<\/li><\/ul>'
            },
            linux_requirements: {
              minimum: '<strong>Minimum:<\/strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<\/li><\/ul>',
              recommended: '<strong>Recommended:<\/strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<\/li><\/ul>'
            },
            legal_notice: '© 2010 SQUARE ENIX CO., LTD. All Rights Reserved. Developed by Toylogic Inc. <br \/>\r\nNIER REPLICANT is a registered trademark or trademark of Square Enix Co., Ltd. SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd.',
            developers: [
              'Square Enix',
              'Toylogic Inc.'
            ],
            publishers: [
              'Square Enix'
            ],
            price_overview: {
              currency: 'CAD',
              initial: 7999,
              final: 7999,
              discount_percent: 0,
              initial_formatted: '',
              final_formatted: 'CDN$ 79.99'
            },
            packages: [
              502733
            ],
            package_groups: [
              {
                name: 'default',
                title: 'Buy NieR Replicant™ ver.1.22474487139...',
                description: '',
                selection_text: 'Select a purchase option',
                save_text: '',
                display_type: 0,
                is_recurring_subscription: 'false',
                subs: [
                  {
                    packageid: 502733,
                    percent_savings_text: ' ',
                    percent_savings: 0,
                    option_text: 'NieR Replicant ver.1.22474487139 - CDN$ 79.99',
                    option_description: '',
                    can_get_free_license: '0',
                    is_free_license: false,
                    price_in_cents_with_discount: 7999
                  }
                ]
              }
            ],
            platforms: {
              windows: true,
              mac: false,
              linux: false
            },
            categories: [
              {
                id: 2,
                description: 'Single-player'
              },
              {
                id: 22,
                description: 'Steam Achievements'
              },
              {
                id: 29,
                description: 'Steam Trading Cards'
              },
              {
                id: 18,
                description: 'Partial Controller Support'
              },
              {
                id: 23,
                description: 'Steam Cloud'
              }
            ],
            genres: [
              {
                id: '1',
                description: 'Action'
              },
              {
                id: '25',
                description: 'Adventure'
              },
              {
                id: '3',
                description: 'RPG'
              }
            ],
            screenshots: [
              {
                id: 0,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_2ff3ddb26c30b8397bce45abd0b4d847c3457259.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_2ff3ddb26c30b8397bce45abd0b4d847c3457259.1920x1080.jpg?t=1673963725'
              },
              {
                id: 1,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_f33bdbe53fa2d75e429f9b35a1299109c9ab8991.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_f33bdbe53fa2d75e429f9b35a1299109c9ab8991.1920x1080.jpg?t=1673963725'
              },
              {
                id: 2,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_b7867dae1f1fa62a2cc82165c8c79eb6821782d6.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_b7867dae1f1fa62a2cc82165c8c79eb6821782d6.1920x1080.jpg?t=1673963725'
              },
              {
                id: 3,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_8d7a5e5a0a7fe7782bf238763a2e29f8f6419e84.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_8d7a5e5a0a7fe7782bf238763a2e29f8f6419e84.1920x1080.jpg?t=1673963725'
              },
              {
                id: 4,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_f7689ef6964eee2407d9e996bc73b380e3e7a56a.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_f7689ef6964eee2407d9e996bc73b380e3e7a56a.1920x1080.jpg?t=1673963725'
              },
              {
                id: 5,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_6740ec558094fafc86f0933264e50e796c21e9cf.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_6740ec558094fafc86f0933264e50e796c21e9cf.1920x1080.jpg?t=1673963725'
              },
              {
                id: 6,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_eb6b583db6d9b3051c131ba748c768b2d6226277.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_eb6b583db6d9b3051c131ba748c768b2d6226277.1920x1080.jpg?t=1673963725'
              },
              {
                id: 7,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_c93af51b782d72cf081d4e8451836ad1716f63be.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_c93af51b782d72cf081d4e8451836ad1716f63be.1920x1080.jpg?t=1673963725'
              },
              {
                id: 8,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_56ecf25d6d95441a23f5481f895771c2dcb9ac18.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_56ecf25d6d95441a23f5481f895771c2dcb9ac18.1920x1080.jpg?t=1673963725'
              },
              {
                id: 9,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_a2c004272402bf76b70ed13c920fbd3c85d43d94.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_a2c004272402bf76b70ed13c920fbd3c85d43d94.1920x1080.jpg?t=1673963725'
              },
              {
                id: 10,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_0621ab7f10a0b23f4124509a13a8ace0487d856a.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_0621ab7f10a0b23f4124509a13a8ace0487d856a.1920x1080.jpg?t=1673963725'
              },
              {
                id: 11,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_ada29940be1bdb0e8b70e64788044f4c2592657f.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_ada29940be1bdb0e8b70e64788044f4c2592657f.1920x1080.jpg?t=1673963725'
              },
              {
                id: 12,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_1c972f496956e106c3b9023c68ff309fd649407e.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_1c972f496956e106c3b9023c68ff309fd649407e.1920x1080.jpg?t=1673963725'
              },
              {
                id: 13,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_344cfa42952beb6d51540d43bdfcbeaa0949c9a7.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_344cfa42952beb6d51540d43bdfcbeaa0949c9a7.1920x1080.jpg?t=1673963725'
              },
              {
                id: 14,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_2a5576351e2f84518dec11a796fbff609f4e5b9f.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_2a5576351e2f84518dec11a796fbff609f4e5b9f.1920x1080.jpg?t=1673963725'
              },
              {
                id: 15,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_071609b98112f7621067dd5275ce0ead665f13f2.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_071609b98112f7621067dd5275ce0ead665f13f2.1920x1080.jpg?t=1673963725'
              },
              {
                id: 16,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_b3a1dfdbb9d4a47b6407de5c8b1dc75ddfcea931.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_b3a1dfdbb9d4a47b6407de5c8b1dc75ddfcea931.1920x1080.jpg?t=1673963725'
              },
              {
                id: 17,
                path_thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_942e62e6f1bf312148a7480f943babe2325a3714.600x338.jpg?t=1673963725',
                path_full: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/ss_942e62e6f1bf312148a7480f943babe2325a3714.1920x1080.jpg?t=1673963725'
              }
            ],
            movies: [
              {
                id: 256831765,
                name: 'ESRB EN Launch NierRep',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831765\/movie.293x165.jpg?t=1619194859',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831765\/movie480_vp9.webm?t=1619194859',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831765\/movie_max_vp9.webm?t=1619194859'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831765\/movie480.mp4?t=1619194859',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831765\/movie_max.mp4?t=1619194859'
                },
                highlight: true
              },
              {
                id: 256831398,
                name: 'PEGI FR Gestalt NierRep',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831398\/movie.293x165.jpg?t=1619194237',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831398\/movie480_vp9.webm?t=1619194237',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831398\/movie_max_vp9.webm?t=1619194237'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831398\/movie480.mp4?t=1619194237',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831398\/movie_max.mp4?t=1619194237'
                },
                highlight: true
              },
              {
                id: 256831395,
                name: 'ESRB EN Extra content NierRep',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831395\/movie.293x165.jpg?t=1619194332',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831395\/movie480_vp9.webm?t=1619194332',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831395\/movie_max_vp9.webm?t=1619194332'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831395\/movie480.mp4?t=1619194332',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256831395\/movie_max.mp4?t=1619194332'
                },
                highlight: true
              },
              {
                id: 256827494,
                name: 'ESRB EN OpeningCinematic NierRep',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256827494\/movie.293x165.jpg?t=1616752558',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256827494\/movie480_vp9.webm?t=1616752558',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256827494\/movie_max_vp9.webm?t=1616752558'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256827494\/movie480.mp4?t=1616752558',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256827494\/movie_max.mp4?t=1616752558'
                },
                highlight: true
              },
              {
                id: 256813164,
                name: 'ESRB EN TGA 2020 NierRep',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256813164\/movie.293x165.jpg?t=1607687616',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256813164\/movie480_vp9.webm?t=1607687616',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256813164\/movie_max_vp9.webm?t=1607687616'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256813164\/movie480.mp4?t=1607687616',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256813164\/movie_max.mp4?t=1607687616'
                },
                highlight: true
              },
              {
                id: 256802321,
                name: 'ESRB EN TGS NierRep',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256802321\/movie.293x165.jpg?t=1600963175',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256802321\/movie480_vp9.webm?t=1600963175',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256802321\/movie_max_vp9.webm?t=1600963175'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256802321\/movie480.mp4?t=1600963175',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256802321\/movie_max.mp4?t=1600963175'
                },
                highlight: true
              },
              {
                id: 256782057,
                name: 'ESRB EN - Teaser',
                thumbnail: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256782057\/movie.293x165.jpg?t=1600964179',
                webm: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256782057\/movie480_vp9.webm?t=1600964179',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256782057\/movie_max_vp9.webm?t=1600964179'
                },
                mp4: {
                  480: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256782057\/movie480.mp4?t=1600964179',
                  max: 'http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256782057\/movie_max.mp4?t=1600964179'
                },
                highlight: true
              }
            ],
            recommendations: {
              total: 15065
            },
            achievements: {
              total: 47,
              highlighted: [
                {
                  name: 'The Final Verse',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/a9369e5eddeb1486ffd849aa3820607353ddbc23.jpg'
                },
                {
                  name: 'The Book of Legend',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/6d11bfa34275061352048988a9202c3194259851.jpg'
                },
                {
                  name: 'The Wild Companion',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/8ac7d0d717ccda449162f94f81054073e9679fc5.jpg'
                },
                {
                  name: 'The Mellow Companion',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/1981aa8fe7fb43d11720331503fa3c9028f0e18a.jpg'
                },
                {
                  name: 'Release',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/88d76547290c9c200536cbb1a48d255303010a5b.jpg'
                },
                {
                  name: 'Gratitude',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/d9b8fd4cc2e4fc270edf18b177729b07e8a32cc9.jpg'
                },
                {
                  name: 'Key Collector',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/6629579d96114c2a268898911634495f8235ce08.jpg'
                },
                {
                  name: 'A World in Flux',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/4b3b4bcf8267f93bb73600cc688323c2c910e0b5.jpg'
                },
                {
                  name: 'Combo Fanatic',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/d19d83d2254a60554435a1e1d99896e96bdf64d5.jpg'
                },
                {
                  name: 'Combo Master',
                  path: 'https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/1113560\/d62e08ce00fd14c0fb72acebdfb09c838803a102.jpg'
                }
              ]
            },
            release_date: {
              coming_soon: false,
              date: '23 Apr, 2021'
            },
            support_info: {
              url: 'https:\/\/support.square-enix-games.com\/',
              email: ''
            },
            background: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/page_bg_generated_v6b.jpg?t=1673963725',
            background_raw: 'https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/1113560\/page.bg.jpg?t=1673963725',
            content_descriptors: {
              ids: [
                2,
                5
              ],
              notes: 'NieR Replicant ver.1.22474487139… contains adult scenes and theme, strong language in certain areas of the game, including blood, violence, criminal acts and killing. '
            }
          }
        }
      }
    })
  }

  // Steam api
  if (/^https:..api.steampowered.com.*$/.test(url)) {
    // Owned games
    if (/^.*IPlayerService.GetOwnedGames.v0001.*$/.test(url)) {
      console.debug(`metrics/compute/mocks > mocking steam api result > ${url}`)
      return ({
        status: 200,
        data: {
          response: {
            game_count: 2,
            games: [
              {
                appid: 524220,
                name: 'NieR:Automata™',
                playtime_forever: 2693,
                img_icon_url: 'ec431ecb2a5178c5a01bb15550f112f93af029bb',
                has_community_visible_stats: true,
                playtime_windows_forever: 3,
                playtime_mac_forever: 0,
                playtime_linux_forever: 0,
                rtime_last_played: 1582407120
              },
              {
                appid: 1113560,
                name: 'NieR Replicant ver.1.22474487139...',
                playtime_forever: 2661,
                img_icon_url: '8ca16d03995179d1ba3a2263e03db170100c6382',
                has_community_visible_stats: true,
                playtime_windows_forever: 2661,
                playtime_mac_forever: 0,
                playtime_linux_forever: 0,
                rtime_last_played: 1625611102,
                content_descriptorids: [
                  2,
                  5
                ]
              }
            ]
          }
        }
      })
    }
    // Game schema
    if (/^.*ISteamUserStats.GetSchemaForGame.v0002.*$/.test(url)) {
      console.debug(`metrics/compute/mocks > mocking steam api result > ${url}`)
      return ({
        status: 200,
        data: /appid=524220/.test(url)
          ? {
              game: {
                gameName: 'TRAIN',
                gameVersion: '14',
                availableGameStats: {
                  achievements: [
                    {
                      name: 'ACH_VISITED_BUNKER',
                      defaultvalue: 0,
                      displayName: 'Resuscitated Body',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/3396a4732f6c521900195182eadc9c523988e271.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_VISITED_RUINS_CITY',
                      defaultvalue: 0,
                      displayName: 'Vestiges of Prosperity',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/a68518be86868a69b68d64b9720d65a33068713f.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_DESERT_AREA',
                      defaultvalue: 0,
                      displayName: "It's a Healthy Baby Boy!",
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/9c038749e650134ddbe142a76c7a920e98947a82.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_AMUSEMENT_PARK',
                      defaultvalue: 0,
                      displayName: 'We Await Your Next Visit',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/e028dca2f5773e58e6a36c0bbb5e3dfc4de1806a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_ALIEN_SHIP',
                      defaultvalue: 0,
                      displayName: 'Creation and Insurrection',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/52cadba291448ae488147c0a31e9ffddd64adab7.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_CASTLE_FOREST',
                      defaultvalue: 0,
                      displayName: 'The Mechanical Kingdom',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/f57deb02acdf63c9cf9adc21abb5a3158db77cfa.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_SUBMERGE_CITY',
                      defaultvalue: 0,
                      displayName: 'Ruler of the Deep',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/6af7569b29b4f6f2b62f4a8d4b3be6f25183e8da.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_COPY_CITY',
                      defaultvalue: 0,
                      displayName: 'Those Who Love Humans',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/ef85393debcb1c87e0f48f50b8afd89305d65c73.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_ROBOT_MT',
                      defaultvalue: 0,
                      displayName: 'Iron Soul',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/80808a96458c14f827bb66a12c1ef0a5c877b9d4.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_A',
                      defaultvalue: 0,
                      displayName: 'One Battle Ends',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5172a623c717e83a83c41b52f52e9b39077f0289.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_B',
                      defaultvalue: 0,
                      displayName: 'A New Battle Begins',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/91df4ff96e60f0f0434afd1105c82a59dddb20a9.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_SEE_2B_DIE',
                      defaultvalue: 0,
                      displayName: 'Final Wish',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/9337b450a269e175ac5c96606237f7b5cedf52e4.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_PLAY_A2_FIRST_TIME',
                      defaultvalue: 0,
                      displayName: 'Treacherous Blade',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/f8bbe8253972c94d1692dcc3733e98f37c0fd92e.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_LAST_REQUEST_PASCAL',
                      defaultvalue: 0,
                      displayName: 'Farewell, Pascal',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/392b60acb70e7d048edbd4de5cfb5bb39ccc524c.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_KILL_ROBOT_BROTHER',
                      defaultvalue: 0,
                      displayName: 'Justice',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/c81d259248687088bc59cdb50a668434bbb1e246.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_DEVOLA_NOVEL_END',
                      defaultvalue: 0,
                      displayName: 'Crime and Punishment',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/9eb6d496221f65495a09764d3ae1ec453f12208f.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_9S',
                      defaultvalue: 0,
                      displayName: 'Leaving for the New World',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/f92c92e085c3d6edec542f25b3561d8eb810c5d7.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_A2',
                      defaultvalue: 0,
                      displayName: 'Beautiful World',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/c36712e0b97b65ee1ecb027db8e3ff8798d3bb55.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_TRUE_END',
                      defaultvalue: 0,
                      displayName: 'The Minds That Emerged',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/2989eb6c7f2918ecfc7c756e401a271c17157c74.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_RECOVERY_SELF_CORPSE',
                      defaultvalue: 0,
                      displayName: 'The Circle of Death',
                      hidden: 0,
                      description: 'Have your body collected.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/076ec7fa27bb95797b07da45c3b65af5c3a447a9.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_RECOVERY_CORPSE',
                      defaultvalue: 0,
                      displayName: 'Cherish Our Resources',
                      hidden: 0,
                      description: 'Have 100 bodies collected.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/1940860e6bd542954652853f5fbbe8bcd58fbac4.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_QUEST_FIRST_TIME',
                      defaultvalue: 0,
                      displayName: 'First Errand',
                      hidden: 0,
                      description: 'Complete your first quest.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/f31eb13d16a028fb3de23f5623955b8441e57c7c.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_MANY_QUEST',
                      defaultvalue: 0,
                      displayName: 'The Mercenary',
                      hidden: 0,
                      description: '80% of all quests completed.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/bbdd00f461406cbf64726d753dac5f3abe066ef8.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_COLLECT_ARCHIVE',
                      defaultvalue: 0,
                      displayName: 'Information Master',
                      hidden: 0,
                      description: '80% of all archives found.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/8d536964d4eabac2027adfc2705661fea25ede6b.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_COLLECT_EM_LIST',
                      defaultvalue: 0,
                      displayName: 'Destruction is My Job',
                      hidden: 0,
                      description: '80% of all unit data unlocked.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/8048ddee99c03defd4562520d28bc4445938bda0.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_COLLECT_CHIP',
                      defaultvalue: 0,
                      displayName: 'Chip Collector',
                      hidden: 0,
                      description: '80% of all plug-in chips collected.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/c8600b37d39a3d09ba4730a480d4ea5c87790a22.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_HAS_ALL_ACTIVE_SKILL',
                      defaultvalue: 0,
                      displayName: 'Weapons Maniac',
                      hidden: 0,
                      description: 'All Pod programs obtained.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/bd78a999e5b0eea50d60e7e1158a93a58d82a517.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_WEAPON_LV_MAX',
                      defaultvalue: 0,
                      displayName: 'Tools of the Trade',
                      hidden: 0,
                      description: 'Any weapon upgraded to the highest level.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/6bd93e150b03f8de3c857e3589a4e92eed0b03cc.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_WEAPON_LV_MAX_ALL',
                      defaultvalue: 0,
                      displayName: 'Inorganic Blade',
                      hidden: 0,
                      description: 'All weapons upgraded to the highest level.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/54bf4e0bef1e06348ccc291d1e87d49ce58e63db.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_POD_LV_MAX_ALL',
                      defaultvalue: 0,
                      displayName: 'Supreme Support Weapons',
                      hidden: 0,
                      description: 'All Pods upgraded to the highest level.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/254d29f9ddf775427dec4ea2e2456ee32100f0bc.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CLEAR_HACKING_9S',
                      defaultvalue: 0,
                      displayName: "Fighting's Not My Thing",
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/aa7810edbe2376ebe0456f553bd3d33a139bd539.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_HACKING_KILL',
                      defaultvalue: 0,
                      displayName: "A Scanner's Power",
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/a8077834157c6407d5855157d0a902f5415edf07.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_REMOTO_KILL',
                      defaultvalue: 0,
                      displayName: 'Machines vs. Machines',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/ac4bc0d5ea71c94f14b5b6d18c7aee30804fff55.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_BERSERKER_KILL',
                      defaultvalue: 0,
                      displayName: 'The Power of Hate',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/ca0c9026a53cc307519c09b43b198823bd4a28b5.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_SHOOTING',
                      defaultvalue: 0,
                      displayName: 'Ruler of the Skies',
                      hidden: 0,
                      description: '255 enemies destroyed using a flight unit.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/ed342c90ae36c5655e9e5ff2bef89162a5af8f62.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_EXTRACTION',
                      defaultvalue: 0,
                      displayName: 'Harvest King',
                      hidden: 0,
                      description: 'Materials gathered at a hidden harvest point 10 times.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/7434e8cf28fa79d62acf02c37359155c42223bef.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_GET_ALL_POD',
                      defaultvalue: 0,
                      displayName: 'Pod Hunter',
                      hidden: 0,
                      description: 'All Pods found.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/1f40b92b07294e7c25ef3b1d19dfb14f452e662c.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_RICH_MAN',
                      defaultvalue: 0,
                      displayName: 'Desire Without Emotion',
                      hidden: 0,
                      description: 'At least 100,000 G in possession.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/e899966832c71f405fc33a0e0302212efc66ee5a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_ANIMAL_RUN',
                      defaultvalue: 0,
                      displayName: 'Animal Rider',
                      hidden: 0,
                      description: 'Any animal ridden for 5 kilometers.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/6985b5f0ff4c7b03aa8e652015e548d72198c575.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_FISHING',
                      defaultvalue: 0,
                      displayName: 'A Round by the Pond',
                      hidden: 0,
                      description: '20 different kinds of fish caught.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/08f09efe530ca0dc577b3808a7d7a94a936df655.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_NPC_KILL',
                      defaultvalue: 0,
                      displayName: "Wait! Don't Kill Me!",
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/41b7f8c6625f9a566c625b49f1c6cc8314202aad.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_SKIRT_ESCAPE',
                      defaultvalue: 0,
                      displayName: 'What Are You Doing?',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/bf5e3ee4db9b1cd77223e1f30657325fda93b9f2.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_PANTS',
                      defaultvalue: 0,
                      displayName: 'Not That I Mind...',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/31aef58a56f5e92d65437f17718c3dd01c54cf56.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_EMILE_SHOP',
                      defaultvalue: 0,
                      displayName: 'Come Take a Look!',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/99f6388ed11b885d386eb979a2a8736290a4a235.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_KILL_EM1010',
                      defaultvalue: 0,
                      displayName: 'Naughty Children',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/6e29e9ce653df1b4f4e51778df371f40851e409c.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_BAD_END',
                      defaultvalue: 0,
                      displayName: 'Transcendent Being',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5649159a9e23e6f490360e0de38dd65da1fa9fdb.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    },
                    {
                      name: 'ACH_CALL_AT_KAINES_ROOM',
                      defaultvalue: 0,
                      displayName: 'Lunar Tear',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/6b6e361e2917f8996a39b977b8df7a8fc640729d.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/524220/5cad263135d7f42d3304918370f492b353aa46f3.jpg'
                    }
                  ]
                }
              }
            }
          : {
              game: {
                gameName: '',
                gameVersion: '30',
                availableGameStats: {
                  achievements: [
                    {
                      name: 'ACHIEVEMENT_0000',
                      defaultvalue: 0,
                      displayName: 'The Final Verse',
                      hidden: 0,
                      description: 'Congratulations! Thank you for playing!',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/a9369e5eddeb1486ffd849aa3820607353ddbc23.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0010',
                      defaultvalue: 0,
                      displayName: 'The Book of Legend',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/6d11bfa34275061352048988a9202c3194259851.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0020',
                      defaultvalue: 0,
                      displayName: 'The Wild Companion',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/8ac7d0d717ccda449162f94f81054073e9679fc5.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0030',
                      defaultvalue: 0,
                      displayName: 'The Mellow Companion',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/1981aa8fe7fb43d11720331503fa3c9028f0e18a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0040',
                      defaultvalue: 0,
                      displayName: 'Release',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/88d76547290c9c200536cbb1a48d255303010a5b.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0050',
                      defaultvalue: 0,
                      displayName: 'Gratitude',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d9b8fd4cc2e4fc270edf18b177729b07e8a32cc9.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0060',
                      defaultvalue: 0,
                      displayName: 'Key Collector',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/6629579d96114c2a268898911634495f8235ce08.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0070',
                      defaultvalue: 0,
                      displayName: 'A World in Flux',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/4b3b4bcf8267f93bb73600cc688323c2c910e0b5.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0080',
                      defaultvalue: 0,
                      displayName: 'Combo Fanatic',
                      hidden: 0,
                      description: 'You pulled off a 50-hit combo.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d19d83d2254a60554435a1e1d99896e96bdf64d5.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0090',
                      defaultvalue: 0,
                      displayName: 'Combo Master',
                      hidden: 0,
                      description: 'You pulled off a 100-hit combo.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d62e08ce00fd14c0fb72acebdfb09c838803a102.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0100',
                      defaultvalue: 0,
                      displayName: 'The Magic Man',
                      hidden: 0,
                      description: 'You learned every type of magic.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/2d7124c94623283b25cd1889cc6599d23b8cab5c.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0110',
                      defaultvalue: 0,
                      displayName: 'Wordsmith',
                      hidden: 0,
                      description: 'You collected 50 percent of all words.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/8a8b550048c266f8132d1d6c36967f2dee42a0ec.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0120',
                      defaultvalue: 0,
                      displayName: 'Weapons Collector',
                      hidden: 0,
                      description: 'You found every weapon.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/36b528043b6af91f11116aeed684d950722f1d60.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0130',
                      defaultvalue: 0,
                      displayName: 'Village Handyman',
                      hidden: 0,
                      description: 'You completed 10 quests.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/93856660d44eccb4edc0ebbb9d63a5445e688528.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0140',
                      defaultvalue: 0,
                      displayName: 'Jack of All Trades',
                      hidden: 0,
                      description: 'You completed 20 quests.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/ca294c1039d08d7c72682ca2a8dd88bca4a48cf0.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0150',
                      defaultvalue: 0,
                      displayName: 'Go-To Guy',
                      hidden: 0,
                      description: 'You completed 30 quests.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/ca294c1039d08d7c72682ca2a8dd88bca4a48cf0.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0160',
                      defaultvalue: 0,
                      displayName: 'Dear Diary',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/676d5f5e2cd45a24738dc6078031f14d56ed923e.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0170',
                      defaultvalue: 0,
                      displayName: 'Man of Means',
                      hidden: 0,
                      description: 'You accumulated 1,000,000 pieces of gold.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d7fb76788b77cd73639cefd292567e596ecc912a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0180',
                      defaultvalue: 0,
                      displayName: 'Educated Warrior',
                      hidden: 0,
                      description: "You read all novel segments about your friends' pasts.",
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d59ca2f03b4015bc9b6134d921262f8768f843f1.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0190',
                      defaultvalue: 0,
                      displayName: 'Call Her Back',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/cfbbf964649924e25af995c47f9207e6bdb0e82a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0200',
                      defaultvalue: 0,
                      displayName: 'Lingering Memories',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/7f65bb588647210451d003101fb6ce7ca335fb92.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0210',
                      defaultvalue: 0,
                      displayName: 'Thank You',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/acd8fa3e92c01655b9dfeb91ea13b7c997df3825.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0220',
                      defaultvalue: 0,
                      displayName: 'Something Very Special',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/5bc97058ccbe271edd966ca6ee9d0f4aefc0307b.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0230',
                      defaultvalue: 0,
                      displayName: 'e8 a8 98 e6 86 b6 e3 82 b5 e3 83 bc e3 83 90 e3 83 bc',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d556f212037cb9645aa17c87c1a01a34ccacfaa5.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0240',
                      defaultvalue: 0,
                      displayName: 'Legendary Gardener',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/636ac036eb45750ac6d125ea8d6936ed1130266d.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0250',
                      defaultvalue: 0,
                      displayName: 'Fish of Legend',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/b5e054f5234a31c7bbc3b458c0f3ae5289069b81.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0260',
                      defaultvalue: 0,
                      displayName: 'A Round by the Pond',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/c67e64eb2e069c0b115a5feea3cb02451df4f11a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0270',
                      defaultvalue: 0,
                      displayName: 'Material Hunter',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/c0d448fc0d573abb796053bf7f2b12eb0b6f4c32.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0280',
                      defaultvalue: 0,
                      displayName: 'Upgrade Apprentice',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/369a20404467230c20b158f7a3dd77699be9effd.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0290',
                      defaultvalue: 0,
                      displayName: 'Reform Specialist',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/3abb815e20d23a97e80b2a10742cc3afd38e53cc.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0300',
                      defaultvalue: 0,
                      displayName: 'Forging Master',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/ef2b7d68560bcfb3d32347e8884a0b736be4750b.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0310',
                      defaultvalue: 0,
                      displayName: 'All Aboared!',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/669fb049d3b0d0ac200125736144e4e274c7620e.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0320',
                      defaultvalue: 0,
                      displayName: 'The Sheep Whisperer',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/3c40216c95eb8d9acdb90435760c921dc6bd3954.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0330',
                      defaultvalue: 0,
                      displayName: 'Lightspeed Fighter',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/f61dd8bd207e6a897ca5fa0297dbfbab0ff51103.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0340',
                      defaultvalue: 0,
                      displayName: 'King of the Lost Shrine',
                      hidden: 0,
                      description: 'You defeated Gretel within three minutes and twenty seconds.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/70883d0681b1993aa430bbcd8f9d4241f637b3ce.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0350',
                      defaultvalue: 0,
                      displayName: 'A True Friend',
                      hidden: 0,
                      description: 'You stopped the berserk Kainé within one minute.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/0b7d266b6959f86fa40ce0108cda8d7c7df207f9.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0360',
                      defaultvalue: 0,
                      displayName: 'Boss of the Junk Heap',
                      hidden: 0,
                      description: 'You defeated P-33 within four and a half minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/602644eaf05ce46aa16b2d58299210d68e114d92.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0370',
                      defaultvalue: 0,
                      displayName: 'Scourge of The Aerie',
                      hidden: 0,
                      description: 'You defeated Wendy within eight and a half minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/0ef270a84980596473ae130aee58f8275ee15ef2.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0380',
                      defaultvalue: 0,
                      displayName: 'Protector of Facade',
                      hidden: 0,
                      description: 'You defeated Roc within three and a half minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/d9e9a588af83858f08ad062bba1d2148e23fdcde.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0390',
                      defaultvalue: 0,
                      displayName: 'The Little Mermaid',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/0c6faf92c5cdfb91223238bfd12a0829bd8b13a9.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0400',
                      defaultvalue: 0,
                      displayName: 'Permission Granted',
                      hidden: 0,
                      description: 'You drove off Devola and Popola within three minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/52b749ff62320430f2440c7dff89898e9fae3473.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0410',
                      defaultvalue: 0,
                      displayName: 'A Dirge for the Hero',
                      hidden: 0,
                      description: 'You defeated Goose within two minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/c33b07dfe29428d7caab6a1f7c6a13c49e539ceb.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0420',
                      defaultvalue: 0,
                      displayName: 'Soul Crusher',
                      hidden: 0,
                      description: 'You defeated Devola and Popola within three and a half minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/f80e7782c38c6657bb6a39f9c8904219e1cb3d1a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0430',
                      defaultvalue: 0,
                      displayName: 'Book Burner',
                      hidden: 0,
                      description: 'You defeated Grimoire Noir within one and a half minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/f0c1804eee52d941045b24beb6353967ad522eb7.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0440',
                      defaultvalue: 0,
                      displayName: 'The Once and Final King',
                      hidden: 0,
                      description: 'You defeated the Shadowlord within four minutes and twenty seconds.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/9395b1e23f8ffecde59ac3d84d4c17844d9c13e9.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0450',
                      defaultvalue: 0,
                      displayName: 'The Strongest Bond',
                      hidden: 0,
                      description: 'You defeated the berserk Kainé within three and a half minutes.',
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/66a42f466f875af265a505380e0c9754c8d2c550.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/dccf83b1927eb511d794ec172eb2a8737aa5f317.jpg'
                    },
                    {
                      name: 'ACHIEVEMENT_0460',
                      defaultvalue: 0,
                      displayName: 'Daredevil',
                      hidden: 1,
                      icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/9c70d4e9d69a09bcda912fa4323bded42b9d183a.jpg',
                      icongray: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1113560/67f2dca4872e41dd6ce5b923edf54bf16d42ef53.jpg'
                    }
                  ]
                }
              }
            }
      })
    }

    // Player level
    if (/^.*IPlayerService.GetSteamLevel.v1.*$/.test(url)) {
      console.debug(`metrics/compute/mocks > mocking steam api result > ${url}`)
      return ({
        status: 200,
        data: {
          response: {
            player_level: faker.number.int(500)
          }
        }
      })
    }

    // Player summary
    if (/^.*ISteamUser.GetPlayerSummaries.v0002.*$/.test(url)) {
      console.debug(`metrics/compute/mocks > mocking steam api result > ${url}`)
      return ({
        status: 200,
        data: {
          response: {
            players: [
              {
                steamid: '0',
                communityvisibilitystate: 3,
                profilestate: 1,
                personaname: faker.internet.userName(),
                commentpermission: 2,
                profileurl: 'https://steamcommunity.com/id',
                avatar: null,
                avatarmedium: null,
                avatarfull: null,
                avatarhash: '562c4d8db58d44af73b0f5f46d2f1bb5a24e54b3',
                lastlogoff: 1676688802,
                personastate: 0,
                primaryclanid: '0',
                timecreated: 1366386002,
                personastateflags: 0,
                loccountrycode: 'FR'
              }
            ]
          }
        }
      })
    }

    // Player achievements
    if (/^.*ISteamUserStats.GetPlayerAchievements.v0001.*$/.test(url)) {
      console.debug(`metrics/compute/mocks > mocking steam api result > ${url}`)
      return ({
        status: 200,
        data: /appid=524220/.test(url)
          ? {
              playerstats: {
                steamID: '76561198089224516',
                gameName: 'NieR:Automata™',
                achievements: [
                  {
                    apiname: 'ACH_VISITED_BUNKER',
                    achieved: 1,
                    unlocktime: 1565069702,
                    name: 'Resuscitated Body',
                    description: ''
                  },
                  {
                    apiname: 'ACH_VISITED_RUINS_CITY',
                    achieved: 1,
                    unlocktime: 1565376632,
                    name: 'Vestiges of Prosperity',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_DESERT_AREA',
                    achieved: 1,
                    unlocktime: 1565974024,
                    name: "It's a Healthy Baby Boy!",
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_AMUSEMENT_PARK',
                    achieved: 1,
                    unlocktime: 1565974917,
                    name: 'We Await Your Next Visit',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_ALIEN_SHIP',
                    achieved: 1,
                    unlocktime: 1565431434,
                    name: 'Creation and Insurrection',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_CASTLE_FOREST',
                    achieved: 1,
                    unlocktime: 1565433829,
                    name: 'The Mechanical Kingdom',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_SUBMERGE_CITY',
                    achieved: 1,
                    unlocktime: 1565434679,
                    name: 'Ruler of the Deep',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_COPY_CITY',
                    achieved: 1,
                    unlocktime: 1565441114,
                    name: 'Those Who Love Humans',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_ROBOT_MT',
                    achieved: 1,
                    unlocktime: 1565444308,
                    name: 'Iron Soul',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_A',
                    achieved: 1,
                    unlocktime: 1565447636,
                    name: 'One Battle Ends',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_B',
                    achieved: 1,
                    unlocktime: 1565532631,
                    name: 'A New Battle Begins',
                    description: ''
                  },
                  {
                    apiname: 'ACH_SEE_2B_DIE',
                    achieved: 1,
                    unlocktime: 1565537220,
                    name: 'Final Wish',
                    description: ''
                  },
                  {
                    apiname: 'ACH_PLAY_A2_FIRST_TIME',
                    achieved: 1,
                    unlocktime: 1565537371,
                    name: 'Treacherous Blade',
                    description: ''
                  },
                  {
                    apiname: 'ACH_LAST_REQUEST_PASCAL',
                    achieved: 1,
                    unlocktime: 1565548811,
                    name: 'Farewell, Pascal',
                    description: ''
                  },
                  {
                    apiname: 'ACH_KILL_ROBOT_BROTHER',
                    achieved: 1,
                    unlocktime: 1565551466,
                    name: 'Justice',
                    description: ''
                  },
                  {
                    apiname: 'ACH_DEVOLA_NOVEL_END',
                    achieved: 1,
                    unlocktime: 1565553188,
                    name: 'Crime and Punishment',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_9S',
                    achieved: 1,
                    unlocktime: 1565558387,
                    name: 'Leaving for the New World',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CLEAR_A2',
                    achieved: 1,
                    unlocktime: 1565556538,
                    name: 'Beautiful World',
                    description: ''
                  },
                  {
                    apiname: 'ACH_TRUE_END',
                    achieved: 1,
                    unlocktime: 1565558387,
                    name: 'The Minds That Emerged',
                    description: ''
                  },
                  {
                    apiname: 'ACH_RECOVERY_SELF_CORPSE',
                    achieved: 1,
                    unlocktime: 1565431434,
                    name: 'The Circle of Death',
                    description: 'Have your body collected.'
                  },
                  {
                    apiname: 'ACH_RECOVERY_CORPSE',
                    achieved: 1,
                    unlocktime: 1565473831,
                    name: 'Cherish Our Resources',
                    description: 'Have 100 bodies collected.'
                  },
                  {
                    apiname: 'ACH_CLEAR_QUEST_FIRST_TIME',
                    achieved: 1,
                    unlocktime: 1565378552,
                    name: 'First Errand',
                    description: 'Complete your first quest.'
                  },
                  {
                    apiname: 'ACH_CLEAR_MANY_QUEST',
                    achieved: 1,
                    unlocktime: 1565543033,
                    name: 'The Mercenary',
                    description: '80% of all quests completed.'
                  },
                  {
                    apiname: 'ACH_COLLECT_ARCHIVE',
                    achieved: 1,
                    unlocktime: 1565897848,
                    name: 'Information Master',
                    description: '80% of all archives found.'
                  },
                  {
                    apiname: 'ACH_COLLECT_EM_LIST',
                    achieved: 1,
                    unlocktime: 1565551063,
                    name: 'Destruction is My Job',
                    description: '80% of all unit data unlocked.'
                  },
                  {
                    apiname: 'ACH_COLLECT_CHIP',
                    achieved: 1,
                    unlocktime: 1565470147,
                    name: 'Chip Collector',
                    description: '80% of all plug-in chips collected.'
                  },
                  {
                    apiname: 'ACH_HAS_ALL_ACTIVE_SKILL',
                    achieved: 1,
                    unlocktime: 1565901900,
                    name: 'Weapons Maniac',
                    description: 'All Pod programs obtained.'
                  },
                  {
                    apiname: 'ACH_WEAPON_LV_MAX',
                    achieved: 1,
                    unlocktime: 1565520201,
                    name: 'Tools of the Trade',
                    description: 'Any weapon upgraded to the highest level.'
                  },
                  {
                    apiname: 'ACH_WEAPON_LV_MAX_ALL',
                    achieved: 1,
                    unlocktime: 1565892897,
                    name: 'Inorganic Blade',
                    description: 'All weapons upgraded to the highest level.'
                  },
                  {
                    apiname: 'ACH_POD_LV_MAX_ALL',
                    achieved: 1,
                    unlocktime: 1565892998,
                    name: 'Supreme Support Weapons',
                    description: 'All Pods upgraded to the highest level.'
                  },
                  {
                    apiname: 'ACH_CLEAR_HACKING_9S',
                    achieved: 1,
                    unlocktime: 1565448443,
                    name: "Fighting's Not My Thing",
                    description: ''
                  },
                  {
                    apiname: 'ACH_HACKING_KILL',
                    achieved: 1,
                    unlocktime: 1565483879,
                    name: "A Scanner's Power",
                    description: ''
                  },
                  {
                    apiname: 'ACH_REMOTO_KILL',
                    achieved: 1,
                    unlocktime: 1565883806,
                    name: 'Machines vs. Machines',
                    description: ''
                  },
                  {
                    apiname: 'ACH_BERSERKER_KILL',
                    achieved: 1,
                    unlocktime: 1565903370,
                    name: 'The Power of Hate',
                    description: ''
                  },
                  {
                    apiname: 'ACH_SHOOTING',
                    achieved: 1,
                    unlocktime: 1565433829,
                    name: 'Ruler of the Skies',
                    description: '255 enemies destroyed using a flight unit.'
                  },
                  {
                    apiname: 'ACH_EXTRACTION',
                    achieved: 1,
                    unlocktime: 1565892563,
                    name: 'Harvest King',
                    description: 'Materials gathered at a hidden harvest point 10 times.'
                  },
                  {
                    apiname: 'ACH_GET_ALL_POD',
                    achieved: 1,
                    unlocktime: 1565524165,
                    name: 'Pod Hunter',
                    description: 'All Pods found.'
                  },
                  {
                    apiname: 'ACH_RICH_MAN',
                    achieved: 1,
                    unlocktime: 1565467456,
                    name: 'Desire Without Emotion',
                    description: 'At least 100,000 G in possession.'
                  },
                  {
                    apiname: 'ACH_ANIMAL_RUN',
                    achieved: 1,
                    unlocktime: 1565522297,
                    name: 'Animal Rider',
                    description: 'Any animal ridden for 5 kilometers.'
                  },
                  {
                    apiname: 'ACH_FISHING',
                    achieved: 1,
                    unlocktime: 1565976316,
                    name: 'A Round by the Pond',
                    description: '20 different kinds of fish caught.'
                  },
                  {
                    apiname: 'ACH_NPC_KILL',
                    achieved: 1,
                    unlocktime: 1565481959,
                    name: "Wait! Don't Kill Me!",
                    description: ''
                  },
                  {
                    apiname: 'ACH_SKIRT_ESCAPE',
                    achieved: 1,
                    unlocktime: 1565902246,
                    name: 'What Are You Doing?',
                    description: ''
                  },
                  {
                    apiname: 'ACH_PANTS',
                    achieved: 1,
                    unlocktime: 1565903882,
                    name: 'Not That I Mind...',
                    description: ''
                  },
                  {
                    apiname: 'ACH_EMILE_SHOP',
                    achieved: 1,
                    unlocktime: 1565435609,
                    name: 'Come Take a Look!',
                    description: ''
                  },
                  {
                    apiname: 'ACH_KILL_EM1010',
                    achieved: 1,
                    unlocktime: 1565889756,
                    name: 'Naughty Children',
                    description: ''
                  },
                  {
                    apiname: 'ACH_BAD_END',
                    achieved: 1,
                    unlocktime: 1565976624,
                    name: 'Transcendent Being',
                    description: ''
                  },
                  {
                    apiname: 'ACH_CALL_AT_KAINES_ROOM',
                    achieved: 1,
                    unlocktime: 1565903768,
                    name: 'Lunar Tear',
                    description: ''
                  }
                ],
                success: true
              }
            }
          : {
              playerstats: {
                steamID: '76561198089224516',
                gameName: 'NieR Replicant ver.1.22474487139...',
                achievements: [
                  {
                    apiname: 'ACHIEVEMENT_0000',
                    achieved: 0,
                    unlocktime: 0,
                    name: 'The Final Verse',
                    description: 'Congratulations! Thank you for playing!'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0010',
                    achieved: 1,
                    unlocktime: 1623873057,
                    name: 'The Book of Legend',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0020',
                    achieved: 1,
                    unlocktime: 1624294156,
                    name: 'The Wild Companion',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0030',
                    achieved: 1,
                    unlocktime: 1624466800,
                    name: 'The Mellow Companion',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0040',
                    achieved: 1,
                    unlocktime: 1624471033,
                    name: 'Release',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0050',
                    achieved: 1,
                    unlocktime: 1625520706,
                    name: 'Gratitude',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0060',
                    achieved: 1,
                    unlocktime: 1624486870,
                    name: 'Key Collector',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0070',
                    achieved: 1,
                    unlocktime: 1624489046,
                    name: 'A World in Flux',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0080',
                    achieved: 1,
                    unlocktime: 1624399122,
                    name: 'Combo Fanatic',
                    description: 'You pulled off a 50-hit combo.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0090',
                    achieved: 1,
                    unlocktime: 1624486870,
                    name: 'Combo Master',
                    description: 'You pulled off a 100-hit combo.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0100',
                    achieved: 1,
                    unlocktime: 1624397883,
                    name: 'The Magic Man',
                    description: 'You learned every type of magic.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0110',
                    achieved: 1,
                    unlocktime: 1625391608,
                    name: 'Wordsmith',
                    description: 'You collected 50 percent of all words.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0120',
                    achieved: 1,
                    unlocktime: 1625417752,
                    name: 'Weapons Collector',
                    description: 'You found every weapon.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0130',
                    achieved: 1,
                    unlocktime: 1624277733,
                    name: 'Village Handyman',
                    description: 'You completed 10 quests.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0140',
                    achieved: 1,
                    unlocktime: 1624305463,
                    name: 'Jack of All Trades',
                    description: 'You completed 20 quests.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0150',
                    achieved: 1,
                    unlocktime: 1624310689,
                    name: 'Go-To Guy',
                    description: 'You completed 30 quests.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0160',
                    achieved: 1,
                    unlocktime: 1625417752,
                    name: 'Dear Diary',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0170',
                    achieved: 1,
                    unlocktime: 1625396749,
                    name: 'Man of Means',
                    description: 'You accumulated 1,000,000 pieces of gold.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0180',
                    achieved: 1,
                    unlocktime: 1625590899,
                    name: 'Educated Warrior',
                    description: "You read all novel segments about your friends' pasts."
                  },
                  {
                    apiname: 'ACHIEVEMENT_0190',
                    achieved: 1,
                    unlocktime: 1624489684,
                    name: 'Call Her Back',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0200',
                    achieved: 1,
                    unlocktime: 1625437212,
                    name: 'Lingering Memories',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0210',
                    achieved: 1,
                    unlocktime: 1625592439,
                    name: 'Thank You',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0220',
                    achieved: 1,
                    unlocktime: 1625598751,
                    name: 'Something Very Special',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0230',
                    achieved: 1,
                    unlocktime: 1625610706,
                    name: 'e8 a8 98 e6 86 b6 e3 82 b5 e3 83 bc e3 83 90 e3 83 bc',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0240',
                    achieved: 1,
                    unlocktime: 1625515136,
                    name: 'Legendary Gardener',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0250',
                    achieved: 1,
                    unlocktime: 1625399355,
                    name: 'Fish of Legend',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0260',
                    achieved: 1,
                    unlocktime: 1625406465,
                    name: 'A Round by the Pond',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0270',
                    achieved: 1,
                    unlocktime: 1624305463,
                    name: 'Material Hunter',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0280',
                    achieved: 1,
                    unlocktime: 1625396391,
                    name: 'Upgrade Apprentice',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0290',
                    achieved: 1,
                    unlocktime: 1625517105,
                    name: 'Reform Specialist',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0300',
                    achieved: 1,
                    unlocktime: 1625517174,
                    name: 'Forging Master',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0310',
                    achieved: 1,
                    unlocktime: 1625522791,
                    name: 'All Aboared!',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0320',
                    achieved: 1,
                    unlocktime: 1625600972,
                    name: 'The Sheep Whisperer',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0330',
                    achieved: 0,
                    unlocktime: 0,
                    name: 'Lightspeed Fighter',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0340',
                    achieved: 1,
                    unlocktime: 1625516447,
                    name: 'King of the Lost Shrine',
                    description: 'You defeated Gretel within three minutes and twenty seconds.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0350',
                    achieved: 1,
                    unlocktime: 1625392124,
                    name: 'A True Friend',
                    description: 'You stopped the berserk Kainé within one minute.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0360',
                    achieved: 1,
                    unlocktime: 1625405608,
                    name: 'Boss of the Junk Heap',
                    description: 'You defeated P-33 within four and a half minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0370',
                    achieved: 1,
                    unlocktime: 1625518485,
                    name: 'Scourge of The Aerie',
                    description: 'You defeated Wendy within eight and a half minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0380',
                    achieved: 1,
                    unlocktime: 1625521457,
                    name: 'Protector of Facade',
                    description: 'You defeated Roc within three and a half minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0390',
                    achieved: 0,
                    unlocktime: 0,
                    name: 'The Little Mermaid',
                    description: ''
                  },
                  {
                    apiname: 'ACHIEVEMENT_0400',
                    achieved: 1,
                    unlocktime: 1625589841,
                    name: 'Permission Granted',
                    description: 'You drove off Devola and Popola within three minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0410',
                    achieved: 1,
                    unlocktime: 1625437212,
                    name: 'A Dirge for the Hero',
                    description: 'You defeated Goose within two minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0420',
                    achieved: 1,
                    unlocktime: 1625595493,
                    name: 'Soul Crusher',
                    description: 'You defeated Devola and Popola within three and a half minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0430',
                    achieved: 1,
                    unlocktime: 1625595593,
                    name: 'Book Burner',
                    description: 'You defeated Grimoire Noir within one and a half minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0440',
                    achieved: 1,
                    unlocktime: 1625591368,
                    name: 'The Once and Final King',
                    description: 'You defeated the Shadowlord within four minutes and twenty seconds.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0450',
                    achieved: 1,
                    unlocktime: 1625596007,
                    name: 'The Strongest Bond',
                    description: 'You defeated the berserk Kainé within three and a half minutes.'
                  },
                  {
                    apiname: 'ACHIEVEMENT_0460',
                    achieved: 1,
                    unlocktime: 1625607419,
                    name: 'Daredevil',
                    description: ''
                  }
                ],
                success: true
              }
            }
      })
    }
  }
}
