const pdfMapping = {
    'Hálózatkezelés': 'pdf/halozatkezeles.pdf',
    'Elektronika': 'pdf/elektronika.pdf',
    'Digitális áramkörök': 'pdf/digitalis_aramkorok.pdf',
    'Adatbáziskezelés': 'pdf/adatbaziskezeles.pdf',
    'Mikrovezérlő programozás': 'pdf/mikrovezerlo.pdf',
    'PLC programozás': 'pdf/plc.pdf',
    'Számítógépes szimuláció': 'pdf/szimulacio.pdf',
    'Programozás alapjai': 'pdf/programozas_alapjai.pdf',
    'Programfejlesztés': 'pdf/programfejlesztes.pdf',
    'Robottechnika CAD/CAM': 'pdf/robottechnika.pdf',
    'IOT': 'pdf/iot.pdf',
    'Munkavállalói angol': 'pdf/munkavallaloi_angol.pdf'
};

function showSection(title, subjects) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('portfolio-view').style.display = 'block';
    document.getElementById('view-title').innerText = title;
    
    const grid = document.getElementById('grid-content');
    grid.innerHTML = ''; 

    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'portfolio-item';
        card.onclick = () => window.open(pdfMapping[subject] || '#', '_blank');
        card.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent);">📁</div>
            <h4 style="margin-bottom: 0.5rem;">${subject}</h4>
            <p style="color: #666; font-size: 0.8rem;">Jelinek Raven dokumentáció</p>
            <div style="margin-top: 1.5rem; color: var(--accent); font-size: 0.8rem; font-weight: 700;">DOKUMENTUM MEGNYITÁSA</div>
        `;
        grid.appendChild(card);
    });
    window.scrollTo(0, 0);
}

function goHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('portfolio-view').style.display = 'none';
}