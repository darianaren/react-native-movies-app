import { Redirect } from 'expo-router';
import { View, Text } from 'react-native';

export default function MoviesApp() {
  return <Redirect href="/home" />;
}
