import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CuitPipe {
    transform(value, separador = '.') {
        let result = value.toString().split('');
        result = [
            ...result.slice(0, 2),
            separador,
            ...result.slice(2, 10),
            separador,
            ...result.slice(10),
        ];
        return result.join('');
    }
}
CuitPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CuitPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CuitPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CuitPipe, name: "cuit" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CuitPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'cuit' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VpdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGl0by10YWJsZS9zcmMvbGliL3BpcGVzL2N1aXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLFFBQVE7SUFDbkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxZQUFvQixHQUFHO1FBQzlDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsTUFBTSxHQUFHO1lBQ1AsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsU0FBUztZQUNULEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLFNBQVM7WUFDVCxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3BCLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7c0dBWFUsUUFBUTtvR0FBUixRQUFROzRGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnY3VpdCcgfSlcclxuZXhwb3J0IGNsYXNzIEN1aXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIHNlcGFyYWRvcjogc3RyaW5nID0gJy4nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuICAgIHJlc3VsdCA9IFtcclxuICAgICAgLi4ucmVzdWx0LnNsaWNlKDAsIDIpLFxyXG4gICAgICBzZXBhcmFkb3IsXHJcbiAgICAgIC4uLnJlc3VsdC5zbGljZSgyLCAxMCksXHJcbiAgICAgIHNlcGFyYWRvcixcclxuICAgICAgLi4ucmVzdWx0LnNsaWNlKDEwKSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xyXG4gIH1cclxufVxyXG4iXX0=