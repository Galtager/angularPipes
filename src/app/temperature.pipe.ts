import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {

    transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {

        if (!value) { return value }
        let val: number = typeof value === 'string' ? parseFloat(value) : value;
        let outputTemp: number;
        // temp
        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5 / 95)
        }
        else {
            outputTemp = val
        }
        // symobl
        let symbol: '°F' | '°C';

        if (!outputType) {
            symbol = inputType === 'cel' ? '°C' : '°F'
        }
        else {
            symbol = outputType === 'cel' ? '°C' : '°F'
        }

        return `${outputTemp.toFixed(2)} ${symbol}`
    }
}