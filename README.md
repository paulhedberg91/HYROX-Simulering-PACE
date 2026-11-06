# HYROX-Simulering-PACE
Tidtagning, heatlistor och nedräkning till starter för PACE HYROX Simulation (lördag 7 november 2026).

En webbapp för iPad, i en enda fil (`index.html`). Ingen installation och inga beroenden.

## Så funkar det på eventdagen
1. **Tidtagning → Nästa start.** Tryck **Nedräkning 10 s**. Skärmen räknar ner i helskärm med en mjuk ljuspuls per sekund (blått 10–6, orange 5–2, grönt 1–0). Ljudet är ett trumslag varje sekund, med mässingsstötar på 3-2-1. Vid noll kommer en tyst explosion med tryckvåg och strålar, och ett stort **GOGO!** slår in, utan blinkningar. Klockan för starten börjar exakt vid noll. Det finns också **Starta direkt** utan nedräkning. Under *Inställningar* kan du testa nedräkningen och ljudet utan att något startar.
2. **Automatiska starter (på som standard):** när första starten har gått startar resten automatiskt **enligt startlistans tider** (08:30, 09:00 … 12:30, 12:45, 13:00 …). Avståndet räknas från föregående faktiska start, så ett försenat heat skjuter resten lika mycket. Med −5/−1/+1/+5, längst ner under Tidtagning eller under Inställningar, flyttar du alla kommande heat lika mycket. Nedräkningen och GOGO! körs av sig själv, och starttiden blir exakt. Varje kommande start visar en egen nedräkning med klockslag och förloppsstapel. Med **Pausa automatik** pausar du om något drar ut på tiden. **Appen behöver inte vara öppen eller ligga framme:** om iPaden låg i en annan flik eller app när ett heat skulle gå registreras starten ändå på exakt rätt klockslag (08:30, 09:00, 09:30 …) så fort appen öppnas igen. Nedräkningen och GOGO! syns bara om appen ligger framme. Avbryter du en automatisk nedräkning står starten som *Väntar på start* tills du startar den manuellt, och efterföljande starter räknas från den faktiska starten. Automatiken kan stängas av under Inställningar.
3. Varje pågående start visas med sin löpande tid och en ruta per startnummer. Flera starter kan pågå samtidigt, och den äldsta ligger överst.
4. **När ett lag går i mål trycker du på dess ruta.** Sluttiden sparas direkt, och rutan blir grön och visar tiden.
5. **Tryckte du fel?** Tryck på rutan igen och välj **Ångra målgång**. Om ett lag bryter trycker du på rutan och väljer **Bröt loppet (DNF)**.
6. **Resultat** visar alla tider, med placering inom varje klass och filter per klass. Med ✎ kan du rätta en tid för hand (`h:mm:ss` eller `DNF`).
7. **Kommande starter** visas som kort med tid, tid kvar och alla startande. Tryck på ett kort för att starta det (nedräkning eller direkt), flytta fram det en plats (planerade tider byter plats) eller hoppa till redigering.
8. **Starta om (felstart eller test):** varje start har knappen **↺ Starta om**, både när den pågår, när den är klar och under Startlista. Längst ner under Tidtagning, och under Inställningar, finns **↺ Starta om allt**. Den nollställer alla starter och tider men behåller startlistan.

## Startlista
- Uppdaterad startlista 7 nov: 14 heat, 08:30–14:30, startnummer 1–51 i startordning (Olof Oljelund är nr 1). Normalt 30 min mellan heaten, plus ett extra heat 12:45 (nr 36). Philip Ahl kommer inte och är borttagen. När en ny version av startlistan läggs ut ersätter appen den gamla automatiskt och rensar testtider; inställningarna behålls.
- Under **Startlista** har varje startande en egen rad med fälten Nr, Klass, Deltagare 1 och Deltagare 2. Skriv om namn direkt i fälten, så sparas de automatiskt. `XXX` visas som *Partner TBA*.
- **Flytta till…** flyttar en startande till en annan start. Med **+ Lägg till startande** lägger du till fler, och med ✕ tar du bort (efter en bekräftelse). Den som redan har en sluttid kan inte flyttas innan målgången har ångrats.
- Ändrar du ett startnummer följer en eventuell tid med.
- **Faktisk start** fylls i automatiskt. Om ni glömde trycka på start kan du skriva in rätt klockslag där i efterhand, så räknas alla tider om.

## Logga och sponsorer
- PACE-loggan syns uppe till vänster i appen och i nedräkningen, tillsammans med *Official HYROX Training Club*.
- Nedräkningen visar vilket heat som startar, till exempel **HEAT 2**, som en stor rubrik ovanför siffran.
- Sponsorerna (Björn Borg, Kraftmark, Ramudden, NOCCO, Toveks Bil och Hajen Lågpris) visas som vita brickor längst ner i nedräkningen och under GOGO!. Det kan stängas av under Inställningar. Loggorna ligger i mappen `assets/`.

## Viktigt
- Allt sparas automatiskt på iPaden (`localStorage`). **Använd inte privat surfning.**
- Ta en **backup** under *Inställningar* ett par gånger under dagen. *Exportera resultat (CSV)* går att öppna i Excel eller Numbers.
- Om tider från en annan dag ligger kvar, till exempel från ett test kvällen innan, varnar appen och erbjuder **↺ Starta om allt**. Sådana starter startas aldrig i efterhand.
- Testa gärna i förväg och tryck sedan **↺ Starta om allt** före eventet.

## Öppna på iPaden
1. Lägg upp appen via **GitHub Pages**: *Settings → Pages → Deploy from branch*, välj grenen och `/ (root)`.
2. Öppna adressen i Safari → **Dela → Lägg till på hemskärmen**. Då öppnas den i helskärm och fungerar även utan internet.

## Nästa steg
- En TV-vy: startlista, nedräkning, pågående starter och resultatlista på storskärm.
