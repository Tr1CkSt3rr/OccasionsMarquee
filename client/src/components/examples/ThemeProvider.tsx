import { ThemeProvider } from '../ThemeProvider';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </Button>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Theme Provider</h3>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground">
          Click the theme toggle to switch between light and dark modes.
        </p>
      </div>
    </ThemeProvider>
  );
}