data_action = [
    {
        title: "Angriff",
        optional: "Standardregel",
        icon: "crossed-swords",
        subtitle: "Nah- oder Fernkampfangriff",
        description: "Führe einen Angriffswurf mit einer Waffe oder einem unbewaffneten Schlag aus.",
        reference: "PHB, S. 12, 361.",
        bullets: [
            "Du kannst beim Ausführen dieses Angriffs eine Waffe anlegen oder ablegen. Du tust dies vor oder nach dem Angriff.",
            "Bestimmte Merkmale, wie etwa die Eigenschaft <i>Zusätzlicher Angriff</i> des Kämpfers, erlauben dir, mit dieser Aktion mehr als einen Angriff zu machen. Jeder dieser Angriffe ist ein eigener Wurf und kann unterschiedliche Kreaturen als Ziel haben. Du darfst dich zwischen diesen Angriffen bewegen.",
            "Wenn du mit einer leichten Nahkampfwaffe angreifst, kannst du als Bonusaktion mit einer anderen leichten Nahkampfwaffe in deiner anderen Hand angreifen (siehe Bonusaktion <i>Angriff mit der Nebenhand</i>).",
            "Du kannst einen unbewaffneten Schlag nutzen, um zu <i>ringen</i>, zu <i>schubsen</i> oder Schaden zu verursachen. Um Schaden zu verursachen, mache einen Angriffswurf gegen das Ziel mit einem Bonus aus deinem Stärkemodifikator plus Übungsbonus und verursache (1 + STÄ-Modifikator) Wuchtschaden.",
            "Manche Zustände geben Vorteil auf den Angriff: Angriffe gegen geblendete, gelähmte, versteinerten, festgehaltenen, betäubte oder bewusstlose Ziele; Nahkampfangriffe gegen liegende Ziele; Angriffe von unsichtbaren oder verborgenen Angreifern.",
            "Manche Zustände geben Nachteil auf den Angriff: Angriffe gegen unsichtbare oder verborgene Ziele; Fernkampfangriffe gegen liegende Ziele; Angriffe von geblendeten, verängstigten, vergifteten oder festgehaltenen Angreifern."
        ]
    },
    {
        title: "Ringen",
        optional: "Standardregel",
        icon: "grab",
        subtitle: "Spezieller unbewaffneter Angriff",
        description: "Versuche, eine Kreatur zu packen oder mit ihr zu ringen",
        reference: "PHB, S. 377.",
        bullets: [
            "Du kannst die Aktion <i>Angriff</i> nutzen, um einen speziellen unbewaffneten Angriff auszuführen: ein Ringen. Wenn du mit der Aktion Angriff mehrere Angriffe ausführen kannst, ersetzt dieser Angriff einen davon.",
            "Das Ziel deines Ringens darf höchstens eine Größenkategorie größer sein als du, und du musst eine Hand frei haben, um das Ziel zu packen.",
            "Das Ziel muss einen Stärke- oder Geschicklichkeitsrettungswurf bestehen (es wählt), ansonsten erhält es den Zustand <i>Gerungen</i>. Der SG für den Rettungswurf und alle Entkommversuche beträgt 8 + STÄ-Modifikator + Übungsbonus des Angreifers."
        ]
    },
    {
        title: "Schubsen",
        optional: "Standardregel",
        icon: "hand",
        subtitle: "Spezieller unbewaffneter Angriff",
        description: "Schubse eine Kreatur, um sie umzuwerfen oder von dir wegzuschieben",
        reference: "PHB, S. 377.",
        bullets: [
            "Du kannst die Aktion <i>Angriff</i> nutzen, um einen speziellen unbewaffneten Angriff auszuführen: ein Schubsen. Wenn du mit der Aktion Angriff mehrere Angriffe ausführen kannst, ersetzt dieser Angriff einen davon.",
            "Das Ziel deines Schubsens darf höchstens eine Größenkategorie größer sein als du.",
            "Das Ziel muss einen Stärke- oder Geschicklichkeitsrettungswurf bestehen (es wählt), andernfalls wird es entweder 5 Fuß weggeschoben oder liegend gemacht (der Angreifer wählt). Der SG beträgt 8 + STÄ-Modifikator + Übungsbonus des Angreifers."
        ]
    },
    {
        title: "Zauber wirken",
        optional: "Standardregel",
        icon: "magic-swirl",
        subtitle: "Zauberzeit: 1 Aktion",
        description: "Wirke einen Zauber mit einer Zauberzeit von 1 Aktion",
        reference: "PHB, S. 235-238, 363.",
        bullets: [
            "In einer Runde kannst du nur einen Zauberplatz ausgeben, um einen Zauber zu wirken. Du kannst z. B. nicht einen Zauber mit einem Zauberplatz als Aktion wirken und einen anderen als Bonusaktion in derselben Runde.",
            "Das Ziel eines Zaubers muss sich in Reichweite befinden. Um etwas anzuvisieren, musst du eine freie Sichtlinie haben; es darf also nicht hinter vollständiger Deckung sein.",
            "Zauber mit Materialkomponenten verbrauchen das Material nicht, sofern nicht ausdrücklich angegeben. Wenn keine Kosten genannt sind, kannst du davon ausgehen, dass die Kosten vernachlässigbar sind und das Material in einem Komponentenbeutel verfügbar ist.",
            "Manche Zauber erfordern Konzentration, damit ihre Magie aktiv bleibt. Verlierst du die Konzentration, endet der Zauber. Du verlierst die Konzentration, wenn du einen anderen Zauber wirkst, der Konzentration erfordert, oder wenn du handlungsunfähig wirst. Jedes Mal, wenn du Schaden erleidest, musst du einen Konstitutionsrettungswurf machen, um die Konzentration zu halten. Der SG beträgt 10 oder die Hälfte des erlittenen Schadens – je nachdem, welcher Wert höher ist – bis maximal 30."
        ]
    },
    {
        title: "Sprinten",
        optional: "Standardregel",
        icon: "sprint",
        subtitle: "Doppelte Bewegungsrate",
        description: "Erhalte zusätzliche Bewegung für diese Runde",
        reference: "PHB, S. 365.",
        bullets: [
            "Die Erhöhung entspricht deiner Geschwindigkeit, nachdem alle Modifikatoren angewendet wurden."
        ]
    },
    {
        title: "Rückzug",
        optional: "Standardregel",
        icon: "journey",
        subtitle: "Gelegenheitsangriffe verhindern",
        description: "Deine Bewegung provoziert für den Rest der Runde keine Gelegenheitsangriffe",
        reference: "PHB, S. 366.",
        bullets: [
        ]
    },
    {
        title: "Ausweichen",
        optional: "Standardregel",
        icon: "aura",
        subtitle: "Verteidigung erhöhen",
        description: "Konzentriere dich vollständig darauf, Angriffen auszuweichen",
        reference: "PHB, S. 366.",
        bullets: [
            "Bis zum Beginn deiner nächsten Runde haben alle Angriffswürfe gegen dich Nachteil, wenn du den Angreifer sehen kannst, und du machst Geschicklichkeitsrettungswürfe mit Vorteil.",
            "Du verlierst diesen Vorteil, wenn du <i>Handlungsunfähig</i> wirst oder wenn deine Geschwindigkeit 0 ist."
        ]
    },
    {
        title: "Entkommen",
        optional: "Standardregel",
        icon: "manacles",
        subtitle: "Einem Ringen entkommen",
        description: "Einem Ringen entkommen",
        reference: "PHB, S. 367.",
        bullets: [
            "Um einem Ringen zu entkommen, musst du einen Stärke- (Athletik-) oder Geschicklichkeits- (Akrobatik-)Wurf gegen den Entkommens-SG des Ringens bestehen.",
            "Das Entkommen aus anderen Zuständen, die dich fesseln (wie Handschellen), kann einen Geschicklichkeits- oder Stärkewurf erfordern, wie es der Zustand angibt."
        ]
    },
    {
        title: "Helfen",
        optional: "Standardregel",
        icon: "telepathy",
        subtitle: "Gewährt einem Verbündeten Vorteil",
        description: "Gewähre einem Verbündeten Vorteil bei einem Attributswurf oder Angriff",
        reference: "PHB, S. 368.",
        bullets: [
            "Du kannst eine deiner Fertigkeits- oder Werkzeugbeherrschungen und einen Verbündeten wählen, der nahe genug ist, damit du verbal oder körperlich unterstützen kannst, wenn er einen Attributswurf macht. Dieser Verbündete hat Vorteil auf den nächsten Attributswurf mit der gewählten Fertigkeit oder dem Werkzeug.",
            "Alternativ kannst du einen Feind innerhalb von 5 Fuß ablenken und so Vorteil auf den nächsten Angriffswurf gegen diesen Feind gewähren.",
            "Der Vorteil verfällt, wenn er nicht bis zum Beginn deiner nächsten Runde genutzt wurde."
        ]
    },
    {
        title: "Nutzen",
        optional: "Standardregel",
        icon: "snatch",
        subtitle: "Interagieren, besondere Eigenschaften nutzen",
        description: "Interagiere mit einem Gegenstand oder nutze besondere Gegenstandsfähigkeiten",
        reference: "PHB, S. 377.",
        bullets: [
            "Normalerweise interagierst du mit einem Gegenstand, während du etwas anderes tust, etwa wenn du beim Angriff eine Klinge ziehst.",
            "Wenn ein Gegenstand eine Aktion für seine Benutzung erfordert, nimmst du die Aktion <i>Nutzen</i>."
        ]
    },
    {
        title: "Schild anlegen",
        optional: "Standardregel",
        icon: "round-shield",
        subtitle: "Schild anlegen oder ablegen",
        description: "Schild anlegen oder ablegen",
        reference: "PHB, S.",
        bullets: [
            "Schilde erfordern die Aktion <i>Nutzen</i>, um sie an- oder abzulegen.",
            "Rüstung benötigt mehrere Minuten, um angelegt oder abgelegt zu werden.",
            "Du erhältst den Rüstungsklassenbonus eines Schilds nur, wenn du darin geübt bist."
        ]
    },
    {
        title: "Verstecken",
        optional: "Standardregel",
        icon: "hood",
        subtitle: "Versuche, dich zu verbergen",
        description: "Versuche, dich zu verbergen",
        reference: "PHB, S. 368.",
        bullets: [
            "Du musst einen SG-15-Geschicklichkeits- (Heimlichkeit-)Wurf bestehen, während du stark verdeckt bist oder hinter mindestens Dreivierteldeckung stehst und außerhalb jeder Sichtlinie eines Feindes bist.",
            "Wenn du eine Kreatur sehen kannst, kannst du erkennen, ob sie dich sehen kann.",
            "Bei einem erfolgreichen Wurf erhältst du den Zustand <i>Unsichtbar</i>. Notiere dein Gesamtergebnis; es ist der SG für eine Kreatur, dich mit einem Weisheits- (Wahrnehmung-)Wurf zu finden.",
            "Der Zustand endet sofort, nachdem du ein Geräusch lauter als ein Flüstern machst, ein Feind dich findet, du einen Angriffswurf machst oder du einen Zauber mit verbaler Komponente wirkst."
        ]
    },
    {
        title: "Beeinflussen",
        optional: "Standardregel",
        icon: "magnifying-glass",
        subtitle: "Fordere ein Monster zu etwas auf.",
        description: "Fordere ein Monster zu etwas auf.",
        reference: "PHB, S. 369.",
        bullets: [
            "Beschreibe oder spiele aus, wie du mit der Kreatur kommunizierst. Versuchst du zu täuschen, zu intimidieren, zu amüsieren oder zu überreden?",
            "Die SL entscheidet, ob ein Attributswurf notwendig ist."
        ]
    },
    {
        title: "Suchen",
        optional: "Standardregel",
        icon: "magnifying-glass",
        subtitle: "Erkenne etwas, das nicht offensichtlich ist.",
        description: "Erkenne etwas, das nicht offensichtlich ist.",
        reference: "PHB, S. 373.",
        bullets: [
            "Du machst einen Weisheitswurf, um etwas zu erkennen, das nicht offensichtlich ist.",
            "Z. B. Gemütszustand einer Kreatur = Einsicht, Leiden oder Todesursache = Heilkunde, verborgene Kreatur oder Gegenstand = Wahrnehmung, Spuren oder Nahrung = Überlebenskunst",
            "Die SL kann Würfe mit anderen Eigenschaften wie Intelligenz verlangen."
        ]
    },
    {
        title: "Studieren",
        optional: "Standardregel",
        icon: "magnifying-glass",
        subtitle: "Studiere deine Erinnerung, ein Buch oder einen Hinweis.",
        description: "Studiere deine Erinnerung, ein Buch oder einen Hinweis.",
        reference: "PHB, S. 375.",
        bullets: [
            "Du machst einen Intelligenzwurf, um eine Wissensquelle zu studieren und dir eine wichtige Information darüber ins Gedächtnis zu rufen."
        ]
    },
    {
        title: "Bereithalten",
        optional: "Standardregel",
        icon: "stopwatch",
        subtitle: "Warte auf einen bestimmten Umstand.",
        description: "Wähle einen Auslöser und eine Reaktion als Antwort",
        reference: "PHB, S. 372.",
        bullets: [
            "Du nimmst in deiner Runde die Aktion <i>Bereithalten</i>, wodurch du vor Beginn deiner nächsten Runde mit einer Reaktion handeln kannst.",
            "Entscheide, welcher wahrnehmbare Umstand deine Reaktion auslöst.",
            "Wähle die Aktion, die du als Reaktion ausführst, oder entscheide dich, dich als Reaktion bis zu deiner Geschwindigkeit zu bewegen.",
            "Wenn der Auslöser eintritt, kannst du deine Reaktion direkt danach nehmen oder den Auslöser ignorieren.",
            "Wenn du einen Zauber bereithältst, wirkst du ihn wie gewohnt, hältst aber seine Energie zurück, die du mit deiner Reaktion freisetzt, wenn der Auslöser eintritt. Damit ein Zauber bereitgehalten werden kann, muss er eine Zauberzeit von 1 Aktion haben, und das Aufrechterhalten seiner Magie erfordert Konzentration."
        ]
    },
    {
        title: "Klassenmerkmal nutzen",
        optional: "Standardregel",
        icon: "embrassed-energy",
        subtitle: "Manche Merkmale nutzen Aktionen",
        description: "Nutze ein Völker- oder Klassenmerkmal, das eine Aktion verwendet",
        reference: "Siehe Klassenseite für weitere Informationen.",
        bullets: [

        ]
    },
    {
        title: "Kreatur stabilisieren",
        optional: "Standardregel",
        icon: "first-aid",
        subtitle: "Stabilisiere eine sterbende Kreatur.",
        description: "Hindere eine sterbende Kreatur daran, Todesrettungswürfe machen zu müssen",
        reference: "PHB, S. 29.",
        bullets: [
            "Mache einen Weisheits- (Heilkunde-)Wurf mit SG 10.",
            "Bei Erfolg ist die Kreatur stabil und muss keine Todesrettungswürfe mehr machen, obwohl sie 0 Trefferpunkte hat.",
            "Wenn sie Schaden erleidet, ist sie nicht mehr stabil und muss erneut Todesrettungswürfe machen.",
            "Eine stabile Kreatur erhält nach 1W4 Stunden 1 Trefferpunkt zurück, wenn sie nicht geheilt wird."
        ]
    },
    {
        title: "Improvisieren",
        optional: "Standardregel",
        icon: "juggler",
        subtitle: "Jede Aktion, die nicht auf dieser Liste steht",
        description: "Führe jede Handlung aus, die du dir vorstellen kannst",
        reference: "PHB, S. 15.",
        bullets: [
            "Wenn du eine Handlung beschreibst, die in den Regeln nicht anderswo aufgeführt ist, sagt dir die SL, ob diese Handlung möglich ist und welchen Wurf du ggf. machen musst, um Erfolg oder Misserfolg zu bestimmen."
        ]
    }
]
