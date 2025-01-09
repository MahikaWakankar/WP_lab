// Data array of objects
const populationData = [
    { country: 'INDIA', year: '1998', population: 85 },
    { country: 'INDIA', year: '1999', population: 90 },
    { country: 'INDIA', year: '2000', population: 100 },
    { country: 'USA', year: '1998', population: 30 },
    { country: 'USA', year: '1999', population: 35 },
    { country: 'UK', year: '1998', population: 25 },
    { country: 'UK', year: '1999', population: 30 },
    { country: 'UK', year: '2000', population: 35 }
];

// Function to generate table rows from data
const generateTable = () => {
    const table = document.getElementById('populationTable');
    
    // Loop through data array and create rows
    populationData.forEach((data, index) => {
        const row = table.insertRow();
        
        // Create country cell (use rowspan for repeated countries)
        const countryCell = row.insertCell(0);
        countryCell.textContent = data.country;
        if (index > 0 && populationData[index - 1].country === data.country) {
            countryCell.remove();
        } else {
            countryCell.classList.add('country');
            if (populationData.filter(item => item.country === data.country).length > 1) {
                countryCell.rowSpan = populationData.filter(item => item.country === data.country).length;
            }
        }

        // Create year cell
        const yearCell = row.insertCell(1);
        yearCell.textContent = data.year;
        yearCell.classList.add('year');

        // Create population cell
        const populationCell = row.insertCell(2);
        populationCell.textContent = data.population;
        populationCell.classList.add('population');
    });
};

// Generate the table on page load
window.onload = generateTable;
