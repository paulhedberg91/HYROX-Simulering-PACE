# HYROX-Simulering-PACE
Tidtagning, heatlistor och nedräkning till starter för PACE HYROX Simulation (lördag 7 november 2026).

En webbapp för iPad, i en enda fil (`index.html`). Ingen installation och inga beroenden.

## Så funkar det på eventdagen
1. **Tidtagning → Nästa start.** Tryck **Nedräkning 10 s** så räknar skärmen ner i helskärm (blått 10–6, orange 5–2, grönt 1–0, med blixtar och chockvågor) och piper de sista 3 sekunderna. Klockan för starten startar exakt när den når 0 och skärmen exploderar i ett grönt **GOGO!** Det finns också **Starta direkt** utan nedräkning.
2. Varje pågående start visas med sin löpande tid och en ruta per startnummer. Flera starter kan pågå samtidigt, och den äldsta ligger överst.
3. **När ett lag går i mål trycker du på dess ruta.** Sluttiden sparas direkt, och rutan blir grön och visar tiden.
4. **Tryckte du fel?** Tryck på rutan igen och välj **Ångra målgång**. Om ett lag bryter trycker du på rutan och väljer **Bröt loppet (DNF)**.
5. **Resultat** visar alla tider, med placering inom varje klass och filter per klass. Med ✎ kan du rätta en tid för hand (`h:mm:ss` eller `DNF`).
6. **Kommande starter** visas som kort med tid, tid kvar och alla startande. Tryck på ett kort för att starta det (nedräkning eller direkt), flytta fram det en plats (planerade tider byter plats) eller hoppa till redigering.
7. **Felstart?** Med **Felstart – nollställ start** nollställs starten och alla tider i den.

## Startlista
- 13 starter, 52 startnummer, en start var 30:e minut från 08:30 till 14:30. Aktiv tid totalt 08:30–15:00, 6 h 30 min.
- Under **Startlista** kan du ändra namn, fylla i partners (`XXX` visas som *Partner TBA*), flytta deltagare mellan starter och lägga om de planerade tiderna med jämna mellanrum.
- Format: en rad per startnummer, `Nr | Klass | Deltagare 1 | Deltagare 2`.
- **Faktisk start** fylls i automatiskt. Om ni glömde trycka på start kan du skriva in rätt klockslag där i efterhand, så räknas alla tider om.

## Viktigt
- Allt sparas automatiskt på iPaden (`localStorage`). **Använd inte privat surfning.**
- Ta en **backup** under *Inställningar* ett par gånger under dagen. *Exportera resultat (CSV)* går att öppna i Excel eller Numbers.
- Testa gärna i förväg och tryck sedan *Inställningar → Rensa alla tider* före eventet.

## Öppna på iPaden
1. Lägg upp appen via **GitHub Pages**: *Settings → Pages → Deploy from branch*, välj grenen och `/ (root)`.
2. Öppna adressen i Safari → **Dela → Lägg till på hemskärmen**. Då öppnas den i helskärm och fungerar även utan internet.

## Nästa steg
- En TV-vy: startlista, nedräkning, pågående starter och resultatlista på storskärm.
