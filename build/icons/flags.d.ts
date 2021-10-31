/** Docs
 * All international flag icons are the standard 24px tall, and all have the same width
 * You can access them by flags[flag].data.map(flag...)
 * you can get the metadata, such as viewbox, from flags[icon].meta
 * - all flags are immutable by nature, so in the meta you will see the global static: true, this prevents colors from changing
 * - it is not neccesary to state the override: false for the paths since the meta static prop overrides all paths and sets them to false
 * All these flags correspond with the country data in the countries.ts file.
 */
declare const flags: {
    plain: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sardinia: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    corsica: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    wales: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    iceland: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    uk: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    england: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    france: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ireland: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    germany: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    poland: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    russia: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    denmark: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sweden: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    finland: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    norway: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    estonia: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    latvia: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    lithuania: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    eu: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    austria: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    hungary: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    spain: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    portugal: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    belgium: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    netherlands: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    switzerland: {
        meta: {
            static: boolean;
            id: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    scotland: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    nato: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    italy: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    luxembourg: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    albania: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    turkey: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    greece: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    serbia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    romania: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    greenland: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    monaco: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    slovenia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    slovakia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ukraine: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    czech_republic: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    israel: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bulgaria: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    croatia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    malta: {
        meta: {
            static: boolean;
            title: string;
            name: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    liechtenstein: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    north_macedonia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    belarus: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    andorra: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    montenegro: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    moldova: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    georgia: {
        meta: {
            static: boolean;
            viewbox: string;
            title: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    faroe_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bosnia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    san_marino: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ceuta: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    kosovo: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    un: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    aaland_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    basque: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    jersey: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    isle_of_man: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cook_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    montserrat: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    falkland_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cayman_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    turks_and_caios: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    british_virgin_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    us_virgin_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tuvalu: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    anguilla: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    indian_ocean: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bermuda: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    pitcairn_islands: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    fiji: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    hawaii: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    niue: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    vietnam: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    thailand: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    vatican: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    new_zealand: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    australia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tonga: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    yemen: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    indonesia: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    qatar: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    japan: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    china: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    lebanon: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    south_korea: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    north_korea: {
        meta: {
            static: boolean;
            viewbox: string;
            title: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    samoa: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    usa: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    canada: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mexico: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mauritius: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    gabon: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sierra_leone: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    chad: {
        meta: {
            static: boolean;
            viewbox: string;
            title: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    nigeria: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mauritania: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    guinea_bissau: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    benin: {
        meta: {
            static: boolean;
            title: string;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    somalia: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    micronesia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    singapore: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    southAfrica: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    madagascar: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    jamaica: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    maldives: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    paraguay: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    senegal: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tunesia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    guam: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    kazakhstan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    zambia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    guernsey: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ivoryCoast: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    armenia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    transnistria: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tajikistan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    haiti: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    colombia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    taiwan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    oman: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    brazil: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ossetia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    pakistan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bhutan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ethiopia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cocosIsland: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    india: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    nepal: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ghana: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tanzania: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    gibraltar: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    togo: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    guinea: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    dominica: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    saudiArabia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    somaliland: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    iraq: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    syria: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    morocco: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    algeria: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    malaysia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sriLanka: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    northernCyprus: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    jordan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    kyrgistan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    norfolkIsland: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    egypt: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    uae: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sudan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    palestine: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    iran: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bahrain: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sicily: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sahrawi: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    azerbaijan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    kuwait: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    afghanistan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    southSudan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    uzbekistan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    canaryIslands: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    malawi: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mongolia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    seychelles: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    nauru: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    congoDemocraticRepublic: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    congoRepublic: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    turkministan: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    azoresIsland: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    stVincent: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    niger: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    rwanda: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    martinique: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    argentina: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    hongKong: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    peru: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    equatorialGuinea: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    philippines: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    trinidad: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    palau: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    lesotho: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    rapaNui: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mali: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    macao: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    liberia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    galapagosIslands: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cambodia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cuba: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    venezuela: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bolivia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    gambia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bangladesh: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    chile: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    botswana: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cameroon: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    uruguay: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    burkinaFaso: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    barbados: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    guatemala: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    spqr: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sabaIsland: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    stBarts: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    suriname: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bonaire: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    myanmar: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    saintKitts: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    djibouti: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    comoros: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    puertoRico: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    americanSamoa: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    honduras: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    christmasIsland: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    nicaragua: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    elSalvador: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    kiribati: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sintEustatius: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tokelau: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    libya: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    grenada: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    vanuatu: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    costaRica: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    tibet: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    northernMarianasIslands: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    eastTimor: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    madeira: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    stLucia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    curacao: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    laos: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    angola: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    panama: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    bahamas: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    eswatini: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    brunei: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    marshallIslands: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    balearicIslands: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    solomonIslands: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    antigua_barbuda: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    eritrea: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    nambia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    abkhazia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    dominican_republic: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    kenya: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    burundi: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    aruba: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    cape_verde: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sao_tome_prince: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    central_african_republic: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    belize: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    uganda: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    zimbabwe: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    papua_new_guinea: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mozambieuq: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ecuador: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    sint_maarten: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    melilla: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    french_polynesia: {
        meta: {
            static: boolean;
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
};
export { flags };
