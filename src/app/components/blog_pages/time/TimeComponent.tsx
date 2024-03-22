export interface Time {
    time: string
}

const TimeComponent = (props: Time) => {
    const time = props.time.split('-')

    const writeMonth = (monthInt: string): string => {
        switch (monthInt) {
            case '01' :
                return 'января'
            case '02' :
                return 'февраля'
            case '03' :
                return 'марта'
            case '04' :
                return 'апреля'
            case '05' :
                return 'мая'
            case '06' :
                return 'июня'
            case '07' :
                return 'июля'
            case '08' :
                return 'августа'
            case '09' :
                return 'сентября'
            case '10' :
                return 'октября'
            case '11' :
                return 'ноября'
            case '12' :
                return 'декабря'
        }
        return ''
    }

    return (
        <div>
            {time[2][0] + time[2][1] + ' '}
            {writeMonth(time[1]) + ' '}
            {time[0]}
        </div>
    )
}

export default TimeComponent