"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ThemeProvider
				attribute='class'
				defaultTheme='dark'
				enableSystem={false}
				forcedTheme='dark'
				disableTransitionOnChange>
				{children}
				<Toaster />
			</ThemeProvider>
		</>
	);
}
