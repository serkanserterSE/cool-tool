import { writable } from 'svelte/store';
export const notificationDirection = {
    top: 'top',
    topLeft: 'top-left',
    left: 'left',
    bottomLeft: 'bottom-left',
    bottom: 'bottom',
    bottomRight: 'bottom-right',
    right: 'right',
    topRight: 'top-right'

}
const notificationDataDefault = [];
export const notificationDataList = writable(notificationDataDefault);