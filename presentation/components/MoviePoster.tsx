import { View, Text, Pressable, Image } from 'react-native';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

export default function MoviePoster({ className, id, poster, smallPoster = false }: Props) {
  if (!poster) return null;
  return (
    <Pressable className={`px-2 active:opacity-90 ${className}`}>
      <Image
        source={{ uri: poster }}
        className="h-full w-full rounded-2xl shadow-lg"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
}
