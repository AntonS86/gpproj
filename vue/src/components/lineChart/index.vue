<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        chartData: {
            type: Object,
            required: false
        },
    },
    computed: {
        options() {
            return {
                scales: {
                    yAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        },
                    }],
                    xAxes: [{
                        display: true,
                        gridLines: {
                            display: true
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        },
        config() {
            return {
                labels: this.chartData.labels,
                datasets: [
                    {
                        label: 'Cpu utilization',
                        borderColor: '#249EBF',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        backgroundColor: "transparent",
                        data: this.chartData.cpu_utilization,
                        fill: false,
                    },
                    {
                        label: 'Disk utilization',
                        borderColor: 'red',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: 'red',
                        backgroundColor: 'transparent',
                        data: this.chartData.disk_utilization,
                        fill: false,
                    },
                    {
                        label: 'Memory utilization',
                        borderColor: 'green',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: 'green',
                        backgroundColor: 'transparent',
                        data: this.chartData.memory_utilization,
                        fill: false,
                    }
                ]
            }
        }
    },
    mounted () {
        this.renderChart(this.config, this.options);
    },
    watch: {
        chartData() {
            this.renderChart(this.config, this.options);
        }
    }
}
</script>