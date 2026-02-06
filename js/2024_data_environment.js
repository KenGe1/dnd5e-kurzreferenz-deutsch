data_environment_obscurance = [
    {
        title: "Leicht verdeckt",
        optional: "Standardregel",
        icon: "bleeding-eye",
        subtitle: "Nachteil auf Wahrnehmung",
        description: "Dämmerlicht, stellenweise Nebel, mäßiges Laub.",
        reference: "PHB, S. 19.",
        bullets: [
            "Kreaturen haben <b>Nachteil auf Weisheits- (Wahrnehmung-)Würfe</b>, die auf Sicht beruhen."
        ]
    },
    {
        title: "Stark verdeckt",
        optional: "Standardregel",
        icon: "lightning-tear",
        subtitle: "Faktisch geblendet",
        description: "Dunkelheit, undurchsichtiger Nebel, dichtes Laub",
        reference: "PHB, S. 19.",
        bullets: [
            "Kreaturen haben den Zustand <b>Geblendet</b>, wenn sie versuchen, etwas zu sehen."
        ]
    }
]

data_environment_light = [
    {
        title: "Helles Licht",
        optional: "Standardregel",
        icon: "star-pupil",
        subtitle: "Normale Sicht",
        description: "Helles Licht erlaubt den meisten Kreaturen normales Sehen",
        reference: "PHB, S. 19.",
        bullets: [
            "Auch trübe Tage liefern helles Licht, ebenso Fackeln, Laternen, Feuer und andere Lichtquellen innerhalb eines bestimmten Radius."
        ]
    },
    {
        title: "Dämmerlicht",
        optional: "Standardregel",
        icon: "semi-closed-eye",
        subtitle: "Leicht verdeckt",
        description: "Dämmerlicht, auch Schatten genannt",
        reference: "PHB, S. 19.",
        bullets: [
            "Erzeugt einen <b>leicht verdeckten</b> Bereich.",
            "Ein Bereich mit Dämmerlicht ist gewöhnlich die Grenze zwischen einer hellen Lichtquelle, etwa einer Fackel, und der umgebenden Dunkelheit.",
            "Auch das weiche Licht der Dämmerung und des Morgengrauens zählt als Dämmerlicht. Ein besonders heller Vollmond kann das Land in Dämmerlicht tauchen."
        ]
    },
    {
        title: "Dunkelheit",
        optional: "Standardregel",
        icon: "worried-eyes",
        subtitle: "Stark verdeckt",
        description: "Dunkelheit erzeugt einen stark verdeckten Bereich",
        reference: "PHB, S. 19.",
        bullets: [
            "Erzeugt einen <b>stark verdeckten</b> Bereich.",
            "Charaktere begegnen Dunkelheit im Freien bei Nacht (selbst bei den meisten mondbeschienenen Nächten), in einem unbeleuchteten Dungeon oder Gewölbe, oder in einem Bereich magischer Dunkelheit."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsicht",
        optional: "Standardregel",
        icon: "one-eyed",
        subtitle: "Wahrnehmen ohne Sicht",
        description: "Du kannst innerhalb einer bestimmten Reichweite sehen, ohne dich auf körperliche Sicht zu verlassen.",
        reference: "PHB, S. 361.",
        bullets: [
            "Du kannst alles sehen, was nicht hinter vollständiger Deckung ist, selbst wenn du den Zustand Geblendet hast oder dich in Dunkelheit befindest.",
            "Du kannst etwas sehen, das den Zustand Unsichtbar hat.",
            "Kreaturen ohne Augen, wie Schleime, sowie Kreaturen mit Echolotung oder geschärften Sinnen, wie Fledermäuse und wahre Drachen, besitzen diesen Sinn."
        ]
    },
    {
        title: "Dunkelsicht",
        optional: "Standardregel",
        icon: "semi-closed-eye",
        subtitle: "Begrenzte Sicht in Dunkelheit",
        description: "Eine Kreatur mit Dunkelsicht kann in der Dunkelheit oder bei schwachem Licht innerhalb eines bestimmten Radius besser sehen",
        reference: "PHB, S. 365",
        bullets: [
            "Innerhalb einer bestimmten Reichweite kann eine Kreatur mit Dunkelsicht in Dämmerlicht sehen, als wäre es helles Licht, und in Dunkelheit, als wäre es Dämmerlicht.",
            "Die Kreatur kann in Dunkelheit jedoch keine Farben erkennen, sondern nur Graustufen.",
            "Viele Kreaturen in den D&amp;D-Welten, insbesondere solche, die unterirdisch leben, haben Dunkelsicht."
        ]
    },
    {
        title: "Erschütterungssinn",
        optional: "Standardregel",
        icon: "semi-closed-eye",
        subtitle: "Vibrationen wahrnehmen",
        description: "Die Position von Kreaturen auf der gleichen Oberfläche orten",
        reference: "PHB, S. 377.",
        bullets: [
            "Innerhalb einer bestimmten Reichweite kann eine Kreatur mit Erschütterungssinn die Position von Kreaturen und bewegten Gegenständen orten, sofern die Kreatur mit Erschütterungssinn und alles, was sie entdeckt, Kontakt mit derselben Oberfläche oder Flüssigkeit hat.",
            "Erschütterungssinn kann keine Kreaturen in der Luft erkennen und zählt nicht als Sicht."
        ]
    },
    {
        title: "Wahrsicht",
        optional: "Standardregel",
        icon: "eye-shield",
        subtitle: "Sehen in Dunkelheit",
        description: "Deine Sicht ist innerhalb einer bestimmten Reichweite verbessert; sie durchdringt Folgendes",
        reference: "PHB, S. 377.",
        bullets: [
            "Du kannst in normaler und magischer Dunkelheit sehen.",
            "Du kannst Kreaturen und Gegenstände sehen, die den Zustand Unsichtbar haben.",
            "Visuelle Illusionen erscheinen dir durchsichtig, und du bestehst Rettungswürfe dagegen automatisch.",
            "Du erkennst die wahre Gestalt jeder Kreatur oder jedes Gegenstands, den du siehst und der durch Magie verwandelt wurde.",
            "Du siehst in die Ätherebene."
        ]
    }
]

data_environment_cover = [
    {
        title: "Halbe Deckung",
        optional: "Standardregel",
        icon: "broken-shield",
        subtitle: "Niedrige Mauer, Möbel, Kreaturen",
        description: "Ein Ziel hat halbe Deckung, wenn ein Hindernis mindestens die Hälfte seines Körpers verdeckt",
        reference: "PHB, S. 25-26.",
        bullets: [
            "Das Hindernis kann eine niedrige Mauer, ein großes Möbelstück, ein schmaler Baumstamm oder eine Kreatur sein – egal ob Feind oder Freund.",
            "Ein Ziel mit halber Deckung erhält <b>+2 Bonus auf RK und Geschicklichkeitsrettungswürfe</b>.",
            "Wenn ein Ziel hinter mehreren Deckungsquellen steht, gilt nur die schützendste Deckungsstufe."
        ]
    },
    {
        title: "Dreivierteldeckung",
        optional: "Standardregel",
        icon: "cracked-shield",
        subtitle: "Fallgatter, Schießscharte",
        description: "Ein Ziel hat Dreivierteldeckung, wenn etwa drei Viertel von einem Hindernis verdeckt sind",
        reference: "PHB, S. 25-26.",
        bullets: [
            "Das Hindernis kann ein Fallgatter, eine Schießscharte oder ein dicker Baumstamm sein.",
            "Ein Ziel mit Dreivierteldeckung erhält <b>+5 Bonus auf RK und Geschicklichkeitsrettungswürfe</b>.",
            "Wenn ein Ziel hinter mehreren Deckungsquellen steht, gilt nur die schützendste Deckungsstufe."
        ]
    },
    {
        title: "Volle Deckung",
        optional: "Standardregel",
        icon: "shield",
        subtitle: "Vollständig verborgen",
        description: "Ein Ziel hat vollständige Deckung, wenn es vollständig hinter einem Hindernis verborgen ist",
        reference: "PHB, S. 25-26.",
        bullets: [
            "Ein Ziel mit vollständiger Deckung <b>kann nicht direkt</b> von einem Angriff oder Zauber anvisiert werden, obwohl manche Zauber ein solches Ziel erreichen können, indem sie es in einen Wirkungsbereich einschließen.",
            "Wenn ein Ziel hinter mehreren Deckungsquellen steht, gilt nur die schützendste Deckungsstufe."
        ]
    }
]
