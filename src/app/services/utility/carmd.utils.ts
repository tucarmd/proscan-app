import { ChangeDetectorRef } from '@angular/core';
import { createAnimation } from '@ionic/core';
/* eslint-disable prefer-arrow/prefer-arrow-functions */
declare let cordova: any;

export class CarMDUtils {
  static aMinutesByMs = 60_000;
  static clone(array: any[]) {
    return array.map((e) => Object.assign(new Object(), e));
  }
  static sleep(ms = 0) {
    return new Promise<any>((res) => {
      setTimeout(() => res(null), ms);
    });
  }
  static get isOnDevice() {
    return typeof cordova !== 'undefined';
  }

  static getKilobytesPerSecond(
    totalTimeInMillisecond: number,
    totalBytes: number = 2048
  ) {
    if (
      totalTimeInMillisecond == null ||
      totalTimeInMillisecond <= 0 ||
      totalBytes == null ||
      totalBytes <= 0
    ) {
      return 0;
    }
    return (totalBytes / 1024 / (totalTimeInMillisecond / 1000)).toFixed(3);
  }
  static refreshUI(changeDetectorRef: ChangeDetectorRef) {
    try {
      changeDetectorRef.detectChanges();
    } catch (err) {}
  }
  static getYearFromDateTimeString(date) {
    date = new Date(date);
    return date.getFullYear() ?? new Date().getFullYear();
  }

  static versionString2Number(version: string) {
    return Number(
      version
        .replace('V', '')
        .replace('v', '')
        .split('.')
        .map((e) => {
          if (e.length === 1) {
            return '0' + e;
          }
          return e;
        })
        .join('')
    );
  }
}

export function dateTimeAgoByString(
  timeStringLocal: string,
  useLongUnit = false
) {
  const second = Math.floor(
    (Date.now() - new Date(timeStringLocal).getTime()) / 1_000
  );
  const arrUnit = [
    {
      unit: 'year',
      symbol: 'y',
      symbolMulti: 'years',
      equalSecond: 60 * 60 * 24 * 365,
    },
    {
      unit: 'month',
      symbol: 'mon',
      symbolMulti: 'months',
      equalSecond: 60 * 60 * 24 * 30,
    },
    {
      unit: 'week',
      symbol: 'w',
      symbolMulti: 'weeks',
      equalSecond: 60 * 60 * 24 * 7,
    },
    {
      unit: 'day',
      symbol: 'd',
      symbolMulti: 'days',
      equalSecond: 60 * 60 * 24,
    },
    {
      unit: 'hour',
      symbol: 'h',
      symbolMulti: 'hours',
      equalSecond: 60 * 60,
    },
    {
      unit: 'minute',
      symbol: 'min',
      symbolMulti: 'minutes',
      equalSecond: 60,
    },
    {
      unit: 'second',
      symbol: 's',
      symbolMulti: 'seconds',
      equalSecond: 1,
    },
  ];
  for (let i = 0; i <= arrUnit.length - 1; i++) {
    if (second >= arrUnit[i].equalSecond) {
      const time = Math.floor(second / arrUnit[i].equalSecond);
      const symbol = arrUnit[i].symbol;
      const longSymbol = arrUnit[i].unit;
      const symbolMulti = arrUnit[i].symbolMulti;
      if (useLongUnit) {
        return time + ' ' + (time > 1 ? symbolMulti : longSymbol) + ' ago';
      }
      return time + symbol + ' ' + 'ago';
    }
  }
  return '';
}

