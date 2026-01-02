import { computed, effect, Injectable, signal } from "@angular/core";

export type ThemePreference = 'light' | 'dark' | 'system';

@Injectable({
    providedIn: "root",
})
export class ThemeService {
    private readonly STORAGE_KEY = 'theme-preference';

    // For controls that want to control the theme
    themeOptions = [
        { name: 'Light', value: 'light' },
        { name: 'Dark', value: 'dark' },
        { name: 'System', value: 'system' },
    ]
    
    // Stored preference by retrieving from local storage
    preference = signal<ThemePreference>(this.getStoredPreference());
    
    // Check if the system has a preference (dark or light)
    systemPrefersDark = signal(this.getSystemPreference());
    
    // Derived value that returns the current theme
    currentTheme = computed (() => {
        const preference = this.preference();

        // If the system has a preference
        if (preference === 'system') {  

            // Return true if the system has a dark preference
            return this.systemPrefersDark() ? 'dark' : 'light';
        }

        // If no preference return stored preference
        return preference;
    })

    // Return a specific icon depending on the theme.
    currentThemeIcon = computed(() => {
        const theme = this.currentTheme();
        return theme === 'dark' ? 'pi pi-moon' : 'pi pi-sun';
    })

    // On component initialization
    constructor() {
        // Apply theme on initialization
        this.applyTheme();
        
        // Watch for preference changes and apply theme
        effect(() => {
            const pref = this.preference();
            this.applyTheme();
            this.savePreference(pref);
        });

        // Listen for system theme changes
        this.watchSystemPreference();
    }

    getThemeIcon(theme: ThemePreference): string {
        switch(theme) {
            case 'light': return 'pi pi-sun';
            case 'dark': return 'pi pi-moon';
            case 'system': return 'pi pi-desktop';
            default: return 'pi pi-desktop';
        }
    }


    getThemeName(theme: ThemePreference): string {
        const option = this.themeOptions.find(opt => opt.value === theme);
        return option?.name || 'System';
    }


    private applyTheme() {
        const element = document.querySelector('html');
        const shouldBeDark = this.shouldUseDarkMode();
        
        if (shouldBeDark) {
            element?.classList.add('app-dark');
        } else {
            element?.classList.remove('app-dark');
        }
    }

    setPreference(preference: ThemePreference) {
        this.preference.set(preference);
    }

    toggleDarkMode() {
        const current = this.preference();
        if (current === 'system') {
            // If system, toggle to opposite of current system preference
            this.preference.set(this.systemPrefersDark() ? 'light' : 'dark');
        } else {
            // Toggle between light and dark
            this.preference.set(current === 'light' ? 'dark' : 'light');
        }
    }


    private shouldUseDarkMode(): boolean {
        const pref = this.preference();
        
        if (pref === 'dark') return true;
        if (pref === 'light') return false;
        // System preference
        return this.systemPrefersDark();
    }

    // Return true if the system has a dark preference.
    private getSystemPreference(): boolean {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Set up an event listener to watch for system preference changes
    private watchSystemPreference() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        mediaQuery.addEventListener('change', (e) => {
            this.systemPrefersDark.set(e.matches);

            // Re-apply theme if using system preference
            if (this.preference() === 'system') {
                this.applyTheme();
            }
        })
    }

    private getStoredPreference(): ThemePreference {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            
            if (stored === 'light' || stored === 'dark' || stored === 'system') {
                return stored;
            }
        } catch (error) {
            alert(`Could not access local storage (change me to toast someday) -> ${error}`);
        }
        return 'system';
    }

    private savePreference(preference: ThemePreference): void {
        try {
            localStorage.setItem(this.STORAGE_KEY, preference);
        } catch (error) {
            alert(`Failed saving prefeerence to local storage (change me to toast someday) -> ${error}`);
        }
    }

}