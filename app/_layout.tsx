import { useResources } from '@/hooks/useResources';
import { SplashScreen, Stack } from 'expo-router';
import React from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const resourcesLoaded = useResources();

	if (!resourcesLoaded) {
		return null;
	}

	// Hide the splash screen once the resources are loaded
	SplashScreen.hideAsync();

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
		</Stack>
	);
}
