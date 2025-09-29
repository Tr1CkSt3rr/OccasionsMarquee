import { ThemeProvider } from '../ThemeProvider';
import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Theme Toggle</h3>
            <p className="text-muted-foreground">Switch between light and dark themes</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}