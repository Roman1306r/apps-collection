export interface ITimerProps {
	settingsTimer: ITimer, 
	setSettingsTimer: (settingsTimer: ITimer) => void
}

interface ITimer {
	timer: string, 
	isStart: boolean, 
	option: string
}