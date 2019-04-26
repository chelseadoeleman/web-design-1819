# Web Design | 

**Coming soon**

## Table of Contents
* **[How to install](#how-to-install)**
* **[How to use](#how-to-use)**
* **[Features](#features)**
* **[User scenario](#user-scenario)**
* **[User interface design principles](#user-interface-design-principles)**
* **[Checklist](#checklist)**
* **[Resources](#resources)**
* **[License](#license)**

## How to install

Before installing make sure you have installed node.js and npm.
Choose or make a new directory.
Load the template into your directory.

```bash
git clone https://github.com/chelseadoeleman/web-design-1819.git
```

Make sure you are in the right directory 
```bash
cd web-design-1819
```

Check if you have the latest version of npm.
Install the dependencies in [package.json](./package.json)
```bash
npm install
```

## How to use


## User scenario

Marijn (age) works as a developer. But has a handicap called being physically motor impaired which causes tremors and muscle rigidity. He works always with a macbook pro and uses sticky keys to help him navigate the keyboard. He is can only navigate the keyboard with his left hand. Especially fine motor skills are a difficulty for Marijn, so lifting his hand takes up a lot of energy. Because all his muscles are affected he sometimes has trouble with speech which doesn’t make him always comprehendible.

In two days Marijn has a wedding he has to attend to, naturally he would like to look his best. To achieve this chique look he would like to have his hair done differently before the wedding. 
The best day to do this is on the day of the big event, because then it would look its best. Luckily Marijns hairdresser has the option to book an appointment online. Because Marijn is at work he wants to do this quickly so he can resume his daily tasks. Marijn can only use his left hand and still not at its full extent because he suffers from tremors and muscle rigidity. 

When opening the website Marijn is able to navigate the site quite easily with his left hand, even when pressing a wrong key. Because he wants to change something he has done before he uses a key as a sticky key to navigate backwards. The interface is clear because it has been broken down into steps. In the end Marijn is able to fix any mistakes he made in the earlier steps. When he gets interrupted during work he is still able to resume his task where he left off. Luckily the hair salon has one place left on that specific day in the morning with Marijns favorite hairdresser. Marijn has booked an appointment successfully and can now go back to work.

## User Interface Design Principles

* 1. You are able to book a hairdressers appointment, make this your #1 priority to make this clear for your user. Be kinda predictable, but ignore conventions.

* 4. Keep status and let users be in control of their flow. Give feedback on what will happen next.

* 6. Give the user one input action. Like setting a date or choosing what kind of appointment.

* 9. Items should look how they behave. **! Beware of conventions**. 

* 11. / 
    12.  What is the most important step in your application? : Setting date, time and appointment info. Break it down to   the essentials to defer cognitive load. 

* 14. Divide actions into different steps. Like booking an appointment at the hair dresser.

* 16. Give the user information about certain aspects/ features the user can do. Give them the possibility to turn this feature off (e.g. finder)

## Feedback

<details>  
    <summary>Week 1</summary>

## Feedback

*   Give some sort of explanation for certain feature, that the user might not understand. For example the **finder** interface on Mac OS. Where the user is able to make his own navigation and how much explantion they would like at certain icons.
* The datepicker is a very usefull user case for Marijn, so try to itterate on this. Think of a concept around it.

</details>

<details>  
    <summary>Week 2</summary>

This week we actually got to test with Marijn. 
**NOTE** the feedback is actually notated in Dutch and has to be updated to English.

## Feedback

- Navigeert niet met tab, maar meestal met de spatiebalk of trackpad.
- Tab werkt niet lekker in safari.
- Pijltjes toetsen ‘H’ ‘J’ ‘K’ ’L’ om te navigeren, beter dan 'A' 'S' 'D' 'W'.
- Gebruikt liever pijltjes toetsen voor een drag & drop

**Eigen feedback tijdens de observatie**
- Spatiebalk is prima om te navigeren.
- Input velden zijn niet altijd even goed, aangezien er meerdere getallen ingevoerd kunnen worden.
- Gebruikt soms ook zijn trackpad.
- Knoppen die dichter bij elkaar staan zijn fijner, zorg dan wel voor een groter raakvlak.
- Wil soms ook gebruik maken van de pijltjes toetsen, liever dan het opdelen van het toetsenbord in twee delen.

**Verbeter punten**
- Input kan niet juist ingevoerd worden
- Navigeren gaat moeizaam misschien balk aan de zijkant weghalen?
- Uitleg groter maken.
- Tikt vaak 2 toetsen tegelijk in - andere toetsen uitzetten?
- Laat zien wat de datum is.
- Maakt gebruik van safari als browser ipv chrome.


- Iets doen met programmeer taal - want Marijn is een developer.
- Let op case sensitivity (CAPS LOCK) toLowerCase( )
- Zo min mogelijk intikken - geen spaties, komma’s, punten, etc.
- Maak onderdelen die niet over het hele scherm verspreid zijn, want dan moet Marijn ver navigeren.
- Native form controls werken vaak goed - nog meer optimaliseren.
- Vergeet niet te stress testen - te hoge waardes invullen.

- Bij een geboortedatum is een dropdown niet handig
- Geboorte jaar interessante use case
- Gebruikt de touch bar om terug te gaan


</details>


<details>  
    <summary>Week 3</summary>

This week we had a second session with Marijn.
**NOTE** the feedback is actually notated in Dutch and has to be updated to English.

## Feedback

**Observaties**
* Aanwijzing geven hoe dingen werken en waar dingen te vinden zijn in de applicatie is handig.

* Liever geen dubbele keys
* Basis logica voor toetsenbord geen > maar . - houd de standaard layout aan van QWERTY.
* Focus door laten gaan vanaf een dropdown naar een volgend dropdown item na het invullen is handig.

* Gebruik maken van sticky keys om te switchen tussen input velden.
* Ziet snel bugs in de code en houd van stress testen.
* Gebruikt zijn duim om het touchpad te besturen, vingers zijn gestrekt

*  Joystick kan goed bestuurd worden, maar is wel bewerkelijk vanwege de gevoeligheid hiervan - snelheid lager?

* Gebruikt graag enter, wanneer hij gebruik maakt van de pijltjes toetsen. Maar bij het gebruik van
WASD als pijltjes toetsen, dan gebruikt hij liever tab als enter toets.
Toetsen die dicht bij elkaar liggen zijn chill.

* Vindt snel edge cases


**Eigen Feeback**
* Knoppen zijn groot genoeg.
* Datum invullen ging gemakkelijk.
* Dropdowns werken beter dan input velden, omdat de waardes hiervan moeilijk te bewerken zijn, wanneer je per ongeluk iets ander in toetst.
* Stap voor stap navigeren werkt ook goed.



**Nieuwe concept ideeën**
* Voeg geluiden toe wanneer de focus per ongeluk verloren gaat zodat de gebruiker weet dat hij de focus er opnieuw op moet zetten (hoofdbewegingen zorgen ervoor dat er soms iets op het scherm niet gezien wordt)

* Makkelijk kunnen switchen van trackpad naar toetsenbord, dus ga door naar de volgende focus style met het keyboard op de plek waar je gebleven bent op die pagina. Detecteer dus je locatie van de gebruiker op een pagina en ga naar de dichtsbijzijnde focus style. Dit voorkomt dat de gebruiker weer vanaf bovenaan moet beginnen met het navigeren van de paigna.

* Elke keer als je naast een button klikt met een bepaald margin deze steeds groter maken en dan weer terug veranderen naar de oude grootte
    

</details>


## Resources

* [npm](https://docs.npmjs.com/cli/run-script)
* [markdown](https://guides.github.com/features/mastering-markdown/)
* [Gulp](https://gulpjs.com/)
* [Ejs](https://ejs.co/)
* [Nodemon](https://nodemon.io/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [Helmet](https://github.com/helmetjs/helmet)
* [Node-fetch](https://www.npmjs.com/package/node-fetch)

## License
This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/chelseadoeleman).
