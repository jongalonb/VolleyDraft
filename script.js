// === BAZA TRENERÓW TAURON LIGI 25/26 ===
const coaches = [
    { id: "c1", name: "Cesar Hernandez", bonusText: "+4 do Obrony", type: "DEF_BOOST", value: 4 },
    { id: "c2", name: "Maciej Biernat", bonusText: "+5 do Bloku", type: "BLK_BOOST", value: 5 },
    { id: "c3", name: "Bartłomiej Piekarczyk", bonusText: "+4 do Techniki", type: "TEC_BOOST", value: 4 },
    { id: "c4", name: "Adrian Chyliński", bonusText: "+5 do Ataku", type: "ATK_BOOST", value: 5 },
    { id: "c5", name: "Jakub Głuszak", bonusText: "+6 do Zagrywki", type: "SRV_BOOST", value: 6 },
    { id: "c6", name: "Martino Volpini", bonusText: "+5 do Przyjęcia", type: "PRZ_BOOST", value: 5 },
    { id: "c7", name: "Bartłomiej Dąbrowski", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },
    { id: "c8", name: "Dawid Michor", bonusText: "+4 do Bloku", type: "BLK_BOOST", value: 4 },
    { id: "c9", name: "Wojciech Kurczyński", bonusText: "+3 do Techniki", type: "TEC_BOOST", value: 3 },
    { id: "c10", name: "Przemysław Michalczyk", bonusText: "+5 do Obrony", type: "DEF_BOOST", value: 5 },
    { id: "c11a", name: "Mateusz Grabda", bonusText: "+5 do Zagrywki", type: "SRV_BOOST", value: 5 },
    { id: "c11b", name: "Miłosz Majka", bonusText: "+3 do Techniki", type: "TEC_BOOST", value: 3 },
 // --- TRENERZY 24/25 ---
    { id: "c13", name: "Michal Masek (24/25)", bonusText: "+5 do Obrony", type: "DEF_BOOST", value: 5 },
    { id: "c14", name: "Alessandro Chiappini (24/25)", bonusText: "+5 do Techniki", type: "TEC_BOOST", value: 5 },
    { id: "c15", name: "Nicola Vettori (24/25)", bonusText: "+4 do Przyjęcia", type: "PRZ_BOOST", value: 4 },
    { id: "c16", name: "Błażej Krzyształowicz (24/25)", bonusText: "+5 do Zagrywki", type: "SRV_BOOST", value: 5 },

// --- TRENERZY 23/24 ---
    { id: "c17", name: "Marco Fenoglio (23/24)", bonusText: "+5 do Ataku", type: "ATK_BOOST", value: 5 },
    { id: "c18", name: "Stephane Antiga (23/24)", bonusText: "+6 do Obrony", type: "DEF_BOOST", value: 6 },
    { id: "c19", name: "Alessandro Chiappini (23/24)", bonusText: "+4 do Techniki", type: "TEC_BOOST", value: 4 },
    { id: "c20", name: "Maciej Biernat (23/24)", bonusText: "+4 do Bloku", type: "BLK_BOOST", value: 4 },
    { id: "c21", name: "Bartłomiej Piekarczyk (23/24)", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },
    { id: "c22", name: "Michal Masek (23/24)", bonusText: "+4 do Obrony", type: "DEF_BOOST", value: 4 },
    { id: "c23", name: "Nicola Vettori (23/24)", bonusText: "+3 do Przyjęcia", type: "PRZ_BOOST", value: 3 },
    { id: "c24", name: "Marcin Widera (23/24)", bonusText: "+4 do Bloku", type: "BLK_BOOST", value: 4 },
    { id: "c25", name: "Mateusz Grabda (23/24)", bonusText: "+4 do Zagrywki", type: "SRV_BOOST", value: 4 },
    { id: "c26", name: "Marcin Wojtowicz (23/24)", bonusText: "+3 do Techniki", type: "TEC_BOOST", value: 3 },
    { id: "c27", name: "Wiesław Popik (23/24)", bonusText: "+3 do Przyjęcia", type: "PRZ_BOOST", value: 3 },
    // --- TRENERZY 22/23 ---
    { id: "c28", name: "Alessandro Chiappini (22/23)", bonusText: "+5 do Techniki", type: "TEC_BOOST", value: 5 },
    { id: "c29", name: "Stephane Antiga (22/23)", bonusText: "+6 do Obrony", type: "DEF_BOOST", value: 6 },
    { id: "c30", name: "Maciej Biernat (22/23)", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },
    { id: "c31", name: "Bartłomiej Piekarczyk (22/23)", bonusText: "+5 do Bloku", type: "BLK_BOOST", value: 5 },
    { id: "c32", name: "Radosław Wodziński (22/23)", bonusText: "+4 do Zagrywki", type: "SRV_BOOST", value: 4 },
    { id: "c33", name: "Marcin Widera (22/23)", bonusText: "+4 do Bloku", type: "BLK_BOOST", value: 4 },
    { id: "c34", name: "Michal Masek (22/23)", bonusText: "+5 do Przyjęcia", type: "PRZ_BOOST", value: 5 },
    { id: "c35", name: "Błażej Krzyształowicz (22/23)", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },

    // --- TRENERZY 21/22 ---
    { id: "c36", name: "Jacek Nawrocki (21/22)", bonusText: "+5 do Ataku", type: "ATK_BOOST", value: 5 },
    { id: "c37", name: "Stephane Antiga (21/22)", bonusText: "+6 do Obrony", type: "DEF_BOOST", value: 6 },
    { id: "c38", name: "Michal Masek (21/22)", bonusText: "+4 do Techniki", type: "TEC_BOOST", value: 4 },
    { id: "c39", name: "Jakub Głuszak (21/22)", bonusText: "+5 do Zagrywki", type: "SRV_BOOST", value: 5 },
    { id: "c40", name: "Alessandro Chiappini (21/22)", bonusText: "+5 do Bloku", type: "BLK_BOOST", value: 5 },
    { id: "c41", name: "Riccardo Marchesi (21/22)", bonusText: "+4 do Przyjęcia", type: "PRZ_BOOST", value: 4 },
    { id: "c42", name: "Jacek Pasiński (21/22)", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },
    { id: "c43", name: "Piotr Matela (21/22)", bonusText: "+3 do Bloku", type: "BLK_BOOST", value: 3 },
    { id: "c44", name: "Bülent Karslıoğlu (21/22)", bonusText: "+3 do Techniki", type: "TEC_BOOST", value: 3 },
    // --- TRENERZY 20/21 ---
    { id: "c45", name: "Ferhat Akbas (20/21)", bonusText: "+5 do Ataku", type: "ATK_BOOST", value: 5 },
    { id: "c46", name: "Stephane Antiga (20/21)", bonusText: "+6 do Obrony", type: "DEF_BOOST", value: 6 },
    { id: "c47", name: "Michal Masek (20/21)", bonusText: "+4 do Techniki", type: "TEC_BOOST", value: 4 },
    { id: "c48", name: "Błażej Krzyształowicz (20/21)", bonusText: "+5 do Zagrywki", type: "SRV_BOOST", value: 5 },
    { id: "c49", name: "Riccardo Marchesi (20/21)", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },
    { id: "c50", name: "Alessandro Chiappini (20/21)", bonusText: "+5 do Bloku", type: "BLK_BOOST", value: 5 },
    { id: "c51", name: "Jacek Pasiński (20/21)", bonusText: "+4 do Przyjęcia", type: "PRZ_BOOST", value: 4 },
    { id: "c52", name: "Piotr Matela (20/21)", bonusText: "+3 do Bloku", type: "BLK_BOOST", value: 3 },
    { id: "c53", name: "Dawid Murek (20/21)", bonusText: "+4 do Obrony", type: "DEF_BOOST", value: 4 },
    { id: "c54", name: "Marcin Wojtowicz (20/21)", bonusText: "+3 do Techniki", type: "TEC_BOOST", value: 3 },
    { id: "c55", name: "Bartłomiej Piekarczyk (20/21)", bonusText: "+4 do Ataku", type: "ATK_BOOST", value: 4 },
    { id: "c56", name: "Adam Grabowski (20/21)", bonusText: "+3 do Przyjęcia", type: "PRZ_BOOST", value: 3 }
];

