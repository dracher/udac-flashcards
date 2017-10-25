import { AsyncStorage } from "react-native"
import { Notifications, Permissions } from "expo"

const NOTIFICATION_KEY = "udac-flashcards:Notifications"

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  )
}

function createNotification() {
  return {
    title: "Today's Schedule",
    body: "Don't forget resolove a quizz today!",
    ios: {
      sound: true
    },
    android: {
      priority: "high",
      sound: true,
      sticky: false,
      vibrate: true
    }
  }
}

export function launchNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data == null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync()
            let tmr = new Date()
            tmr.setDate(tmr.getDate() + 1)
            tmr.setHours(19)
            tmr.setMinutes(30)
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tmr,
              repeat: "day"
            })
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
