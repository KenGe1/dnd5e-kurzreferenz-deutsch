data_action = [
    {
        title: "Angriff",
        optional: "Standardregel",
        icon: "crossed-swords",
        subtitle: "Nah- oder Fernkampfangriff",
        description: "Führe einen Nah- oder Fernkampfangriff mit deiner Waffe aus",
        reference: "PHB, S. 192, 194-195.",
        bullets: [
            "Bestimmte Merkmale, wie etwa die Eigenschaft <i>Zusätzlicher Angriff</i> des Kämpfers, erlauben dir, mit dieser Aktion mehr als einen Angriff zu machen. Jeder dieser Angriffe ist ein eigener Wurf und kann unterschiedliche Kreaturen als Ziel haben. Du darfst dich zwischen diesen Angriffen bewegen.",
            "Wenn du mit einer leichten Nahkampfwaffe angreifst, kannst du als Bonusaktion mit deiner anderen Hand angreifen (siehe Bonusaktion <i>Angriff mit der Nebenhand</i>).",
            "Du kannst einen deiner Nahkampfangriffe durch ein <i>Ringen</i> oder <i>Schubsen</i> ersetzen.",
            "Manche Zustände geben Vorteil auf den Angriff: Angriffe gegen geblendete, gelähmte, versteinerten, festgehaltenen, betäubte oder bewusstlose Ziele; Nahkampfangriffe gegen liegende Ziele; Angriffe von unsichtbaren oder verborgenen Angreifern.",
            "Manche Zustände geben Nachteil auf den Angriff: Angriffe gegen unsichtbare oder verborgene Ziele; Fernkampfangriffe gegen liegende Ziele; Angriffe von geblendeten, verängstigten, vergifteten oder festgehaltenen Angreifern."
        ]
    },
    {
        title: "Ringen",
        optional: "Standardregel",
        icon: "grab",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Versuche, eine Kreatur zu packen oder mit ihr zu ringen",
        reference: "PHB, S. 195.",
        bullets: [
            "Du kannst die Aktion <i>Angriff</i> nutzen, um einen speziellen Nahkampfangriff auszuführen: ein Ringen. Wenn du mit der Aktion Angriff mehrere Angriffe ausführen kannst, ersetzt dieser Angriff einen davon.",
            "Das Ziel deines Ringens darf höchstens eine Größenkategorie größer sein als du und muss sich in deiner Reichweite befinden.",
            "Mit mindestens einer freien Hand versuchst du, das Ziel zu packen, indem du einen Ringwurf machst: einen Stärke- (Athletik-)Wurf, der durch einen Stärke- (Athletik-) oder Geschicklichkeits- (Akrobatik-)Wurf des Ziels angefochten wird (das Ziel wählt die Eigenschaft).",
            "Bei Erfolg erhält das Ziel den Zustand <i>Gerungen</i> (seine Geschwindigkeit wird auf 0 gesetzt)."
        ]
    },
    {
        title: "Schubsen",
        optional: "Standardregel",
        icon: "hand",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Schubse eine Kreatur, um sie umzuwerfen oder von dir wegzuschieben",
        reference: "PHB, S. 195. / DMG, S. 272",
        bullets: [
            "Mit der Aktion <i>Angriff</i> kannst du einen speziellen Nahkampfangriff ausführen, um eine Kreatur zu schubsen. Wenn du mit der Aktion Angriff mehrere Angriffe ausführen kannst, ersetzt dieser Angriff einen davon.",
            "Das Ziel deines Schubsens darf höchstens eine Größenkategorie größer sein als du und muss sich in deiner Reichweite befinden.",
            "Du machst einen Stärke- (Athletik-)Wurf, der durch einen Stärke- (Athletik-) oder Geschicklichkeits- (Akrobatik-)Wurf des Ziels angefochten wird (das Ziel wählt die Eigenschaft).",
            "Wenn du den Wettstreit gewinnst, wirfst du das Ziel entweder um oder schiebst es 5 Fuß von dir weg."
        ]
    },
    {
        title: "Zur Seite schubsen*",
        optional: "Optionale Regel",
        icon: "hand",
        subtitle: "Spezieller Nahkampfangriff",
        description: "Schubse eine Kreatur, um sie umzuwerfen oder seitlich zu verdrängen",
        reference: "PHB, S. 195. / DMG, S. 272",
        bullets: [
            "(Optionale Regel):",
            "Mit dieser Option nutzt eine Kreatur den speziellen Schubangriff, um ein Ziel zur Seite zu drängen.",
            "Der Angreifer hat dabei Nachteil auf seinen Stärke- (Athletik-)Wurf.",
            "Bei Erfolg bewegt der Angreifer das Ziel 5 Fuß in ein anderes Feld innerhalb seiner Reichweite."
        ]
    },
    {
        title: "Zauber wirken",
        optional: "Standardregel",
        icon: "magic-swirl",
        subtitle: "Zauberzeit: 1 Aktion",
        description: "Wirke einen Zauber mit einer Zauberzeit von 1 Aktion",
        reference: "PHB, S. 192.",
        bullets: [
            "Du kannst nicht mit deiner Aktion einen Zauber und mit deiner Bonusaktion in derselben Runde einen anderen Zauber wirken, außer wenn die Aktion zum Wirken eines Zaubertricks genutzt wird.",
            "Das Ziel eines Zaubers muss sich in Reichweite befinden. Um etwas anzuvisieren, musst du eine freie Sichtlinie haben; es darf also nicht hinter vollständiger Deckung sein.",
            "Zauber mit Materialkomponenten verbrauchen das Material nicht, sofern nicht ausdrücklich angegeben. Wenn keine Kosten genannt sind, kannst du davon ausgehen, dass die Kosten vernachlässigbar sind und das Material in einem Komponentenbeutel verfügbar ist.",
            "Manche Zauber erfordern Konzentration, damit ihre Magie aktiv bleibt. Verlierst du die Konzentration, endet der Zauber. Du verlierst die Konzentration, wenn du einen anderen Zauber wirkst, der Konzentration erfordert, oder wenn du handlungsunfähig wirst. Jedes Mal, wenn du Schaden erleidest, musst du einen Konstitutionsrettungswurf machen, um die Konzentration zu halten. Der SG beträgt 10 oder die Hälfte des erlittenen Schadens – je nachdem, welcher Wert höher ist."
        ]
    },
    {
        title: "Sprinten",
        optional: "Standardregel",
        icon: "sprint",
        subtitle: "Doppelte Bewegungsrate",
        description: "Erhalte zusätzliche Bewegung für diese Runde",
        reference: "PHB, S. 192.",
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
        reference: "PHB, S. 192.",
        bullets: [
        ]
    },
    {
        title: "Ausweichen",
        optional: "Standardregel",
        icon: "aura",
        subtitle: "Verteidigung erhöhen",
        description: "Konzentriere dich vollständig darauf, Angriffen auszuweichen",
        reference: "PHB, S. 192.",
        bullets: [
            "Bis zum Beginn deiner nächsten Runde haben alle Angriffswürfe gegen dich Nachteil, wenn du den Angreifer sehen kannst, und du machst Geschicklichkeitsrettungswürfe mit Vorteil.",
            "Du verlierst diesen Vorteil, wenn du <i>handlungsunfähig</i> wirst oder wenn deine Geschwindigkeit auf 0 sinkt."
        ]
    },
    {
        title: "Entkommen",
        optional: "Standardregel",
        icon: "manacles",
        subtitle: "Einem Ringen entkommen",
        description: "Einem Ringen entkommen",
        reference: "PHB, S. 195.",
        bullets: [
            "Um einem Ringen zu entkommen, musst du einen Stärke- (Athletik-) oder Geschicklichkeits- (Akrobatik-)Wurf bestehen, der durch den Stärke- (Athletik-)Wurf des Ringenden angefochten wird.",
            "Das Entkommen aus anderen Zuständen, die dich fesseln (wie Handschellen), kann einen Geschicklichkeits- oder Stärkewurf erfordern, wie es der Zustand angibt."
        ]
    },
    {
        title: "Helfen",
        optional: "Standardregel",
        icon: "telepathy",
        subtitle: "Gewährt einem Verbündeten Vorteil",
        description: "Gewähre einem Verbündeten Vorteil bei einem Attributswurf oder Angriff",
        reference: "PHB, S. 192.",
        bullets: [
            "Das Ziel erhält Vorteil auf den nächsten Attributswurf, den es macht, um die Aufgabe zu erfüllen, bei der du hilfst.",
            "Alternativ erhält das Ziel Vorteil auf den nächsten Angriffswurf gegen eine Kreatur innerhalb von 5 Fuß von dir.",
            "Der Vorteil hält bis zum Beginn deiner nächsten Runde an."
        ]
    },
    {
        title: "Gegenstand benutzen",
        optional: "Standardregel",
        icon: "snatch",
        subtitle: "Interagieren, besondere Eigenschaften nutzen",
        description: "Interagiere mit einem zweiten Gegenstand oder nutze besondere Gegenstandsfähigkeiten",
        reference: "PHB, S. 193.",
        bullets: [
            "Du kannst während deiner Runde kostenlos mit einem Gegenstand interagieren (z. B. eine Waffe ziehen oder eine Tür öffnen). Wenn du mit einem zweiten Gegenstand interagieren möchtest, nutze diese Aktion.",
            "Wenn ein Gegenstand deine Aktion für seine Benutzung erfordert, nimmst du ebenfalls diese Aktion."
        ]
    },
    {
        title: "Schild anlegen",
        optional: "Standardregel",
        icon: "round-shield",
        subtitle: "Schild anlegen oder ablegen",
        description: "Schild anlegen oder ablegen",
        reference: "PHB, S. 144-146.",
        bullets: [
            "Ein Schild benötigt immer eine Aktion, um angelegt oder abgelegt zu werden.",
            "Rüstung benötigt mehrere Minuten, um angelegt oder abgelegt zu werden."
        ]
    },
    {
        title: "Verstecken",
        optional: "Standardregel",
        icon: "hood",
        subtitle: "Versuche, dich zu verstecken",
        description: "Versuche, dich zu verstecken",
        reference: "PHB, S. 192.",
        bullets: [
            "Du kannst dich nicht vor einer Kreatur verstecken, die dich sehen kann. Du musst vollständige Deckung haben, dich in einem stark verschleierten Bereich befinden, unsichtbar sein oder anderweitig die Sicht des Gegners blockieren.",
            "Wenn du Lärm machst (z. B. eine Warnung rufst oder eine Vase umstößt), gibst du deine Position preis.",
            "Wenn du dich versteckst, mache einen Geschicklichkeits- (Heimlichkeit-)Wurf und notiere das Ergebnis. Bis du entdeckt wirst oder das Verstecken beendest, wird dieses Ergebnis durch den Weisheits- (Wahrnehmung-)Wurf jeder Kreatur angefochten, die aktiv nach Anzeichen deiner Anwesenheit sucht.",
            "Eine Kreatur bemerkt dich auch dann, wenn sie nicht sucht, es sei denn, dein Heimlichkeitswurf ist höher als ihre passive Wahrnehmung.",
            "Außerhalb des Kampfes kannst du einen Geschicklichkeits- (Heimlichkeit-)Wurf auch für Handlungen wie das Verbergen vor Feinden, das Anschleichen an Wachen, das unbemerkte Davonschleichen oder das Anschleichen an jemanden, ohne gesehen oder gehört zu werden, verwenden."
        ]
    },
    {
        title: "Suchen",
        optional: "Standardregel",
        icon: "magnifying-glass",
        subtitle: "Versuche, etwas zu finden",
        description: "Konzentriere dich darauf, etwas zu finden",
        reference: "PHB, S. 193.",
        bullets: [
            "Je nach Art deiner Suche kann die SL dich einen Weisheits- (Wahrnehmung-)Wurf oder einen Intelligenz- (Nachforschung-)Wurf machen lassen."
        ]
    },
    {
        title: "Bereithalten",
        optional: "Standardregel",
        icon: "stopwatch",
        subtitle: "Auslöser und Handlung wählen",
        description: "Wähle einen Auslöser und eine Reaktion als Antwort",
        reference: "PHB, S. 193.",
        bullets: [
            "Zuerst entscheidest du, welche wahrnehmbare Situation deine Reaktion auslöst.",
            "Dann wählst du die Handlung, die du als Reaktion ausführst, oder du entscheidest dich, dich als Reaktion bis zu deiner Geschwindigkeit zu bewegen.",
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
        subtitle: "Einer sterbenden Kreatur helfen",
        description: "Hindere eine sterbende Kreatur daran, Todesrettungswürfe machen zu müssen",
        reference: "PHB, S. 197.",
        bullets: [
            "Mache einen Weisheits- (Heilkunde-)Wurf mit SG 10.",
            "Bei Erfolg ist die Kreatur stabil und muss keine Todesrettungswürfe mehr machen.",
            "Eine stabile Kreatur erhält nach 1W4 Stunden 1 Trefferpunkt zurück."
        ]
    },
    {
        title: "Improvisieren",
        optional: "Standardregel",
        icon: "juggler",
        subtitle: "Jede Aktion, die nicht auf dieser Liste steht",
        description: "Führe jede Handlung aus, die du dir vorstellen kannst",
        reference: "PHB, S. 193.",
        bullets: [
            "Wenn du eine Handlung beschreibst, die in den Regeln nicht anderswo aufgeführt ist, sagt dir die SL, ob diese Handlung möglich ist und welchen Wurf du ggf. machen musst, um Erfolg oder Misserfolg zu bestimmen."
        ]
    },
    {
        title: "Entwaffnen*",
        optional: "Optionale Regel",
        icon: "sword-break",
        subtitle: "Gegenstand aus der Hand schlagen",
        description: "Eine Kreatur kann einen Waffenangriff nutzen, um eine Waffe oder einen anderen Gegenstand aus dem Griff eines Ziels zu schlagen.",
        reference: "DMG, S. 271",
        bullets: [
            "(Optionale Regel):",
            "Der Angreifer macht einen Angriffswurf, der durch einen Stärke- (Athletik-) oder Geschicklichkeits- (Akrobatik-)Wurf des Ziels angefochten wird.",
            "Gewinnt der Angreifer den Wettstreit, verursacht der Angriff keinen Schaden oder andere Auswirkungen, aber der Verteidiger lässt den Gegenstand fallen.",
            "Der Angreifer hat Nachteil auf seinen Angriffswurf, wenn das Ziel den Gegenstand mit zwei oder mehr Händen hält.",
            "Das Ziel hat Vorteil auf seinen Attributswurf, wenn es größer ist als die angreifende Kreatur, oder Nachteil, wenn es kleiner ist."

        ]
    },
    {
        title: "Überrennen*",
        optional: "Optionale Regel",
        icon: "shield-bash",
        subtitle: "Durch einen feindlichen Raum rennen",
        description: "Wenn eine Kreatur versucht, sich durch den Raum einer feindlichen Kreatur zu bewegen, kann der Beweger versuchen, sich durchzudrängen, indem er die feindliche Kreatur überrennt.",
        reference: "DMG, S. 272",
        bullets: [
            "(Optionale Regel):",
            "Als Aktion macht der Beweger einen Stärke- (Athletik-)Wurf, der durch einen Stärke- (Athletik-)Wurf der feindlichen Kreatur angefochten wird.",
            "Die überrennende Kreatur hat Vorteil auf diesen Wurf, wenn sie größer ist als die feindliche Kreatur, oder Nachteil, wenn sie kleiner ist.",
            "Wenn der Beweger den Wettstreit gewinnt, kann er sich in dieser Runde einmal durch den Raum der feindlichen Kreatur bewegen."
        ]
    },
    {
        title: "Durchrollen*",
        optional: "Optionale Regel",
        icon: "tumble",
        subtitle: "Durch einen feindlichen Raum rollen",
        description: "Eine Kreatur kann versuchen, sich durch den Raum einer feindlichen Kreatur zu rollen, indem sie sich duckt und an dem Gegner vorbeischlängelt.",
        reference: "DMG, S. 272",
        bullets: [
            "(Optionale Regel):",
            "Als Aktion macht der Rollende einen Geschicklichkeits- (Akrobatik-)Wurf, der durch den Geschicklichkeits- (Akrobatik-)Wurf der feindlichen Kreatur angefochten wird.",
            "Wenn der Rollende den Wettstreit gewinnt, kann er sich in dieser Runde einmal durch den Raum der feindlichen Kreatur bewegen."
        ]
    },
    {
        title: "Markieren*",
        optional: "Optionale Regel",
        icon: "cross-mark",
        subtitle: "Vorteil auf Gelegenheitsangriffe geben",
        description: "Diese Option erleichtert es Nahkämpfern, einander mit Gelegenheitsangriffen zu bedrängen.",
        reference: "DMG, S. 271",
        bullets: [
            "(Optionale Regel):",
            "Wenn eine Kreatur einen Nahkampfangriff macht, kann sie auch ihr Ziel markieren.",
            "Bis zum Ende der nächsten Runde des Angreifers haben alle Gelegenheitsangriffe gegen das markierte Ziel Vorteil.",
            "Der Gelegenheitsangriff verbraucht nicht die Reaktion des Angreifers.",
            "Der Angreifer kann den Angriff nicht ausführen, wenn irgendetwas – etwa der Zustand Handlungsunfähig oder der Zauber <i>Schockgriff</i> – ihn daran hindert, Reaktionen zu nehmen.",
            "Der Angreifer ist auf einen Gelegenheitsangriff pro Runde begrenzt."
        ]
    },
    {
        title: "Auf eine größere Kreatur klettern*",
        optional: "Optionale Regel",
        icon: "mountain-climbing",
        subtitle: "Eine größere Kreatur erklimmen",
        description: "Wenn eine Kreatur auf eine andere springen möchte, kann sie das durch Ringen tun. Ein ausreichend großes Ziel kann als Gelände behandelt werden, um auf seinen Rücken zu springen oder sich an einem Glied festzuhalten.",
        reference: "DMG, S. 271",
        bullets: [
            "(Optionale Regel):",
            "Nachdem alle notwendigen Attributswürfe abgelegt wurden, um in Position zu kommen und auf die größere Kreatur zu gelangen, nutzt die kleinere Kreatur ihre Aktion für einen Stärke- (Athletik-) oder Geschicklichkeits- (Akrobatik-)Wurf, der durch den Geschicklichkeits- (Akrobatik-)Wurf des Ziels angefochten wird.",
            "Wenn sie den Wettstreit gewinnt, bewegt sich die kleinere Kreatur erfolgreich in den Raum der Zielkreatur.",
            "Die kleinere Kreatur bewegt sich mit dem Ziel und hat Vorteil auf Angriffswürfe gegen es."
        ]
    }
]