/// === ZWERYFIKOWANA BAZA 12 ZESPOŁÓW: SEZON 2025/2026 ===
const teams = [
    { teamName: "KGHM #VolleyWrocław (25/26)", players: [
        { name: "A. Szady", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 48, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 72, TEC: 76 },
        { name: "M. Łazowska", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 50, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 75, TEC: 78 },
        { name: "W. Gierszewska", pos: "Atakujący", OVR: 81, ATK: 83, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 76, TEC: 79 },
        { name: "W. Kowalska (Wro)", pos: "Atakujący", OVR: 80, ATK: 81, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 66, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "L. Frybel", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 70, ROZ: 35, ZAG: 70, TEC: 73 },
        { name: "D. Perez", pos: "Przyjmujący", OVR: 79, ATK: 81, BLK: 65, PRZ: 72, OBR: 72, ROZ: 38, ZAG: 76, TEC: 76 },
        { name: "E. Solarewicz", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "J. Gawlak", pos: "Środkowy", OVR: 80, ATK: 76, BLK: 83, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 77 },
        { name: "A. Gancarz", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 81, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 79, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Karasińska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 77, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Pawłowska", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 83, OBR: 85, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "J. Chorąża", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 80, OBR: 78, ROZ: 55, ZAG: 5, TEC: 77 }
    ]},
    { teamName: "BKS BOSTIK ZGO Bielsko-Biała (25/26)", players: [
        { name: "J. Nowicka", pos: "Rozgrywający", OVR: 86, ATK: 35, BLK: 60, PRZ: 15, OBR: 78, ROZ: 89, ZAG: 84, TEC: 86 },
        { name: "W. Szewczyk", pos: "Rozgrywający", OVR: 75, ATK: 25, BLK: 45, PRZ: 10, OBR: 68, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "K. Laak", pos: "Atakujący", OVR: 86, ATK: 89, BLK: 78, PRZ: 10, OBR: 65, ROZ: 45, ZAG: 84, TEC: 88 },
        { name: "M. Podlaska", pos: "Atakujący", OVR: 75, ATK: 78, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 74 },
        { name: "L. Kecman", pos: "Przyjmujący", OVR: 81, ATK: 78, BLK: 70, PRZ: 85, OBR: 84, ROZ: 50, ZAG: 76, TEC: 85 },
        { name: "R. Szedmák", pos: "Przyjmujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 74, OBR: 75, ROZ: 40, ZAG: 80, TEC: 78 },
        { name: "M. Borowczak", pos: "Przyjmujący", OVR: 77, ATK: 74, BLK: 65, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 75, TEC: 76 },
        { name: "K. Nowakowska", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 60, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 70, TEC: 72 },
        { name: "A. Gryka", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 88, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "M. Orzyłowska", pos: "Środkowy", OVR: 83, ATK: 78, BLK: 87, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 80, TEC: 80 },
        { name: "N. Abramajtys", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Kaczmarzyk", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "A. Adamek", pos: "Libero", OVR: 82, ATK: 5, BLK: 5, PRZ: 86, OBR: 84, ROZ: 60, ZAG: 5, TEC: 82 },
        { name: "Z. Suska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "UNI KS Nowy Dwór Mazowiecki (25/26)", players: [
        { name: "M. Piszcz", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 45, PRZ: 10, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "M. Kaczmarek", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 10, OBR: 65, ROZ: 74, ZAG: 70, TEC: 72 },
        { name: "P. Reiter", pos: "Atakujący", OVR: 76, ATK: 79, BLK: 65, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 74, TEC: 74 },
        { name: "J. Hewelt", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "K. Kowalczyk", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 62, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "M. Woźny", pos: "Przyjmujący", OVR: 74, ATK: 74, BLK: 60, PRZ: 72, OBR: 70, ROZ: 40, ZAG: 72, TEC: 73 },
        { name: "B. Zakościelna", pos: "Przyjmujący", OVR: 72, ATK: 72, BLK: 55, PRZ: 70, OBR: 70, ROZ: 38, ZAG: 68, TEC: 71 },
        { name: "A. Sklepik", pos: "Przyjmujący", OVR: 71, ATK: 70, BLK: 52, PRZ: 68, OBR: 68, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "M. Budnik", pos: "Środkowy", OVR: 75, ATK: 70, BLK: 78, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Orzyłowska", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 73 },
        { name: "Z. Ejsmont", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "E. Kwiatkowska", pos: "Środkowy", OVR: 76, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "A. Nowak", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "E. Ropela-Puzdrowska", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "ITA TOOLS Stal Mielec (25/26)", players: [
        { name: "A. Walczak", pos: "Rozgrywający", OVR: 77, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 75, TEC: 77 },
        { name: "J. Bińczycka", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 42, PRZ: 10, OBR: 66, ROZ: 78, ZAG: 72, TEC: 73 },
        { name: "N. Calkins", pos: "Atakujący", OVR: 79, ATK: 80, BLK: 68, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 76 },
        { name: "W. Sobiczewska", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "A. Adamczyk", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 62, PRZ: 78, OBR: 76, ROZ: 40, ZAG: 72, TEC: 76 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 77, ATK: 75, BLK: 65, PRZ: 78, OBR: 76, ROZ: 40, ZAG: 75, TEC: 76 },
        { name: "A. Kazała", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 60, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "M. Tsitsigianni", pos: "Przyjmujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 65, OBR: 68, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "G. Ponikowska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "R. Moszyńska", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 73 },
        { name: "N. Nesimović", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "I. Dąbrowska", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "J. Mazur", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 76, OBR: 76, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "KS DevelopRes Rzeszów (25/26)", players: [
        { name: "K. Wenerska", pos: "Rozgrywający", OVR: 87, ATK: 30, BLK: 52, PRZ: 20, OBR: 78, ROZ: 92, ZAG: 76, TEC: 88 },
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 68, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "T. Bannister", pos: "Atakujący", OVR: 88, ATK: 90, BLK: 75, PRZ: 10, OBR: 65, ROZ: 35, ZAG: 85, TEC: 86 },
        { name: "O. Sieradzka", pos: "Atakujący", OVR: 77, ATK: 80, BLK: 65, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 75, TEC: 76 },
        { name: "J. Piasecka", pos: "Przyjmujący", OVR: 85, ATK: 86, BLK: 74, PRZ: 80, OBR: 80, ROZ: 45, ZAG: 78, TEC: 84 },
        { name: "A. Dudek", pos: "Przyjmujący", OVR: 82, ATK: 83, BLK: 72, PRZ: 70, OBR: 76, ROZ: 42, ZAG: 80, TEC: 78 },
        { name: "M. Jasper", pos: "Przyjmujący", OVR: 83, ATK: 79, BLK: 70, PRZ: 86, OBR: 86, ROZ: 50, ZAG: 76, TEC: 85 },
        { name: "L. Jansen", pos: "Przyjmujący", OVR: 79, ATK: 81, BLK: 68, PRZ: 74, OBR: 75, ROZ: 40, ZAG: 76, TEC: 76 },
        { name: "D. Pierzchała", pos: "Środkowy", OVR: 85, ATK: 78, BLK: 90, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "L. Heyrman", pos: "Środkowy", OVR: 87, ATK: 82, BLK: 90, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 86 },
        { name: "S. Dorsman", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 84, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 76, TEC: 78 },
        { name: "J. Jankowska", pos: "Środkowy", OVR: 75, ATK: 70, BLK: 76, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 73 },
        { name: "A. Szczygłowska", pos: "Libero", OVR: 89, ATK: 5, BLK: 5, PRZ: 94, OBR: 92, ROZ: 65, ZAG: 5, TEC: 88 },
        { name: "M. Kubas", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "LOTTO Chemik Police (25/26)", players: [
        { name: "M. Grabka", pos: "Rozgrywający", OVR: 80, ATK: 28, BLK: 50, PRZ: 15, OBR: 74, ROZ: 84, ZAG: 75, TEC: 80 },
        { name: "J. Kamińska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 45, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 74 },
        { name: "V. Olesia", pos: "Atakujący", OVR: 83, ATK: 85, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 80, TEC: 82 },
        { name: "J. Zółkowska", pos: "Atakujący", OVR: 72, ATK: 74, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 70 },
        { name: "M. Grajber", pos: "Przyjmujący", OVR: 81, ATK: 78, BLK: 68, PRZ: 85, OBR: 84, ROZ: 45, ZAG: 78, TEC: 80 },
        { name: "N. Mędrzyk", pos: "Przyjmujący", OVR: 80, ATK: 77, BLK: 66, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "A. Kazała", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 65, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 77 },
        { name: "P. Łukasik", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 68, PRZ: 74, OBR: 76, ROZ: 42, ZAG: 76, TEC: 78 },
        { name: "A. Korneluk", pos: "Środkowy", OVR: 86, ATK: 80, BLK: 92, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 80, TEC: 84 },
        { name: "M. Wasilewska", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "A. Baić", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "E. Kwiatkowska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "M. Stenzel", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 60, ZAG: 5, TEC: 85 },
        { name: "A. Jagła", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 77 }
    ]},
    { teamName: "ŁKS Commercecon Łódź (25/26)", players: [
        { name: "M. Kowalewska", pos: "Rozgrywający", OVR: 83, ATK: 30, BLK: 52, PRZ: 15, OBR: 76, ROZ: 86, ZAG: 78, TEC: 82 },
        { name: "A. Gajer", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 79, ZAG: 75, TEC: 76 },
        { name: "A. Hryshchuk", pos: "Atakujący", OVR: 85, ATK: 88, BLK: 76, PRZ: 10, OBR: 62, ROZ: 40, ZAG: 80, TEC: 84 },
        { name: "D. Cechetto", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "M. Brambilla", pos: "Przyjmujący", OVR: 85, ATK: 86, BLK: 74, PRZ: 80, OBR: 84, ROZ: 50, ZAG: 78, TEC: 85 },
        { name: "R. Bidias", pos: "Przyjmujący", OVR: 83, ATK: 78, BLK: 72, PRZ: 89, OBR: 88, ROZ: 50, ZAG: 75, TEC: 86 },
        { name: "L. Scuka", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 68, PRZ: 74, OBR: 76, ROZ: 40, ZAG: 78, TEC: 79 },
        { name: "Z. Górecka", pos: "Przyjmujący", OVR: 82, ATK: 78, BLK: 70, PRZ: 86, OBR: 84, ROZ: 48, ZAG: 75, TEC: 82 },
        { name: "K. Alagierska", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 89, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "K. Witkowska", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 86, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 82, TEC: 78 },
        { name: "S. Kubacka", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 75 },
        { name: "N. Narożna", pos: "Środkowy", OVR: 72, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "P. Maj-Erwardt", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "N. Drabek", pos: "Libero", OVR: 77, ATK: 5, BLK: 5, PRZ: 80, OBR: 78, ROZ: 55, ZAG: 5, TEC: 76 }
    ]},
    { teamName: "Metalkas Pałac Bydgoszcz (25/26)", players: [
        { name: "M. Mazurek", pos: "Rozgrywający", OVR: 79, ATK: 25, BLK: 45, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 76, TEC: 78 },
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 42, PRZ: 10, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "V. Foucher", pos: "Atakujący", OVR: 80, ATK: 83, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 78, TEC: 78 },
        { name: "M. Głodzińska", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 65, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 74, TEC: 74 },
        { name: "P. Nowakowska", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 65, PRZ: 80, OBR: 78, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "E. Baka", pos: "Przyjmujący", OVR: 78, ATK: 81, BLK: 65, PRZ: 72, OBR: 74, ROZ: 40, ZAG: 76, TEC: 76 },
        { name: "N. Adamczewska", pos: "Przyjmujący", OVR: 76, ATK: 74, BLK: 62, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 72, TEC: 76 },
        { name: "E. Franz", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 72 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 79, ATK: 75, BLK: 81, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 75, TEC: 76 },
        { name: "M. Pol", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 79, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 74, TEC: 74 },
        { name: "P. Jędrzejczak", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 77, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "G. Dębowska", pos: "Środkowy", OVR: 72, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "A. Witkowska", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 87, OBR: 86, ROZ: 60, ZAG: 5, TEC: 83 },
        { name: "O. Ziółkowska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "MOYA Radomka Radom (25/26)", players: [
        { name: "M. Łyczakowska", pos: "Rozgrywający", OVR: 79, ATK: 25, BLK: 48, PRZ: 15, OBR: 72, ROZ: 82, ZAG: 76, TEC: 79 },
        { name: "A. Mikołajewska", pos: "Rozgrywający", OVR: 71, ATK: 15, BLK: 40, PRZ: 10, OBR: 60, ROZ: 72, ZAG: 68, TEC: 70 },
        { name: "M. Gałkowska", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 75, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 78, TEC: 83 },
        { name: "W. Szumera", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 65, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "W. Szlagowska", pos: "Przyjmujący", OVR: 82, ATK: 81, BLK: 72, PRZ: 79, OBR: 81, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "J. Lengweiler", pos: "Przyjmujący", OVR: 80, ATK: 83, BLK: 70, PRZ: 72, OBR: 74, ROZ: 40, ZAG: 78, TEC: 77 },
        { name: "D. Dąbrowska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 70, TEC: 75 },
        { name: "A. Plaga", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 72, OBR: 70, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "K. Zhylinska", pos: "Środkowy", OVR: 79, ATK: 76, BLK: 83, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 74, TEC: 76 },
        { name: "M. Piotrowska", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 81, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "K. Garita", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "I. Marszałkowicz", pos: "Środkowy", OVR: 73, ATK: 68, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "K. Niemtseva", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 86, OBR: 85, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "N. Jęcek", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "PGE Grot Budowlani Łódź (25/26)", players: [
        { name: "A. Grabka", pos: "Rozgrywający", OVR: 82, ATK: 30, BLK: 55, PRZ: 15, OBR: 76, ROZ: 85, ZAG: 78, TEC: 84 },
        { name: "E. Wilińska", pos: "Rozgrywający", OVR: 75, ATK: 24, BLK: 48, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "B. Honorio", pos: "Atakujący", OVR: 86, ATK: 88, BLK: 76, PRZ: 10, OBR: 60, ROZ: 40, ZAG: 82, TEC: 84 },
        { name: "M. Storck", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 76, TEC: 76 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 84, ATK: 85, BLK: 72, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 80, TEC: 82 },
        { name: "K. Drużkowska", pos: "Przyjmujący", OVR: 82, ATK: 84, BLK: 74, PRZ: 70, OBR: 75, ROZ: 40, ZAG: 78, TEC: 78 },
        { name: "R. Buterez", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 65, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 72, TEC: 75 },
        { name: "A. Wenerska", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 70, TEC: 73 },
        { name: "S. Planinšec", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 88, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 76, TEC: 82 },
        { name: "J. Pacak", pos: "Środkowy", OVR: 83, ATK: 74, BLK: 90, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 82, TEC: 78 },
        { name: "P. Majkowska", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 75 },
        { name: "K. Różyńska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "J. Łysiak", pos: "Libero", OVR: 87, ATK: 5, BLK: 5, PRZ: 91, OBR: 89, ROZ: 60, ZAG: 5, TEC: 86 },
        { name: "J. Kędziora", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 75, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "Sokół Mogilno (25/26)", players: [
        { name: "N. Gajewska", pos: "Rozgrywający", OVR: 77, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 74, TEC: 78 },
        { name: "A. Szczepańska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 74 },
        { name: "A. Cur-Słomka", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 75, TEC: 76 },
        { name: "S. Barambas", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 62, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "S. Świętoń", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 78, OBR: 76, ROZ: 42, ZAG: 72, TEC: 76 },
        { name: "W. Przybyło", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "W. Fojucik", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 72 },
        { name: "M. Szczepuła", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "P. Brzoska", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "Z. Efimienko", pos: "Środkowy", OVR: 80, ATK: 72, BLK: 86, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 74, TEC: 78 },
        { name: "K. Nowak", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "M. Mazenko", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 73 },
        { name: "J. Rafałko", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 82, OBR: 83, ROZ: 55, ZAG: 5, TEC: 79 },
        { name: "W. Ciszewska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "UNI Opole (25/26)", players: [
        { name: "M. Speaks", pos: "Rozgrywający", OVR: 80, ATK: 30, BLK: 50, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 76, TEC: 80 },
        { name: "W. Mulka", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 45, PRZ: 10, OBR: 68, ROZ: 76, ZAG: 72, TEC: 74 },
        { name: "K. Zaroślińska-Król", pos: "Atakujący", OVR: 83, ATK: 85, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "I. Kępa", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 64, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 72 },
        { name: "E. McCall", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 70, PRZ: 78, OBR: 80, ROZ: 45, ZAG: 78, TEC: 80 },
        { name: "H. Hellvig", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 68, PRZ: 74, OBR: 75, ROZ: 40, ZAG: 75, TEC: 76 },
        { name: "U. Guereca", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 62, PRZ: 74, OBR: 75, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "M. Pamuła", pos: "Przyjmujący", OVR: 75, ATK: 72, BLK: 65, PRZ: 76, OBR: 76, ROZ: 42, ZAG: 72, TEC: 75 },
        { name: "N. Kecher", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 84, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 76, TEC: 78 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "W. Paluszkiewicz", pos: "Środkowy", OVR: 75, ATK: 70, BLK: 78, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "A. Klich", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "K. Łyduch", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "J. Piotrowska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    // ==========================================
    // SEZON 2024/2025
    // ==========================================
    { teamName: "LOTTO Chemik Police (24/25)", players: [
        { name: "E. Baić", pos: "Rozgrywający", OVR: 76, ATK: 24, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 74, TEC: 78 },
        { name: "D. Pierzchała (Roz)", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 74 },
        { name: "J. Hewelt", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 75, TEC: 76 },
        { name: "W. Szumera", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 62, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "M. Grajber-Nowakowska", pos: "Przyjmujący", OVR: 82, ATK: 78, BLK: 68, PRZ: 86, OBR: 85, ROZ: 45, ZAG: 78, TEC: 82 },
        { name: "A. Fiedorowicz", pos: "Przyjmujący", OVR: 75, ATK: 76, BLK: 60, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 74, TEC: 74 },
        { name: "D. Szczyrba", pos: "Przyjmujący", OVR: 74, ATK: 75, BLK: 60, PRZ: 70, OBR: 72, ROZ: 35, ZAG: 72, TEC: 73 },
        { name: "A. Kwiatkowska", pos: "Przyjmujący", OVR: 72, ATK: 72, BLK: 55, PRZ: 68, OBR: 68, ROZ: 30, ZAG: 68, TEC: 70 },
        { name: "E. Kwiatkowska", pos: "Środkowy", OVR: 76, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "D. Ociepa", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 73 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "Z. Ejsmont", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "A. Nowak", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "E. Ropela", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "KS DevelopRes Rzeszów (24/25)", players: [
        { name: "K. Wenerska", pos: "Rozgrywający", OVR: 87, ATK: 30, BLK: 55, PRZ: 20, OBR: 78, ROZ: 92, ZAG: 76, TEC: 88 },
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 68, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "S. Machado", pos: "Atakujący", OVR: 85, ATK: 87, BLK: 72, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "B. Honorio", pos: "Atakujący", OVR: 84, ATK: 85, BLK: 70, PRZ: 10, OBR: 60, ROZ: 30, ZAG: 78, TEC: 82 },
        { name: "E. Vicet", pos: "Przyjmujący", OVR: 82, ATK: 83, BLK: 68, PRZ: 78, OBR: 75, ROZ: 40, ZAG: 76, TEC: 80 },
        { name: "M. Jasper", pos: "Przyjmujący", OVR: 83, ATK: 79, BLK: 70, PRZ: 86, OBR: 86, ROZ: 50, ZAG: 76, TEC: 85 },
        { name: "M. Fedusio", pos: "Przyjmujący", OVR: 84, ATK: 82, BLK: 72, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 78, TEC: 82 },
        { name: "A. Dudek", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 70, PRZ: 72, OBR: 75, ROZ: 42, ZAG: 80, TEC: 78 },
        { name: "M. Jurczyk", pos: "Środkowy", OVR: 85, ATK: 78, BLK: 88, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "W. Centka", pos: "Środkowy", OVR: 84, ATK: 79, BLK: 86, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 76, TEC: 80 },
        { name: "A. Korneluk", pos: "Środkowy", OVR: 89, ATK: 84, BLK: 94, PRZ: 10, OBR: 45, ROZ: 25, ZAG: 82, TEC: 86 },
        { name: "K. Fedorek", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "A. Szczygłowska", pos: "Libero", OVR: 89, ATK: 5, BLK: 5, PRZ: 94, OBR: 92, ROZ: 65, ZAG: 5, TEC: 88 },
        { name: "M. Kubas", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "BKS BOSTIK ZGO Bielsko-Biała (24/25)", players: [
        { name: "J. Nowicka", pos: "Rozgrywający", OVR: 86, ATK: 35, BLK: 60, PRZ: 15, OBR: 78, ROZ: 89, ZAG: 84, TEC: 86 },
        { name: "W. Szewczyk", pos: "Rozgrywający", OVR: 75, ATK: 25, BLK: 45, PRZ: 10, OBR: 68, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "K. Laak", pos: "Atakujący", OVR: 86, ATK: 89, BLK: 78, PRZ: 10, OBR: 65, ROZ: 45, ZAG: 84, TEC: 88 },
        { name: "M. Podlaska", pos: "Atakujący", OVR: 75, ATK: 78, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 74 },
        { name: "G. Angelina", pos: "Przyjmujący", OVR: 82, ATK: 83, BLK: 70, PRZ: 78, OBR: 78, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "J. Piasecka", pos: "Przyjmujący", OVR: 83, ATK: 84, BLK: 74, PRZ: 78, OBR: 80, ROZ: 45, ZAG: 78, TEC: 82 },
        { name: "M. Borowczak", pos: "Przyjmujący", OVR: 77, ATK: 74, BLK: 65, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 75, TEC: 76 },
        { name: "K. Nowakowska", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 60, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 70, TEC: 72 },
        { name: "J. Pacak", pos: "Środkowy", OVR: 84, ATK: 76, BLK: 90, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 82, TEC: 80 },
        { name: "M. Orzyłowska", pos: "Środkowy", OVR: 83, ATK: 78, BLK: 87, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 80, TEC: 80 },
        { name: "N. Abramajtys", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "K. Drabek", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 86, OBR: 85, ROZ: 60, ZAG: 5, TEC: 82 },
        { name: "Z. Suska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "PGE Grot Budowlani Łódź (24/25)", players: [
        { name: "A. Grabka", pos: "Rozgrywający", OVR: 82, ATK: 30, BLK: 55, PRZ: 15, OBR: 76, ROZ: 85, ZAG: 78, TEC: 84 },
        { name: "E. Wilińska", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "T. Enweonwu", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 74, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 80, TEC: 82 },
        { name: "W. Sobiczewska", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 75, TEC: 76 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 84, ATK: 85, BLK: 72, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 80, TEC: 82 },
        { name: "K. Drużkowska", pos: "Przyjmujący", OVR: 82, ATK: 84, BLK: 74, PRZ: 70, OBR: 75, ROZ: 40, ZAG: 78, TEC: 78 },
        { name: "A. Wenerska", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 70, TEC: 73 },
        { name: "J. Kędziora", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 58, PRZ: 70, OBR: 70, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "S. Planinšec", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 88, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 76, TEC: 82 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 80, ATK: 74, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 78 },
        { name: "D. Sobolska", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 82, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "K. Różyńska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 70, TEC: 74 },
        { name: "J. Łysiak", pos: "Libero", OVR: 87, ATK: 5, BLK: 5, PRZ: 91, OBR: 89, ROZ: 60, ZAG: 5, TEC: 86 },
        { name: "K. Drosdowska", pos: "Libero", OVR: 70, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "ŁKS Commercecon Łódź (24/25)", players: [
        { name: "M. Kowalewska", pos: "Rozgrywający", OVR: 83, ATK: 30, BLK: 52, PRZ: 15, OBR: 76, ROZ: 86, ZAG: 78, TEC: 82 },
        { name: "A. Gajer", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 79, ZAG: 75, TEC: 76 },
        { name: "A. Hryshchuk", pos: "Atakujący", OVR: 85, ATK: 88, BLK: 76, PRZ: 10, OBR: 62, ROZ: 40, ZAG: 80, TEC: 84 },
        { name: "D. Cechetto", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "Z. Górecka", pos: "Przyjmujący", OVR: 83, ATK: 78, BLK: 72, PRZ: 89, OBR: 88, ROZ: 50, ZAG: 75, TEC: 86 },
        { name: "N. Mędrzyk", pos: "Przyjmujący", OVR: 82, ATK: 80, BLK: 68, PRZ: 84, OBR: 82, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "L. Scuka", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 68, PRZ: 74, OBR: 76, ROZ: 40, ZAG: 78, TEC: 79 },
        { name: "R. Bidias", pos: "Przyjmujący", OVR: 80, ATK: 77, BLK: 65, PRZ: 84, OBR: 85, ROZ: 45, ZAG: 74, TEC: 84 },
        { name: "K. Alagierska", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 89, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "S. Stefanik", pos: "Środkowy", OVR: 80, ATK: 74, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "A. Obiała", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 76 },
        { name: "N. Dróżdż", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 72, TEC: 74 },
        { name: "M. Stenzel", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "N. Jęcek", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "MOYA Radomka Radom (24/25)", players: [
        { name: "V. Mayer", pos: "Rozgrywający", OVR: 81, ATK: 30, BLK: 50, PRZ: 15, OBR: 75, ROZ: 85, ZAG: 78, TEC: 82 },
        { name: "A. Stachowicz", pos: "Rozgrywający", OVR: 73, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "M. Gałkowska", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 75, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 78, TEC: 83 },
        { name: "M. Stijepić", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 68, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "L. Miloš", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 68, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 78, TEC: 78 },
        { name: "K. Miilen", pos: "Przyjmujący", OVR: 78, ATK: 77, BLK: 65, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 75, TEC: 76 },
        { name: "D. Dąbrowska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 70, TEC: 75 },
        { name: "M. Yordanowa", pos: "Przyjmujący", OVR: 80, ATK: 82, BLK: 65, PRZ: 72, OBR: 70, ROZ: 40, ZAG: 80, TEC: 77 },
        { name: "K. Moskwa", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "M. Świrad", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "I. Marszałkowicz", pos: "Środkowy", OVR: 73, ATK: 68, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "K. Witkowska", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 86, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 82, TEC: 78 },
        { name: "I. Śliwa", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 },
        { name: "Z. Maciejewicz", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "UNI Opole (24/25)", players: [
        { name: "J. Bińczycka", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "P. Matsumoto", pos: "Rozgrywający", OVR: 74, ATK: 25, BLK: 48, PRZ: 15, OBR: 70, ROZ: 76, ZAG: 75, TEC: 74 },
        { name: "K. Zaroślińska-Król", pos: "Atakujący", OVR: 83, ATK: 85, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "P. Reiter", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 65, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "M. Pamuła", pos: "Przyjmujący", OVR: 77, ATK: 74, BLK: 65, PRZ: 78, OBR: 76, ROZ: 42, ZAG: 74, TEC: 76 },
        { name: "G. Diouf", pos: "Przyjmujący", OVR: 81, ATK: 83, BLK: 70, PRZ: 72, OBR: 75, ROZ: 40, ZAG: 78, TEC: 80 },
        { name: "E. McCall", pos: "Przyjmujący", OVR: 80, ATK: 81, BLK: 68, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "A. Ceynowa", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 74, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 77 },
        { name: "N. Kecher", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 84, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 76, TEC: 78 },
        { name: "A. Cygan", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "I. Kępa", pos: "Środkowy", OVR: 73, ATK: 65, BLK: 74, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "A. Adamek", pos: "Libero", OVR: 82, ATK: 5, BLK: 5, PRZ: 86, OBR: 84, ROZ: 60, ZAG: 5, TEC: 82 },
        { name: "J. Piotrowska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "Energa MKS Kalisz (24/25)", players: [
        { name: "K. Wawrzyniak", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "M. Grysak", pos: "Rozgrywający", OVR: 73, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "B. Dapić", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 70, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 78, TEC: 78 },
        { name: "S. Wąsiakowska", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 64, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "V. Flores", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 65, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 76, TEC: 78 },
        { name: "A. Lemire", pos: "Przyjmujący", OVR: 77, ATK: 78, BLK: 68, PRZ: 70, OBR: 72, ROZ: 40, ZAG: 74, TEC: 75 },
        { name: "J. Gancarz", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 64, PRZ: 74, OBR: 74, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "D. Frankevych", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 68, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "E. Kaczmarzyk", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 74, TEC: 76 },
        { name: "N. Dróżdż", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Malczewska", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "Z. Ociepa", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "A. Lutsenko", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "M. Wysoczańska", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 77, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "ITA TOOLS Stal Mielec (24/25)", players: [
        { name: "S. Kucharska", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 48, PRZ: 15, OBR: 72, ROZ: 81, ZAG: 76, TEC: 78 },
        { name: "P. Janicka", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 72, TEC: 74 },
        { name: "O. Sieradzka", pos: "Atakujący", OVR: 77, ATK: 80, BLK: 65, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 75, TEC: 76 },
        { name: "G. Ponikowska", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "Z. Kuligowska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 75 },
        { name: "A. Adamczyk", pos: "Przyjmujący", OVR: 75, ATK: 76, BLK: 60, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "A. Milewska", pos: "Przyjmujący", OVR: 74, ATK: 74, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "K. Bryda", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "R. Moszyńska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "E. Mucha", pos: "Środkowy", OVR: 77, ATK: 75, BLK: 76, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "S. Kubacka", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 81, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "K. Laskowska", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "I. Dąbrowska", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "M. Głodzińska", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "KGHM #VolleyWrocław (24/25)", players: [
        { name: "A. Szady", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 48, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 72, TEC: 76 },
        { name: "M. Łazowska", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 50, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 75, TEC: 78 },
        { name: "W. Gierszewska", pos: "Atakujący", OVR: 81, ATK: 83, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 76, TEC: 79 },
        { name: "W. Kowalska (Wro)", pos: "Atakujący", OVR: 80, ATK: 81, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 68, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 77, ATK: 75, BLK: 66, PRZ: 75, OBR: 75, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "L. Frybel", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 70, ROZ: 35, ZAG: 70, TEC: 73 },
        { name: "D. Perez", pos: "Przyjmujący", OVR: 79, ATK: 81, BLK: 65, PRZ: 72, OBR: 72, ROZ: 38, ZAG: 76, TEC: 76 },
        { name: "J. Gawlak", pos: "Środkowy", OVR: 80, ATK: 76, BLK: 83, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 77 },
        { name: "A. Gancarz", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 81, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 79, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Karasińska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 77, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Pawłowska", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 83, OBR: 85, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "J. Chorąża", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 80, OBR: 78, ROZ: 55, ZAG: 5, TEC: 77 }
    ]},
    { teamName: "Metalkas Pałac Bydgoszcz (24/25)", players: [
        { name: "M. Łyczakowska", pos: "Rozgrywający", OVR: 79, ATK: 25, BLK: 45, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 76, TEC: 78 },
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 42, PRZ: 10, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "W. Makarewicz", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 75, TEC: 76 },
        { name: "M. Rajlić", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 74 },
        { name: "P. Nowakowska", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 65, PRZ: 80, OBR: 78, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "A. Lipska", pos: "Przyjmujący", OVR: 77, ATK: 79, BLK: 65, PRZ: 70, OBR: 72, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "E. Franz", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 62, PRZ: 75, OBR: 74, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "K. Kurjerowa", pos: "Przyjmujący", OVR: 73, ATK: 72, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "S. Dorsman", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 84, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 76, TEC: 78 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 79, ATK: 75, BLK: 81, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 75, TEC: 76 },
        { name: "W. Paluszkiewicz", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "P. Jędrzejczak", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "M. Jagła", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 87, OBR: 86, ROZ: 60, ZAG: 5, TEC: 83 },
        { name: "O. Ziółkowska", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "Sokół & Hagric Mogilno (24/25)", players: [
        { name: "N. Gajewska", pos: "Rozgrywający", OVR: 77, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 74, TEC: 78 },
        { name: "A. Szczepańska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 74 },
        { name: "A. Cur-Słomka", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 75, TEC: 76 },
        { name: "S. Barambas", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 62, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "S. Świętoń", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 78, OBR: 76, ROZ: 42, ZAG: 72, TEC: 76 },
        { name: "W. Przybyło", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "W. Fojucik", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 72 },
        { name: "M. Szczepuła", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "P. Brzoska", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "Z. Efimienko", pos: "Środkowy", OVR: 80, ATK: 72, BLK: 86, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 74, TEC: 78 },
        { name: "K. Nowak", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "M. Mazenko", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 73 },
        { name: "K. Pancewicz", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 82, OBR: 83, ROZ: 55, ZAG: 5, TEC: 79 },
        { name: "J. Rafałko", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 78, OBR: 78, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},

    // ==========================================
    // SEZON 2023/2024
    // ==========================================
    { teamName: "Grupa Azoty Chemik Police (23/24)", players: [
        { name: "M. Kowalewska", pos: "Rozgrywający", OVR: 85, ATK: 30, BLK: 55, PRZ: 15, OBR: 80, ROZ: 88, ZAG: 78, TEC: 85 },
        { name: "X. Ding", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 82, ZAG: 74, TEC: 78 },
        { name: "B. Honorio", pos: "Atakujący", OVR: 85, ATK: 87, BLK: 74, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "E. Inneh-Varga", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 72, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 82, TEC: 82 },
        { name: "M. Fedusio", pos: "Przyjmujący", OVR: 84, ATK: 83, BLK: 70, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 78, TEC: 82 },
        { name: "N. Mędrzyk", pos: "Przyjmujący", OVR: 82, ATK: 80, BLK: 68, PRZ: 84, OBR: 82, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "S. Sahin", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 65, PRZ: 75, OBR: 76, ROZ: 40, ZAG: 78, TEC: 79 },
        { name: "M. Grajber", pos: "Przyjmujący", OVR: 80, ATK: 77, BLK: 66, PRZ: 85, OBR: 84, ROZ: 45, ZAG: 76, TEC: 78 },
        { name: "A. Korneluk", pos: "Środkowy", OVR: 88, ATK: 82, BLK: 94, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 82, TEC: 85 },
        { name: "I. Wasilewska", pos: "Środkowy", OVR: 81, ATK: 76, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 78, TEC: 78 },
        { name: "D. Pierzchała", pos: "Środkowy", OVR: 83, ATK: 75, BLK: 88, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 80 },
        { name: "A. Baić", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 72, TEC: 74 },
        { name: "M. Jagła", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 86, OBR: 85, ROZ: 60, ZAG: 5, TEC: 83 },
        { name: "J. Kamińska (Lib)", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "PGE Rysice Rzeszów (23/24)", players: [
        { name: "K. Wenerska", pos: "Rozgrywający", OVR: 86, ATK: 30, BLK: 52, PRZ: 20, OBR: 78, ROZ: 90, ZAG: 76, TEC: 86 },
        { name: "G. Makarowska", pos: "Rozgrywający", OVR: 75, ATK: 25, BLK: 45, PRZ: 15, OBR: 68, ROZ: 76, ZAG: 74, TEC: 75 },
        { name: "G. Orvošová", pos: "Atakujący", OVR: 87, ATK: 89, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 82, TEC: 85 },
        { name: "W. Kowalska", pos: "Atakujący", OVR: 79, ATK: 80, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "A. Kalandadze", pos: "Przyjmujący", OVR: 86, ATK: 88, BLK: 72, PRZ: 75, OBR: 78, ROZ: 45, ZAG: 84, TEC: 85 },
        { name: "A. Coneo", pos: "Przyjmujący", OVR: 84, ATK: 85, BLK: 70, PRZ: 78, OBR: 80, ROZ: 45, ZAG: 80, TEC: 83 },
        { name: "W. Szlagowska", pos: "Przyjmujący", OVR: 81, ATK: 80, BLK: 72, PRZ: 79, OBR: 81, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "A. De Guzman", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 65, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 72, TEC: 75 },
        { name: "W. Centka", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 86, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 76, TEC: 80 },
        { name: "M. Jurczyk", pos: "Środkowy", OVR: 83, ATK: 76, BLK: 85, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 78, TEC: 78 },
        { name: "A. Obiała", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 77 },
        { name: "J. Ruś", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Szczygłowska", pos: "Libero", OVR: 88, ATK: 5, BLK: 5, PRZ: 92, OBR: 90, ROZ: 65, ZAG: 5, TEC: 87 },
        { name: "M. Kubas", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "ŁKS Commercecon Łódź (23/24)", players: [
        { name: "R. Ratzke", pos: "Rozgrywający", OVR: 85, ATK: 30, BLK: 55, PRZ: 15, OBR: 78, ROZ: 89, ZAG: 80, TEC: 86 },
        { name: "P. Zaborowska", pos: "Rozgrywający", OVR: 77, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 75, TEC: 76 },
        { name: "V. Diouf", pos: "Atakujący", OVR: 87, ATK: 90, BLK: 78, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 84 },
        { name: "A. Hryshchuk", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "A. Dudek", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 70, PRZ: 72, OBR: 75, ROZ: 42, ZAG: 80, TEC: 78 },
        { name: "J. Piasecka", pos: "Przyjmujący", OVR: 84, ATK: 85, BLK: 74, PRZ: 78, OBR: 80, ROZ: 45, ZAG: 78, TEC: 82 },
        { name: "Z. Górecka", pos: "Przyjmujący", OVR: 83, ATK: 78, BLK: 72, PRZ: 89, OBR: 88, ROZ: 50, ZAG: 75, TEC: 86 },
        { name: "A. Kazała", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 60, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "K. Alagierska", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 89, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "K. Witkowska", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 86, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 82, TEC: 78 },
        { name: "A. Gryka", pos: "Środkowy", OVR: 83, ATK: 77, BLK: 88, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "S. Stefanik", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 75 },
        { name: "P. Maj-Erwardt", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "K. Drabek", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "BKS BOSTIK Bielsko-Biała (23/24)", players: [
        { name: "J. Nowicka", pos: "Rozgrywający", OVR: 86, ATK: 35, BLK: 60, PRZ: 15, OBR: 78, ROZ: 89, ZAG: 84, TEC: 86 },
        { name: "A. Stachowicz", pos: "Rozgrywający", OVR: 73, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "K. Laak", pos: "Atakujący", OVR: 86, ATK: 89, BLK: 78, PRZ: 10, OBR: 65, ROZ: 45, ZAG: 84, TEC: 88 },
        { name: "R. Szedmák (A)", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 80, TEC: 78 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 84, ATK: 85, BLK: 72, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 80, TEC: 82 },
        { name: "R. Bidias", pos: "Przyjmujący", OVR: 83, ATK: 78, BLK: 72, PRZ: 89, OBR: 88, ROZ: 50, ZAG: 75, TEC: 86 },
        { name: "M. Borowczak", pos: "Przyjmujący", OVR: 77, ATK: 74, BLK: 65, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 75, TEC: 76 },
        { name: "J. Ciesielczyk", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "J. Pacak", pos: "Środkowy", OVR: 84, ATK: 76, BLK: 90, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 82, TEC: 80 },
        { name: "P. Majkowska", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 75 },
        { name: "N. Abramajtys", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "A. Mazur", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 83, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "K. Nowak (Lib)", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "Grot Budowlani Łódź (23/24)", players: [
        { name: "E. Wilińska", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 50, PRZ: 15, OBR: 74, ROZ: 80, ZAG: 74, TEC: 78 },
        { name: "M. Łazowska", pos: "Rozgrywający", OVR: 76, ATK: 24, BLK: 48, PRZ: 12, OBR: 70, ROZ: 79, ZAG: 75, TEC: 76 },
        { name: "A. Bjelica", pos: "Atakujący", OVR: 86, ATK: 88, BLK: 72, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 82, TEC: 84 },
        { name: "A. Kukiełka", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 72 },
        { name: "M. Mitrović", pos: "Przyjmujący", OVR: 82, ATK: 84, BLK: 68, PRZ: 78, OBR: 75, ROZ: 45, ZAG: 80, TEC: 80 },
        { name: "J. Blagojević", pos: "Przyjmujący", OVR: 81, ATK: 76, BLK: 65, PRZ: 86, OBR: 85, ROZ: 50, ZAG: 78, TEC: 84 },
        { name: "M. May", pos: "Przyjmujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 74, OBR: 74, ROZ: 40, ZAG: 76, TEC: 78 },
        { name: "K. Szyjka", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 70 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 80, ATK: 74, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 78 },
        { name: "K. Różyńska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Pol", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 79, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 74, TEC: 74 },
        { name: "N. Lijewska", pos: "Środkowy", OVR: 71, ATK: 65, BLK: 72, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "J. Łysiak", pos: "Libero", OVR: 87, ATK: 5, BLK: 5, PRZ: 91, OBR: 89, ROZ: 60, ZAG: 5, TEC: 86 },
        { name: "M. Justka", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "MOYA Radomka Radom (23/24)", players: [
        { name: "V. Mayer", pos: "Rozgrywający", OVR: 81, ATK: 30, BLK: 50, PRZ: 15, OBR: 75, ROZ: 85, ZAG: 78, TEC: 82 },
        { name: "A. Gajer (Rad)", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 42, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "M. Gałkowska", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 75, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 78, TEC: 83 },
        { name: "H. Nowakowska", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 72 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 81, ATK: 80, BLK: 68, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "H. Johnson", pos: "Przyjmujący", OVR: 79, ATK: 82, BLK: 65, PRZ: 72, OBR: 74, ROZ: 40, ZAG: 78, TEC: 76 },
        { name: "M. Rybak", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "K. Zapała", pos: "Przyjmujący", OVR: 73, ATK: 72, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "M. Schölzel", pos: "Środkowy", OVR: 83, ATK: 78, BLK: 87, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 78, TEC: 80 },
        { name: "M. Świrad", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "K. Moskwa", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "P. Zaborowska (Śro)", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 72, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "M. Stenzel", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "N. Jęcek", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "UNI Opole (23/24)", players: [
        { name: "J. Bińczycka", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "M. Olaya", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 72, TEC: 73 },
        { name: "K. Zaroślińska-Król", pos: "Atakujący", OVR: 83, ATK: 85, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "M. Pamuła (Atk)", pos: "Atakujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "E. McCall", pos: "Przyjmujący", OVR: 80, ATK: 81, BLK: 68, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "A. Ceynowa", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 74, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "P. Bałucka", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 62, PRZ: 72, OBR: 72, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "K. Nowakowska", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "M. Orzyłowska", pos: "Środkowy", OVR: 82, ATK: 77, BLK: 86, PRZ: 10, OBR: 36, ROZ: 25, ZAG: 78, TEC: 79 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 77 },
        { name: "N. Kecher", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 84, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 76, TEC: 78 },
        { name: "A. Klich", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "A. Adamek", pos: "Libero", OVR: 82, ATK: 5, BLK: 5, PRZ: 86, OBR: 84, ROZ: 60, ZAG: 5, TEC: 82 },
        { name: "J. Piotrowska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "Energa MKS Kalisz (23/24)", players: [
        { name: "K. Wawrzyniak", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "L. Kaczmarzyk", pos: "Rozgrywający", OVR: 72, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 74, ZAG: 68, TEC: 72 },
        { name: "A. Rasińska", pos: "Atakujący", OVR: 81, ATK: 83, BLK: 68, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "S. Wąsiakowska", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 64, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "L. Mlinar", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 65, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "K. Drużkowska", pos: "Przyjmujący", OVR: 81, ATK: 83, BLK: 72, PRZ: 70, OBR: 74, ROZ: 40, ZAG: 76, TEC: 78 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 62, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 75 },
        { name: "E. Cygan", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 68, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "K. Fedorek", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "Z. Efimienko", pos: "Środkowy", OVR: 80, ATK: 72, BLK: 86, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 74, TEC: 78 },
        { name: "M. Lisiak (Kal)", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "N. Dróżdż", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 77, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "I. Śliwa", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 },
        { name: "M. Wysoczańska", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 77, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "KGHM #VolleyWrocław (23/24)", players: [
        { name: "L. Muhlsteinova", pos: "Rozgrywający", OVR: 77, ATK: 24, BLK: 48, PRZ: 15, OBR: 72, ROZ: 81, ZAG: 75, TEC: 78 },
        { name: "A. Szady", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "J. Szczurowska", pos: "Atakujący", OVR: 82, ATK: 85, BLK: 72, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "J. Stancelewska", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 65, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 68, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 77, ATK: 75, BLK: 66, PRZ: 75, OBR: 75, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "M. Gierszewska", pos: "Przyjmujący", OVR: 76, ATK: 74, BLK: 62, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "L. Frybel", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "G. Ponikowska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 79, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Gancarz", pos: "Środkowy", OVR: 78, ATK: 73, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 73, TEC: 75 },
        { name: "A. Karasińska", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "A. Pawłowska", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 83, OBR: 85, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "J. Chorąża", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 80, OBR: 78, ROZ: 55, ZAG: 5, TEC: 77 }
    ]},
    { teamName: "ITA TOOLS Stal Mielec (23/24)", players: [
        { name: "S. Kucharska", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 48, PRZ: 15, OBR: 72, ROZ: 81, ZAG: 76, TEC: 78 },
        { name: "P. Janicka", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 72, TEC: 74 },
        { name: "W. Gierszewska (Mie)", pos: "Atakujący", OVR: 81, ATK: 83, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 76, TEC: 79 },
        { name: "G. Ponikowska (Atk)", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "E. Mucha", pos: "Przyjmujący", OVR: 77, ATK: 75, BLK: 65, PRZ: 78, OBR: 76, ROZ: 40, ZAG: 75, TEC: 76 },
        { name: "K. Bryda", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "A. Adamczyk", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "Z. Kuligowska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 75 },
        { name: "S. Kubacka", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 81, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "P. Bałucka", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 79, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "R. Moszyńska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 73 },
        { name: "K. Laskowska", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "K. Pancewicz", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "I. Dąbrowska", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 80, OBR: 82, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "Metalkas Pałac Bydgoszcz (23/24)", players: [
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 42, PRZ: 10, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "M. Mazurek", pos: "Rozgrywający", OVR: 79, ATK: 25, BLK: 45, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 76, TEC: 78 },
        { name: "J. Sikorska", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 68, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 75, TEC: 76 },
        { name: "M. Głodzińska", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "P. Nowakowska", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 65, PRZ: 80, OBR: 78, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "W. Makarewicz", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "A. Lipska", pos: "Przyjmujący", OVR: 77, ATK: 79, BLK: 65, PRZ: 70, OBR: 72, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "E. Franz", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 72 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 79, ATK: 75, BLK: 81, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 75, TEC: 76 },
        { name: "W. Paluszkiewicz", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Klich", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "G. Dębowska", pos: "Środkowy", OVR: 72, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "M. Saad", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 83, OBR: 85, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "M. Jagła", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 87, OBR: 86, ROZ: 60, ZAG: 5, TEC: 83 }
    ]},
    { teamName: "Grupa Azoty Akademia Tarnów (23/24)", players: [
        { name: "K. Chmielewska (Tar)", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 74 },
        { name: "J. Szumera", pos: "Rozgrywający", OVR: 72, ATK: 18, BLK: 40, PRZ: 10, OBR: 65, ROZ: 74, ZAG: 68, TEC: 70 },
        { name: "W. Szumera (Atk)", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "N. Zakościelna", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "K. Molenda", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 62, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "B. Zakościelna", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 72 },
        { name: "A. Ceynowa", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "K. Dite", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 68, OBR: 66, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "Y. Usheva", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "D. Moscickaja", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "A. Klich (Tar)", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 24, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Żurawska", pos: "Libero", OVR: 76, ATK: 5, BLK: 5, PRZ: 78, OBR: 78, ROZ: 50, ZAG: 5, TEC: 76 },
        { name: "M. Justka", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 45, ZAG: 5, TEC: 74 }
    ]},
    // ==========================================
    // SEZON 2022/2023
    // ==========================================
    { teamName: "ŁKS Commercecon Łódź (22/23)", players: [
        { name: "R. Ratzke", pos: "Rozgrywający", OVR: 86, ATK: 30, BLK: 55, PRZ: 15, OBR: 78, ROZ: 90, ZAG: 80, TEC: 86 },
        { name: "A. Gajer", pos: "Rozgrywający", OVR: 76, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 79, ZAG: 75, TEC: 76 },
        { name: "V. Diouf", pos: "Atakujący", OVR: 88, ATK: 91, BLK: 78, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 84 },
        { name: "A. Hryshchuk", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 76, TEC: 78 },
        { name: "Z. Górecka", pos: "Przyjmujący", OVR: 84, ATK: 78, BLK: 72, PRZ: 90, OBR: 88, ROZ: 50, ZAG: 75, TEC: 86 },
        { name: "L. Scuka", pos: "Przyjmujący", OVR: 82, ATK: 83, BLK: 68, PRZ: 74, OBR: 76, ROZ: 40, ZAG: 78, TEC: 80 },
        { name: "J. Piasecka", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 70, PRZ: 75, OBR: 78, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "K. Dróżdż", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 70, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "K. Alagierska-Szczepaniak", pos: "Środkowy", OVR: 85, ATK: 78, BLK: 90, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "K. Witkowska", pos: "Środkowy", OVR: 83, ATK: 76, BLK: 87, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 82, TEC: 78 },
        { name: "A. Gryka", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 86, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "N. Stefanik", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 75 },
        { name: "P. Maj-Erwardt", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "K. Drabek", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "Developres Bella Dolina Rzeszów (22/23)", players: [
        { name: "K. Wenerska", pos: "Rozgrywający", OVR: 86, ATK: 30, BLK: 52, PRZ: 20, OBR: 78, ROZ: 90, ZAG: 76, TEC: 86 },
        { name: "J. Bińczycka", pos: "Rozgrywający", OVR: 75, ATK: 25, BLK: 45, PRZ: 15, OBR: 68, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "G. Orvošová", pos: "Atakujący", OVR: 86, ATK: 88, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 82, TEC: 84 },
        { name: "I. Rapacz", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "A. Kalandadze", pos: "Przyjmujący", OVR: 85, ATK: 87, BLK: 72, PRZ: 75, OBR: 78, ROZ: 45, ZAG: 84, TEC: 84 },
        { name: "J. Blagojević", pos: "Przyjmujący", OVR: 83, ATK: 78, BLK: 65, PRZ: 88, OBR: 86, ROZ: 50, ZAG: 78, TEC: 85 },
        { name: "W. Szlagowska", pos: "Przyjmujący", OVR: 81, ATK: 80, BLK: 72, PRZ: 79, OBR: 81, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "D. Szczyrba", pos: "Przyjmujący", OVR: 75, ATK: 75, BLK: 60, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "M. Jurczyk", pos: "Środkowy", OVR: 84, ATK: 76, BLK: 86, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 78, TEC: 80 },
        { name: "W. Centka", pos: "Środkowy", OVR: 83, ATK: 78, BLK: 85, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 76, TEC: 78 },
        { name: "A. Obiała", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 77 },
        { name: "J. Ruś", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Szczygłowska", pos: "Libero", OVR: 88, ATK: 5, BLK: 5, PRZ: 92, OBR: 90, ROZ: 65, ZAG: 5, TEC: 87 },
        { name: "K. Przybyła", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "Grot Budowlani Łódź (22/23)", players: [
        { name: "M. Łazowska", pos: "Rozgrywający", OVR: 80, ATK: 28, BLK: 52, PRZ: 15, OBR: 74, ROZ: 84, ZAG: 76, TEC: 80 },
        { name: "E. Polak", pos: "Rozgrywający", OVR: 76, ATK: 24, BLK: 45, PRZ: 12, OBR: 70, ROZ: 78, ZAG: 74, TEC: 76 },
        { name: "M. Durul", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 82 },
        { name: "A. Kukiełka", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 72 },
        { name: "M. Fedusio", pos: "Przyjmujący", OVR: 84, ATK: 83, BLK: 70, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 78, TEC: 82 },
        { name: "J. Kazała", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 65, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 78 },
        { name: "A. Kąkoł", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 72, ROZ: 35, ZAG: 70, TEC: 74 },
        { name: "J. Ciesielczyk", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 80, ATK: 74, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 78 },
        { name: "D. Sobolska", pos: "Środkowy", OVR: 79, ATK: 73, BLK: 83, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 77 },
        { name: "K. Różyńska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Gawlak", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "J. Łysiak", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 90, OBR: 88, ROZ: 60, ZAG: 5, TEC: 85 },
        { name: "D. Skomorowska", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "BKS BOSTIK Bielsko-Biała (22/23)", players: [
        { name: "J. Nowicka", pos: "Rozgrywający", OVR: 85, ATK: 34, BLK: 58, PRZ: 15, OBR: 76, ROZ: 88, ZAG: 82, TEC: 84 },
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 74 },
        { name: "M. Szczurowska", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "M. Podlaska", pos: "Atakujący", OVR: 75, ATK: 78, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 74 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 83, ATK: 84, BLK: 70, PRZ: 75, OBR: 76, ROZ: 45, ZAG: 80, TEC: 80 },
        { name: "M. Borowczak", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 65, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 75, TEC: 76 },
        { name: "W. Szewczyk", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "K. Bartkowska", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 70 },
        { name: "D. Pierzchała", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 87, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 80 },
        { name: "P. Majkowska", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 75 },
        { name: "N. Abramajtys", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "A. Mazur", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 83, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "K. Nowak", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "Grupa Azoty Chemik Police (22/23)", players: [
        { name: "Fabiola", pos: "Rozgrywający", OVR: 84, ATK: 25, BLK: 50, PRZ: 15, OBR: 75, ROZ: 88, ZAG: 75, TEC: 84 },
        { name: "M. Kowalewska", pos: "Rozgrywający", OVR: 83, ATK: 30, BLK: 52, PRZ: 15, OBR: 76, ROZ: 86, ZAG: 78, TEC: 82 },
        { name: "J. Brakocevic-Canzian", pos: "Atakujący", OVR: 88, ATK: 90, BLK: 78, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 84, TEC: 85 },
        { name: "J. Sikorska", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "M. Łukasik", pos: "Przyjmujący", OVR: 84, ATK: 82, BLK: 70, PRZ: 85, OBR: 82, ROZ: 45, ZAG: 78, TEC: 83 },
        { name: "M. Czyrniańska", pos: "Przyjmujący", OVR: 85, ATK: 86, BLK: 74, PRZ: 78, OBR: 80, ROZ: 45, ZAG: 82, TEC: 84 },
        { name: "M. Oveckova", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 65, PRZ: 78, OBR: 76, ROZ: 40, ZAG: 74, TEC: 77 },
        { name: "N. Mędrzyk", pos: "Przyjmujący", OVR: 81, ATK: 79, BLK: 66, PRZ: 83, OBR: 81, ROZ: 45, ZAG: 75, TEC: 80 },
        { name: "A. Korneluk", pos: "Środkowy", OVR: 88, ATK: 82, BLK: 94, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 82, TEC: 85 },
        { name: "I. Wasilewska", pos: "Środkowy", OVR: 81, ATK: 76, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 78, TEC: 78 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 78, ATK: 73, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "M. Stenzel", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "M. Jagła", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 82, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "Energa MKS Kalisz (22/23)", players: [
        { name: "A. Grabka", pos: "Rozgrywający", OVR: 81, ATK: 28, BLK: 50, PRZ: 15, OBR: 74, ROZ: 84, ZAG: 76, TEC: 80 },
        { name: "K. Wawrzyniak", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 74 },
        { name: "A. Rasińska", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 80 },
        { name: "K. Wajkowska", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 72 },
        { name: "K. Drużkowska", pos: "Przyjmujący", OVR: 81, ATK: 83, BLK: 72, PRZ: 70, OBR: 74, ROZ: 40, ZAG: 76, TEC: 78 },
        { name: "Z. Kuligowska", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 64, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "A. Bartkowska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 62, PRZ: 80, OBR: 78, ROZ: 42, ZAG: 75, TEC: 78 },
        { name: "Z. Efimienko-Młotkowska", pos: "Środkowy", OVR: 81, ATK: 73, BLK: 88, PRZ: 10, OBR: 36, ROZ: 25, ZAG: 76, TEC: 79 },
        { name: "K. Fedorek", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "M. Cygan", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 73 },
        { name: "K. Calkins", pos: "Środkowy", OVR: 72, ATK: 66, BLK: 74, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "A. Lemańczyk", pos: "Libero", OVR: 82, ATK: 5, BLK: 5, PRZ: 85, OBR: 84, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "N. Pajdak", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "#VolleyWrocław (22/23)", players: [
        { name: "L. Muhlsteinova", pos: "Rozgrywający", OVR: 78, ATK: 24, BLK: 48, PRZ: 15, OBR: 74, ROZ: 82, ZAG: 76, TEC: 79 },
        { name: "A. Szady", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 12, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "J. Szczurowska", pos: "Atakujący", OVR: 81, ATK: 84, BLK: 70, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 78, TEC: 79 },
        { name: "M. Celińska", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 68, TEC: 71 },
        { name: "R. Bidias", pos: "Przyjmujący", OVR: 81, ATK: 77, BLK: 65, PRZ: 85, OBR: 84, ROZ: 45, ZAG: 76, TEC: 83 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 68, PRZ: 74, OBR: 76, ROZ: 42, ZAG: 74, TEC: 77 },
        { name: "J. Kazała", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "M. Gierszewska", pos: "Przyjmujący", OVR: 74, ATK: 73, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "J. Pacak", pos: "Środkowy", OVR: 83, ATK: 76, BLK: 88, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 80, TEC: 79 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 80, PRZ: 10, OBR: 35, ROZ: 25, ZAG: 74, TEC: 75 },
        { name: "A. Gancarz", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "K. Ociepa", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "M. Saad", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "J. Chorąża", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "Moya Radomka Radom (22/23)", players: [
        { name: "M. Bugg", pos: "Rozgrywający", OVR: 80, ATK: 30, BLK: 52, PRZ: 15, OBR: 74, ROZ: 84, ZAG: 78, TEC: 81 },
        { name: "K. Zaborowska", pos: "Rozgrywający", OVR: 75, ATK: 24, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 74, TEC: 74 },
        { name: "G. Goezgeç", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "M. Janiuk", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 72 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 80, ATK: 78, BLK: 66, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "J. Łukasik", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 68, PRZ: 74, OBR: 76, ROZ: 42, ZAG: 75, TEC: 77 },
        { name: "A. Wójcik", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 76, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "R. Silva", pos: "Przyjmujący", OVR: 77, ATK: 78, BLK: 65, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 74, TEC: 75 },
        { name: "M. Świrad", pos: "Środkowy", OVR: 78, ATK: 73, BLK: 81, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "K. Moskwa", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "K. Ponikowska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Bałucka", pos: "Środkowy", OVR: 73, ATK: 65, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "K. Adamek", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "N. Jęcek", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 50, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "UNI Opole (22/23)", players: [
        { name: "G. Makarowska", pos: "Rozgrywający", OVR: 77, ATK: 24, BLK: 45, PRZ: 12, OBR: 72, ROZ: 81, ZAG: 75, TEC: 78 },
        { name: "A. Janicka", pos: "Rozgrywający", OVR: 73, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 72 },
        { name: "A. Bjelica", pos: "Atakujący", OVR: 85, ATK: 88, BLK: 72, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 82, TEC: 83 },
        { name: "O. Sieradzka", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "K. Conceicao", pos: "Przyjmujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 78, TEC: 80 },
        { name: "M. Pamuła", pos: "Przyjmujący", OVR: 76, ATK: 74, BLK: 62, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 75, ATK: 73, BLK: 60, PRZ: 75, OBR: 72, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "W. Senica", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 72 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 77 },
        { name: "N. Kecher", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 81, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "V. Pellegrino", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 73, ATK: 65, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "A. Adamek", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 85, OBR: 83, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "P. Nowak", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "OnlyBio Pałac Bydgoszcz (22/23)", players: [
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 45, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "M. Mazurek", pos: "Rozgrywający", OVR: 78, ATK: 24, BLK: 44, PRZ: 15, OBR: 72, ROZ: 82, ZAG: 76, TEC: 77 },
        { name: "A. Bączyńska", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 66, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 75, TEC: 77 },
        { name: "A. Lewandowska", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 73 },
        { name: "M. Ter Brugge", pos: "Przyjmujący", OVR: 79, ATK: 81, BLK: 65, PRZ: 74, OBR: 75, ROZ: 40, ZAG: 76, TEC: 78 },
        { name: "E. Żurowska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 76, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "K. Różyńska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 70, TEC: 74 },
        { name: "W. Makarewicz", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "K. Zakharenko", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 80, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 79, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Klich", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "A. Witkowska", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 87, OBR: 85, ROZ: 60, ZAG: 5, TEC: 82 },
        { name: "M. Jagła", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "Roleski Grupa Azoty Tarnów (22/23)", players: [
        { name: "M. Łyczakowska", pos: "Rozgrywający", OVR: 78, ATK: 24, BLK: 46, PRZ: 14, OBR: 72, ROZ: 80, ZAG: 75, TEC: 78 },
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 72 },
        { name: "A. Kazała", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 64, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "J. Szumera", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 73 },
        { name: "K. Świstek", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 76, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "A. Lemańczyk", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 72, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "N. Zakościelna", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "E. Ceynowa", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "Y. Usheva", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 75, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Bałucka", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "D. Moscickaja", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "A. Żurawska", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 80, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 },
        { name: "M. Justka", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 45, ZAG: 5, TEC: 74 }
    ]},
    { teamName: "IŁ Capital Legionovia Legionowo (22/23)", players: [
        { name: "D. Grabka", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "P. Zaborowska", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 72 },
        { name: "J. Silva", pos: "Atakujący", OVR: 77, ATK: 80, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "K. Calkins", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 73 },
        { name: "M. Rasińska", pos: "Przyjmujący", OVR: 76, ATK: 78, BLK: 62, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 74, TEC: 75 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 76, OBR: 74, ROZ: 40, ZAG: 72, TEC: 74 },
        { name: "Z. Kuligowska", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 74, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "K. Dite", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "K. Różyńska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "P. Majkowska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "A. Obiała", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "K. Drabek", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 80, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 },
        { name: "N. Pajdak", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},

    // ==========================================
    // SEZON 2021/2022
    // ==========================================
    { teamName: "Grupa Azoty Chemik Police (21/22)", players: [
        { name: "M. Kowalewska", pos: "Rozgrywający", OVR: 86, ATK: 30, BLK: 55, PRZ: 15, OBR: 80, ROZ: 90, ZAG: 78, TEC: 86 },
        { name: "N. Lipska", pos: "Rozgrywający", OVR: 77, ATK: 25, BLK: 45, PRZ: 15, OBR: 70, ROZ: 80, ZAG: 74, TEC: 77 },
        { name: "J. Brakocevic", pos: "Atakujący", OVR: 89, ATK: 92, BLK: 78, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 84, TEC: 86 },
        { name: "M. Łukasik", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 78, TEC: 80 },
        { name: "M. Czyrniańska", pos: "Przyjmujący", OVR: 85, ATK: 86, BLK: 72, PRZ: 80, OBR: 80, ROZ: 45, ZAG: 82, TEC: 84 },
        { name: "N. Mędrzyk", pos: "Przyjmujący", OVR: 83, ATK: 80, BLK: 68, PRZ: 86, OBR: 84, ROZ: 45, ZAG: 76, TEC: 82 },
        { name: "B. Honorio", pos: "Przyjmujący", OVR: 82, ATK: 84, BLK: 65, PRZ: 72, OBR: 74, ROZ: 40, ZAG: 78, TEC: 80 },
        { name: "A. Kazała", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 60, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 77 },
        { name: "A. Korneluk", pos: "Środkowy", OVR: 88, ATK: 82, BLK: 94, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 82, TEC: 85 },
        { name: "I. Wasilewska", pos: "Środkowy", OVR: 82, ATK: 77, BLK: 85, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 78, TEC: 79 },
        { name: "M. Pol", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "D. Pierzchała", pos: "Środkowy", OVR: 76, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 70, TEC: 74 },
        { name: "M. Stenzel", pos: "Libero", OVR: 87, ATK: 5, BLK: 5, PRZ: 89, OBR: 92, ROZ: 65, ZAG: 5, TEC: 86 },
        { name: "M. Jagła", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "Developres Bella Dolina Rzeszów (21/22)", players: [
        { name: "K. Wenerska", pos: "Rozgrywający", OVR: 85, ATK: 28, BLK: 50, PRZ: 15, OBR: 76, ROZ: 88, ZAG: 75, TEC: 84 },
        { name: "M. Krajewska", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "B. Honorio", pos: "Atakujący", OVR: 85, ATK: 87, BLK: 72, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "I. Rapacz", pos: "Atakujący", OVR: 79, ATK: 81, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 75, TEC: 77 },
        { name: "K. Bajema", pos: "Przyjmujący", OVR: 86, ATK: 88, BLK: 74, PRZ: 76, OBR: 78, ROZ: 45, ZAG: 82, TEC: 85 },
        { name: "J. Blagojević", pos: "Przyjmujący", OVR: 84, ATK: 80, BLK: 68, PRZ: 88, OBR: 86, ROZ: 50, ZAG: 78, TEC: 85 },
        { name: "A. Kalandadze", pos: "Przyjmujący", OVR: 83, ATK: 85, BLK: 70, PRZ: 74, OBR: 76, ROZ: 40, ZAG: 80, TEC: 82 },
        { name: "D. Szczyrba", pos: "Przyjmujący", OVR: 75, ATK: 75, BLK: 60, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "M. Jurczyk", pos: "Środkowy", OVR: 83, ATK: 76, BLK: 85, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 78, TEC: 79 },
        { name: "A. Stencel", pos: "Środkowy", OVR: 82, ATK: 75, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "J. Ruś", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Szczygłowska", pos: "Libero", OVR: 87, ATK: 5, BLK: 5, PRZ: 90, OBR: 88, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "D. Przybyła", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "ŁKS Commercecon Łódź (21/22)", players: [
        { name: "R. Ratzke", pos: "Rozgrywający", OVR: 85, ATK: 30, BLK: 55, PRZ: 15, OBR: 78, ROZ: 89, ZAG: 80, TEC: 86 },
        { name: "P. Zaborowska", pos: "Rozgrywający", OVR: 76, ATK: 24, BLK: 45, PRZ: 12, OBR: 70, ROZ: 79, ZAG: 74, TEC: 75 },
        { name: "V. Diouf", pos: "Atakujący", OVR: 87, ATK: 90, BLK: 78, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 84 },
        { name: "W. Sobiczewska", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "M. Grajber", pos: "Przyjmujący", OVR: 81, ATK: 78, BLK: 66, PRZ: 85, OBR: 84, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "V. Jones-Perry", pos: "Przyjmujący", OVR: 83, ATK: 84, BLK: 70, PRZ: 75, OBR: 78, ROZ: 45, ZAG: 80, TEC: 82 },
        { name: "J. Piasecka", pos: "Przyjmujący", OVR: 80, ATK: 81, BLK: 68, PRZ: 74, OBR: 76, ROZ: 40, ZAG: 76, TEC: 78 },
        { name: "P. Majkowska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 74 },
        { name: "K. Alagierska", pos: "Środkowy", OVR: 84, ATK: 78, BLK: 89, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 78, TEC: 82 },
        { name: "K. Witkowska", pos: "Środkowy", OVR: 82, ATK: 76, BLK: 86, PRZ: 10, OBR: 38, ROZ: 20, ZAG: 82, TEC: 78 },
        { name: "S. Stefanik", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 81, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "J. Pacak", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 72, TEC: 74 },
        { name: "P. Maj-Erwardt", pos: "Libero", OVR: 86, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 65, ZAG: 5, TEC: 85 },
        { name: "K. Drabek", pos: "Libero", OVR: 77, ATK: 5, BLK: 5, PRZ: 80, OBR: 78, ROZ: 55, ZAG: 5, TEC: 76 }
    ]},
    { teamName: "Grot Budowlani Łódź (21/22)", players: [
        { name: "M. Łazowska", pos: "Rozgrywający", OVR: 79, ATK: 26, BLK: 50, PRZ: 15, OBR: 72, ROZ: 83, ZAG: 76, TEC: 79 },
        { name: "E. Polak", pos: "Rozgrywający", OVR: 77, ATK: 24, BLK: 46, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 74, TEC: 77 },
        { name: "A. Cleger", pos: "Atakujący", OVR: 83, ATK: 86, BLK: 70, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 78, TEC: 81 },
        { name: "J. Szczurowska", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 65, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 75, TEC: 76 },
        { name: "M. Fedusio", pos: "Przyjmujący", OVR: 82, ATK: 81, BLK: 68, PRZ: 80, OBR: 78, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 80, ATK: 82, BLK: 66, PRZ: 74, OBR: 75, ROZ: 40, ZAG: 78, TEC: 78 },
        { name: "Z. Górecka", pos: "Przyjmujący", OVR: 81, ATK: 77, BLK: 68, PRZ: 85, OBR: 84, ROZ: 45, ZAG: 75, TEC: 82 },
        { name: "J. Kazała", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 60, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 72, TEC: 75 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 79, ATK: 73, BLK: 83, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 77 },
        { name: "W. Centka", pos: "Środkowy", OVR: 81, ATK: 76, BLK: 85, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 79 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Gawlak", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "J. Łysiak", pos: "Libero", OVR: 85, ATK: 5, BLK: 5, PRZ: 88, OBR: 86, ROZ: 60, ZAG: 5, TEC: 84 },
        { name: "D. Skomorowska", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "IŁ Capital Legionovia Legionowo (21/22)", players: [
        { name: "A. Grabka", pos: "Rozgrywający", OVR: 80, ATK: 28, BLK: 50, PRZ: 15, OBR: 74, ROZ: 84, ZAG: 76, TEC: 80 },
        { name: "D. Szady", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 12, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "O. Różański", pos: "Atakujący", OVR: 85, ATK: 87, BLK: 72, PRZ: 78, OBR: 76, ROZ: 40, ZAG: 82, TEC: 84 }, // Różański grała genialny sezon
        { name: "M. Rasińska", pos: "Atakujący", OVR: 79, ATK: 81, BLK: 66, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 76, TEC: 77 },
        { name: "Y. Lemańczyk", pos: "Przyjmujący", OVR: 81, ATK: 78, BLK: 68, PRZ: 84, OBR: 82, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "S. Silva", pos: "Przyjmujący", OVR: 78, ATK: 80, BLK: 65, PRZ: 72, OBR: 74, ROZ: 40, ZAG: 75, TEC: 77 },
        { name: "Z. Kuligowska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "K. Dite", pos: "Przyjmujący", OVR: 73, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "A. Gryka", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 77 },
        { name: "M. Tokarska", pos: "Środkowy", OVR: 79, ATK: 73, BLK: 82, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "S. Stefanik", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 72, TEC: 74 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "K. Drabek", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 79 },
        { name: "N. Pajdak", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 74, ROZ: 45, ZAG: 5, TEC: 71 }
    ]},
    { teamName: "E.LECLERC MOYA Radomka Radom (21/22)", pos: "Rozgrywający", players: [
        { name: "K. Zaborowska", pos: "Rozgrywający", OVR: 77, ATK: 24, BLK: 48, PRZ: 15, OBR: 72, ROZ: 81, ZAG: 75, TEC: 77 },
        { name: "A. Stachowicz", pos: "Rozgrywający", OVR: 73, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 72 },
        { name: "K. Zaroślińska-Król", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "G. Goezgeç", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 76, TEC: 79 },
        { name: "F. Muresan", pos: "Przyjmujący", OVR: 81, ATK: 83, BLK: 70, PRZ: 75, OBR: 76, ROZ: 45, ZAG: 78, TEC: 80 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 78, ATK: 77, BLK: 66, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 74, TEC: 77 },
        { name: "M. Rybak", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "K. Zapała", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "A. Kąkoł", pos: "Środkowy", OVR: 79, ATK: 75, BLK: 82, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 75, TEC: 77 },
        { name: "K. Moskwa", pos: "Środkowy", OVR: 78, ATK: 74, BLK: 81, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "M. Świrad", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 79, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 72, TEC: 74 },
        { name: "A. Bałucka", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "A. Adamek", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "N. Jęcek", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 50, ZAG: 5, TEC: 71 }
    ]},
    { teamName: "#VolleyWrocław (21/22)", players: [
        { name: "A. Szady", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "M. Łyczakowska", pos: "Rozgrywający", OVR: 74, ATK: 18, BLK: 42, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "A. Kazała", pos: "Atakujący", OVR: 79, ATK: 81, BLK: 66, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 75, TEC: 78 },
        { name: "M. Celińska", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 68, TEC: 71 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 80, ATK: 78, BLK: 66, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 76, TEC: 79 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 68, PRZ: 74, OBR: 76, ROZ: 42, ZAG: 74, TEC: 77 },
        { name: "A. Kąkoł", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 74, ATK: 73, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 77, ATK: 73, BLK: 80, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "A. Gancarz", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 77, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "K. Ociepa", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Pawłowska", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "J. Chorąża", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "BKS BOSTIK Bielsko-Biała (21/22)", players: [
        { name: "J. Nowicka", pos: "Rozgrywający", OVR: 83, ATK: 32, BLK: 55, PRZ: 15, OBR: 74, ROZ: 86, ZAG: 80, TEC: 82 },
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 10, OBR: 64, ROZ: 75, ZAG: 70, TEC: 72 },
        { name: "G. Orvošová", pos: "Atakujący", OVR: 84, ATK: 86, BLK: 72, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 80, TEC: 82 },
        { name: "M. Podlaska", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 62, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 73 },
        { name: "M. Borowczak", pos: "Przyjmujący", OVR: 77, ATK: 75, BLK: 64, PRZ: 76, OBR: 75, ROZ: 42, ZAG: 74, TEC: 75 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 66, PRZ: 74, OBR: 76, ROZ: 40, ZAG: 76, TEC: 77 },
        { name: "W. Szewczyk", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 74, OBR: 70, ROZ: 38, ZAG: 70, TEC: 72 },
        { name: "K. Bartkowska", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 70 },
        { name: "D. Pierzchała", pos: "Środkowy", OVR: 80, ATK: 74, BLK: 84, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 75, TEC: 78 },
        { name: "P. Majkowska", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 81, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "N. Abramajtys", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "A. Mazur", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 60, ZAG: 5, TEC: 78 },
        { name: "K. Nowak", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 45, ZAG: 5, TEC: 71 }
    ]},
    { teamName: "Energa MKS Kalisz (21/22)", players: [
        { name: "K. Wawrzyniak", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 44, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 74 },
        { name: "L. Kaczmarzyk", pos: "Rozgrywający", OVR: 71, ATK: 18, BLK: 38, PRZ: 10, OBR: 64, ROZ: 74, ZAG: 68, TEC: 70 },
        { name: "A. Rasińska", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 66, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 76, TEC: 78 },
        { name: "K. Wajkowska", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 58, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 71 },
        { name: "K. Drużkowska", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 68, PRZ: 70, OBR: 72, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "Z. Kuligowska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 75, OBR: 74, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "A. Bartkowska", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 60, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "E. Cygan", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 70 },
        { name: "Z. Efimienko-Młotkowska", pos: "Środkowy", OVR: 81, ATK: 73, BLK: 88, PRZ: 10, OBR: 36, ROZ: 25, ZAG: 76, TEC: 79 },
        { name: "K. Fedorek", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Cygan", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "K. Calkins", pos: "Środkowy", OVR: 71, ATK: 64, BLK: 72, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Lemańczyk", pos: "Libero", OVR: 81, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "N. Pajdak", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "UNI Opole (21/22)", players: [
        { name: "G. Makarowska", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 44, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "A. Janicka", pos: "Rozgrywający", OVR: 72, ATK: 18, BLK: 38, PRZ: 10, OBR: 64, ROZ: 74, ZAG: 68, TEC: 71 },
        { name: "A. Bjelica", pos: "Atakujący", OVR: 83, ATK: 86, BLK: 70, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 80, TEC: 82 },
        { name: "O. Sieradzka", pos: "Atakujący", OVR: 75, ATK: 76, BLK: 62, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "K. Conceicao", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 66, PRZ: 75, OBR: 76, ROZ: 42, ZAG: 76, TEC: 78 },
        { name: "M. Pamuła", pos: "Przyjmujący", OVR: 75, ATK: 73, BLK: 60, PRZ: 75, OBR: 74, ROZ: 38, ZAG: 70, TEC: 74 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 74, OBR: 70, ROZ: 38, ZAG: 68, TEC: 73 },
        { name: "W. Senica", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 78, ATK: 73, BLK: 80, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "N. Kecher", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "V. Pellegrino", pos: "Środkowy", OVR: 76, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Adamek", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 84, OBR: 82, ROZ: 60, ZAG: 5, TEC: 79 },
        { name: "P. Nowak", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 75, OBR: 73, ROZ: 45, ZAG: 5, TEC: 71 }
    ]},
    { teamName: "Polskie Przetwory Pałac Bydgoszcz (21/22)", players: [
        { name: "M. Mazurek", pos: "Rozgrywający", OVR: 77, ATK: 22, BLK: 42, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 74, TEC: 76 },
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "M. Ter Brugge", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 64, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 74, TEC: 77 },
        { name: "A. Lewandowska", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 58, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 68, TEC: 72 },
        { name: "E. Żurowska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 72, ROZ: 40, ZAG: 70, TEC: 74 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 74, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "K. Różyńska", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 73 },
        { name: "W. Makarewicz", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "K. Zakharenko", pos: "Środkowy", OVR: 77, ATK: 73, BLK: 80, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 75 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Klich", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Witkowska", pos: "Libero", OVR: 82, ATK: 5, BLK: 5, PRZ: 86, OBR: 84, ROZ: 60, ZAG: 5, TEC: 81 },
        { name: "M. Jagła", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 80, OBR: 78, ROZ: 55, ZAG: 5, TEC: 77 }
    ]},
    { teamName: "Joker Świecie (21/22)", players: [
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "M. Łyczakowska", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 38, PRZ: 10, OBR: 64, ROZ: 75, ZAG: 68, TEC: 72 },
        { name: "J. Szumera", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 62, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "A. Kazała", pos: "Atakujący", OVR: 74, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 73 },
        { name: "N. Zakościelna", pos: "Przyjmujący", OVR: 73, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 72 },
        { name: "K. Świstek", pos: "Przyjmujący", OVR: 74, ATK: 73, BLK: 60, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "A. Lemańczyk", pos: "Przyjmujący", OVR: 72, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "E. Ceynowa", pos: "Przyjmujący", OVR: 71, ATK: 68, BLK: 52, PRZ: 68, OBR: 66, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "Y. Usheva", pos: "Środkowy", OVR: 75, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Bałucka", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "D. Moscickaja", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Żurawska", pos: "Libero", OVR: 76, ATK: 5, BLK: 5, PRZ: 78, OBR: 78, ROZ: 50, ZAG: 5, TEC: 75 },
        { name: "M. Justka", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 75, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    // ==========================================
    // SEZON 2020/2021
    // ==========================================
    { teamName: "Grupa Azoty Chemik Police (20/21)", players: [
        { name: "M. Kowalewska", pos: "Rozgrywający", OVR: 86, ATK: 30, BLK: 55, PRZ: 15, OBR: 80, ROZ: 90, ZAG: 78, TEC: 86 },
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 76, ATK: 22, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 74, TEC: 75 },
        { name: "J. Brakocevic-Canzian", pos: "Atakujący", OVR: 89, ATK: 92, BLK: 78, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 84, TEC: 86 },
        { name: "M. Łukasik", pos: "Atakujący", OVR: 81, ATK: 83, BLK: 68, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 76, TEC: 80 },
        { name: "N. Mędrzyk", pos: "Przyjmujący", OVR: 84, ATK: 81, BLK: 68, PRZ: 86, OBR: 84, ROZ: 45, ZAG: 78, TEC: 84 },
        { name: "M. Grajber", pos: "Przyjmujący", OVR: 81, ATK: 77, BLK: 66, PRZ: 85, OBR: 84, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "A. Kazała", pos: "Przyjmujący", OVR: 78, ATK: 76, BLK: 62, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "M. Czyrniańska", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 72, TEC: 74 },
        { name: "A. Kąkolewska", pos: "Środkowy", OVR: 88, ATK: 82, BLK: 94, PRZ: 10, OBR: 40, ROZ: 25, ZAG: 82, TEC: 85 },
        { name: "I. Wasilewska", pos: "Środkowy", OVR: 82, ATK: 77, BLK: 85, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 78, TEC: 79 },
        { name: "M. Tokarska", pos: "Środkowy", OVR: 80, ATK: 74, BLK: 84, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "K. Połeć", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "P. Maj-Erwardt", pos: "Libero", OVR: 87, ATK: 5, BLK: 5, PRZ: 89, OBR: 92, ROZ: 65, ZAG: 5, TEC: 86 },
        { name: "A. Żurawska", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 76, OBR: 75, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "Developres SkyRes Rzeszów (20/21)", players: [
        { name: "M. Krajewska", pos: "Rozgrywający", OVR: 82, ATK: 26, BLK: 52, PRZ: 15, OBR: 74, ROZ: 84, ZAG: 78, TEC: 82 },
        { name: "A. Kaczmar", pos: "Rozgrywający", OVR: 78, ATK: 24, BLK: 48, PRZ: 14, OBR: 72, ROZ: 80, ZAG: 75, TEC: 78 },
        { name: "K. Van Ryk", pos: "Atakujący", OVR: 88, ATK: 90, BLK: 75, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 84, TEC: 85 },
        { name: "M. Rasińska", pos: "Atakujący", OVR: 80, ATK: 82, BLK: 66, PRZ: 10, OBR: 58, ROZ: 30, ZAG: 76, TEC: 78 },
        { name: "J. Blagojević", pos: "Przyjmujący", OVR: 85, ATK: 82, BLK: 68, PRZ: 88, OBR: 86, ROZ: 50, ZAG: 78, TEC: 86 },
        { name: "A. Lazić", pos: "Przyjmujący", OVR: 82, ATK: 83, BLK: 66, PRZ: 78, OBR: 76, ROZ: 42, ZAG: 80, TEC: 80 },
        { name: "Z. Efimienko-Młotkowska", pos: "Przyjmujący", OVR: 80, ATK: 78, BLK: 70, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 75, TEC: 78 },
        { name: "J. Kazała", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 60, PRZ: 75, OBR: 74, ROZ: 38, ZAG: 72, TEC: 75 },
        { name: "A. Stencel", pos: "Środkowy", OVR: 83, ATK: 76, BLK: 86, PRZ: 10, OBR: 36, ROZ: 20, ZAG: 78, TEC: 80 },
        { name: "Z. Efimienko", pos: "Środkowy", OVR: 81, ATK: 74, BLK: 85, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 79 },
        { name: "M. Pol", pos: "Środkowy", OVR: 77, ATK: 70, BLK: 79, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 72, TEC: 75 },
        { name: "M. Jurczyk", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Krzos", pos: "Libero", OVR: 83, ATK: 5, BLK: 5, PRZ: 85, OBR: 84, ROZ: 60, ZAG: 5, TEC: 82 },
        { name: "D. Przybyła", pos: "Libero", OVR: 75, ATK: 5, BLK: 5, PRZ: 78, OBR: 76, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "ŁKS Commercecon Łódź (20/21)", players: [
        { name: "B. Bongaerts", pos: "Rozgrywający", OVR: 84, ATK: 28, BLK: 54, PRZ: 15, OBR: 76, ROZ: 88, ZAG: 80, TEC: 85 },
        { name: "P. Zaborowska", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 44, PRZ: 12, OBR: 68, ROZ: 76, ZAG: 72, TEC: 74 },
        { name: "K. Zaroślińska-Król", pos: "Atakujący", OVR: 85, ATK: 87, BLK: 74, PRZ: 10, OBR: 62, ROZ: 35, ZAG: 80, TEC: 84 },
        { name: "W. Sobiczewska", pos: "Atakujący", OVR: 75, ATK: 76, BLK: 62, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "A. Wójcik", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 66, PRZ: 78, OBR: 76, ROZ: 42, ZAG: 76, TEC: 80 },
        { name: "K. Lazovic", pos: "Przyjmujący", OVR: 82, ATK: 84, BLK: 68, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 78, TEC: 80 },
        { name: "M. Grajber", pos: "Przyjmujący", OVR: 79, ATK: 75, BLK: 64, PRZ: 84, OBR: 82, ROZ: 45, ZAG: 75, TEC: 78 },
        { name: "N. Skrzypkowska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 74 },
        { name: "K. Alagierska", pos: "Środkowy", OVR: 83, ATK: 76, BLK: 88, PRZ: 10, OBR: 38, ROZ: 25, ZAG: 76, TEC: 80 },
        { name: "N. Ninkovic", pos: "Środkowy", OVR: 82, ATK: 77, BLK: 86, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 78, TEC: 80 },
        { name: "J. Pacak", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "S. Stefanik", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "K. Strasz", pos: "Libero", OVR: 84, ATK: 5, BLK: 5, PRZ: 86, OBR: 88, ROZ: 62, ZAG: 5, TEC: 84 },
        { name: "M. Saad", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 }
    ]},
    { teamName: "E.LECLERC MOYA Radomka Radom (20/21)", players: [
        { name: "K. Skorupa", pos: "Rozgrywający", OVR: 85, ATK: 28, BLK: 55, PRZ: 15, OBR: 76, ROZ: 92, ZAG: 78, TEC: 88 },
        { name: "P. Zaborowska", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 70, TEC: 73 },
        { name: "B. Honorio", pos: "Atakujący", OVR: 86, ATK: 88, BLK: 72, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 82, TEC: 84 },
        { name: "S. Łukasik", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 64, PRZ: 10, OBR: 55, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "S. Rodrigues", pos: "Przyjmujący", OVR: 83, ATK: 84, BLK: 68, PRZ: 80, OBR: 78, ROZ: 45, ZAG: 80, TEC: 82 },
        { name: "J. Johnson", pos: "Przyjmujący", OVR: 80, ATK: 82, BLK: 65, PRZ: 74, OBR: 72, ROZ: 40, ZAG: 78, TEC: 78 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 79, ATK: 78, BLK: 64, PRZ: 80, OBR: 78, ROZ: 42, ZAG: 74, TEC: 77 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 75, OBR: 72, ROZ: 38, ZAG: 70, TEC: 74 },
        { name: "J. Łukasik", pos: "Środkowy", OVR: 80, ATK: 75, BLK: 84, PRZ: 10, OBR: 35, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "A. Bałucka", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "K. Moskwa", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 74 },
        { name: "M. Świrad", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "A. Witkowska", pos: "Libero", OVR: 82, ATK: 5, BLK: 5, PRZ: 85, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "A. Adamek", pos: "Libero", OVR: 76, ATK: 5, BLK: 5, PRZ: 78, OBR: 78, ROZ: 50, ZAG: 5, TEC: 75 }
    ]},
    { teamName: "Grot Budowlani Łódź (20/21)", players: [
        { name: "J. Nowicka", pos: "Rozgrywający", OVR: 82, ATK: 30, BLK: 52, PRZ: 15, OBR: 74, ROZ: 85, ZAG: 80, TEC: 81 },
        { name: "O. Poreba", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 10, OBR: 64, ROZ: 75, ZAG: 68, TEC: 72 },
        { name: "V. Jones-Perry", pos: "Atakujący", OVR: 85, ATK: 88, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 82, TEC: 84 },
        { name: "O. Kazała", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 60, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 75 },
        { name: "M. Fedusio", pos: "Przyjmujący", OVR: 81, ATK: 80, BLK: 66, PRZ: 80, OBR: 78, ROZ: 45, ZAG: 75, TEC: 80 },
        { name: "Z. Górecka", pos: "Przyjmujący", OVR: 80, ATK: 76, BLK: 65, PRZ: 84, OBR: 82, ROZ: 45, ZAG: 74, TEC: 81 },
        { name: "P. Damaske", pos: "Przyjmujący", OVR: 78, ATK: 78, BLK: 62, PRZ: 72, OBR: 74, ROZ: 40, ZAG: 76, TEC: 76 },
        { name: "M. Lisiak", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 73 },
        { name: "M. Lisiak (Sro)", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 82, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "K. Różyńska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "W. Centka", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 84, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 76, TEC: 78 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "M. Stenzel", pos: "Libero", OVR: 85, ATK: 5, BLK: 5, PRZ: 88, OBR: 90, ROZ: 62, ZAG: 5, TEC: 85 },
        { name: "D. Skomorowska", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "BKS BOSTIK Bielsko-Biała (20/21)", players: [
        { name: "N. Gajewska", pos: "Rozgrywający", OVR: 78, ATK: 25, BLK: 48, PRZ: 15, OBR: 72, ROZ: 82, ZAG: 76, TEC: 78 },
        { name: "A. Kaczmar", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "G. Orvošová", pos: "Atakujący", OVR: 82, ATK: 85, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 80 },
        { name: "W. Szewczyk", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 68, TEC: 72 },
        { name: "A. Kazała", pos: "Przyjmujący", OVR: 79, ATK: 80, BLK: 65, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 75, TEC: 78 },
        { name: "W. Szlagowska", pos: "Przyjmujący", OVR: 78, ATK: 78, BLK: 64, PRZ: 75, OBR: 74, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "K. Drużkowska", pos: "Przyjmujący", OVR: 76, ATK: 76, BLK: 62, PRZ: 72, OBR: 72, ROZ: 38, ZAG: 72, TEC: 75 },
        { name: "M. Borowczak", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "M. Świrad", pos: "Środkowy", OVR: 78, ATK: 73, BLK: 82, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "M. Janiuk", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 70, TEC: 74 },
        { name: "A. Gawlak", pos: "Środkowy", OVR: 74, ATK: 66, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "N. Abramajtys", pos: "Środkowy", OVR: 73, ATK: 64, BLK: 75, PRZ: 10, OBR: 26, ROZ: 15, ZAG: 66, TEC: 71 },
        { name: "K. Drabek", pos: "Libero", OVR: 78, ATK: 5, BLK: 5, PRZ: 80, OBR: 80, ROZ: 55, ZAG: 5, TEC: 78 },
        { name: "M. Justka", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "DPD IŁCapital Legionovia (20/21)", players: [
        { name: "A. Grabka", pos: "Rozgrywający", OVR: 79, ATK: 26, BLK: 48, PRZ: 15, OBR: 74, ROZ: 83, ZAG: 75, TEC: 78 },
        { name: "D. Szady", pos: "Rozgrywający", OVR: 73, ATK: 20, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 68, TEC: 72 },
        { name: "J. Oliveira Souza", pos: "Atakujący", OVR: 83, ATK: 85, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 80, TEC: 82 },
        { name: "M. Rasińska", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "O. Różański", pos: "Przyjmujący", OVR: 83, ATK: 84, BLK: 70, PRZ: 78, OBR: 76, ROZ: 45, ZAG: 80, TEC: 82 },
        { name: "J. Rivero", pos: "Przyjmujący", OVR: 81, ATK: 82, BLK: 66, PRZ: 75, OBR: 75, ROZ: 40, ZAG: 78, TEC: 80 },
        { name: "D. Szczyrba", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 72, TEC: 75 },
        { name: "K. Dite", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "M. Tokarska", pos: "Środkowy", OVR: 81, ATK: 75, BLK: 85, PRZ: 10, OBR: 36, ROZ: 20, ZAG: 76, TEC: 79 },
        { name: "A. Gryka", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 83, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 75, TEC: 76 },
        { name: "S. Stefanik", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 78, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 70, TEC: 74 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 68, TEC: 72 },
        { name: "K. Lemańczyk", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 83, OBR: 82, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "N. Pajdak", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "Energa MKS Kalisz (20/21)", players: [
        { name: "E. Polak", pos: "Rozgrywający", OVR: 78, ATK: 24, BLK: 48, PRZ: 14, OBR: 70, ROZ: 81, ZAG: 74, TEC: 78 },
        { name: "K. Wawrzyniak", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 42, PRZ: 10, OBR: 65, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "M. Gałkowska", pos: "Atakujący", OVR: 82, ATK: 84, BLK: 70, PRZ: 10, OBR: 60, ROZ: 35, ZAG: 78, TEC: 81 },
        { name: "J. Szczurowska", pos: "Atakujący", OVR: 77, ATK: 79, BLK: 64, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 74, TEC: 76 },
        { name: "Z. Szperniak", pos: "Przyjmujący", OVR: 78, ATK: 77, BLK: 64, PRZ: 76, OBR: 75, ROZ: 40, ZAG: 75, TEC: 77 },
        { name: "M. Gromadowska", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 62, PRZ: 75, OBR: 74, ROZ: 38, ZAG: 74, TEC: 76 },
        { name: "J. Mucha", pos: "Przyjmujący", OVR: 75, ATK: 74, BLK: 60, PRZ: 74, OBR: 72, ROZ: 35, ZAG: 70, TEC: 74 },
        { name: "A. Bartkowska", pos: "Przyjmujący", OVR: 73, ATK: 72, BLK: 58, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "M. Ptak", pos: "Środkowy", OVR: 79, ATK: 74, BLK: 82, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 75, TEC: 77 },
        { name: "K. Fedorek", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 80, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 75 },
        { name: "M. Cygan", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "W. Paluszkiewicz", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "J. Łysiak", pos: "Libero", OVR: 84, ATK: 5, BLK: 5, PRZ: 87, OBR: 86, ROZ: 60, ZAG: 5, TEC: 84 },
        { name: "M. Wysoczańska", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 75, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "Polskie Przetwory Pałac Bydgoszcz (20/21)", players: [
        { name: "M. Mazurek", pos: "Rozgrywający", OVR: 77, ATK: 24, BLK: 44, PRZ: 12, OBR: 70, ROZ: 80, ZAG: 74, TEC: 77 },
        { name: "P. Bałdyga", pos: "Rozgrywający", OVR: 74, ATK: 20, BLK: 40, PRZ: 10, OBR: 66, ROZ: 76, ZAG: 70, TEC: 73 },
        { name: "A. Bączyńska", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 64, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 75, TEC: 77 },
        { name: "A. Lewandowska", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 58, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 68, TEC: 72 },
        { name: "E. Żurowska", pos: "Przyjmujący", OVR: 77, ATK: 76, BLK: 62, PRZ: 78, OBR: 76, ROZ: 40, ZAG: 74, TEC: 76 },
        { name: "M. Ter Brugge", pos: "Przyjmujący", OVR: 76, ATK: 78, BLK: 60, PRZ: 72, OBR: 72, ROZ: 40, ZAG: 74, TEC: 75 },
        { name: "K. Różyńska", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 73 },
        { name: "W. Makarewicz", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "M. Lisiak", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "A. Klich", pos: "Środkowy", OVR: 73, ATK: 66, BLK: 75, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 71 },
        { name: "O. Ziółkowska", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 24, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "M. Jagła", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 80, ROZ: 55, ZAG: 5, TEC: 79 },
        { name: "D. Skomorowska", pos: "Libero", OVR: 72, ATK: 5, BLK: 5, PRZ: 74, OBR: 72, ROZ: 45, ZAG: 5, TEC: 70 }
    ]},
    { teamName: "#VolleyWrocław (20/21)", players: [
        { name: "A. Szady", pos: "Rozgrywający", OVR: 75, ATK: 20, BLK: 45, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 75 },
        { name: "K. Zaborowska", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 10, OBR: 65, ROZ: 75, ZAG: 68, TEC: 72 },
        { name: "K. Jasek", pos: "Atakujący", OVR: 78, ATK: 80, BLK: 66, PRZ: 10, OBR: 58, ROZ: 35, ZAG: 76, TEC: 77 },
        { name: "M. Celińska", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 68, TEC: 71 },
        { name: "N. Murek", pos: "Przyjmujący", OVR: 81, ATK: 80, BLK: 66, PRZ: 82, OBR: 80, ROZ: 45, ZAG: 76, TEC: 80 },
        { name: "A. Bączyńska", pos: "Przyjmujący", OVR: 78, ATK: 77, BLK: 68, PRZ: 75, OBR: 76, ROZ: 42, ZAG: 74, TEC: 78 },
        { name: "J. Kazała", pos: "Przyjmujący", OVR: 76, ATK: 75, BLK: 62, PRZ: 76, OBR: 74, ROZ: 40, ZAG: 72, TEC: 75 },
        { name: "K. Stronias", pos: "Przyjmujący", OVR: 74, ATK: 73, BLK: 58, PRZ: 72, OBR: 70, ROZ: 35, ZAG: 70, TEC: 72 },
        { name: "D. Witowska", pos: "Środkowy", OVR: 77, ATK: 72, BLK: 80, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 76 },
        { name: "A. Gancarz", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 32, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Lewandowska", pos: "Środkowy", OVR: 75, ATK: 68, BLK: 76, PRZ: 10, OBR: 30, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "K. Ociepa", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Pawłowska", pos: "Libero", OVR: 80, ATK: 5, BLK: 5, PRZ: 82, OBR: 84, ROZ: 60, ZAG: 5, TEC: 80 },
        { name: "J. Chorąża", pos: "Libero", OVR: 74, ATK: 5, BLK: 5, PRZ: 76, OBR: 74, ROZ: 50, ZAG: 5, TEC: 73 }
    ]},
    { teamName: "Joker Świecie (20/21)", players: [
        { name: "K. Chmielewska", pos: "Rozgrywający", OVR: 75, ATK: 22, BLK: 42, PRZ: 12, OBR: 68, ROZ: 78, ZAG: 72, TEC: 74 },
        { name: "M. Łyczakowska", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 38, PRZ: 10, OBR: 64, ROZ: 75, ZAG: 68, TEC: 72 },
        { name: "J. Szumera", pos: "Atakujący", OVR: 76, ATK: 78, BLK: 62, PRZ: 10, OBR: 54, ROZ: 30, ZAG: 74, TEC: 75 },
        { name: "K. Marcyniuk", pos: "Atakujący", OVR: 74, ATK: 76, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 73 },
        { name: "N. Zakościelna", pos: "Przyjmujący", OVR: 74, ATK: 72, BLK: 58, PRZ: 74, OBR: 72, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "K. Świstek", pos: "Przyjmujący", OVR: 74, ATK: 73, BLK: 60, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 68, TEC: 72 },
        { name: "A. Lemańczyk", pos: "Przyjmujący", OVR: 73, ATK: 70, BLK: 55, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 71 },
        { name: "E. Ceynowa", pos: "Przyjmujący", OVR: 71, ATK: 68, BLK: 52, PRZ: 68, OBR: 66, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "M. Jurczyk", pos: "Środkowy", OVR: 78, ATK: 72, BLK: 82, PRZ: 10, OBR: 34, ROZ: 20, ZAG: 74, TEC: 77 },
        { name: "Y. Usheva", pos: "Środkowy", OVR: 75, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Bałucka", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 73 },
        { name: "D. Moscickaja", pos: "Środkowy", OVR: 72, ATK: 64, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 66, TEC: 70 },
        { name: "A. Żurawska", pos: "Libero", OVR: 76, ATK: 5, BLK: 5, PRZ: 78, OBR: 78, ROZ: 50, ZAG: 5, TEC: 75 },
        { name: "M. Justka", pos: "Libero", OVR: 73, ATK: 5, BLK: 5, PRZ: 75, OBR: 74, ROZ: 45, ZAG: 5, TEC: 72 }
    ]},
    { teamName: "Enea PTPS Piła (20/21)", players: [
        { name: "S. Pelczarska", pos: "Rozgrywający", OVR: 73, ATK: 18, BLK: 40, PRZ: 12, OBR: 65, ROZ: 75, ZAG: 70, TEC: 72 },
        { name: "K. Wawrzyniak", pos: "Rozgrywający", OVR: 71, ATK: 15, BLK: 35, PRZ: 10, OBR: 60, ROZ: 72, ZAG: 68, TEC: 70 },
        { name: "M. Skrzypkowska", pos: "Atakujący", OVR: 75, ATK: 77, BLK: 62, PRZ: 10, OBR: 52, ROZ: 30, ZAG: 72, TEC: 74 },
        { name: "N. Calkins", pos: "Atakujący", OVR: 73, ATK: 75, BLK: 60, PRZ: 10, OBR: 50, ROZ: 30, ZAG: 70, TEC: 72 },
        { name: "P. Majkowska", pos: "Przyjmujący", OVR: 74, ATK: 73, BLK: 58, PRZ: 72, OBR: 70, ROZ: 38, ZAG: 70, TEC: 73 },
        { name: "A. Bartkowska", pos: "Przyjmujący", OVR: 73, ATK: 72, BLK: 56, PRZ: 70, OBR: 68, ROZ: 35, ZAG: 68, TEC: 72 },
        { name: "E. Ceynowa", pos: "Przyjmujący", OVR: 71, ATK: 70, BLK: 52, PRZ: 68, OBR: 66, ROZ: 35, ZAG: 66, TEC: 70 },
        { name: "K. Dite", pos: "Przyjmujący", OVR: 70, ATK: 68, BLK: 50, PRZ: 66, OBR: 65, ROZ: 30, ZAG: 65, TEC: 69 },
        { name: "G. Ponikowska", pos: "Środkowy", OVR: 76, ATK: 70, BLK: 78, PRZ: 10, OBR: 30, ROZ: 20, ZAG: 72, TEC: 74 },
        { name: "A. Gawlak", pos: "Środkowy", OVR: 74, ATK: 68, BLK: 76, PRZ: 10, OBR: 28, ROZ: 15, ZAG: 70, TEC: 72 },
        { name: "M. Ociepa", pos: "Środkowy", OVR: 72, ATK: 65, BLK: 74, PRZ: 10, OBR: 25, ROZ: 15, ZAG: 68, TEC: 70 },
        { name: "K. Laskowska", pos: "Środkowy", OVR: 71, ATK: 64, BLK: 72, PRZ: 10, OBR: 24, ROZ: 15, ZAG: 66, TEC: 69 },
        { name: "M. Saad", pos: "Libero", OVR: 79, ATK: 5, BLK: 5, PRZ: 80, OBR: 82, ROZ: 55, ZAG: 5, TEC: 79 },
        { name: "D. Skomorowska", pos: "Libero", OVR: 71, ATK: 5, BLK: 5, PRZ: 72, OBR: 70, ROZ: 40, ZAG: 5, TEC: 70 }
    ]}
];

// ... (TUTAJ NA GÓRZE ZOSTAWIASZ SWOJE BAZY TRENERÓW I ZESPOŁÓW) ...
// ==========================================
// ZMIENNE GRY I LOGIKA DRAFTU
// ==========================================
let teamName = "Dream Team";
let currentCoach = null;
let currentTeam = null;
let skipsLeft = 3;
let rerollsLeft = 1;
let availableTeams = [];

let myRoster = {
    "Rozgrywający": null, "Atakujący": null, "Przyjmujący1": null, 
    "Przyjmujący2": null, "Środkowy1": null, "Środkowy2": null, "Libero": null
};

let matchStats = {};
let seasonStats = {}; // Globalna pamięć statystyk sezonu
let myScore = 0, oppScore = 0, mySets = 0, oppSets = 0;
let isMyServe = true, matchInterval = null, currentSpeed = 1000, matchFinished = false;

let season = {
    teams: [], standings: {}, schedule: [], currentRound: 0,
    isPlayoffs: false, playoffStage: "", playoffMatchups: [], myCurrentOpponent: null,
    bonusesApplied: false, regularSeasonFinished: false, playerExitStage: null
};

window.onload = function() {
    availableTeams = [...teams];
    const btnSkip = document.getElementById("btn-skip");
    if(btnSkip) btnSkip.onclick = skipTeam;
    
    const teamInput = document.getElementById("team-name-input");
    if(teamInput) {
        teamInput.addEventListener("input", function() { teamName = this.value || "Dream Team"; });
    }
    renderCoaches();
};

function renderCoaches() {
    let shuffledCoaches = [...coaches].sort(() => 0.5 - Math.random());
    let options = shuffledCoaches.slice(0, 3);
    const container = document.getElementById("coach-options");
    container.innerHTML = "";

    options.forEach(coach => {
        const btn = document.createElement("div");
        btn.className = "coach-card";
        btn.innerHTML = `
            <span style="font-size: 1.1em; margin-bottom: 5px; text-align: center;"><strong>${coach.name}</strong></span>
            <span style="color: #f1c40f; text-align: center; font-size: 0.9em;">Bonus: ${coach.bonusText}</span>
        `;
        btn.onclick = () => selectCoach(coach);
        container.appendChild(btn);
    });

    const btnReroll = document.getElementById("btn-reroll");
    btnReroll.innerText = `Wylosuj Ponownie (${rerollsLeft}) 🎲`;
    btnReroll.disabled = rerollsLeft <= 0;
    if (rerollsLeft <= 0) {
        btnReroll.style.backgroundColor = "#7f8c8d";
        btnReroll.style.cursor = "not-allowed";
    }

    btnReroll.onclick = () => {
        if (rerollsLeft > 0) { rerollsLeft--; renderCoaches(); }
    };
}

function selectCoach(selected) {
    let inputName = document.getElementById("team-name-input").value;
    if(inputName.trim() !== "") teamName = inputName;
    document.getElementById("team-display-name").innerText = teamName;

    currentCoach = selected;
    document.getElementById("current-trainer").innerText = currentCoach.name;
    document.getElementById("trainer-bonus").innerText = "Bonus: " + currentCoach.bonusText;
    document.getElementById("coach-modal").style.display = "none";
    drawNextTeam();
}

function drawNextTeam() {
    if (availableTeams.length === 0) { alert("Brakuje drużyn w bazie!"); return; }
    const randomIndex = Math.floor(Math.random() * availableTeams.length);
    currentTeam = availableTeams[randomIndex];
    availableTeams.splice(randomIndex, 1);
    document.getElementById("drawn-team-name").innerText = currentTeam.teamName;
    renderPlayers();
}

function renderPlayers() {
    const container = document.getElementById("available-players");
    container.innerHTML = ""; 
    
    const toggleEl = document.getElementById("toggle-ovr");
    const showOvr = toggleEl ? toggleEl.checked : true;

    currentTeam.players.forEach(player => {
        const btn = document.createElement("button");
        btn.className = "player-btn";
        
        if (showOvr) {
            btn.innerHTML = `${player.name} <br>
            <span style="font-size: 0.8em; opacity: 0.8;">(${player.pos})</span><br>
            <div style="background-color: #f1c40f; color: #000; padding: 2px 5px; border-radius: 3px; font-size: 1.1em; font-weight: 900; margin-top: 3px; display: inline-block; border: 1px solid black;">
                OVR: ${player.OVR}
            </div>`;
        } else {
            btn.innerHTML = `${player.name} <br><span style="font-size: 0.8em; opacity: 0.8;">(${player.pos})</span>`;
        }

        let isSlotFilled = false;
        if (player.pos === "Rozgrywający" && myRoster["Rozgrywający"]) isSlotFilled = true;
        if (player.pos === "Atakujący" && myRoster["Atakujący"]) isSlotFilled = true;
        if (player.pos === "Libero" && myRoster["Libero"]) isSlotFilled = true;
        if (player.pos === "Przyjmujący" && myRoster["Przyjmujący1"] && myRoster["Przyjmujący2"]) isSlotFilled = true;
        if (player.pos === "Środkowy" && myRoster["Środkowy1"] && myRoster["Środkowy2"]) isSlotFilled = true;

        if (isSlotFilled) btn.disabled = true;
        btn.onclick = () => pickPlayer(player);
        container.appendChild(btn);
    });
}

function pickPlayer(player) {
    let assignedSlot = null;
    if (player.pos === "Rozgrywający" && !myRoster["Rozgrywający"]) assignedSlot = "Rozgrywający";
    else if (player.pos === "Atakujący" && !myRoster["Atakujący"]) assignedSlot = "Atakujący";
    else if (player.pos === "Libero" && !myRoster["Libero"]) assignedSlot = "Libero";
    else if (player.pos === "Przyjmujący") {
        if (!myRoster["Przyjmujący1"]) assignedSlot = "Przyjmujący1";
        else if (!myRoster["Przyjmujący2"]) assignedSlot = "Przyjmujący2";
    }
    else if (player.pos === "Środkowy") {
        if (!myRoster["Środkowy1"]) assignedSlot = "Środkowy1";
        else if (!myRoster["Środkowy2"]) assignedSlot = "Środkowy2";
    }

    if (assignedSlot) {
        myRoster[assignedSlot] = player;
        updateCourtUI(assignedSlot, player);
        updateTeamStats();
        
        const isDraftFinished = Object.values(myRoster).every(slot => slot !== null);
        
        if (isDraftFinished) {
            const container = document.getElementById("available-players");
            container.innerHTML = `
                <div style="width: 100%; text-align: center; padding: 15px; background: rgba(0,0,0,0.4); border-radius: 8px; border: 2px dashed #2ecc71;">
                    <h2 style='color:#2ecc71; margin-top: 0; margin-bottom: 10px; font-size: 1.3em;'>🏐 Draft Zakończony!</h2>
                    <button id="btn-start-league-now" class="btn-action" style="background-color: #2ecc71; font-size: 1em; padding: 10px 20px; box-shadow: 0 0 10px #2ecc71; border: 2px solid white; cursor: pointer;">
                        Otwórz Sezon Ligowy 🚀
                    </button>
                </div>
            `;
            const skipBtn = document.getElementById("btn-skip");
            if (skipBtn) skipBtn.style.display = "none";
            document.getElementById("btn-start-league-now").onclick = function() { initializeSeason(); };
        } else {
            drawNextTeam(); 
        }
    }
}

function updateCourtUI(slotId, player) {
    const slotElement = document.getElementById(`slot-${slotId}`);
    slotElement.innerHTML = `${slotId.replace(/[0-9]/g, '')}<br><strong style="color: #f1c40f;">${player.name}</strong><br><span style="font-size: 0.8em;">OVR: ${player.OVR}</span>`;
    slotElement.style.backgroundColor = "rgba(46, 204, 113, 0.4)"; 
}

function updateTeamStats() {
    let tOVR = 0, tATK = 0, tBLK = 0, tPRZ = 0, tOBR = 0, tZAG = 0;
    let playerCount = 0;
    for (let position in myRoster) {
        let player = myRoster[position];
        if (player) {
            tOVR += player.OVR; tATK += player.ATK; tBLK += player.BLK;
            tPRZ += player.PRZ; tOBR += player.OBR; tZAG += player.ZAG;
            playerCount++;
        }
    }
    if (playerCount > 0) {
        document.getElementById("team-ovr").innerText = Math.round(tOVR / playerCount);
        document.getElementById("team-atk").innerText = Math.round(tATK / playerCount);
        document.getElementById("team-blk").innerText = Math.round(tBLK / playerCount);
        document.getElementById("team-prz").innerText = Math.round(tPRZ / playerCount);
        document.getElementById("team-obr").innerText = Math.round(tOBR / playerCount);
        document.getElementById("team-srv").innerText = Math.round(tZAG / playerCount) + "%";
    }
}

function skipTeam() {
    if (skipsLeft > 0) {
        skipsLeft--;
        document.getElementById("btn-skip").innerText = `Pomiń Drużynę (${skipsLeft})`;
        drawNextTeam();
        if (skipsLeft === 0) {
            document.getElementById("btn-skip").disabled = true;
            document.getElementById("btn-skip").style.backgroundColor = "#7f8c8d";
        }
    }
}

// ==========================================
// SYSTEM LIGOWY I TERMINARZ
// ==========================================
function getTeamAverageOVR(teamObj) {
    if(teamObj.isPlayer) return parseInt(document.getElementById("team-ovr").innerText) || 75;
    let total = 0;
    let sortedPlayers = [...teamObj.originalRoster.players].sort((a,b) => b.OVR - a.OVR).slice(0,7);
    sortedPlayers.forEach(p => total += p.OVR);
    return Math.round(total / 7);
}

function initializeSeason() {
    season.teams = [];
    season.standings = {};
    season.schedule = [];
    season.currentRound = 0;
    season.isPlayoffs = false;
    season.regularSeasonFinished = false;
    season.playerExitStage = null;

    if (!season.bonusesApplied) {
        for (let pos in myRoster) {
            let player = myRoster[pos];
            if (player) {
                if (currentCoach.type === "DEF_BOOST" && (pos === "Libero" || pos.includes("Przyjmujący"))) player.OBR += currentCoach.value;
                if (currentCoach.type === "BLK_BOOST" && pos.includes("Środkowy")) player.BLK += currentCoach.value;
                if (currentCoach.type === "TEC_BOOST") player.TEC += currentCoach.value;
                if (currentCoach.type === "ATK_BOOST" && (pos === "Atakujący" || pos.includes("Przyjmujący"))) player.ATK += currentCoach.value;
                if (currentCoach.type === "SRV_BOOST") player.ZAG += currentCoach.value;
                if (currentCoach.type === "PRZ_BOOST" && (pos === "Libero" || pos.includes("Przyjmujący"))) player.PRZ += currentCoach.value;
            }
        }
        updateTeamStats();
        season.bonusesApplied = true;
    }

    document.querySelector(".top-section").style.display = "none";
    document.querySelector(".court-container").style.display = "none";

    let shuffled = [...teams].sort(() => 0.5 - Math.random());
    let aiTeams = shuffled.slice(0, 7);
    
    season.teams = [{ teamName: teamName, isPlayer: true, originalRoster: myRoster }];
    aiTeams.forEach(t => season.teams.push({ teamName: t.teamName, isPlayer: false, originalRoster: t }));

    season.teams.forEach(t => {
        t.avgOvr = getTeamAverageOVR(t);
        season.standings[t.teamName] = { pts: 0, w: 0, l: 0, setsW: 0, setsL: 0 };
    });

    let n = 8;
    let tIds = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let round = 0; round < n - 1; round++) {
        let roundMatches = [];
        for (let i = 0; i < n / 2; i++) roundMatches.push([ tIds[i], tIds[n - 1 - i] ]);
        season.schedule.push(roundMatches);
        tIds.splice(1, 0, tIds.pop());
    }

    showSeasonHub();
}

function showSeasonHub() {
    document.getElementById("season-hub-modal").style.display = "flex";
    
    if(season.isPlayoffs) {
        document.getElementById("season-hub-title").innerText = "Drabinka Mistrzowska";
        document.getElementById("season-round-info").innerText = "Faza Play-Off";
        renderPlayoffHub();
    } else {
        if (season.currentRound === 7) {
            document.getElementById("season-round-info").innerText = `Koniec Sezonu Zasadniczego`;
            document.getElementById("btn-next-match").innerText = "Przejdź do Fazy Play-Off 🏆";
            document.getElementById("btn-next-match").onclick = setupPlayoffs;
        } else {
            document.getElementById("season-round-info").innerText = `Kolejka: ${season.currentRound + 1} / 7`;
            document.getElementById("btn-next-match").innerText = "Zagraj Mecz Kolejki 🏐";
            document.getElementById("btn-next-match").onclick = playLeagueRound;
        }
        renderLeagueTable();
    }
}

function renderLeagueTable() {
    let st = Object.keys(season.standings).map(key => ({ name: key, data: season.standings[key] }));

    st.sort((a, b) => {
        if(b.data.pts !== a.data.pts) return b.data.pts - a.data.pts;
        let aRatio = a.data.setsL === 0 ? a.data.setsW : a.data.setsW / a.data.setsL;
        let bRatio = b.data.setsL === 0 ? b.data.setsW : b.data.setsW / b.data.setsL;
        return bRatio - aRatio;
    });

    const tbody = document.getElementById("standings-body");
    tbody.innerHTML = "";

    st.forEach((t, index) => {
        let tr = document.createElement("tr");
        if(t.name === teamName) tr.className = "my-team-row";
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td style="text-align: left;">${t.name}</td>
            <td><strong>${t.data.pts}</strong></td>
            <td>${t.data.w}</td>
            <td>${t.data.l}</td>
            <td>${t.data.setsW}</td>
            <td>${t.data.setsL}</td>
        `;
        tbody.appendChild(tr);
    });
}

function playLeagueRound() {
    let matches = season.schedule[season.currentRound];
    document.getElementById("season-hub-modal").style.display = "none";
    
    matches.forEach(matchInfo => {
        let t1 = season.teams[matchInfo[0]];
        let t2 = season.teams[matchInfo[1]];

        if (t1.isPlayer || t2.isPlayer) {
            season.myCurrentOpponent = t1.isPlayer ? t2 : t1;
            setupPlayerMatch(season.myCurrentOpponent);
        } else {
            let result = fastSimulateAIMatch(t1, t2);
            updateStandings(t1.teamName, t2.teamName, result.s1, result.s2);
        }
    });
}

function fastSimulateAIMatch(t1, t2) {
    let probT1 = 0.5 + ((t1.avgOvr - t2.avgOvr) * 0.025);
    probT1 = Math.max(0.15, Math.min(0.85, probT1)); 
    let s1 = 0, s2 = 0;
    while(s1 < 3 && s2 < 3) { if(Math.random() < probT1) s1++; else s2++; }
    return { s1: s1, s2: s2 };
}

function updateStandings(name1, name2, sets1, sets2) {
    let st1 = season.standings[name1], st2 = season.standings[name2];
    st1.setsW += sets1; st1.setsL += sets2;
    st2.setsW += sets2; st2.setsL += sets1;

    if (sets1 === 3) {
        st1.w++; st2.l++;
        if (sets2 <= 1) st1.pts += 3; else { st1.pts += 2; st2.pts += 1; }
    } else {
        st2.w++; st1.l++;
        if (sets1 <= 1) st2.pts += 3; else { st2.pts += 2; st1.pts += 1; }
    }
}

// ==========================================
// KONTRASTOWY SILNIK MECZOWY GRACZA
// ==========================================
function setupPlayerMatch(opponent) {
    initStats();
    mySets = 0; oppSets = 0; myScore = 0; oppScore = 0; matchFinished = false;
    
    document.getElementById("final-my-team").innerText = teamName;
    document.getElementById("opponent-name-final").innerText = opponent.teamName;
    document.getElementById("result-modal").style.display = "block";
    document.getElementById("btn-return-hub").style.display = "none";
    document.getElementById("time-controls").style.display = "flex";
    
    document.getElementById("score-my").innerText = "0";
    document.getElementById("score-opp").innerText = "0";
    document.getElementById("sets-my").innerText = "0";
    document.getElementById("sets-opp").innerText = "0";
    
    document.getElementById("play-by-play").innerHTML = "<span style='color:#bdc3c7;'>Sędzia daje znak. Zaczynamy!</span><br>";
    
    renderStatsTable();
    startMatchLoop();
}

function initStats() {
    for (let pos in myRoster) {
        let p = myRoster[pos];
        if (p) {
            // Dodano przPoz do logiki statystyk
            matchStats[p.name] = {
                name: p.name, pos: p.pos, ptsTot: 0, ptsBP: 0, wl: 0, srvTot: 0, srvErr: 0, srvAce: 0,
                przTot: 0, przErr: 0, przExc: 0, przPoz: 0, atkTot: 0, atkErr: 0, atkBlk: 0, atkPkt: 0, blkPkt: 0
            };
        }
    }
}

function playSinglePoint() {
    let pointForMe = false;
    let actionLog = "";
    const myPlayersArr = Object.values(myRoster).filter(p => p !== null);
    let oppOVR = season.myCurrentOpponent.avgOvr;

    let teamBlk = parseInt(document.getElementById("team-blk").innerText) / 100;
    let teamObr = parseInt(document.getElementById("team-obr").innerText) / 100;

    if (isMyServe) {
        let servers = myPlayersArr.filter(p => p.pos !== "Libero");
        let server = servers[Math.floor(Math.random() * servers.length)];
        let sStats = matchStats[server.name];

        sStats.srvTot++;
        let srvRoll = Math.random() * 100;
        
        if (srvRoll < (server.ZAG / 9)) { 
            sStats.srvAce++; sStats.ptsTot++; sStats.ptsBP++; sStats.wl++;
            actionLog = `AS SERWISOWY! ${server.name} posyła atomowe uderzenie!`; pointForMe = true;
        } else if (srvRoll > (100 - (100 - server.ZAG) / 3)) {
            sStats.srvErr++; sStats.wl--;
            actionLog = `Błąd zagrywki. ${server.name} uderza w siatkę.`; pointForMe = false;
        } else {
            let oppAtkPower = oppOVR / 100;
            let roll = Math.random();
            let blockChance = 0.08 + (teamBlk * 0.06); 
            let oppErrorChance = 0.09 - ((oppOVR - 75) * 0.001);

            if (roll < blockChance) { 
                let middles = myPlayersArr.filter(p => p.pos.includes("Środkowy"));
                let blocker = middles.length > 0 && Math.random() < 0.65 ? middles[Math.floor(Math.random() * middles.length)] : myPlayersArr.filter(p => p.pos !== "Libero")[Math.floor(Math.random() * myPlayersArr.filter(p => p.pos !== "Libero").length)];
                let bStats = matchStats[blocker.name];
                bStats.blkPkt++; bStats.ptsTot++; bStats.ptsBP++; bStats.wl++;
                actionLog = `MONSTER BLOK! ${blocker.name} zatrzymuje atak rywalek!`; pointForMe = true;
            } else if (roll < blockChance + oppErrorChance) { 
                actionLog = `Przeciwnik atakuje bez bloku w aut! Punkt dla nas.`; pointForMe = true;
            } else if (roll < 0.52 + (oppAtkPower * 0.05)) { 
                actionLog = `Rywalki skutecznie kończą akcję na skrzydle.`; pointForMe = false;
            } else { 
                // --- DYSTRYBUCJA 60% NA PRZYJMUJĄCE W KONTRZE ---
                let rollAtk = Math.random();
                let attacker;
                let atakujacy = myPlayersArr.filter(p => p.pos === "Atakujący");
                let przyjmujacy = myPlayersArr.filter(p => p.pos.includes("Przyjmujący"));
                let srodkowi = myPlayersArr.filter(p => p.pos.includes("Środkowy"));

                if (rollAtk < 0.60 && przyjmujacy.length > 0) attacker = przyjmujacy[Math.floor(Math.random() * przyjmujacy.length)];
                else if (rollAtk < 0.90 && atakujacy.length > 0) attacker = atakujacy[0];
                else if (srodkowi.length > 0) attacker = srodkowi[Math.floor(Math.random() * srodkowi.length)];
                else attacker = myPlayersArr.filter(p => p.pos !== "Libero" && p.pos !== "Rozgrywający")[0];

                let aStats = matchStats[attacker.name];
                aStats.atkTot++;
                
                let atkPower = (attacker.ATK * 0.55 + attacker.TEC * 0.45) / 100;
                let counterRoll = Math.random();
                
                // SKUTECZNOŚĆ COFNIĘTA DO OPTYMALNEGO 0.48
                if (counterRoll < (atkPower * 0.48)) { 
                    aStats.atkPkt++; aStats.ptsTot++; sStats.ptsBP++; aStats.wl++;
                    actionLog = `Znakomite podbicie w obronie i kontra! ${attacker.name} punktuje!`; pointForMe = true;
                } else if (counterRoll > 0.85) { 
                    aStats.atkErr++; aStats.wl--;
                    actionLog = `Kontra zerwana. ${attacker.name} bije w aut.`; pointForMe = false;
                } else if (counterRoll > 0.75) {
                    aStats.atkBlk++; aStats.wl--;
                    actionLog = `Nasz atak z kontry zatrzymany szczelnym blokiem.`; pointForMe = false;
                } else {
                    actionLog = `Przeciwniczki bronią naszą kontrę. Punkt dla rywalek.`; pointForMe = false;
                }
            }
        }
    } else { 
        let srvRollOpp = Math.random() * 100;
        let oppAceChance = 4 + ((oppOVR - 75) * 0.15);
        let oppErrChance = 8 - ((oppOVR - 75) * 0.1);

        if (srvRollOpp < oppAceChance) { 
            let receivers = myPlayersArr.filter(p => p.pos === "Libero" || p.pos.includes("Przyjmujący"));
            let receiver = receivers[Math.floor(Math.random() * receivers.length)];
            matchStats[receiver.name].przTot++;
            matchStats[receiver.name].przErr++;
            matchStats[receiver.name].wl--;
            actionLog = `As serwisowy przeciwniczek. ${receiver.name} zaskoczona w przyjęciu.`; pointForMe = false;
        } else if (srvRollOpp > 100 - oppErrChance) { 
            actionLog = `Przeciwniczki psują serwis na nasze szczęście! Punkt.`; pointForMe = true;
        } else { 
            let receivers = myPlayersArr.filter(p => p.pos === "Libero" || p.pos.includes("Przyjmujący"));
            let receiver = receivers[Math.floor(Math.random() * receivers.length)];
            let rStats = matchStats[receiver.name];
            rStats.przTot++;

            let passRoll = Math.random() * 100;
            let perfectPass = false;
            
            if (passRoll < receiver.PRZ) { 
                rStats.przExc++; 
                rStats.przPoz++; 
                perfectPass = true;
            } else if (passRoll < receiver.PRZ + 20) {
                rStats.przPoz++;
            }

            let rollAtk = Math.random();
            let attacker;
            let atakujacy = myPlayersArr.filter(p => p.pos === "Atakujący");
            let przyjmujacy = myPlayersArr.filter(p => p.pos.includes("Przyjmujący"));
            let srodkowi = myPlayersArr.filter(p => p.pos.includes("Środkowy"));

            let srodkowySzansa = perfectPass ? 0.35 : 0.10; 
            
            if (rollAtk < srodkowySzansa && srodkowi.length > 0) attacker = srodkowi[Math.floor(Math.random() * srodkowi.length)];
            else if (rollAtk < srodkowySzansa + 0.35 && atakujacy.length > 0) attacker = atakujacy[0];
            else if (przyjmujacy.length > 0) attacker = przyjmujacy[Math.floor(Math.random() * przyjmujacy.length)];
            else attacker = myPlayersArr.filter(p => p.pos !== "Libero" && p.pos !== "Rozgrywający")[0];

            let aStats = matchStats[attacker.name];
            aStats.atkTot++;

            let myAtkPower = (attacker.ATK * 0.55 + attacker.TEC * 0.45) / 100;
            if (perfectPass) myAtkPower *= 1.25; 

            let myAtkRoll = Math.random();
            let killChance = myAtkPower * 0.53; 

            if (myAtkRoll < killChance) { 
                aStats.atkPkt++; aStats.ptsTot++; aStats.wl++;
                actionLog = `Świetna pierwsza akcja! ${attacker.name} wbija gwoździa!`; pointForMe = true;
            } else if (myAtkRoll > 0.86) { 
                aStats.atkErr++; aStats.wl--;
                actionLog = `Atak w siatkę. ${attacker.name} nie przebija piłki.`; pointForMe = false;
            } else if (myAtkRoll > 0.75) { 
                aStats.atkBlk++; aStats.wl--;
                actionLog = `${attacker.name} nadziała się na szczelny blok rywalek!`; pointForMe = false;
            } else { 
                if (Math.random() < (teamObr * 0.38)) { 
                    if (Math.random() < 0.6) {
                        aStats.atkPkt++; aStats.ptsTot++; aStats.wl++;
                        actionLog = `Obroniony kontratak rywalek i ponowny atak ${attacker.name} daje nam punkt!`; pointForMe = true;
                    } else {
                        actionLog = `Długa wymiana pełna podbić, ale ostatecznie tracimy punkt.`; pointForMe = false;
                    }
                } else {
                    actionLog = `Rywalki podbijają i wyprowadzają natychmiastową kontrę.`; pointForMe = false;
                }
            }
        }
    }

    if (pointForMe) { myScore++; isMyServe = true; } else { oppScore++; isMyServe = false; }
    return { pointForMe, actionLog };
}

function checkSetAndMatch(logDiv) {
    let targetScore = (mySets + oppSets === 4) ? 15 : 25; 
    if ((myScore >= targetScore || oppScore >= targetScore) && Math.abs(myScore - oppScore) >= 2) {
        let setAlert = "";
        if (myScore > oppScore) { 
            mySets++; 
            setAlert = `<span style="color: #f1c40f; font-weight:bold;">*** SET DLA NAS! (${myScore}:${oppScore}) ***</span><br>`; 
        } else { 
            oppSets++; 
            setAlert = `<span style="color: #e74c3c; font-weight:bold;">*** SET DLA RYWALI (${myScore}:${oppScore}) ***</span><br>`; 
        }
        
        logDiv.innerHTML = setAlert + logDiv.innerHTML;

        myScore = 0; oppScore = 0;
        document.getElementById("sets-my").innerText = mySets;
        document.getElementById("sets-opp").innerText = oppSets;

        if (mySets === 3 || oppSets === 3) {
            matchFinished = true;
            renderStatsTable();
            document.getElementById("time-controls").style.display = "none";
            document.getElementById("btn-return-hub").style.display = "block";
            logDiv.innerHTML = `<strong style="font-size: 1.2em; color: ${mySets===3 ? '#2ecc71' : '#e74c3c'};">KONIEC MECZU! Wynik: ${mySets}:${oppSets}</strong><br>` + logDiv.innerHTML;
            return true; 
        }
    }
    return false; 
}

function startMatchLoop() {
    if (matchInterval) clearInterval(matchInterval);
    const logDiv = document.getElementById("play-by-play");

    matchInterval = setInterval(() => {
        if (matchFinished) { clearInterval(matchInterval); return; }
        
        let result = playSinglePoint();
        let color = result.pointForMe ? "#2ecc71" : "#e74c3c";
        
        let newEntry = `<span style="color: ${color};">[${myScore}:${oppScore}] ${result.actionLog}</span><br>`;
        logDiv.innerHTML = newEntry + logDiv.innerHTML;
        
        let lines = logDiv.innerHTML.split('<br>');
        if (lines.length > 25) { logDiv.innerHTML = lines.slice(0, 25).join('<br>'); }
        
        document.getElementById("score-my").innerText = myScore;
        document.getElementById("score-opp").innerText = oppScore;
        
        renderStatsTable();
        checkSetAndMatch(logDiv);
    }, currentSpeed);
}

function changeSpeed(ms) { if(matchFinished) return; currentSpeed = ms; startMatchLoop(); }

function instantSimulation() {
    if(matchFinished) return;
    if (matchInterval) clearInterval(matchInterval);
    const logDiv = document.getElementById("play-by-play");
    logDiv.innerHTML = `<strong>-- EXPRESOWA SYMULACJA DO KOŃCA --</strong><br>` + logDiv.innerHTML;
    while (!matchFinished) { playSinglePoint(); checkSetAndMatch(logDiv); }
    document.getElementById("score-my").innerText = myScore;
    document.getElementById("score-opp").innerText = oppScore;
    renderStatsTable();
}

function renderStatsTable() {
    const tbody = document.getElementById("stats-table-body");
    tbody.innerHTML = "";
    for (let playerName in matchStats) {
        let s = matchStats[playerName];
        
        let przPozPct = s.przTot > 0 ? Math.round((s.przPoz / s.przTot) * 100 * 0.65) + "%" : "-";
        let przExcPct = s.przTot > 0 ? Math.round((s.przExc / s.przTot) * 100 * 0.4) + "%" : "-";
        
        // Prawdziwa matematyka ataku i efektywności
        let atkExcPct = s.atkTot > 0 ? Math.round((s.atkPkt / s.atkTot) * 100) + "%" : "-";
        let atkEffPct = s.atkTot > 0 ? Math.round(((s.atkPkt - s.atkErr - s.atkBlk) / s.atkTot) * 100) + "%" : "-";
        
        let wlColor = s.wl > 0 ? "#2ecc71" : (s.wl < 0 ? "#e74c3c" : "#ecf0f1");

        tbody.innerHTML += `<tr>
            <td style="text-align: left; font-weight: bold; font-size:0.95em;">${s.name}</td>
            <td><strong style="color:white;">${s.ptsTot}</strong> | <span style="color:#bdc3c7;">${s.ptsBP}</span> | <span style="color: ${wlColor}; font-weight: bold;">${s.wl > 0 ? '+'+s.wl : s.wl}</span></td>
            <td><span style="color:#bdc3c7;">${s.srvTot} | ${s.srvErr}</span> | <strong style="color:#f1c40f;">${s.srvAce}</strong></td>
            <td><span style="color:#bdc3c7;">${s.przTot} | ${s.przErr}</span> | <strong style="color:#3498db;">${przPozPct}</strong> | <strong style="color:#2ecc71;">${przExcPct}</strong></td>
            <td><span style="color:#bdc3c7;">${s.atkTot} | ${s.atkErr} | ${s.atkBlk}</span> | <strong style="color:#2ecc71;">${s.atkPkt}</strong> | ${atkExcPct} | <strong>${atkEffPct}</strong></td>
            <td><strong style="color:#e67e22;">${s.blkPkt}</strong></td>
        </tr>`;
    }
}

// ==========================================
// SUMARYCZNE STATYSTYKI SEZONU (ZAPIS)
// ==========================================
function updateSeasonStats() {
    for (let p in matchStats) {
        if (!seasonStats[p]) {
            seasonStats[p] = JSON.parse(JSON.stringify(matchStats[p]));
        } else {
            seasonStats[p].ptsTot += matchStats[p].ptsTot;
            seasonStats[p].ptsBP += matchStats[p].ptsBP;
            seasonStats[p].wl += matchStats[p].wl;
            seasonStats[p].srvTot += matchStats[p].srvTot;
            seasonStats[p].srvErr += matchStats[p].srvErr;
            seasonStats[p].srvAce += matchStats[p].srvAce;
            seasonStats[p].przTot += matchStats[p].przTot;
            seasonStats[p].przErr += matchStats[p].przErr;
            seasonStats[p].przPoz += matchStats[p].przPoz;
            seasonStats[p].przExc += matchStats[p].przExc;
            seasonStats[p].atkTot += matchStats[p].atkTot;
            seasonStats[p].atkErr += matchStats[p].atkErr;
            seasonStats[p].atkBlk += matchStats[p].atkBlk;
            seasonStats[p].atkPkt += matchStats[p].atkPkt;
            seasonStats[p].blkPkt += matchStats[p].blkPkt;
        }
    }
}

function showSeasonSummary(champion) {
    document.getElementById("season-hub-modal").style.display = "none";
    document.getElementById("result-modal").style.display = "none";
    document.getElementById("season-summary-modal").style.display = "flex";

    let grade = "C";
    let color = "#e74c3c";
    let desc = "Rozczarowujący sezon. Szybkie odpadnięcie z Play-Off. Warto przemyśleć strategię draftu.";

    if (champion === teamName) {
        grade = "S+"; color = "#f1c40f"; desc = "ABSOLUTNA DOMINACJA! Zbudowałeś drużynę marzeń i wznosisz Puchar!";
    } else if (season.playerExitStage === "RUNDA FINAŁOWA") {
        grade = "A"; color = "#2ecc71"; desc = "Znakomity sezon. Dotarłeś do samego finału, zabrakło tylko kropki nad 'i'.";
    } else if (season.playerExitStage === "PÓŁFINAŁY") {
        grade = "B"; color = "#3498db"; desc = "Solidny wynik. Półfinał to dobra baza, ale w przyszłym roku musisz wzmocnić słabe punkty.";
    }

    document.getElementById("manager-grade").innerText = grade;
    document.getElementById("manager-grade").style.color = color;
    document.getElementById("manager-desc").innerText = desc;

    const tbody = document.getElementById("season-stats-body");
    tbody.innerHTML = "";

    let sortedPlayers = Object.values(seasonStats).sort((a,b) => b.ptsTot - a.ptsTot);

    sortedPlayers.forEach(s => {
        let przPozPct = s.przTot > 0 ? Math.round((s.przPoz / s.przTot) * 100 * 0.65) + "%" : "-";
        let przExcPct = s.przTot > 0 ? Math.round((s.przExc / s.przTot) * 100 * 0.4) + "%" : "-";
        
        let atkExcPct = s.atkTot > 0 ? Math.round((s.atkPkt / s.atkTot) * 100) + "%" : "-";
        let atkEffPct = s.atkTot > 0 ? Math.round(((s.atkPkt - s.atkErr - s.atkBlk) / s.atkTot) * 100) + "%" : "-";
        
        tbody.innerHTML += `<tr>
            <td style="text-align: left; font-weight: bold; font-size:1.05em;">${s.name} <br><span style="font-size:0.7em; font-weight:normal; color:#bdc3c7;">${s.pos}</span></td>
            <td><strong style="color:white; font-size:1.2em;">${s.ptsTot}</strong></td>
            <td><strong style="color:#f1c40f;">${s.srvAce}</strong> | <span style="color:#e74c3c;">${s.srvErr}</span></td>
            <td><span style="color:#bdc3c7;">${s.przTot} | ${s.przErr}</span> | <strong style="color:#3498db;">${przPozPct}</strong> | <strong style="color:#2ecc71;">${przExcPct}</strong></td>
            <td><strong style="color:#2ecc71;">${s.atkPkt}</strong> | ${atkExcPct} | <strong>${atkEffPct}</strong></td>
            <td><strong style="color:#e67e22; font-size:1.2em;">${s.blkPkt}</strong></td>
        </tr>`;
    });
}

// ==========================================
// DRABINKA PLAY-OFF I POWROTY
// ==========================================
function returnToSeasonHub() {
    updateSeasonStats(); 
    document.getElementById("result-modal").style.display = "none";
    
    if(!season.isPlayoffs) {
        updateStandings(teamName, season.myCurrentOpponent.teamName, mySets, oppSets);
        season.currentRound++;
        
        if (season.currentRound === 7 && !season.regularSeasonFinished) {
            season.regularSeasonFinished = true;
            showSeasonHub(); 
        } else if (season.currentRound > 7 || (season.currentRound === 7 && season.regularSeasonFinished)) {
            setupPlayoffs();
        } else {
            showSeasonHub();
        }
    } else {
        processPlayoffResult();
    }
}

function drawBracketMatch(m) {
    let isMyMatch = (m.t1 === teamName || m.t2 === teamName);
    let activeStage = season.playoffMatchups.some(p => p.id === m.id);
    
    let borderCol = isMyMatch ? "#2ecc71" : "#34495e";
    let bgCol = isMyMatch ? "#143020" : "#1e272e";
    
    if (activeStage && !m.finished) { borderCol = "#f1c40f"; if(isMyMatch) bgCol = "#3d320b"; }
    
    let t1W = m.wins1 === 2;
    let t2W = m.wins2 === 2;
    let opacity = (m.t1 === "TBD" && !m.finished) ? '0.4' : '1';
    
    let label = "";
    if(m.isFinal) label = `<div style="font-size:0.7em; color:#f1c40f; margin-bottom:5px; font-weight:bold;">WIELKI FINAŁ</div>`;
    if(m.isThirdPlace) label = `<div style="font-size:0.7em; color:#e67e22; margin-bottom:5px; font-weight:bold;">O 3 MIEJSCE</div>`;

    return `
    <div class="bracket-match ${isMyMatch ? 'my-match' : ''}" style="border-color: ${borderCol}; background-color: ${bgCol}; opacity: ${opacity};">
        ${label}
        <div class="bracket-team ${t1W ? 'winner' : ''}">
            <span>${m.t1.substring(0, 20)}${m.t1.length>20?'...':''}</span>
            <span class="bracket-score">${m.wins1}</span>
        </div>
        <div class="bracket-team ${t2W ? 'winner' : ''}">
            <span>${m.t2.substring(0, 20)}${m.t2.length>20?'...':''}</span>
            <span class="bracket-score">${m.wins2}</span>
        </div>
    </div>`;
}

function setupPlayoffs() {
    season.isPlayoffs = true;
    season.playoffStage = "ĆWIERĆFINAŁY";
    
    let st = Object.keys(season.standings).map(key => ({ name: key, data: season.standings[key] }));
    st.sort((a, b) => {
        if(b.data.pts !== a.data.pts) return b.data.pts - a.data.pts;
        let aRatio = a.data.setsL === 0 ? a.data.setsW : a.data.setsW / a.data.setsL;
        let bRatio = b.data.setsL === 0 ? b.data.setsW : b.data.setsW / b.data.setsL;
        return bRatio - aRatio;
    });

    let top8 = st.map(t => t.name);

    season.bracket = {
        qf: [
            { id: "QF1", t1: top8[0], t2: top8[7], wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD" },
            { id: "QF2", t1: top8[3], t2: top8[4], wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD" },
            { id: "QF3", t1: top8[1], t2: top8[6], wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD" },
            { id: "QF4", t1: top8[2], t2: top8[5], wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD" }
        ],
        sf: [
            { id: "SF1", t1: "TBD", t2: "TBD", wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD" },
            { id: "SF2", t1: "TBD", t2: "TBD", wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD" }
        ],
        finals: [
            { id: "3P", t1: "TBD", t2: "TBD", wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD", isThirdPlace: true },
            { id: "F", t1: "TBD", t2: "TBD", wins1: 0, wins2: 0, finished: false, winner: "TBD", loser: "TBD", isFinal: true }
        ]
    };
    
    season.playoffMatchups = season.bracket.qf;
    showSeasonHub();
}

function renderPlayoffHub() {
    document.getElementById("table-container").style.display = "none";
    const infoDiv = document.getElementById("playoff-info");
    infoDiv.style.display = "block";
    infoDiv.style.maxWidth = "100%";
    
    let html = `
    <h3 style="font-size: 1.6em; color: #f1c40f; margin-bottom: 20px; text-transform: uppercase;">DRABINKA: ${season.playoffStage}</h3>
    <div class="bracket-wrapper">
        <div class="bracket">
            <div class="bracket-col">
                <h4>Ćwierćfinały</h4>
                ${season.bracket.qf.map(m => drawBracketMatch(m)).join('')}
            </div>
            <div class="bracket-col">
                <h4>Półfinały</h4>
                ${season.bracket.sf.map(m => drawBracketMatch(m)).join('')}
            </div>
            <div class="bracket-col">
                <h4 style="color:#f1c40f;">Finały</h4>
                ${season.bracket.finals.map(m => drawBracketMatch(m)).join('')}
            </div>
        </div>
    </div>`;

    infoDiv.innerHTML = html;
    
    const btn = document.getElementById("btn-next-match");
    if (season.champion) { btn.style.display = "none"; return; }

    let myMatch = season.playoffMatchups.find(m => (m.t1 === teamName || m.t2 === teamName) && !m.finished);
    
    if(myMatch) {
        btn.style.display = "inline-block";
        btn.innerText = "Zagraj Mecz Play-Off 🏆";
        btn.onclick = () => {
            season.playoffMatchups.filter(m => m !== myMatch && !m.finished).forEach(aiMatch => {
                let aiT1 = season.teams.find(t => t.teamName === aiMatch.t1);
                let aiT2 = season.teams.find(t => t.teamName === aiMatch.t2);
                let res = fastSimulateAIMatch(aiT1, aiT2);
                if(res.s1 === 3) aiMatch.wins1++; else aiMatch.wins2++;
                if(aiMatch.wins1 === 2) { aiMatch.finished = true; aiMatch.winner = aiMatch.t1; aiMatch.loser = aiMatch.t2; }
                if(aiMatch.wins2 === 2) { aiMatch.finished = true; aiMatch.winner = aiMatch.t2; aiMatch.loser = aiMatch.t1; }
            });
            
            let oppName = myMatch.t1 === teamName ? myMatch.t2 : myMatch.t1;
            season.myCurrentOpponent = season.teams.find(t => t.teamName === oppName);
            document.getElementById("season-hub-modal").style.display = "none";
            setupPlayerMatch(season.myCurrentOpponent);
        };
    } else {
        let anyUnfinished = season.playoffMatchups.some(m => !m.finished);
        if(anyUnfinished) {
            btn.style.display = "inline-block";
            btn.innerText = "Symuluj Resztę Par AI ⏩";
            btn.onclick = () => {
                season.playoffMatchups.filter(m => !m.finished).forEach(aiMatch => {
                    let aiT1 = season.teams.find(t => t.teamName === aiMatch.t1);
                    let aiT2 = season.teams.find(t => t.teamName === aiMatch.t2);
                    let res = fastSimulateAIMatch(aiT1, aiT2);
                    if(res.s1 === 3) aiMatch.wins1++; else aiMatch.wins2++;
                    if(aiMatch.wins1 === 2) { aiMatch.finished = true; aiMatch.winner = aiMatch.t1; aiMatch.loser = aiMatch.t2; }
                    if(aiMatch.wins2 === 2) { aiMatch.finished = true; aiMatch.winner = aiMatch.t2; aiMatch.loser = aiMatch.t1; }
                });
                processPlayoffResult();
            };
        } else {
            btn.style.display = "inline-block";
            btn.innerText = "Zatwierdź Wyniki i Przejdź Dalej ➔";
            btn.onclick = () => { processPlayoffResult(); };
        }
    }
}

function processPlayoffResult() {
    let myMatch = season.playoffMatchups.find(m => (m.t1 === teamName || m.t2 === teamName) && !m.finished);
    
    if (myMatch) {
        if (mySets === 3) {
            if(myMatch.t1 === teamName) myMatch.wins1++; else myMatch.wins2++;
        } else {
            if(myMatch.t1 === teamName) myMatch.wins2++; else myMatch.wins1++;
        }

        if (myMatch.wins1 === 2 || myMatch.wins2 === 2) {
            myMatch.finished = true;
            myMatch.winner = myMatch.wins1 === 2 ? myMatch.t1 : myMatch.t2;
            myMatch.loser = myMatch.wins1 === 2 ? myMatch.t2 : myMatch.t1;
            
            // ZAPISZ ETAP, W KTÓRYM ODPADŁ GRACZ! (Naprawa błędnej oceny A)
            if (myMatch.loser === teamName) {
                season.playerExitStage = season.playoffStage;
            }
        }
    }

    let allFinished = season.playoffMatchups.every(m => m.finished);
    
    if (allFinished) {
        if (season.playoffStage === "ĆWIERĆFINAŁY") {
            season.playoffStage = "PÓŁFINAŁY";
            season.bracket.sf[0].t1 = season.bracket.qf[0].winner;
            season.bracket.sf[0].t2 = season.bracket.qf[1].winner;
            season.bracket.sf[1].t1 = season.bracket.qf[2].winner;
            season.bracket.sf[1].t2 = season.bracket.qf[3].winner;
            season.playoffMatchups = season.bracket.sf;
            showSeasonHub();
        } else if (season.playoffStage === "PÓŁFINAŁY") {
            season.playoffStage = "RUNDA FINAŁOWA";
            season.bracket.finals[0].t1 = season.bracket.sf[0].loser; 
            season.bracket.finals[0].t2 = season.bracket.sf[1].loser;
            season.bracket.finals[1].t1 = season.bracket.sf[0].winner; 
            season.bracket.finals[1].t2 = season.bracket.sf[1].winner;
            season.playoffMatchups = season.bracket.finals;
            showSeasonHub();
        } else if (season.playoffStage === "RUNDA FINAŁOWA") {
            season.champion = season.bracket.finals[1].winner;
            renderPlayoffHub(); 
            setTimeout(() => { showSeasonSummary(season.champion); }, 1500); 
        }
    } else {
        showSeasonHub();
    }
}