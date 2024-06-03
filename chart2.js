var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Maquina 01','Maquina 02','Maquina 03','Linha de produção 01','Linha de produção 02','Linha de produção 03',],

        datasets: [{
            label: 'Taxa de Eficiência (%)',
                    data: [78, 92, 85, 67, 90, 74],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderWidth: 3
        }]

    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Taxa de Eficiência das Máquinas'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});