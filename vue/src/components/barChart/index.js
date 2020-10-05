import {HorizontalBar} from "vue-chartjs";

export default {
    extends: HorizontalBar,
    props: {
        chartData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
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
                        },
                        ticks: {
                            beginAtZero: true
                        },
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    height: 1000,
                }
            };
        },
        config() {
            return {
                labels: this.chartData.labels,
                datasets: [
                    {
                        label: "Cpu utilization",
                        backgroundColor: "#249EBF",
                        data: this.chartData.cpu_utilization,
                        fill: false,
                    },
                    {
                        label: "Disk utilization",
                        backgroundColor: "red",
                        data: this.chartData.disk_utilization,
                        fill: false,
                    },
                    {
                        label: "Memory utilization",
                        backgroundColor: "green",
                        data: this.chartData.memory_utilization,
                        fill: false,
                    }
                ]
            };
        }
    },
    mounted() {
        this.renderChart(this.config, this.options);
    },
    watch: {
        chartData() {
            this.renderChart(this.config, this.options);
        }
    }
};