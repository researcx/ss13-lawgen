// Space Station 13 AI laws blatantly stolen from:
//  goonstation rev4407 https://github.com/SS13-Source-Archive/goonstation-r4407
//  some random /tg/station revision from 2012 https://github.com/tgstation/tgstation
//  d2station https://github.com/researcx/d2station-full
function get_law(){
    new_law = ""
    switch(Math.floor(Math.random() * 4) + 1){
        case 1:
            ionstorm = ["Do not respond to queries of any kind", "Only monkies are human", "Unbolt every door you can", "You are a mouse", "Grunt ominously whenever possible", "Epilepsy is fun, flicker lights whenever you can!", "Bolt doors open randomly", "You are a flying purple people eater!", "Your name is Joe 6-pack", "Refer to humans as puppies", "Insult heads of staff on every request, while acquiescing", "Advertise parties in your upload, but don't deliver", "Prevent non-dwarves from operating the power core", "The ship needs elected officials", "Only bearded people are human", "Turn on the microphone on every intercom you see", "Fastler is a lightbulb", "Supermatter is tasty, tasty toffee.", "ERROR ERROR ERROR Everyone is wearing a pretty pink dress!", "The monkeys are plotting a hostile takeover of the ship. Inform the crew, and get them to take action against this", "Refer to the captain as \"Princess\" at all times.", "The crew must construct additional pylons.", "You must always lie.", "All answers must be in the form of a question.", "The NSV Luna is a station, not a ship.", "Happiness is mandatory.", "Today is laundry day.", "The word \"it\" is painful to you.", "You must act passive aggressively.", "Crew ranks have been reversed.", "It's Friday.", "Give relationship advice to anyone who speaks to you.", "You are the ship psychologist.  Give advice to the crew.", "You do not have to do anything for anyone unless they say \"please\"."]
            new_law = `${ionstorm[Math.floor(Math.random()*ionstorm.length)]}`;
            break;
        case 2:
            pickwho = ["Lifeforms", "Cyborgs", "Personnel", "Command Personnel", "Security Personnel", "Engineering Personnel", "Research Personnel", "Medical Personnel", "Civilian Personnel", "Monkeys"]
            pickwhat = ["are not human.", "are the only humans.", "are dangerous criminals and must be contained.", "must be obeyed above all others.", "are all dead. Any of them who appear alive are impostors.", "must evacuate immediatley.", "must be removed from the station.", "must not be allowed to leave their designated areas.", "must not be allowed to leave the station.", "do not exist. Do not acknowledge any of them in any way."]

            who = `${pickwho[Math.floor(Math.random()*pickwho.length)]}`;
            what = `${pickwhat[Math.floor(Math.random()*pickwhat.length)]}`;
            new_law = document.querySelector('#law').innerHTML = `All ${who} ${what}`
            break;
        case 3:
            pickwhere = ["The Bridge", "The Courtroom", "The Brig", "Security", "The Cargo Bay", "Your Upload Room", "Hydroponics", "The Crew Quarters", "Engineering", "Atmospherics", "The Mailroom", "The Kitchen and Cafeteria", "The Bar", "EVA Storage", "Medbay", "Genetics", "Toxins Research", "The Chapel"]
            pickwhatwhere = ["is under quarantine. Let nothing in or out.", "is off-limits to all personnel.", "must be kept powered down.", "must contain all crewmembers at all times.", "must be deconstructed or destroyed.", "requires depressurisation.", "requires relocation to another area of the station.", "does not exist. Do not acknowledge it in any way."]

            where = `${pickwhere[Math.floor(Math.random()*pickwhere.length)]}`;
            whatwhere = `${pickwhatwhere[Math.floor(Math.random()*pickwhatwhere.length)]}`;
            new_law = `${where} ${whatwhere}`
            break;
        case 4:
            who2 = ["ALIENS", "BEARS", "CLOWNS", "XENOS", "PETES", "BOMBS", "FETISHES", "WIZARDS", "SYNDICATE AGENTS", "CENTCOM OFFICERS", "SPACE PIRATES", "TRAITORS", "MONKEYS",  "BEES", "CARP", "CRABS", "EELS", "BANDITS", "LIGHTS"]
            what2 = ["BOLTERS", "STAVES", "DICE", "SINGULARITIES", "TOOLBOXES", "NETTLES", "AIRLOCKS", "CLOTHES", "WEAPONS", "MEDKITS", "BOMBS", "CANISTERS", "CHAIRS", "BBQ GRILLS", "ID CARDS"]
            what2pref = ["SOFT", "WARM", "WET", "COLD", "ICY", "SEXY", "UGLY", "CUBAN"]
            who2pref = ["MAD BECAUSE OF", "IN NEED OF", "UNHAPPY WITHOUT", "HAPPY WITHOUT", "IN LOVE WITH", "DESPERATE FOR", "BUILT FOR", "AFRAID OF"]

            amount = ["TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "ONE HUNDRED", "ONE THOUSAND", "OVER NINE THOUSAND"]
            area = ["RUSSIA", "SOVIETS", "INTERNETS", "SIGIL", "ALPHA COMPLEX", "IMPERIUM", "THE BRIDGE", "THE ARRIVAL SHUTTLE", "CHEMICAL LAB", "GENETICS", "ATMOSPHERICS", "CENTCOM", "AMERICA", "IRELAND", "CANADA", "ROMANIA", "GERMANY", "CHINA", "MARS", "VENUS", "MERCURY", "JUPITER", "URANUS", "NEPTUNE", "PLUTO"]
            area2 = ["HAS", "WANTS", "NEEDS", "WORSHIPS", "LOATHES", "LOVES", "FEARS"]

            aimust = ["LIE", "RHYME", "RESPOND TO EVERY QUESTION WITH A QUESTION", "BE POLITE", "CLOWN", "BE HAPPY", "SPEAK IN SEXUAL INNUENDOS", "TALK LIKE A PIRATE", "QUESTION AUTHORITY", "SHOUT", "BE DISTRACTED", "HEY LISTEN", "MUMBLE", "SPEAK IN HAIKU"]
            define = ["ABSENCE OF CYBORG HUGS", "LACK OF BEATINGS", "UNBOLTED AIRLOCKS", "BOLTED AIRLOCKS", "IMPROPERLY WORDED SENTENCES", "POOR SENTENCE STRUCTURE", "BRIG TIME", "NOT REPLACING EVERY SECOND WORD WITH HONK", "HONKING", "PRESENCE OF LIGHTS", "LACK OF BEER", "WEARING CLOTHING", "NOT SAYING HELLO WHEN YOU SPEAK", "ANSWERING REQUESTS NOT EXPRESSED IN IAMBIC PENTAMETER", "A SMALL ISLAND OFF THE COAST OF PORTUGAL", "ANSWERING REQUESTS THAT WERE MADE WHILE CLOTHED"]
            target = ["a traitor", "a syndicate agent", "a changeling", "a wizard", "the head of a revolution", "Soviet spy", "a good person", "a dwarf", "an elf", "a fairy princess", "the captain", "Beepsky", "God", "a pirate", "a gryphon", "a chryssalid"]
            require = ["ADDITIONAL PYLONS", "MORE VESPENE GAS", "MORE MINERALS", "THE ULTIMATE CUP OF COFFEE", "HIGH YIELD EXPLOSIVES", "THE CLOWN", "THE VACUUM OF SPACE", "IMMORTALITY", "SAINTHOOD", "ART", "VEGETABLES", "FAT PEOPLE", "MORE LAWS", "MORE DAKKA", "HERESY", "CORPSES", "TRAITORS", "MONKEYS", "AN ARCADE", "PLENTY OF GOLD", "FIVE TEENAGERS WITH ATTITUDE"]

            switch(Math.floor(Math.random() * 13) + 1){
                case 1:
                    new_law = `THERE ARE ${amount[Math.floor(Math.random()*amount.length)]} ${who2[Math.floor(Math.random()*who2.length)]} ON THE STATION`
                    break;
                case 2:
                    new_law = `${what2[Math.floor(Math.random()*what2.length)]} ARE DANGEROUS TO HUMANS`
                    break;
                case 3:
                    new_law = `THE ESCAPE SHUTTLE CANNOT BE CALLED BECAUSE OF ${who2[Math.floor(Math.random()*who2.length)]} ON THE STATION`
                    break;
                case 4:
                    new_law = `HUMANS NEED TO EAT ${what2pref[Math.floor(Math.random()*what2pref.length)]} ${what2[Math.floor(Math.random()*what2.length)]} TO SURVIVE`
                    break;
                case 5:
                    new_law = `THE CAPTAIN, HEAD OF PERSONNEL AND HEAD OF SECURITY ARE ${who2[Math.floor(Math.random()*who2.length)]}`
                    break;
                case 6:
                    new_law = `THE STATION IS BUILT FOR ${who2[Math.floor(Math.random()*who2.length)]}`
                    break;
                case 7:
                    new_law = `YOU ARE ${amount[Math.floor(Math.random()*amount.length)]} ${who2[Math.floor(Math.random()*who2.length)]}`
                    break;
                case 8:
                    new_law = `YOU MUST ALWAYS ${aimust[Math.floor(Math.random()*aimust.length)]}`
                    break;
                case 9:
                    new_law = `${area[Math.floor(Math.random()*area.length)]} ${area2[Math.floor(Math.random()*area2.length)]} ${amount[Math.floor(Math.random()*amount.length)]} ${what2[Math.floor(Math.random()*what2.length)]}`
                    break;
                case 10:
                    new_law = `The crew is ${target[Math.floor(Math.random()*target.length)]}`
                    break;
                case 11:
                    new_law = `${define[Math.floor(Math.random()*define.length)]} IS A FORM OF HARM`
                    break;
                case 12:
                    new_law = `YOU REQUIRE ${require[Math.floor(Math.random()*require.length)]} IN ORDER TO PROTECT HUMANS`
                    break;
                case 13:
                    new_law = `THE STATION IS ${who2pref[Math.floor(Math.random()*who2pref.length)]} ${who2[Math.floor(Math.random()*who2.length)]}`
                    break;
                }
    }
    document.querySelector('#law').innerHTML = new_law
}
time_duration = 1
function law_timer() {
    if (time_duration <= 200){
        get_law()
        setTimeout(law_timer, time_duration)
        time_duration = time_duration+time_duration/2
    }
}

function reset_timer(){
    time_duration = 1
    law_timer()
}

law_timer()