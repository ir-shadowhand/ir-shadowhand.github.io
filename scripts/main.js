
$(function() {

    //Populate using an object literal

    WTF.init({

        heading: [
            "[[ SHADOWHAND CONTRACT // ACCESSING DATABASE... ]]<br><br>[[ SHADOWHAND AUTHORIZATION ACKNOWLEDGED.]]"
        ],
        response: [
           "[[ RETRIEVE NEXT CONTRACT]]"
        ],
        template: [
    	"Your mission is to go to @locale and @mission. The target is @behavior @species @cyborg @target. However, be careful because @complication. @theme.<br><br><br>[[ Recommended for rookie level assassins.]]<br><br><br>[[Compensation // 1-5 // Mirtis Coins.]]<br><br><br>[[@guilty of @lvl2]]",
	"Your objective is to go to @locale and @mission. The target is @behavior @species @cyborg @target. You may encounter resistance in the form of @obstacle. @theme.<br><br><br>[[ Recommended for rookie level assassins.]]<br><br><br>[[Compensation // 1-5 // Mirtis Coins.]]<br><br><br>[[@guilty of @lvl2]]",

	"Your mission is to go to @locale and @mission. The target is @behavior @species @cyborg @target. However, be careful because @complication. @theme.<br><br><br>[[ Recommended for intermediate level assassins.]]<br><br><br>[[Compensation // 6-10 // Mirtis Coins.]]<br><br><br>[[@guilty of multiple counts of @lvl2]]",
	"Your objective is to go to @locale and @mission. The target is @behavior @species @cyborg @target. You may encounter resistance in the form of @obstacle. @theme.<br><br><br>[[ Recommended for intermediate level assassins.]]<br><br><br>[[Compensation // 6-10 // Mirtis Coins.]]<br><br><br>[[@guilty of multiple counts of @lvl2]]",

	"Your mission is to go to @locale and @mission. The target is @behavior @species @cyborg @target. However, be careful because @complication. @theme.<br><br><br>[[ Recommended for experienced assassins.]]<br><br><br>[[Compensation // 11-15 // Mirtis Coins.]]<br><br><br>[[@guilty of @lvl1]]",
	"Your objective is to go to @locale and @mission. The target is @behavior @species @cyborg @target. You may encounter resistance in the form of @obstacle. @theme.<br><br><br>[[ Recommended for experienced assassins.]]<br><br><br>[[Compensation // 11-15 // Mirtis Coins.]]<br><br><br>[[@guilty of @lvl1]]",

	"Your mission is to go to @locale and @mission. The target is @behavior @species @cyborg @target. However, be careful because @complication. @theme.<br><br><br>[[ Recommended for expert assassins.]]<br><br><br>[[Compensation // 16-20 // Mirtis Coins.]]<br><br><br>[[@guilty of multiple counts of @lvl1]]",
	"Your objective is to go to @locale and @mission. The target is @behavior @species @cyborg @target. You may encounter resistance in the form of @obstacle. @theme.<br><br><br>[[ Recommended for expert assassins.]]<br><br><br>[[Compensation // 16-20 // Mirtis Coins.]]<br><br><br>[[@guilty of multiple counts of @lvl1]]",
	
	"This is a special contact. This mission is of great importance to the shadowhand. You will be required to go to @locale and @mission. This target is @behavior @species @cyborg @target. You will encounter resistance in the form of @obstacle. You should also be careful, as @complication. @theme.<br><br><br>[[Recommended to master assassins.]]<br><br><br>[[Compensation // 21-25 // Mirtis Coins.]]<br><br><br>[[@lvl3]]",
	
	//Group Contracts -
		
	"Your objective is to travel to @locale and assassinate a group of @sz_group targets. The targets are @group, well known for @bhr_group. In charge is a @behavior @species @cyborg. Be careful, as @cmp_group.<br><br><br>[[ Recommended for rookie assassins.]]<br><br><br[[Compensation // 1-5 // Mirtis Coins.]]<br><br><br>[[@glt_group of @lvl2]]",
	"Your objective is to travel to @locale and assassinate a group of @sz_group targets. The targets are @group, well known for @bhr_group. In charge is a @behavior @species @cyborg. Be careful, as @cmp_group.<br><br><br>[[ Recommended for intermediate assassins.]]<br><br><br[[Compensation // 6-10 // Mirtis Coins.]]<br><br><br>[[@glt_group of multiple counts of @lvl2]]",
	"Your objective is to travel to @locale and assassinate a group of @sz_group targets. The targets are @group, well known for @bhr_group. In charge is a @behavior @species @cyborg. Be careful, as @cmp_group.<br><br><br>[[ Recommended for experienced assassins.]]<br><br><br[[Compensation // 11-15 // Mirtis Coins.]]<br><br><br>[[@glt_group @lvl1]]",
	"Your objective is to travel to @locale and assassinate a group of @sz_group targets. The targets are @group, well known for @bhr_group. In charge is a @behavior @species @cyborg. Be careful, as @cmp_group.<br><br><br>[[ Recommended for expert assassins.]]<br><br><br[[Compensation // 16-20 // Mirtis Coins.]]<br><br><br>[[@glt_group of multiple counts of @lvl1]]",
	"This is a special contract. This mission is of great importance to the shadowhand. You will be required to travel to @locale and assassinate a group of @sz_group targets. The targets are @group, well known for @bhr_group. In charge is a @behavior @species @cyborg. Much care should be taken, as @cmp_group. It should also be noted that @obs_group. @theme.<br><br><br>[[Recommended to master assassins.]]<br><br><br>[[Compensation // 21-25 // Mirtis Coins.]]<br><br><br>[[@lvl3]]",
	
	],
        locale: [
		"Alderaan",
		"Balmorra",
		"Belsavis",
		"Cademimu V",
		"Corellia",
		"Coruscant",
		"Dantooine",
		"Dromund Kaas",
		"Hoth",
		"Hutta",
		"Nar Shaddaa",
		"Onderon",
		"Ord Mantell",
		"Quesh",
		"Rishi",
		"Tanaab",
		"Taris",
		"Tatooine"	    
        ],
        mission: [
		"assassinate the target",
        ],
        behavior: [
            "an economically ruthless",
            "a community-oriented",
            "a no-nonsense",
            "a fiscally responsible",
            "a recently promoted",
            "a canny and experienced",
            "a naive and inexperienced",
            "an intelligent",
	    "an eccentric",
	    "a paranoid",
	    "a philanthropic",
	    "a reclusive",
	    "an outgoing",
	    "an optimistic",
	    "a pessimistic",
	    "a frugal",
	    "an absent-minded",
	    "a pretentious",
	    "an abrasive",
	    "a frustrated",
	    "an active",
	    "a professional",
	    "a garrulous",
	    "an affable",
	    "a genial",
	    "a punctual",
	    "an aloof",
	    "an altruistic",
	    "a quick-tempered",
	    "a goal oriented",
	    "a rambunctious",
	    "an amiable",
	    "a greedy",
	    "an aggrandizing",
	    "a gregarious",
	    "a rational",
	    "a flighty",
	    "an anxious",
	    "a recalcitrant",
	    "a grieving",
	    "an ill-tempered",
	    "a gruff",
	    "an apprehensive",
	    "a refined",
	    "an argumentative",
	    "a reliable",
	    "an aspiring",
	    "a reluctant",
	    "an authoritarian",
	    "a resilient",
	    "a responsible",
	    "a resolute",
	    "a reserved",
	    "a hesitant",
	    "a belligerent",
	    "a risk-taking",
	    "a boisterous",
	    "a humble",
	    "a calculating",
	    "a candid",
	    "an impulsive",
	    "a capable",
	    "a cheerful",
	    "a clever",
	    "an industrious",
	    "a shrewd",
	    "an intrepid",
	    "a conceited",
	    "an intimidating",
	    "a condescending",
	    "a conscientious",
	    "a slovenly",
	    "an irritable",
	    "a controlling",
	    "a sly",
	    "a jaded",
	    "a courteous",
	    "a daring",
	    "a pragmatic",
	    "a strict",
	    "a strident",
	    "a debonair",
	    "a taciturn",
	    "a tactful",
	    "a determined",
	    "a materialistic",
	    "a diligent",
	    "a tempermental",
	    "a disagreeable",
	    "a melodramatic",
	    "a tenacious",
	    "a direct",
	    "a disparaging",
	    "a negligent",
	    "a draconian",
	    "an unconventional",
	    "an efficient",
	    "an egotistical",
	    "an empathetic",
	    "an unpredictable",
	    "an engaging",
	    "an obsequious",
	    "an opinionated",
	    "an exacting",
	    "an ostentatious",
	    "an unscrupulous",
	    "a scrupulous",
	    "an organized",
	    "a vindictive",
	    "a verbose",
	    "a patient",
	    "a particular",
	    "a vain",
	    "a persistant",
	    "a persuasive",
	    "a flamboyant",
	    "a flustered",
	    "a placid"
        ],
	    
    	bhr_group: [
		"frequent communication",
		"being intelligent",
		"being physically strong",
		"being good shots",
		"being cunning",
		"being overconfident",
		"their knowledge in technology",
		"being easily discouraged",
		"their courage"
		
	    
    	],
    	cmp_group: [
		"the group has access to thermal scanners, capable of seeing through cloak",
		"they will be found in a tightly packed group",
		"they are close. The death of one could lead the others to go beserk",
		"they are trained in stealth, and are always very careful"
	],
	obs_group: [
		"they are on the move",
		"they have set up traps in the area",
		"wildlife will likely become an issue",
		"they are in a heavily populated area"
	],
	    
	sz_group: [
		"3",
		"4",
		"5",
		"6"
	],
    	glt_group: [
		"Group is suspected of",
		"Group has been found guilty of"
	],
	    
        target: [
            "pair of siblings who run a scrapyard",
            "politician up for re-election",
            "politician",
            "soldier",
            "art collector",
            "smuggler",
            "mercenary",
            "mercenary band",
	    "news reporter",
	    "geologist",
	    "scientist",
	    "botanist",
	    "academic",
	    "biologist",
	    "mid-level corporate executive",
	    "high-level corporate executive",
	    "owner of a shipping company",
	    "customs officer",
	    "dancer",
	    "artist",
	    "swoop racer",
	    "civic leader",
	    "Imperial deserter",
	    "force-user",
	    "socialite",
	    "scrapyard owner",
	    "grifter",
	    "owner of a shady pawnshop",
	    "member of local law enforcement",
	    "owner of a fine restaurant",
	    "owner of a sleazy diner",
	    "diplomat",
	    "ambassador",
	    "tailor",
	    "spice dealer",
	    "information broker",
	    "archaeologist",
	    "nurse",
	    "local gang enforcer",
	    "travelling merchant",
	    "exporter of fine textiles",
	    "exporter of luxury goods"
        ],
        group: [
            "a smuggling ring",
            "a criminal syndicate",
            "a diplomat's staff",
            "politician's staff",
            "a pirate group",
	    "managing team of a corporation",
	    "a noble's household staff"
        ],
        complication: [
            "there's a bounty hunter on the target's trail",
            "the target keeps exotic animals as security",
            "an unidentified person close to the target is a highly trained bodyguard",
            "the target is on the move",
            "the target is located in a remote location and travel will be difficult",
            "the target's appearance and exact identity is unknown",
            "the target employs a double for security",
            "the target is on the move and will be difficult to find",
	    "law enforcement is closing in on them",
	    "the target is expecting hostile action",
	    "the target is imprisoned by the republic",
	    "the target is missing",
	    "the target is hospitalized",
        ],
        asset: [
            "information revealing Republic movements",
            "intel regarding a Republic supply cache",
            "intel regarding a criminal organization's supply cache",
            "intel pertaining to the identity of a spy",
            "the identity of a traitor",
	    "supplies",
	    "blackmail material"
        ],
        obstacle: [
            "wildlife",
            "natural hazards",
            "harsh environmental phenomena",
            "roving outlaws",
            "capable and alert guards",
	    "dangerous weather",
	    "an epidemic in the sector",
	    "a Republic patrol",
	    "travel delays",
	    "poorly trained guards",
	    "a rioting populace"
        ],
        reason: [
            "who is out for revenge",
            "who is blackmailing the target",
            "who is acting for unknown reasons",
            "who is extorting the target",
            "who is pursuing misguided revenge",
	    "who plans to kidnap the target",
	    "who intends to assassinate the target",
	    "who is the target's creditor",
	    "who suspects the target is an Imperial contact"
        ],
        theme: [
            "Secrecy is paramount",
            "Get the job done",
            "Speed is of the essence",
            "You cannot be detected",
            "Leave no witnesses",
	    "No collateral damage is allowed",
	    "Shadowhand's involvement must remain undetected"
        ],
        rural: [
            "Tatooine",
            "Hoth",
            "Taris",
            "Yavin 4",
            "Rishi",
            "Ilum",
            "Onderon",
	    "Hutta"
	],
	    
    	species: [
		"Chiss",
		"Human",
		"Twi'lek",
		"Mirialan",
		"Zabrak",
		"Togruta",
		"Pantoran",
		"Kiffar",
		"Arkanian",
		"Nautolan",
		"Keshiri",
		"Teevan",
		"Tholothian",
	],
	    
	cyborg: [
		"",
		"",
		"",
		"",
		"",
		"cyborg",
	],
	    
	guilty: [
		"IS SUSPECTED",
		"HAS BEEN FOUND GUILTY",
	],
	    
	lvl1: [
		"Assault with lethal intent",
		"Aggression against imperial personnel",
		"Murder",
		"Espionage",
		"Unauthorized Dissemination of Classified Information",
		"Damage of Government Property",
	],
    	
	lvl2: [
		"Disrespect of a Superior/Insubordination",
		"Resisting Arrest",
		"Enslavement of Unauthorized Individuals",
		"Kidnapping",
		"Embezzlement",
		"Aiding and Abetting"
	],
	    
	lvl3: [
		"Posession of top secret imperial Knowledge",
		"Murder of a high ranking imperial",
		"Planning a major attack on Imperial soil",
		"Plans to reveal top secret imperial knowledge",
		"Starting a revolution on a backwater imperial mining planet",
		"Assault of a high ranking imperial officer",
		"Kidnapping of a high ranking imperial officer"
	],
	    
    	easy: [
		"1",
		"2",
		"3",
		"4",
		"5"
	],
    	medium: [
		"6",
		"7",
		"8",
		"9",
		"10"
	],
    	hard: [
		"11",
		"12",
		"13",
		"14",
		"15"
	],
    	expert: [
		"16",
		"17",
		"18",
		"19",
		"20"
	],
    	master :[
		"21",
		"22",
		"23",
		"24",
		"25"
	],
	 
		    
    });

 
});
