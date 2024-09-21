import * as Application from 'expo-application';
import Constants from 'expo-constants';

export function getAppVersion() {
	if (Constants.appOwnership === 'expo') {
		return Constants.expoConfig?.version ?? null;
	}

	return Application.nativeApplicationVersion;
}

export function getBuildVersion() {
	if (Constants.appOwnership === 'expo') {
		return null;
	}

	return Application.nativeBuildVersion;
}

export function getVersion() {
	const appVersion = getAppVersion();
	const buildVersion = getBuildVersion();

	return `${appVersion ?? 'Unknown'}${buildVersion ? `.${buildVersion}` : ''}`;
}