export function dateTimeAgo(second = 0, useLongUnit = false) {
  const arrUnit = [
    {
      unit: 'year',
      symbol: 'y',
      symbolMulti: 'years',
      equalSecond: 60 * 60 * 24 * 365,
    },
    {
      unit: 'month',
      symbol: 'mon',
      symbolMulti: 'months',
      equalSecond: 60 * 60 * 24 * 30,
    },
    {
      unit: 'week',
      symbol: 'w',
      symbolMulti: 'weeks',
      equalSecond: 60 * 60 * 24 * 7,
    },
    {
      unit: 'day',
      symbol: 'd',
      symbolMulti: 'days',
      equalSecond: 60 * 60 * 24,
    },
    {
      unit: 'hour',
      symbol: 'h',
      symbolMulti: 'hours',
      equalSecond: 60 * 60,
    },
    {
      unit: 'minute',
      symbol: 'min',
      symbolMulti: 'minutes',
      equalSecond: 60,
    },
    {
      unit: 'second',
      symbol: 's',
      symbolMulti: 'seconds',
      equalSecond: 1,
    },
  ];
  for (let i = 0; i <= arrUnit.length - 1; i++) {
    if (second >= arrUnit[i].equalSecond) {
      const time = Math.floor(second / arrUnit[i].equalSecond);
      const symbol = arrUnit[i].symbol;
      const longSymbol = arrUnit[i].unit;
      const symbolMulti = arrUnit[i].symbolMulti;
      if (useLongUnit) {
        return time + ' ' + (time > 1 ? symbolMulti : longSymbol) + ' ago';
      }
      return time + symbol + ' ' + 'ago';
    }
  }
  return '';
}

