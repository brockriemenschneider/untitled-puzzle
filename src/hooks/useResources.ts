import { FontFamily } from '@/theme/font';
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from '@expo-google-fonts/inter';

export function useResources() {
	const [fontsLoaded] = useFonts({
		[FontFamily.Inter_400Regular]: Inter_400Regular,
		[FontFamily.Inter_500Medium]: Inter_500Medium,
		[FontFamily.Inter_600SemiBold]: Inter_600SemiBold,
		[FontFamily.Inter_700Bold]: Inter_700Bold,
	});

	return fontsLoaded;
}
