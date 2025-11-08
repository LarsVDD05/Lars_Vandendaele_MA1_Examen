# Destiny 2 Weapons Explorer

Een React Native mobile app voor het bekijken van Destiny 2 wapens. De app werkt met Tab navigatie, Stack navigatie, en filter en sorteer functionaliteiten.

**Hoofdfunctionaliteiten:**
- Tab navigatie (Home + Profile)
- Stack navigatie voor lijst → detail weergave
- lijst met FlashList
- Real-time zoeken op naam
- Sorteren op naam en power level
- Filteren op wapen type
- Loading, error en empty states

## 🔧 Gebruikte API

**Geen externe API** - De app gebruikt mock data.

**Mock Data Structuur:**
- `Weapons` array met Destiny 2 wapens
- Elke weapon bevat: id, name, type, power, rarity, description, image
- Data bevindt zich in `Data/weapons.js`

**start instructies:**
- npm install
- npx expo start
- qr code scannen met expo app

**zoeken en sorteren**

De app implementeert real-time zoeken waarbij wapens direct gefilterd worden tijdens het typen. De zoekfunctie gebruikt includes() voor case-insensitive matching op zowel naam als type. Voor sorteren zijn twee opties beschikbaar: Naam A-Z met localeCompare() voor alphabetische volgorde, en Power ↓ met numerieke sortering voor hoogste power eerst. De filters worden dynamisch gegenereerd op basis van alle beschikbare weapon types

**Voorbeeld weapon structuur:**
```javascript
{
    id: 1,
    name: "Gjallarhorn",
    type: "Rocket Launcher",
    power: 1600,
    rarity: "Exotic",
    description: "Legendary rocket launcher that fires tracking cluster missiles. A weapon of immense power feared by enemies across the system.",
    image: require('../assets/gjallarhorn.jpg')
  }


