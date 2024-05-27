export function tempoParaSegundos(date?: string): number {
    if (!date) {
        return 0;
    }
    
    const [hours = 0, minutes = 0, seconds = 0] = date.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

export function segundosParaTempo(segundos: number): string {
    const hours = Math.floor(segundos / 3600);
    const minutes = Math.floor((segundos % 3600) / 60);
    const seconds = segundos % 60;
    
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}