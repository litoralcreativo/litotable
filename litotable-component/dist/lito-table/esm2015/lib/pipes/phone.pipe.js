import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PhonePipe {
    transform(value, format) {
        // format style: "(###) ####-####"
        if (format) {
            let result = value.toString().split('');
            let _format = Array.from(format);
            for (let i = _format.length - 1; i >= 0; i--) {
                if (_format[i] == '#') {
                    const temp = result.pop();
                    if (temp) {
                        _format[i] = temp;
                    }
                    else {
                        _format[i] = '0';
                    }
                }
            }
            result = _format;
            return result.join('');
        }
        return value.toString();
    }
}
PhonePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PhonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PhonePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PhonePipe, name: "phone" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PhonePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'phone' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpdG8tdGFibGUvc3JjL2xpYi9waXBlcy9waG9uZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sU0FBUztJQUNwQixTQUFTLENBQUMsS0FBYSxFQUFFLE1BQWU7UUFDdEMsa0NBQWtDO1FBQ2xDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO29CQUNyQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzFCLElBQUksSUFBSSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7cUJBQ2xCO2lCQUNGO2FBQ0Y7WUFDRCxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7O3VHQXBCVSxTQUFTO3FHQUFULFNBQVM7NEZBQVQsU0FBUztrQkFEckIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwaG9uZScgfSlcclxuZXhwb3J0IGNsYXNzIFBob25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gZm9ybWF0IHN0eWxlOiBcIigjIyMpICMjIyMtIyMjI1wiXHJcbiAgICBpZiAoZm9ybWF0KSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuICAgICAgbGV0IF9mb3JtYXQgPSBBcnJheS5mcm9tKGZvcm1hdCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSBfZm9ybWF0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKF9mb3JtYXRbaV0gPT0gJyMnKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wID0gcmVzdWx0LnBvcCgpO1xyXG4gICAgICAgICAgaWYgKHRlbXApIHtcclxuICAgICAgICAgICAgX2Zvcm1hdFtpXSA9IHRlbXA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfZm9ybWF0W2ldID0gJzAnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgPSBfZm9ybWF0O1xyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==