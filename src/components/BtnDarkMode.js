export const BtnDarkMode = ({ theme, setTheme }) => <button type="button" className={"btn btn-sm btn-outline-" + (theme === 'light' ? 'dark' : 'secondary')} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    {(theme === 'light' ? 'Dark' : 'Light')}
</button>

