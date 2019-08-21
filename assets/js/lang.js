var e = document.getElementById("langSelector");

function onLangSelect() {
	window.localStorage.setItem('lang', e.options[e.selectedIndex].value);
	setText();
}

function setText() {
	if (window.localStorage.getItem('lang') == "en") {
		cvlink_top.href  = "cv/CV_EN_BramtenCate.pdf";
		cvlink_bottem.href  = "cv/CV_EN_BramtenCate.pdf";
		a1.innerHTML  = "About me";
		a2.innerHTML  = "About me";
		a3.innerHTML  = "Software developer";
		a4.innerHTML  = "3D artist";
		aa1.innerHTML  = "Who am I?";
		aa2.innerHTML  = "Skills Overview";
		p1.innerHTML  = "Hi! My name is Bram and I am a full stack software developer based in the Netherlands. I am a person who has a high passion in design, technology and art in general. " +
						"I always loved creating things since I was a child, and this passion has led me into the design field. " + 
						"I have a real urge to learn new tools and languages that can help me to create even better things, and I strive to become the best at what I do. " +
						"UX design is really important to me and I think looking at the user is key to good design.";
		p2.innerHTML  = "Back in 2003 I started a study as IT professional. In my last year I came to the conclusion that IT wasn't diverse enough and that I didn't want to spend my life doing the same thing every day. " +
						"I knew I wanted to do something creative and it always amazed me that creativity had such an endless amount of possibilities. " +
						"In 2007 I came across the Game Design & Development study and I instantly knew this was what I wanted to do. " +
						"So I applied for the selection and made it on the first tryout. " +
						"After graduating it was hard to find work in this field and I ended up getting scouted for a software developer position. Which I started in 2013. " +
						"First I worked on a client application and later moved to a web based application.";		
		p3.innerHTML  = "Now I am a full stack developer with a demonstrated history of working in the information technology and services industry. " +
						"Also I keep improving myself with new tools and languages.";
		p4.innerHTML  = "Good design isn't bleeding edge technology or fancy looks. " +
						"It's about conveying an idea to the user, in a way that is understandable on the first try.";
		h41.innerHTML  = "Other";	
		p5.innerHTML  = "✔️ Version Control";	
		h31.innerHTML  = "Social";
		li1.innerHTML  = "&copy; Copyright 2019. All rights reserved.";
	} else {
		cvlink_top.href  = "cv/CV_NL_BramtenCate.pdf";
		cvlink_bottem.href  = "cv/CV_NL_BramtenCate.pdf";
		a1.innerHTML  = "Over mij";
		a2.innerHTML  = "Over mij";
		a3.innerHTML  = "Software ontwikkelaar";
		a4.innerHTML  = "3D artiest";
		aa1.innerHTML  = "Wie ben ik?";
		aa2.innerHTML  = "Vaardigheden Overzicht";
		p1.innerHTML  = "Hallo! Mijn naam is Bram en ik ben een full-stack software ontwikkelaar gevestigd in Nederland. Ik ben iemand met een grote passie voor design, technologie en kunst in het algemeen. " +
						"Ik heb altijd al graag dingen gemaakt sinds ik een kind was, en deze passie heeft me naar het ontwerpveld geleid. " +
						"Ik heb een echte drang om nieuwe tools en talen te leren die me kunnen helpen om nog betere dingen te maken, en ik streef ernaar de beste te worden in wat ik doe. " +
						"UX-ontwerp is erg belangrijk voor me en ik denk dat kijken naar de gebruiker de sleutel is tot een goed ontwerp.";
		p2.innerHTML  = "In 2003 begon ik een studie als IT-professional. In mijn laatste jaar kwam ik tot de conclusie dat IT niet divers genoeg was en dat ik mijn leven niet elke dag hetzelfde wilde besteden. " +
						"Ik wist dat ik iets creatiefs wilde doen en het verbaasde me altijd dat creativiteit zo oneindig veel mogelijkheden had. " +
						"In 2007 kwam ik de studie Game Design & Development tegen en ik wist meteen dat dit was wat ik wilde doen. " +
						"Dus heb ik de selectie aangevraagd en bij de eerste try-out gemaakt. " +
						"Na mijn afstuderen was het moeilijk om werk op dit gebied te vinden en uiteindelijk werd ik gescout voor een functie voor softwareontwikkelaar. Die begon ik in 2013. " +
						"Eerst werkte ik aan een client-applicatie en verhuisde later naar een web-gebaseerde applicatie.";	
		p3.innerHTML  = "Nu ben ik een full-stack ontwikkelaar met een bewezen geschiedenis van werken in de informatietechnologie- en services-industrie. " +
						"Ook blijf ik mezelf verbeteren met nieuwe tools en talen.";	
		p4.innerHTML  = "Een goed ontwerp is geen geavanceerde technologie of een fraai uiterlijk. " +
						"Het gaat om het overbrengen van een idee naar de gebruiker, op een manier die begrijpelijk is bij de eerste poging.";	
		h41.innerHTML  = "Andere";	
		p5.innerHTML  = "✔️ Versie Controle";	
		h31.innerHTML  = "Sociaal";
		li1.innerHTML  = "&copy; Copyright 2019. Alle rechten voorbehouden.";
	}

}