---
sidebar_position: 4
title: Hoe clear ik mijn cache?
---

## Waarom je cache clearen?
Je leegt de cache van je FiveM‑client om prestatieproblemen, crashes en laadfouten op te lossen door beschadigde of verouderde tijdelijke bestanden te verwijderen. Hierdoor worden game‑assets zoals MLO’s, textures en voertuigen bij je volgende serververbinding opnieuw gedownload, wat zorgt voor soepelere gameplay en snellere laadtijden zonder je personages of voortgang te verwijderen. Het is vergelijkbaar met het wissen van browsercookies, maar dan voor je FiveM‑ervaring, zodat je schone data krijgt voor een betere roleplay‑sessie.



### Stappenplan: FiveM cache verwijderen (Windows)
1. Sluit FiveM volledig af.
2. Druk Windows + R en plak dit in de adresbalk: `%localappdata%\FiveM\FiveM.app`
3. Ga vervolgens naar de map `data` en verwijder de mappen `cache`, `server-cache`, `server-cache-priv`, `game-storage` en `nui-cache`.
4. Start FiveM opnieuw. De vereiste assets worden vers gedownload bij het verbinden met een server.

Let op:
- Verwijderen van cache heeft geen invloed op je personages of voortgang.
- Zorg dat FiveM echt afgesloten is om ‘in gebruik’-fouten te voorkomen.
- Bepaalde UI zal je terug moeten instellen naar je eigen persoonlijke voorkeur.

### Keybinds cache resetten
#### Waarom zou je dit doen?
- Dubbele keybinds na updates of resource‑wijzigingen.
- Handig na overstap van een andere server of framework, zodat oude binds geen conflicten geven.
- Als bepaalde toetsen niet meer reageren of onverwacht gedrag vertonen.

### Hoe reset je keybinds?
#### Methode A – In‑game (aanbevolen):
1. Start FiveM.
2. Ga naar Instellingen → Key Bindings.
3. Kies ‘Reset naar standaard’ of herstel de betreffende binds handmatig.

#### Methode B – Bestanden (volledige reset van lokale instellingen):
1. Sluit FiveM.
2. Druk Windows + R en plak dit in de adresbalk: `%appdata%\CitizenFX`.
3. Verwijder voor keybind‑reset uitsluitend:
	- `kvs` (key‑value store met binds en diverse clientinstellingen)
4. Optioneel (alleen bij volledige clientreset, niet nodig voor keybinds):
	- `fivem` en `imgui` (algemene UI/instellingen)
	- `media_access` (microfoon/camera‑toestemmingen)
5. Niet verwijderen (geen bind‑data, kan login/launcher beïnvloeden):
	- `ros_id.dat`
	- `gta5_settings` en `camera_save_structure` (niet bind‑gerelateerd)
6. Start FiveM en stel je keybinds opnieuw in.

:::tip
- Als keybinds specifiek op één server problemen geven, het legen van `data\server-cache` en `data\server-cache-priv` (zie stappen hierboven) forceert een reload van servergebonden data, wat vaak bind‑conflicten oplost.
:::

---
**Veel plezier op Azurite RP!** 💎🎮