
        var ctx = document.getElementById('lineChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Dia 01', 'Dia 02', 'Dia 03', 'Dia 04', 'Dia 05', 'Dia 06', 'Dia 07', 'Dia 08', 'Dia 09', 'Dia 10',
                         'Dia 11', 'Dia 12', 'Dia 13', 'Dia 14', 'Dia 15', 'Dia 16', 'Dia 17', 'Dia 18', 'Dia 19', 'Dia 20',
                         'Dia 21', 'Dia 22', 'Dia 23', 'Dia 24', 'Dia 25', 'Dia 26', 'Dia 27', 'Dia 28', 'Dia 29', 'Dia 30'],
                datasets: [{
                    label: 'Nº de peças por dia',
                    data: [52, 26, 44, 33, 50, 20, 54, 55, 76, 85, 90, 38, 34, 41, 42, 39, 68, 64, 89, 73, 47, 69, 35, 82, 46, 25, 75, 80, 87, 77],
                    backgroundColor: 'rgba(41, 155, 99, 0.2)',
                    borderColor: 'rgba(41, 155, 99, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgb(0, 0, 0)'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            beforeTitle: function(context) {
                                return 'O gráfico a seguir contém a linha de produção diária de uma máquina X';
                            }
                        }
                    }
                }
            }
        });