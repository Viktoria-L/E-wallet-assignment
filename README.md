# Projektarbete - E-wallet 💰

Beskrivning: Du ska skapa en applikation där användaren kan hantera olika betalkort. Tekniker du ska använda i denna app är följande:

● React
● State
● Array methods (t.ex map) 
● React Router
● Redux (VG)
● API calls (VG)

Applikationen ska ha två routes (du får ändra namnet på dessa om du vill) :

### /cards

● Lista ut samtliga kort användaren har. 
● Det ska finnas en Add new card -knapp, som routar användaren vidare till /addcard.
● (VG) Högst upp ska du visa ett aktivt kort. Övriga kort ska vara inaktiva. 
● (VG) Vid klick på ett inaktivt kort i listan så ska den läggas som active card högst upp i vyn. 

### /addcard

● Ett nytt kort ska kunna läggas till med följande information: Vendor, card number, cardholder, expire month, expire year, CCV. (Se bild nedan). 
● För kortutgivare ska du hårdkoda in minst tre alternativ man kan välja mellan. Namnet för vad kortutgivare ska stå på kortet (t.ex. Mastercard, Visa, American Express etc. Eller om ni vill hitta på något roligare!). 
● Högst upp ska en förhandsvisning av kortet finnas, som uppdateras automatiskt när användare fyller i informationen.

## Funktionella krav
#### För att få Godkänt ska du:

● Ha använt React för att lösa uppgiften. 
● Lagt till grundläggande funktionalitet som att visa ut samtliga kort och lägga till nya kort. 
● Det är en single file application (SPA) som använder react-router.
● Det ska finnas ett aktivt betalkort vid start av applikationen.
● Användaren ska kunna ha upp till max 4 kort, och måste alltid minst ha ett kort i sin e-wallet.

#### För att få Väl Godkänt ska du:

● Använda Redux 
● Ha funktionalitet för ha aktivt kort.
● Gör ett API call vid start av applikationen, där du hämtar en slumpvald användare från följande API: https://randomuser.me/api/.
● Denna personens för och efternamn ska stå med stora bokstäver på samtliga kort som finns/skapas.
● Det ska gå att ta bort kort från listan.  Det ska dock INTE vara möjligt att ta bort ett kort som är aktivt.
● Fälten när en kort läggs till ska valideras så att fältet kortnummer måste innehålla 16 siffror. Fältet för namn ska inte gå att fylla i, och förhandsvisningen av kortet ska istället alltid visa användarens namn som hämtats från API:et.
● Inga större buggar.



