<template>
    <div class="">
        <p>I've been vegan for:</p>
        <h1> 
            <span v-text="years"></span> years
            <span v-if="months > 0">
                <span v-text="months"></span> month<span v-if="months > 1">s</span> 
            </span>
            <span v-if="days> 0">
              &nbsp;<span v-text="days"></span> day<span v-if="days > 1">s</span> 
            </span>
            &nbsp;<span v-text="hours"></span> hour<span v-if="hours > 1">s</span>
            &nbsp;<span v-text="minutes"></span> minute<span v-if="minutes > 1">s</span> and
            &nbsp;<span v-text="seconds"></span> second<span v-if="seconds > 1">s</span>
        </h1>
    </div>
</template>

<script>
import moment from '../../node_modules/moment/moment.js'

export default {
    name: 'HowLongVegan',
    data() {
        return {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    mounted () {
        this.$options.interval = setInterval(this.updateDateTime, 1000)
    },
    beforeDestroy () {
        clearInterval(this.$options.interval)
    },
    methods: {
        updateDateTime() {
            let todaysDate = moment()
            const startDate = moment("2014-08-31 08:00:00")
            const milliseconds = todaysDate.diff(startDate, 'milliseconds ')
            const duration = moment.duration(milliseconds, 'milliseconds')
            this.years = duration.years()
            this.months = duration.months()
            this.days = duration.days()
            this.hours = duration.hours()
            this.minutes = duration.minutes()
            this.seconds = duration.seconds()
        }
    }
}
</script>
