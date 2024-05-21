import CalendarStrip from 'react-native-calendar-strip'
import React from 'react'

import themeColors from '../../../../assets/styles/themeColors'

const Calendar = () => {
        return <CalendarStrip
            scrollable={true}
            calendarAnimation={{type: 'sequence', duration: 30}}
            daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
            style={{height: 120, paddingTop: 20, paddingBottom: 10}}
            calendarHeaderStyle={{color: themeColors.navy0, fontSize : 18, marginBottom : 10}}
            calendarColor={themeColors.white0}
            dateNumberStyle={{color: themeColors.navy0, fontSize : 25}}
            dateNameStyle={{color: themeColors.navy0, fontSize : 15}}
            highlightDateNumberStyle={{color: themeColors.yellow0, fontSize : 25}}
            highlightDateNameStyle={{color: themeColors.yellow0, fontSize : 15}}
            disabledDateNameStyle={{color: themeColors.yellow0}}
            disabledDateNumberStyle={{color: themeColors.yellow0}}
            // datesWhitelist={datesWhitelist}
            // datesBlacklist={datesBlacklist}
            // iconLeft={require('./img/left-arrow.png')}
            // iconRight={require('./img/right-arrow.png')}
            iconContainer={{flex: 0.1}}
        />
}

export default Calendar