export function numberWithCommas(x = 0) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return x;
}
export function showLabelTimeRecord(timeStamp = 0) {
  const strArray = [
    // month from 0-11
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let label = '';
  const currentDate = new Date().getDate();
  const currentMonth = strArray[new Date().getMonth()];
  const recordDate = new Date(timeStamp).getDate();
  const recordMonth = strArray[new Date(timeStamp).getMonth()];
  const recordYear = new Date(timeStamp).getFullYear();
  const timeHour = calculatorTimeDisplayFormat(timeStamp, false);
  // today: Today at time
  // # and current month: Month Day
  // # year: Month Day, Year
  label =
    recordMonth +
    ' ' +
    (recordDate <= 9 ? '0' + recordDate : recordDate) +
    ', ' +
    recordYear;
  if (currentMonth === recordMonth) {
    label =
      recordMonth + ' ' + (recordDate <= 9 ? '0' + recordDate : recordDate);
    if (currentDate === recordDate) {
      label = 'Today at ' + timeHour;
    }
  }
  return label;
}
export function showTimeRecordDetail(timeStamp = 0, todayAtMode = true, forceAt = false) {
  const strArray = [
    // month from 0-11
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let label = '';
  const currentDate = new Date().getDate();
  const recordDate = new Date(timeStamp).getDate();
  const recordMonth = strArray[new Date(timeStamp).getMonth()];
  const recordYear = new Date(timeStamp).getFullYear();
  const timeHour = calculatorTimeDisplayFormat(timeStamp, false);
  // today -> show Today at time else show MMM DD, YYYY
  label =
    recordMonth +
    ' ' +
    (recordDate <= 9 ? '0' + recordDate : recordDate) +
    ', ' +
    recordYear;
  if (todayAtMode && currentDate === recordDate) {
    label = 'Today at ' + timeHour;
  } else if (forceAt){
    label += ' at ' + timeHour;
  }
  return label;
}
// time display format HH:MM:SS or HH:MM AM/PM
export function calculatorTimeDisplayFormat(
  time = 0,
  checkShowSecond = false,
  isShowAmPm = true
) {
  const timeInput = new Date(time);
  const hours =
    timeInput.getHours() > 12
      ? timeInput.getHours() - 12
      : timeInput.getHours();
  const amPM = timeInput.getHours() >= 12 ? 'PM' : 'AM';
  const minutes =
    timeInput.getMinutes() < 10
      ? '0' + timeInput.getMinutes()
      : timeInput.getMinutes();
  const seconds =
    timeInput.getSeconds() < 10
      ? '0' + timeInput.getSeconds()
      : timeInput.getSeconds();
  const timeFormat = checkShowSecond
    ? hours + ':' + minutes + ':' + seconds
    : hours + ':' + minutes;
  return isShowAmPm ? timeFormat + ' ' + amPM : timeFormat;
}
export function durationTime(startTime: number = 0, totalTime: number = 0) {
  // time display
  // if <60s show format HH:MM:ss else HH:MM
  const checkShowSecond = totalTime < 60 * 1000;
  return `${calculatorTimeDisplayFormat(
    startTime - totalTime,
    checkShowSecond,
    false
  )} - ${calculatorTimeDisplayFormat(startTime, checkShowSecond)}`;
}
export function msToTime(s = 0) {
  // return ms time to HH:mm:ss
  // Pad to 2 or 3 digits, default is 2
  function pad(n, z = 2) {
    return ('00' + n).slice(-z);
  }
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;
  const result =
    hrs < 1
      ? pad(mins) + ':' + pad(secs)
      : pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
  return result;
}
export class Rs2ModalAnimation {
  static ionApp3DEnterAnimation() {
    document.querySelector('ion-app').style.setProperty('background', 'black');
    document
      .querySelector('ion-router-outlet')
      .style.setProperty('border-radius', '0.9125rem');
    const backdropAnimation = createAnimation()
      .addElement(document.querySelector('ion-router-outlet'))
      .fromTo(
        'transform',
        'scaleX(1) translateY(0)',
        'scaleX(0.96) translateY(max(1rem, env(safe-area-inset-top)))'
      );
    return createAnimation().duration(200).addAnimation([backdropAnimation]);
  }
  static ionApp3DLeaveAnimation() {
    CarMDUtils.sleep(300).then(() =>
      document.querySelector('ion-app').style.removeProperty('background')
    );
    document
      .querySelector('ion-router-outlet')
      .style.setProperty('border-radius', '0');
    const backdropAnimation = createAnimation()
      .addElement(document.querySelector('ion-router-outlet'))
      .fromTo(
        'transform',
        'scaleX(0.96) translateY(max(1rem, env(safe-area-inset-top)))',
        'scaleX(1) translateY(0)'
      );
    return createAnimation()
      .easing('ease-out')
      .duration(300)
      .addAnimation([backdropAnimation]);
  }
}
export class Rs2Animation {
  static transformFromTo(
    baseEl: HTMLElement,
    from: string,
    to: string,
    ms: number = 300
  ) {
    const backdropAnimation = createAnimation()
      .addElement(baseEl)
      .fromTo('transform', from, to);
    return createAnimation()
      .addElement(baseEl)
      .easing('linear')
      .duration(ms)
      .addAnimation([backdropAnimation]);
  }
  static leftToRight(baseEl: HTMLElement, ms: number = 300) {
    const backdropAnimation = createAnimation()
      .addElement(baseEl)
      .fromTo('transform', 'translateX(-50%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1');
    return createAnimation()
      .addElement(baseEl)
      .easing('cubic-bezier(0.75, 0.42, 0.2, 1)')
      .duration(ms)
      .addAnimation([backdropAnimation]);
  }
  static rightToLeft(baseEl: HTMLElement, ms: number = 300) {
    const backdropAnimation = createAnimation()
      .addElement(baseEl)
      .fromTo('transform', 'translateX(50%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1');
    return createAnimation()
      .addElement(baseEl)
      .easing('cubic-bezier(0.75, 0.42, 0.2, 1)')
      .duration(ms)
      .addAnimation([backdropAnimation]);
  }
  public static fadeOut(
    baseEl: HTMLElement,
    options = { from: 0.1, to: 0, ms: 300 }
  ) {
    return createAnimation()
      .duration(options.ms)
      .easing('ease-out')
      .addElement(baseEl)
      .fromTo('opacity', options.from, options.to)
      .play();
  }
  public static fadeIn(
    baseEl: HTMLElement,
    options = { from: 0, to: 0.1, ms: 300 }
  ) {
    return createAnimation()
      .duration(options.ms)
      .easing('ease-in')
      .addElement(baseEl)
      .fromTo('opacity', options.from, options.to)
      .play();
  }
}
