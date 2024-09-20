import { FontFamily } from '@/theme/font';
import { Inter_400Regular, useFonts } from '@expo-google-fonts/inter';

export function useResources() {
	const [fontsLoaded] = useFonts({
		[FontFamily.Inter_400Regular]: Inter_400Regular,
	});

	return fontsLoaded;
}
