<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
    extends: Line,
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object,
            required: false
        },
    },
    data () {
        return {
            options: {

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
        }
    },
    mounted () {
        console.log(this.chartData.labels)
        this.renderChart({
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
        }, this.options)
    },
}
</script>