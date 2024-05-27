export function tempoParaSegundos(date?: string): number {
    if (!date) {
        return 0;
    }
    
    const [hours = 0, minutes = 0, seconds = 0] = date.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}