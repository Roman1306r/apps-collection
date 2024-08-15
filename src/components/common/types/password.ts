export interface SettingsPassword {
    num: boolean
    special: boolean
    capital: boolean
}

export interface PasswordSettingsProps {
    lenghtPassword: number
    setLenghtPassword: (lenghtPassword: number | any) => void
    settings: SettingsPassword
    setSettings: (settings: SettingsPassword) => void
}