
export function stringToDateConverter(timeString:string):Date {
	const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));

	return new Date(0, 0, 0, hours, minutes);
}

export function formatTime(date: Date): string {
	const hours = date.getHours().toString().padStart(2, '0'); // Adiciona um zero à esquerda se necessário
	const minutes = date.getMinutes().toString().padStart(2, '0'); // Adiciona um zero à esquerda se necessário

	return `${hours}:${minutes}`;
}